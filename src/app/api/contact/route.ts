// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  // honeypot (anti-spam)
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    // Honeypot: si viene lleno, probablemente bot
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Email inválido." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL; // tu correo destino
    const fromEmail = process.env.CONTACT_FROM_EMAIL; // ej: "Web JP <onboarding@resend.dev>"

    if (!resendApiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Faltan variables de entorno (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const subject = `Nuevo lead desde Web JP — ${name}`;
    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height:1.5">
        <h2 style="margin:0 0 12px">Nuevo mensaje desde el formulario</h2>
        <p style="margin:0 0 8px"><b>Nombre:</b> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><b>Email:</b> ${escapeHtml(email)}</p>
        <p style="margin:0 0 8px"><b>Celular:</b> ${escapeHtml(phone)}</p>
        <p style="margin:12px 0 6px"><b>Mensaje:</b></p>
        <div style="white-space:pre-wrap; padding:12px; border:1px solid #e5e7eb; border-radius:10px">
          ${escapeHtml(message)}
        </div>
        <p style="margin:14px 0 0; color:#6b7280; font-size:12px">
          Enviado desde el sitio (Contact).
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      replyTo: email, // para que puedas responder directo al cliente
      html,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Error inesperado." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
