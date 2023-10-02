import path from "path";
import { defineConfig } from "vitest/config";

// https://vitest.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ["**/server/**", "**/**mock.ts"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    include: ["**/*?(.)contract.ts"],
  },
});
