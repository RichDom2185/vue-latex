import katex, { KatexOptions } from "katex";
import type { Plugin } from "vue";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    /**
     * Render a LaTeX expression to HTML.
     * @param expression The LaTeX expression to render.
     * @returns The rendered HTML.
     */
    $latex: (expression: string) => string;
  }
}

type Options = {
  /**
   * The Provider to use for rendering the LaTeX expression.
   * Currently, only "katex" is supported.
   * @default "katex"
   */
  provider?: "katex";
  /**
   * Global options to be passed to the KaTeX render method.
   * @see https://katex.org/docs/options.html
   */
  globalOptions?: KatexOptions;
};

const VueLatex: Plugin<[Options?]> = {
  install(app, options = {}) {
    // Inject the $latex method into the Vue app.
    app.config.globalProperties.$latex = (expression: string) => {
      return katex.renderToString(expression, {
        throwOnError: false,
        displayMode: false, // Inline mode by default
        ...options.globalOptions,
      });
    };
  },
};

export default VueLatex;
