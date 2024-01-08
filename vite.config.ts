import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatiblePlugin from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatiblePlugin()],
  define: {
    "process.env": process.env, // process.env를 전달
  },
  resolve: {
    alias: [
      { find: "@utils", replacement: "/src/utils" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@recoil", replacement: "/src/recoil" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@component", replacement: "/src/component" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@", replacement: "/src" },
    ],
  },
  mode: "development",
});
