import { Wrap, SectionLabel, SectionHeading, SectionLede } from "./primitives";

const ONE_TIME = [
  "Levantamiento en tu planta y diseño del alcance",
  "Gabinete SAMABOT, armado y montado",
  "Integración con tus PLC, sensores y válvulas",
  "Programación, puesta en marcha y pruebas",
  "Tableros de monitoreo y vista en celular",
  "Registro e historial, funcionando sin internet",
  "Capacitación a tu gente y documentación entregada",
];

const YEARLY = [
  "El asistente IA — modelo frontera, aterrizado en los manuales de tu equipo",
  "Calibración de los sensores de gas, con reporte firmado",
  "Soporte y diagnóstico remoto",
  "Respaldo de la configuración y del programa",
  "Revisión anual en sitio",
];

/** El anti-modelo. Nombrar al competidor obliga a defender lo que digas de él. */
const NEVER = [
  "Cambiar sensores que todavía sirven",
  "Renta mensual por seguir viendo tu planta",
  "Cobro por punto medido o por usuario",
  "Tu historial viviendo en el servidor de alguien más",
  "Un sistema que se apaga si dejas de pagar",
  "Perder las alarmas porque se cayó el internet",
];

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-3 text-[14.5px] text-muted">
      <span aria-hidden className="pt-px font-mono text-[13px] text-amber">
        —
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function PricingModel() {
  return (
    <section id="modelo" className="border-t border-line py-16">
      <Wrap>
        <SectionLabel num="03">Qué se paga</SectionLabel>
        <SectionHeading>
          Se compra una vez. La póliza es aparte y es opcional.
        </SectionHeading>
        <SectionLede>
          No cobramos por punto medido, ni por usuario, ni por dato guardado. La
          integración se paga una vez y se queda tuya.
        </SectionLede>

        <div className="mt-10 grid overflow-hidden rounded-[3px] border border-line lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-panel px-[26px] py-[30px]">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
              Una sola compra
            </div>
            <h3 className="mt-2.5 text-[22px] font-bold">La integración</h3>
            <div className="mt-1.5 font-mono text-xs text-amber">
              Se queda tuya. Para siempre.
            </div>
            <ul className="mt-5 grid gap-[11px]">
              {ONE_TIME.map((t) => (
                <Item key={t}>{t}</Item>
              ))}
            </ul>
          </div>

          <div className="border-t border-line bg-panel px-[26px] py-[30px] lg:border-l lg:border-t-0">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
              Anual · opcional
            </div>
            <h3 className="mt-2.5 text-[22px] font-bold">La póliza</h3>
            <div className="mt-1.5 font-mono text-xs text-amber">
              Servicio, no permiso de uso.
            </div>
            <ul className="mt-5 grid gap-[11px]">
              {YEARLY.map((t, i) => (
                <Item key={t}>
                  {i === 0 ? (
                    <>
                      <b className="font-semibold text-fg">El asistente IA</b>
                      {t.slice("El asistente IA".length)}
                    </>
                  ) : (
                    t
                  )}
                </Item>
              ))}
            </ul>
            <div className="mt-6 rounded-[2px] border border-line bg-ink px-[18px] py-4 text-[14.5px] text-muted">
              <b className="font-semibold text-fg">
                Si no la renuevas, el sistema sigue operando.
              </b>{" "}
              Pierdes el asistente y el servicio — no el control, ni el registro, ni las
              alarmas de tu planta.
            </div>
          </div>
        </div>

        <div className="mt-[22px] rounded-[3px] border border-line bg-panel px-[26px] py-6">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
            Lo que no vas a encontrar aquí
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-[30px]">
            {NEVER.map((t) => (
              <li
                key={t}
                className="grid grid-cols-[auto_1fr] gap-3 text-[14.5px] text-muted"
              >
                <span aria-hidden className="pt-px font-mono text-[13px] text-crit">
                  ✕
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
    </section>
  );
}
