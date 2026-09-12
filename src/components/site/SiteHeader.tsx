import Image from "next/image";
import { Wrap, Button } from "./primitives";

/** Cada entrada apunta a un id que existe de verdad en la página. */
export const NAV = [
  { href: "#retrofit", label: "Sobre tu equipo" },
  { href: "#como", label: "Cómo funciona" },
  { href: "#modelo", label: "Qué se paga" },
  { href: "#planta", label: "En planta" },
  { href: "#contacto", label: "Contacto" },
];

/**
 * El logo completo trae el wordmark en azul marino y desaparece sobre negro.
 * Sobre fondo oscuro se usa sólo la marca —el rayo y el engrane, que sí
 * contrastan— y el nombre se compone con la tipografía del sitio.
 */
export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/logos/sama-engrane.png"
        alt=""
        aria-hidden
        width={379}
        height={395}
        priority
        className="h-7 w-auto"
      />
      <span className="leading-none">
        <span className="block font-display text-[19px] font-extrabold tracking-tight text-fg">
          SAMA
        </span>
        <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.22em] text-dim">
          Automatización
        </span>
      </span>
      <span className="sr-only">SAMA Automatización</span>
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <Wrap className="flex items-center gap-5 py-3">
        <a href="#top" className="flex-none" aria-label="Inicio">
          <Wordmark />
        </a>

        <nav className="ml-auto hidden items-center gap-5 text-sm md:flex">
          {NAV.slice(0, 4).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent py-1 text-muted transition-colors hover:border-amber hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto md:ml-0">
          <Button href="#contacto">Agendar visita</Button>
        </div>
      </Wrap>
    </header>
  );
}
