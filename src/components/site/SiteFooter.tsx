import { Wrap } from "./primitives";
import { NAV } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line py-[34px] text-[13.5px] text-muted">
      <Wrap className="flex flex-wrap items-baseline gap-x-10 gap-y-[22px]">
        <div>SAMA Automatización S.A.S. de C.V.</div>

        <nav className="flex flex-wrap gap-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent transition-colors hover:border-amber hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/demo"
            className="border-b border-transparent transition-colors hover:border-amber hover:text-fg"
          >
            Demo en vivo
          </a>
        </nav>

        <div className="ml-auto text-right font-mono text-[11.5px] text-dim">
          Cuauhtémoc, Chihuahua · MX
        </div>
      </Wrap>
    </footer>
  );
}
