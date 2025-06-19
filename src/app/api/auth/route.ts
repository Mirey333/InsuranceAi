import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { action, email, password, firstName, lastName, company } = await request.json();

    if (action === 'login') {
      // Login Logic
      const user = await prisma.user.findUnique({
        where: { email },
        include: { 
          makler: true,
          tenant: true
        }
      });

      if (!user || !await bcryptjs.compare(password, user.password)) {
        return NextResponse.json(
          { error: 'Ungültige Anmeldedaten' },
          { status: 401 }
        );
      }

      const token = jwt.sign(
        { userId: user.id, role: user.role, tenantId: user.tenantId },
        process.env.JWT_SECRET || 'fallback-secret',
        { expiresIn: '7d' }
      );

      const response = NextResponse.json({
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          tenantId: user.tenantId,
          makler: user.makler,
          tenant: user.tenant
        },
        token
      });

      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 // 7 days
      });

      return response;

    } else if (action === 'register') {
      // Registration in Multi-Tenant system requires admin setup
      return NextResponse.json(
        { error: 'Registrierung nur durch Tenant-Administrator möglich' },
        { status: 403 }
      );
    }

    return NextResponse.json(
      { error: 'Ungültige Aktion' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Server-Fehler' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any;

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: { 
        makler: true,
        tenant: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Benutzer nicht gefunden' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        tenantId: user.tenantId,
        makler: user.makler,
        tenant: user.tenant
      }
    });

  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json(
      { error: 'Ungültiger Token' },
      { status: 401 }
    );
  }
} 