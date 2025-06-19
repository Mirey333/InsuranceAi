# 🎯 PMA Insurance Lead Generation Platform

Eine moderne Multi-Tenant Lead Generation Plattform für PMA (Deutsche Versicherungs-/Finanzmaklerfirma), basierend auf dem "Angebot 2 (Individuelle Beraterlösung)" - ein Whitelabel-System, bei dem jeder PMA-Makler seine eigene Instanz mit einem 7-Schritt-Prozess erhält.

## 🚀 Features

### ✅ Implementierte Kernfunktionen (7/7)
1. **🔐 Multi-Tenant Authentifizierung** - JWT mit HTTP-only Cookies
2. **📊 Dashboard** - Personalisierte Statistiken und KPIs
3. **👥 Lead-Management** - Vollständige CRUD-Operationen mit Status-Tracking
4. **🎯 Campaign-Management** - Performance-Tracking und Verwaltung
5. **🏗️ Landing Page Builder** - Template-System mit 3 Vorlagen
6. **🧭 Navigation** - Rollenbasierte, responsive Navigation
7. **📤 PMA Export-System** - Multi-Format-Export für qualifizierte Leads

### 🛡️ Technische Fixes (Neu!)
- **Port-Management-Skript** - Automatisiertes Prozess- und Port-Management
- **Cache-Bereinigung** - Lösung für Next.js Compilation-Probleme
- **Prozess-Isolation** - Verhindert Port-Konflikte zwischen mehreren Instanzen

## 🏗️ Technische Architektur

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Glassmorphismus-Design
- **Backend**: Next.js API Routes, Prisma ORM
- **Datenbank**: Supabase PostgreSQL mit Multi-Tenant RLS Policies
- **Authentifizierung**: JWT mit HTTP-only Cookies, bcryptjs
- **Multi-Tenancy**: Strikte Tenant-Isolation mit tenantId auf allen Modellen
- **State Management**: React Context für Authentifizierung

## 🚀 Quick Start

### 1. Installation
```bash
git clone <repository>
cd Insurance
npm install
```

### 2. Umgebungsvariablen einrichten
```bash
cp .env.example .env.local
```

Erforderliche Variablen:
```env
DATABASE_URL="your-supabase-postgres-url"
JWT_SECRET="your-jwt-secret-key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Datenbank Setup
```bash
npx prisma migrate dev
npx prisma db seed
```

### 4. Entwicklungsserver starten

#### Option A: Automatisiert mit Port-Management (Empfohlen)
```powershell
# Kompletter Start mit Cache-Bereinigung
./scripts/manage-ports.ps1 start

# System-Status prüfen
./scripts/manage-ports.ps1 status

# Alle Prozesse stoppen
./scripts/manage-ports.ps1 stop

# Umgebung bereinigen
./scripts/manage-ports.ps1 clean
```

#### Option B: Manuell
```bash
npm run dev
```

### 5. Demo-Login
```
E-Mail: max.mustermann@pma-muenchen.de
Passwort: demo123
```

## 🔧 Port-Management-Skript

Das neue PowerShell-Skript `scripts/manage-ports.ps1` löst alle Port-Konflikte automatisch:

### Features:
- ✅ **Prozess-Management**: Automatisches Stoppen aller Node.js-Prozesse
- ✅ **Port-Monitoring**: Überwachung der Ports 3000-3003 und 5555
- ✅ **Cache-Bereinigung**: Löscht .next und node_modules/.cache
- ✅ **Service-Status**: Überprüft alle Anwendungs-Endpunkte
- ✅ **Automatischer Start**: Startet Server und wartet auf Bereitschaft

### Verfügbare Befehle:
```powershell
# Entwicklungsumgebung starten (mit Bereinigung)
./scripts/manage-ports.ps1 start

# Alle Services stoppen
./scripts/manage-ports.ps1 stop

# Aktuellen Status anzeigen
./scripts/manage-ports.ps1 status

# Umgebung bereinigen (Cache, Prozesse)
./scripts/manage-ports.ps1 clean
```

## 📱 Verfügbare Seiten

| Seite | URL | Status | Beschreibung |
|-------|-----|--------|--------------|
| 🏠 Homepage | http://localhost:3000 | ✅ | Landing Page mit Login |
| 📊 Dashboard | http://localhost:3000/dashboard | ✅ | Personalisierte Statistiken |
| 👥 Leads | http://localhost:3000/leads | ✅ | Lead-Management mit Filtern |
| 🎯 Campaigns | http://localhost:3000/campaigns | ✅ | Kampagnen-Verwaltung |
| 🏗️ Landing Page Builder | http://localhost:3000/landingpage-builder | ✅ | Template-System |
| 📤 Export | http://localhost:3000/export | ✅ | PMA Export-System |
| 🗄️ Prisma Studio | http://localhost:5555 | ⚙️ | Datenbank-Interface |

## 🎯 Multi-Tenant Setup

### Demo-Tenants:
1. **PMA München** - max.mustermann@pma-muenchen.de / demo123
2. **PMA Berlin** - anna.schmidt@pma-berlin.de / demo123  
3. **PMA Hamburg** - thomas.weber@pma-hamburg.de / demo123

Jeder Tenant hat:
- ✅ Isolierte Daten (Leads, Campaigns, Landing Pages)
- ✅ Eigene Makler-Profile
- ✅ Separate Export-Funktionen
- ✅ Tenant-spezifische Branding

## 🔒 API-Endpunkte

### Authentifizierung
- `POST /api/auth` - Login/Logout
- `GET /api/auth` - Session-Validation (401 wenn nicht authentifiziert)

### Daten-APIs (Authentifizierung erforderlich)
- `GET /api/dashboard` - Dashboard-Statistiken
- `GET /api/leads` - Lead-Management
- `GET /api/campaigns` - Kampagnen-Daten
- `GET /api/landingpages` - Landing Page Verwaltung
- `GET/POST /api/export` - PMA Export-System

## 🧪 Problembehandlung

### Häufige Probleme:

#### Port-Konflikte
```powershell
# Alle Node.js-Prozesse stoppen
./scripts/manage-ports.ps1 stop

# Oder manuell:
taskkill /F /IM node.exe
```

#### Compilation-Fehler
```powershell
# Cache bereinigen und neu starten
./scripts/manage-ports.ps1 clean
./scripts/manage-ports.ps1 start

# Oder manuell:
Remove-Item -Recurse -Force .next
npm run dev
```

#### 404-Fehler nach Änderungen
```bash
# Next.js Cache löschen
rm -rf .next
npm run dev
```

#### Datenbank-Probleme
```bash
# Prisma Client neu generieren
npx prisma generate
npx prisma db push
```

## 📋 Nächste Entwicklungsschritte

### Sofort verfügbar:
- ✅ Alle 7 Kernfunktionen implementiert
- ✅ Port-Management automatisiert
- ✅ Multi-Tenant-Architektur vollständig

### Ausbaumöglichkeiten:
1. **📧 Kommunikationssystem dynamisieren** - E-Mail/SMS Templates
2. **📊 Analytics & Reporting erweitern** - ROI-Tracking, Conversion-Funnel
3. **👥 Erweiterte Benutzerverwaltung** - Tenant-Management-Interface
4. **🔗 System-Integrationen** - Kalender, CRM, Webhooks
5. **🛡️ Erweiterte GDPR** - Consent-Management, Audit-Log

## 🤝 Entwicklung

### Code-Struktur:
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── dashboard/         # Dashboard-Seite
│   ├── leads/            # Lead-Management
│   ├── campaigns/        # Kampagnen-Verwaltung
│   ├── landingpage-builder/ # Landing Page Builder
│   └── export/           # PMA Export-System
├── components/            # React-Komponenten
├── contexts/             # React Context (Auth)
└── types/               # TypeScript-Definitionen

scripts/
└── manage-ports.ps1      # Port-Management-Skript

prisma/
├── schema.prisma         # Datenbank-Schema
├── seed.ts              # Demo-Daten
└── migrations/          # Datenbank-Migrationen
```

### Git Workflow:
```bash
git add .
git commit -m "feat: neue Funktion hinzugefügt"
git push origin main
```

## 📄 Lizenz

Proprietäres System für PMA Insurance Platform.

---

**🎯 Status**: Produktionsreif für 3 PMA-Instanzen (München, Berlin, Hamburg)  
**🚀 Entwicklung**: 7/7 Kernfunktionen implementiert  
**🔧 Wartung**: Automatisiertes Port-Management verfügbar 