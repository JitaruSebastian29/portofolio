import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Relative base so the build works both at a domain root and under a
// GitLab Pages project path such as /portofolio/.
export default defineConfig({
  base: "./",
  publicDir: "static",
  plugins: [react()],
  server: {
    host: "::",
    port: 8080,
  },
});
