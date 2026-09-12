import { Wrap, SectionLabel, SectionHeading } from "./primitives";

/**
 * Los dos primeros nodos son del cliente y los dos últimos los pone SAMA.
 * La etiqueta y la barra superior en ámbar comunican el retrofit sin texto.
 */
const NODES = [
  {
    step: "Ya lo tienes",
    mine: false,
    title: "Sensores",
    body: "Amoniaco, presión, temperatura y nivel. Los tuyos, donde ya están.",
    specs: ["Señal 4-20 mA", "Contactos secos", "Sin recablear"],
  },
  {
    step: "Ya lo tienes",
    mine: false,
    title: "PLC y tablero",
    body: "Seguimos tu lógica de control. No la reemplazamos.",
    specs: ["Modbus TCP / RTU", "Lectura no invasiva", "Tu programa intacto"],
  },
  {
    step: "Lo ponemos",
    mine: true,
    title: "SAMABOT",
    body: "El gabinete que registra todo y detecta la anomalía. Local, siempre.",
    specs: ["NVIDIA Jetson Orin", "30 días de historial", "Corre sin internet"],
  },
  {
    step: "Lo ponemos",
    mine: true,
    title: "Pantalla, celular y asistente",
    body: "Tablero en la sala, la misma vista en el teléfono, y el asistente para preguntarle.",
    specs: ["Vista web local", "Alarma a WhatsApp", "Asistente: en línea"],
  },
];

const LAYERS = [
  ["Control y enclavamientos", "Tu PLC", "Sigue igual", true],
  ["Registro, tendencia e historial", "El gabinete", "Sigue igual", true],
  ["Alarma en pantalla y celular", "Tu red local", "Sigue igual", true],
  ["Asistente que explica", "Modelo en línea", "Se pausa", false],
] as const;

export default function HowItWorks() {
  return (
    <section id="como" className="border-t border-line py-16">
      <Wrap>
        <SectionLabel num="02">Cómo funciona</SectionLabel>
        <SectionHeading>
          Dos pasos ya existen en tu planta. Nosotros ponemos los otros dos.
        </SectionHeading>

        <div className="mt-10 grid overflow-hidden rounded-[3px] border border-line lg:grid-cols-4">
          {NODES.map((n, i) => (
            <div
              key={n.title}
              className={`relative border-b border-line px-5 py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
                n.mine ? "bg-gradient-to-b from-[#1c2230] to-panel" : "bg-panel"
              }`}
            >
              <span
                aria-hidden
                className={`absolute inset-x-0 top-0 h-0.5 ${
                  n.mine ? "bg-amber" : "bg-line"
                }`}
              />
              <div
                className={`font-mono text-[10.5px] uppercase tracking-[0.14em] ${
                  n.mine ? "text-amber" : "text-muted"
                }`}
              >
                {n.step}
              </div>
              <h4 className="mt-2.5 text-[17px] font-bold">{n.title}</h4>
              <p className="mt-2 text-[13.5px] text-muted">{n.body}</p>
              <ul className="mt-3 font-mono text-[11.5px] leading-[1.9] text-dim">
                {n.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <span className="sr-only">{`Paso ${i + 1}`}</span>
            </div>
          ))}
        </div>

        <h3 className="mt-[46px] text-[19px] font-bold">
          Qué pasa si se cae el internet
        </h3>
        <p className="mb-5 mt-2.5 max-w-[60ch] text-[15px] text-muted">
          Te lo decimos completo, porque es la siguiente pregunta.
        </p>

        <div className="overflow-hidden rounded-[3px] border border-line">
          <div className="hidden grid-cols-[1.4fr_1fr_0.9fr] gap-4 bg-panel-2 px-[18px] py-[13px] font-mono text-[10.5px] uppercase tracking-[0.12em] text-dim sm:grid">
            <div>Capa</div>
            <div>Dónde corre</div>
            <div>Con el enlace caído</div>
          </div>
          {LAYERS.map(([layer, where, state, ok]) => (
            <div
              key={layer}
              className="grid grid-cols-1 items-baseline gap-1 border-t border-line-soft px-[18px] py-3.5 text-[14.5px] first:border-t-0 sm:grid-cols-[1.4fr_1fr_0.9fr] sm:gap-4 sm:first:border-t"
            >
              <div>{layer}</div>
              <div className="text-muted">{where}</div>
              <div className={`font-semibold ${ok ? "text-ok" : "text-amber"}`}>
                {state}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3.5 font-mono text-[11.5px] text-dim">
          <b className="font-medium text-amber">La seguridad nunca depende del enlace.</b>{" "}
          El asistente sí — y por eso es lo único que se renta.
        </p>
      </Wrap>
    </section>
  );
}
