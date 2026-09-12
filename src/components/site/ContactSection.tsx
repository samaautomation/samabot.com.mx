"use client";

import { useState } from "react";
import { Wrap, SectionLabel, SectionHeading, SectionLede, Button } from "./primitives";
import { WHATSAPP_NUMBER, EMAIL } from "./contact-info";

const GIROS = [
  "Frigorífico / cámaras de frío",
  "Empaque de fruta",
  "Lácteos",
  "Molienda / granos",
  "Metalmecánica",
  "Otro",
];

const field =
  "w-full rounded-[2px] border border-line bg-ink px-3 py-[11px] font-body text-[15px] text-fg placeholder:text-dim focus:border-amber focus:outline-none";
const label =
  "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-dim";

/**
 * El formulario no tiene backend a propósito: arma el mensaje y lo abre en
 * WhatsApp, que es el canal donde SAMA contesta el mismo día. Un formulario
 * que va a un buzón que nadie revisa pierde el prospecto en silencio.
 */
export default function ContactSection() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    giro: GIROS[0],
    mensaje: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const texto = [
      "Hola SAMA, quiero agendar una visita de diagnóstico.",
      "",
      `Nombre: ${form.nombre || "—"}`,
      `Empresa: ${form.empresa || "—"}`,
      `Teléfono: ${form.telefono || "—"}`,
      `Giro: ${form.giro}`,
      "",
      `Equipo que tengo hoy: ${form.mensaje || "—"}`,
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contacto" className="border-t border-line bg-panel py-16">
      <Wrap className="grid items-start gap-13 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[52px]">
        <div>
          <SectionLabel num="05">Contacto</SectionLabel>
          <SectionHeading>
            Vamos a tu planta y te decimos qué ya se puede leer.
          </SectionHeading>
          <SectionLede>
            La visita de diagnóstico no tiene costo. Salimos con la lista de qué
            instrumentos ya sirven, cuáles faltan y qué esperar de cada punto.
          </SectionLede>

          <form onSubmit={enviar} className="mt-7 grid gap-3.5">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="f-nombre">
                  Nombre
                </label>
                <input
                  id="f-nombre"
                  className={field}
                  value={form.nombre}
                  onChange={set("nombre")}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className={label} htmlFor="f-empresa">
                  Empresa
                </label>
                <input
                  id="f-empresa"
                  className={field}
                  value={form.empresa}
                  onChange={set("empresa")}
                  placeholder="Nombre de la planta"
                />
              </div>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="f-tel">
                  Teléfono
                </label>
                <input
                  id="f-tel"
                  type="tel"
                  className={field}
                  value={form.telefono}
                  onChange={set("telefono")}
                  placeholder="625 000 0000"
                />
              </div>
              <div>
                <label className={label} htmlFor="f-giro">
                  Giro
                </label>
                <select
                  id="f-giro"
                  className={field}
                  value={form.giro}
                  onChange={set("giro")}
                >
                  {GIROS.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={label} htmlFor="f-msg">
                Qué equipo tienes hoy
              </label>
              <textarea
                id="f-msg"
                className={`${field} min-h-24 resize-y`}
                value={form.mensaje}
                onChange={set("mensaje")}
                placeholder="Ej. tengo detección de amoniaco y un S7-1200, pero no guardo nada."
              />
            </div>

            <div>
              <Button type="submit">Enviar por WhatsApp</Button>
              <p className="mt-2.5 font-mono text-[11px] text-dim">
                Se abre WhatsApp con el mensaje listo. Nada se guarda en este sitio.
              </p>
            </div>
          </form>
        </div>

        <dl className="mt-7 grid lg:mt-0">
          {[
            {
              k: "WhatsApp",
              v: (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="border-b border-line hover:border-amber"
                >
                  +52 625 111 0453
                </a>
              ),
              sub: "Lo contestamos el mismo día",
            },
            {
              k: "Correo",
              v: (
                <a
                  href={`mailto:${EMAIL}`}
                  className="border-b border-line hover:border-amber"
                >
                  {EMAIL}
                </a>
              ),
            },
            {
              k: "Dónde",
              v: "Cuauhtémoc, Chihuahua",
              sub: "Servicio en todo el estado",
            },
            {
              k: "Nos ves en",
              v: "Expo Canacintra · 23 y 24 de septiembre",
              sub: "SAMABOT operando en el stand",
            },
          ].map((c) => (
            <div
              key={c.k}
              className="grid grid-cols-[auto_1fr] items-baseline gap-4 border-t border-line py-4 last:border-b last:border-b-line"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-dim">
                {c.k}
              </dt>
              <dd className="m-0">
                <div className="text-[15.5px]">{c.v}</div>
                {c.sub ? <div className="mt-0.5 text-[13px] text-muted">{c.sub}</div> : null}
              </dd>
            </div>
          ))}
        </dl>
      </Wrap>
    </section>
  );
}
