import { Wrap } from "./primitives";

/**
 * Cifras verificadas contra el sistema contable. El encabezado dice "SAMA",
 * no "SAMABOT", a propósito: son trabajos de integración, no gabinetes
 * instalados. Cuando haya un SAMABOT operando en cliente, va en su propio
 * bloque.
 */
const FIGURES = [
  // PENDIENTE (2026-09-14): Sergio no esta seguro del total; se monitoreaban por vBox en
  // Masara, Picolargo y otra planta. Confirmar con Gera (Brain P-237) y quitar `pendiente`.
  { n: "12", label: "salas con detección de amoniaco, en dos plantas", pendiente: true },
  { n: "4", label: "válvulas Danfoss ICAD existentes puestas a operar" },
  { n: "1", label: "compresor migrado a controlador nuevo, sin tocar el equipo" },
  { n: "100", unit: "%", label: "del control y el registro sigue corriendo sin internet" },
];

const VISIBLES = FIGURES.filter((f) => !f.pendiente);

export default function ProofBand() {
  return (
    <div className="border-b border-line bg-panel py-[34px]">
      <Wrap>
        <p className="mb-[22px] font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
          Lo que SAMA ya hizo sobre equipo instalado
        </p>
        <div
          className={`grid grid-cols-1 gap-7 sm:grid-cols-2 ${
            VISIBLES.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {VISIBLES.map((f) => (
            <div key={f.label}>
              <div className="font-display text-[34px] font-extrabold leading-none tabular-nums">
                {f.n}
                {f.unit ? (
                  <small className="ml-0.5 text-[15px] font-semibold text-muted">
                    &nbsp;{f.unit}
                  </small>
                ) : null}
              </div>
              <div className="mt-[7px] max-w-[23ch] text-[13.5px] text-muted">
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </div>
  );
}
