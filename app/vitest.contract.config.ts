import path from "path";
import EnvironmentPlugin from "vite-plugin-environment";
import { defineConfig } from "vitest/config";

// https://vitest.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ["**/server/**", "**/**mock.ts"],
    },
  },
  plugins: [EnvironmentPlugin(["API_URL"])],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    include: ["**/*?(.)contract.ts"],
  },
});
