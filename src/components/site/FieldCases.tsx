import { Wrap, SectionLabel, SectionHeading, SectionLede } from "./primitives";

/**
 * Trabajos reales, sin nombre de cliente: la regla de la casa es que sin
 * permiso explícito se publica sin nombrarlo. Los datos técnicos se sustentan
 * en visita.
 */
const CASES = [
  {
    where: "Empaque de fruta · Chihuahua",
    title: "Compresor con controlador nuevo, máquina intacta",
    body: "Se migró el control de un compresor de amoniaco a un controlador de generación actual. El compresor, el motor y la tubería no se tocaron.",
    facts: [
      ["Se cambió", "Solo el controlador"],
      ["Estado", "Operando"],
    ],
  },
  {
    where: "Planta de refrigeración · Chihuahua",
    title: "Válvulas que ya estaban puestas, por fin operando",
    body: "Cuatro válvulas motorizadas Danfoss ICAD ya instaladas pero sin configurar. Se pusieron a trabajar con sus controladores EKE.",
    quote: "Las temperaturas de las salas están mucho más estables.",
    quoteBy: "el dueño de la planta",
  },
  {
    where: "Frigorífico de manzana · Cuauhtémoc",
    // PENDIENTE (2026-09-14): sin confirmar cuantas salas ni si hubo instalacion nueva;
    // en el Brain, Masara ya tenia deteccion. Confirmar con Gera (Brain P-237).
    pendiente: true,
    title: "Detección de amoniaco en 8 salas",
    body: "Sensores instalados, calibrados y con reporte de servicio entregado. Aquí sí hubo instrumento nuevo: no existía detección.",
    facts: [
      ["Alcance", "Suministro, instalación y arranque"],
      ["Estado", "Operando"],
    ],
  },
  {
    where: "Línea de selección de manzana · Cuauhtémoc",
    title: "Sobre motores que llegaron con otra marca",
    body: "Los motores de la línea venían con control Allen-Bradley de fábrica. Programamos toda la etapa posterior al sistema de visión, sin reemplazar el paquete que ya traía la máquina.",
    facts: [
      ["Se cambió", "Nada del paquete original"],
      ["Estado", "Operando"],
    ],
  },
];

const VISIBLES = CASES.filter((c) => !c.pendiente);
const EN_LETRA = ["Cero", "Un", "Dos", "Tres", "Cuatro", "Cinco", "Seis"];

export default function FieldCases() {
  return (
    <section id="planta" className="border-t border-line py-16">
      <Wrap>
        <SectionLabel num="04">En planta</SectionLabel>
        <SectionHeading>
          {EN_LETRA[VISIBLES.length]} trabajos sobre equipo que el cliente ya tenía.
        </SectionHeading>
        <SectionLede>
          Los nombres se publican solo con permiso del cliente. Los datos técnicos son
          reales y los sustentamos en visita.
        </SectionLede>

        <div className="mt-[38px] grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2">
          {VISIBLES.map((c, i) => (
            <article
              key={c.title}
              className={`bg-ink px-[22px] py-[26px] ${
                VISIBLES.length % 2 === 1 && i === VISIBLES.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="border-b border-line-soft pb-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-dim">
                {c.where}
              </div>
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-[14.5px] text-muted">{c.body}</p>

              {c.facts ? (
                <dl className="mt-[18px] grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-[5px] text-[13px]">
                  {c.facts.map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-dim">
                        {k}
                      </dt>
                      <dd className="m-0">{v}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {c.quote ? (
                <blockquote className="mt-[18px] border-l-2 border-amber pl-3.5 text-[14.5px]">
                  «{c.quote}»
                  <footer className="mt-2 font-mono text-[11px] text-dim">
                    — {c.quoteBy}
                  </footer>
                </blockquote>
              ) : null}
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
