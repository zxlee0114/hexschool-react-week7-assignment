import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/hexschool-react-week7-assignment/"
      : "/",
  plugins: [react()],
});
