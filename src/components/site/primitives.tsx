import type { ReactNode } from "react";

/** Ancho de columna único de todo el sitio. */
export function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1080px] px-5 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Regla con número, como la leyenda de un plano P&ID. El número sólo se usa
 * donde el orden significa algo: aquí las secciones sí se leen en secuencia.
 */
export function SectionLabel({ num, children }: { num: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3.5 pb-[18px] font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
      <span className="text-amber">{num}</span>
      {children}
      <span aria-hidden className="h-px flex-1 bg-line" />
    </p>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-[22ch] text-[clamp(25px,3.4vw,34px)] font-bold">{children}</h2>
  );
}

export function SectionLede({ children }: { children: ReactNode }) {
  return <p className="mt-4 max-w-[62ch] text-muted">{children}</p>;
}

export function Button({
  href,
  children,
  variant = "solid",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  type?: "submit";
}) {
  const base =
    "inline-block rounded-[2px] border px-[18px] py-2.5 font-display text-sm font-bold whitespace-nowrap transition-colors";
  const styles =
    variant === "solid"
      ? "bg-amber text-[#141005] border-amber hover:bg-amber-hi hover:border-amber-hi"
      : "bg-transparent text-fg border-line hover:border-muted";

  if (type === "submit") {
    return (
      <button type="submit" className={`${base} ${styles} cursor-pointer`}>
        {children}
      </button>
    );
  }
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
