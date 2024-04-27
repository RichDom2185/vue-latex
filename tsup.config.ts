import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  minify: true,
  dts: true,
  clean: true,
  external: ["vue", "katex"],
});
