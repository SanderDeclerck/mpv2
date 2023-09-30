import { defineConfig } from "vitest/config";
import path from "path";

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
