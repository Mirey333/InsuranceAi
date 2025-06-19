-- ==========================================
-- MULTI-TENANT ROW LEVEL SECURITY POLICIES
-- DSGVO/Government Regulation Compliant
-- ==========================================

-- Enable RLS on all multi-tenant tables
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE maklers ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE communications ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE landing_pages ENABLE ROW LEVEL SECURITY;

-- ==========================================
-- HELPER FUNCTIONS FOR RLS
-- ==========================================

-- Get current user's tenant ID
CREATE OR REPLACE FUNCTION auth.current_user_tenant_id()
RETURNS text
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COALESCE(
    current_setting('app.current_tenant_id', true),
    (SELECT tenant_id FROM users WHERE id = auth.uid())
  );
$$;

-- Get current user's role
CREATE OR REPLACE FUNCTION auth.current_user_role()
RETURNS text
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT role FROM users WHERE id = auth.uid();
$$;

-- Check if user is super admin
CREATE OR REPLACE FUNCTION auth.is_super_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() 
    AND role = 'SUPER_ADMIN'
  );
$$;

-- Check if user is tenant admin
CREATE OR REPLACE FUNCTION auth.is_tenant_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() 
    AND role IN ('SUPER_ADMIN', 'TENANT_ADMIN')
  );
$$;

-- ==========================================
-- TENANT POLICIES
-- ==========================================

-- Super admins can see all tenants, others only their own
CREATE POLICY "tenant_select_policy" ON tenants
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    id = auth.current_user_tenant_id()
  );

-- Only super admins can create/update/delete tenants
CREATE POLICY "tenant_insert_policy" ON tenants
  FOR INSERT
  WITH CHECK (auth.is_super_admin());

CREATE POLICY "tenant_update_policy" ON tenants
  FOR UPDATE
  USING (auth.is_super_admin() OR id = auth.current_user_tenant_id())
  WITH CHECK (auth.is_super_admin() OR id = auth.current_user_tenant_id());

CREATE POLICY "tenant_delete_policy" ON tenants
  FOR DELETE
  USING (auth.is_super_admin());

-- ==========================================
-- USER POLICIES
-- ==========================================

-- Users can only see users from their tenant
CREATE POLICY "user_select_policy" ON users
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id() OR
    id = auth.uid()
  );

-- Tenant admins can create users in their tenant
CREATE POLICY "user_insert_policy" ON users
  FOR INSERT
  WITH CHECK (
    auth.is_super_admin() OR 
    (auth.is_tenant_admin() AND tenant_id = auth.current_user_tenant_id())
  );

-- Users can update their own data, admins can update users in their tenant
CREATE POLICY "user_update_policy" ON users
  FOR UPDATE
  USING (
    auth.is_super_admin() OR 
    id = auth.uid() OR
    (auth.is_tenant_admin() AND tenant_id = auth.current_user_tenant_id())
  )
  WITH CHECK (
    auth.is_super_admin() OR 
    id = auth.uid() OR
    (auth.is_tenant_admin() AND tenant_id = auth.current_user_tenant_id())
  );

-- Only super admins can delete users
CREATE POLICY "user_delete_policy" ON users
  FOR DELETE
  USING (auth.is_super_admin());

-- ==========================================
-- MAKLER POLICIES (Strict tenant isolation)
-- ==========================================

CREATE POLICY "makler_select_policy" ON maklers
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "makler_insert_policy" ON maklers
  FOR INSERT
  WITH CHECK (
    auth.is_super_admin() OR 
    (tenant_id = auth.current_user_tenant_id() AND auth.is_tenant_admin())
  );

CREATE POLICY "makler_update_policy" ON maklers
  FOR UPDATE
  USING (
    auth.is_super_admin() OR 
    (tenant_id = auth.current_user_tenant_id() AND 
     (auth.is_tenant_admin() OR user_id = auth.uid()))
  )
  WITH CHECK (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "makler_delete_policy" ON maklers
  FOR DELETE
  USING (
    auth.is_super_admin() OR 
    (tenant_id = auth.current_user_tenant_id() AND auth.is_tenant_admin())
  );

-- ==========================================
-- CAMPAIGN POLICIES (Tenant isolation)
-- ==========================================

CREATE POLICY "campaign_select_policy" ON campaigns
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "campaign_insert_policy" ON campaigns
  FOR INSERT
  WITH CHECK (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "campaign_update_policy" ON campaigns
  FOR UPDATE
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  )
  WITH CHECK (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "campaign_delete_policy" ON campaigns
  FOR DELETE
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

-- ==========================================
-- LEAD POLICIES (DSGVO Critical - Strict isolation)
-- ==========================================

-- Leads can only be accessed by users from the same tenant
CREATE POLICY "lead_select_policy" ON leads
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "lead_insert_policy" ON leads
  FOR INSERT
  WITH CHECK (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "lead_update_policy" ON leads
  FOR UPDATE
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  )
  WITH CHECK (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

-- Only tenant admins or super admins can delete leads (GDPR compliance)
CREATE POLICY "lead_delete_policy" ON leads
  FOR DELETE
  USING (
    auth.is_super_admin() OR 
    (tenant_id = auth.current_user_tenant_id() AND auth.is_tenant_admin())
  );

-- ==========================================
-- COMMUNICATION POLICIES (DSGVO Critical)
-- ==========================================

-- Communications inherit tenant isolation from leads
CREATE POLICY "communication_select_policy" ON communications
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    EXISTS (
      SELECT 1 FROM leads 
      WHERE leads.id = communications.lead_id 
      AND leads.tenant_id = auth.current_user_tenant_id()
    )
  );

CREATE POLICY "communication_insert_policy" ON communications
  FOR INSERT
  WITH CHECK (
    auth.is_super_admin() OR 
    EXISTS (
      SELECT 1 FROM leads 
      WHERE leads.id = communications.lead_id 
      AND leads.tenant_id = auth.current_user_tenant_id()
    )
  );

CREATE POLICY "communication_update_policy" ON communications
  FOR UPDATE
  USING (
    auth.is_super_admin() OR 
    EXISTS (
      SELECT 1 FROM leads 
      WHERE leads.id = communications.lead_id 
      AND leads.tenant_id = auth.current_user_tenant_id()
    )
  );

CREATE POLICY "communication_delete_policy" ON communications
  FOR DELETE
  USING (
    auth.is_super_admin() OR 
    EXISTS (
      SELECT 1 FROM leads 
      WHERE leads.id = communications.lead_id 
      AND leads.tenant_id = auth.current_user_tenant_id()
    )
  );

-- ==========================================
-- LEAD ACTIVITY POLICIES
-- ==========================================

CREATE POLICY "lead_activity_select_policy" ON lead_activities
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    EXISTS (
      SELECT 1 FROM leads 
      WHERE leads.id = lead_activities.lead_id 
      AND leads.tenant_id = auth.current_user_tenant_id()
    )
  );

CREATE POLICY "lead_activity_insert_policy" ON lead_activities
  FOR INSERT
  WITH CHECK (
    auth.is_super_admin() OR 
    EXISTS (
      SELECT 1 FROM leads 
      WHERE leads.id = lead_activities.lead_id 
      AND leads.tenant_id = auth.current_user_tenant_id()
    )
  );

-- Activities are immutable after creation (audit trail)
CREATE POLICY "lead_activity_update_policy" ON lead_activities
  FOR UPDATE
  USING (false);

CREATE POLICY "lead_activity_delete_policy" ON lead_activities
  FOR DELETE
  USING (auth.is_super_admin());

-- ==========================================
-- LANDING PAGE POLICIES
-- ==========================================

CREATE POLICY "landing_page_select_policy" ON landing_pages
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "landing_page_insert_policy" ON landing_pages
  FOR INSERT
  WITH CHECK (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "landing_page_update_policy" ON landing_pages
  FOR UPDATE
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  )
  WITH CHECK (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

CREATE POLICY "landing_page_delete_policy" ON landing_pages
  FOR DELETE
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

-- ==========================================
-- GDPR COMPLIANCE FUNCTIONS
-- ==========================================

-- Function to completely delete a lead and all related data (GDPR Article 17)
CREATE OR REPLACE FUNCTION gdpr_delete_lead(lead_id text, requesting_tenant_id text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  lead_tenant_id text;
BEGIN
  -- Verify the lead belongs to the requesting tenant
  SELECT tenant_id INTO lead_tenant_id FROM leads WHERE id = lead_id;
  
  IF lead_tenant_id != requesting_tenant_id THEN
    RAISE EXCEPTION 'Access denied: Lead does not belong to requesting tenant';
  END IF;
  
  -- Delete all related data
  DELETE FROM lead_activities WHERE lead_id = lead_id;
  DELETE FROM communications WHERE lead_id = lead_id;
  DELETE FROM leads WHERE id = lead_id;
  
  RETURN true;
END;
$$;

-- Function to export all data for a lead (GDPR Article 15)
CREATE OR REPLACE FUNCTION gdpr_export_lead_data(lead_id text, requesting_tenant_id text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  lead_data json;
  lead_tenant_id text;
BEGIN
  -- Verify the lead belongs to the requesting tenant
  SELECT tenant_id INTO lead_tenant_id FROM leads WHERE id = lead_id;
  
  IF lead_tenant_id != requesting_tenant_id THEN
    RAISE EXCEPTION 'Access denied: Lead does not belong to requesting tenant';
  END IF;
  
  SELECT json_build_object(
    'lead', row_to_json(l),
    'communications', (
      SELECT array_agg(row_to_json(c)) 
      FROM communications c 
      WHERE c.lead_id = l.id
    ),
    'activities', (
      SELECT array_agg(row_to_json(a)) 
      FROM lead_activities a 
      WHERE a.lead_id = l.id
    )
  ) INTO lead_data
  FROM leads l
  WHERE l.id = lead_id;
  
  RETURN lead_data;
END;
$$;

-- ==========================================
-- AUDIT TRIGGERS (Government compliance)
-- ==========================================

-- Create audit log table
CREATE TABLE IF NOT EXISTS audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name text NOT NULL,
  operation text NOT NULL,
  old_data jsonb,
  new_data jsonb,
  user_id text,
  tenant_id text,
  timestamp timestamp DEFAULT now()
);

-- Enable RLS on audit log
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Only super admins can see all audit logs, tenants see their own
CREATE POLICY "audit_log_select_policy" ON audit_log
  FOR SELECT
  USING (
    auth.is_super_admin() OR 
    tenant_id = auth.current_user_tenant_id()
  );

-- Audit trigger function
CREATE OR REPLACE FUNCTION audit_trigger_function()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  user_tenant_id text;
BEGIN
  -- Get tenant_id from the affected row or current user
  user_tenant_id := COALESCE(
    COALESCE(NEW.tenant_id, OLD.tenant_id),
    auth.current_user_tenant_id()
  );
  
  INSERT INTO audit_log (
    table_name,
    operation,
    old_data,
    new_data,
    user_id,
    tenant_id
  ) VALUES (
    TG_TABLE_NAME,
    TG_OP,
    CASE WHEN TG_OP = 'DELETE' THEN row_to_json(OLD) ELSE NULL END,
    CASE WHEN TG_OP != 'DELETE' THEN row_to_json(NEW) ELSE NULL END,
    auth.uid(),
    user_tenant_id
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Add audit triggers to sensitive tables
CREATE TRIGGER leads_audit_trigger
  AFTER INSERT OR UPDATE OR DELETE ON leads
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

CREATE TRIGGER communications_audit_trigger
  AFTER INSERT OR UPDATE OR DELETE ON communications
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

CREATE TRIGGER users_audit_trigger
  AFTER INSERT OR UPDATE OR DELETE ON users
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

-- ==========================================
-- DATA RETENTION POLICIES (GDPR Article 5)
-- ==========================================

-- Function to clean up old data based on retention policies
CREATE OR REPLACE FUNCTION cleanup_expired_data()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  -- Delete leads older than 7 years (adjust based on legal requirements)
  DELETE FROM leads 
  WHERE created_at < NOW() - INTERVAL '7 years'
  AND consent_given = false;
  
  -- Archive old audit logs
  DELETE FROM audit_log 
  WHERE timestamp < NOW() - INTERVAL '10 years';
END;
$$;

-- Schedule cleanup (run this as a cron job)
-- SELECT cron.schedule('cleanup-expired-data', '0 2 * * *', 'SELECT cleanup_expired_data();');

COMMENT ON FUNCTION cleanup_expired_data() IS 'GDPR Article 5 - Data retention compliance';
COMMENT ON FUNCTION gdpr_delete_lead(text, text) IS 'GDPR Article 17 - Right to erasure';
COMMENT ON FUNCTION gdpr_export_lead_data(text, text) IS 'GDPR Article 15 - Right to access'; 