import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        dimensions: false,
        icon: true,
        ref: true,
      },
      include: "**/*.svg?react",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: (() => {
    const certDir = path.resolve(__dirname, "certs");
    const keyPath = path.join(certDir, "dev.key");
    const certPath = path.join(certDir, "dev.crt");

    try {
      if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
        return {
          host: true,
          https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
          },
        };
      }
    } catch (e) {
      console.warn("Ошибка при загрузке сертификатов HTTPS:", e);
    }

    return { https: {} };
  })(),
});
