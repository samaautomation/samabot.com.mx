import { Wrap, Button } from "./primitives";

/**
 * Lectura de ejemplo. Los tags siguen la convención ISA que usa la planta
 * (AT = analizador, PT = presión, TT = temperatura) porque es el idioma del
 * jefe de mantenimiento que lee esta página.
 */
const TAGS = [
  { id: "AT-301", value: "0", unit: "ppm", name: "Amoniaco (NH₃)", ok: true },
  { id: "PT-101", value: "34", unit: "psiG", name: "Succión" },
  { id: "PT-102", value: "148", unit: "psiG", name: "Descarga" },
  { id: "TT-210", value: "−18.4", unit: "°C", name: "Cámara 4" },
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-line py-16">
      <Wrap className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-amber">
            Control, monitoreo y asistente IA · SAMABOT
          </p>

          <h1 className="text-[clamp(33px,5vw,54px)] font-extrabold leading-[1.05]">
            Sobre las máquinas
            <br />
            que <span className="font-semibold text-muted">ya tienes.</span>
          </h1>

          <p className="mt-6 max-w-[47ch] text-lg text-muted">
            No cambiamos tu planta: la leemos. Conectamos tus PLC, tus sensores y tus
            válvulas a un gabinete que registra todo, te avisa antes de que pare y te
            explica en español qué está pasando.{" "}
            <b className="font-semibold text-fg">
              Lo que te protege corre local. Lo que te explica usa internet.
            </b>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contacto">Agendar visita de diagnóstico</Button>
            <Button href="/demo" variant="ghost">
              Ver el demo en vivo
            </Button>
            <Button href="#modelo" variant="ghost">
              Qué se paga y qué no
            </Button>
          </div>

          <div className="mt-7 border-t border-line-soft pt-[18px] font-mono text-xs leading-[1.9] text-dim">
            <b className="font-medium text-muted">Cuauhtémoc, Chihuahua</b> · Integradores
            desde 2023
            <br />
            Frigoríficos · Empaques de fruta · Lácteos · Metalmecánica
          </div>
        </div>

        <div className="overflow-hidden rounded-[3px] border border-line bg-panel">
          <div className="flex items-center gap-2.5 border-b border-line bg-panel-2 px-3.5 py-[11px] font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            <span className="size-[7px] flex-none rounded-full bg-ok" />
            Sala de máquinas 3 · en línea
            <span className="ml-auto tracking-[0.06em] text-dim">14:32</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {TAGS.map((t, i) => (
              <div
                key={t.id}
                className={`border-b border-line-soft px-3.5 py-4 ${
                  i % 2 === 0 ? "sm:border-r sm:border-r-line-soft" : ""
                }`}
              >
                <div className="font-mono text-[10.5px] tracking-[0.1em] text-dim">
                  {t.id}
                </div>
                <div
                  className={`mt-0.5 font-display text-[29px] font-bold leading-tight tabular-nums ${
                    t.ok ? "text-ok" : ""
                  }`}
                >
                  {t.value}
                  <span className="ml-1 font-body text-[13px] font-medium text-muted">
                    {t.unit}
                  </span>
                </div>
                <div className="text-[12.5px] text-muted">{t.name}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 px-3.5 py-[11px] font-mono text-[10.5px] text-dim">
            <span className="size-[7px] flex-none rounded-full bg-amber" />
            Instrumentos que ya estaban en la planta · vista de ejemplo
          </div>
        </div>
      </Wrap>
    </section>
  );
}
