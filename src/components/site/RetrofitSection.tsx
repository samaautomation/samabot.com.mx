import { Wrap, SectionLabel, SectionHeading, SectionLede } from "./primitives";

/** Marcas que SAMA ha integrado en trabajo real. No se agrega ninguna sin caso. */
const BRANDS = [
  "Siemens S7-1200",
  "Allen-Bradley",
  "WAGO CC100",
  "Danfoss EKE 400",
  "Danfoss ICAD 600",
  "Danfoss EKC 202D",
  "Macurco TX-6-AM",
  "Mayekawa MyPRO / MyCORE",
  "E+H Micropilot",
  "HMI Wecon",
  "Variadores Delta",
  "4-20 mA · Modbus",
];

const ADDS = [
  {
    title: "Control",
    body: "Enclavamientos, secuencias y alarmas sobre el equipo existente.",
  },
  {
    title: "Monitoreo industrial",
    body: "Registro continuo, tendencia e historial de 30 días guardado en el gabinete.",
  },
  {
    title: "Asistente IA",
    body: "Le preguntas qué está pasando y contesta citando el tag y el manual de tu equipo. Usa un modelo frontera, y por eso necesita internet.",
  },
];

export default function RetrofitSection() {
  return (
    <section id="retrofit" className="py-16">
      <Wrap>
        <SectionLabel num="01">Sobre tu equipo</SectionLabel>
        <SectionHeading>
          Tu planta ya genera el dato. Se está perdiendo en el manómetro.
        </SectionHeading>
        <SectionLede>
          Los sensores que ya compraste miden bien. El PLC que ya tienes ejecuta bien. Lo
          que no existe es el registro, la tendencia y alguien que interprete. Eso es lo
          único que agregamos.
        </SectionLede>

        <div className="mt-10 grid overflow-hidden rounded-[3px] border border-line lg:grid-cols-2">
          <div className="bg-panel px-[26px] py-[30px]">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
              Lo que ya tienes
            </div>
            <h3 className="mt-2.5 text-xl font-bold">Lo conectamos como está</h3>
            <p className="mt-2.5 text-[14.5px] text-muted">
              Si sirve, se queda. Si falta un instrumento, te lo ponemos — pero no vas a
              cambiar lo que ya funciona.
            </p>
            <ul className="mt-5 flex flex-wrap gap-[7px]">
              {BRANDS.map((b) => (
                <li
                  key={b}
                  className="rounded-[2px] border border-line px-2.5 py-[5px] font-mono text-[11.5px] text-muted"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative border-t border-line bg-gradient-to-b from-[#1c2230] to-panel px-[26px] py-[30px] lg:border-l lg:border-t-0">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-0.5 bg-amber"
            />
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
              Lo que le agregamos
            </div>
            <h3 className="mt-2.5 text-xl font-bold">Tres cosas, nada más</h3>
            <ul className="mt-5 grid">
              {ADDS.map((a, i) => (
                <li
                  key={a.title}
                  className={i === 0 ? "pb-[15px]" : "border-t border-line py-[15px]"}
                >
                  <b className="block font-display text-base font-bold">{a.title}</b>
                  <span className="text-sm text-muted">{a.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
