import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /demo: vista en vivo de la sala de maquinas del stand (la misma pagina que ven los
  // celulares en la red del demo). Es HTML estatico en public/demo/, generado por
  // WAGO/demo_nodered/vista_celular/desplegar.py --exportar-web. Lee por MQTT (solo lectura).
  async rewrites() {
    return [{ source: "/demo", destination: "/demo/index.html" }];
  },
  async headers() {
    return [
      // que siempre se vea la version publicada mas reciente
      { source: "/demo", headers: [{ key: "Cache-Control", value: "no-cache" }] },
      { source: "/demo/index.html", headers: [{ key: "Cache-Control", value: "no-cache" }] },
    ];
  },
};

export default nextConfig;
