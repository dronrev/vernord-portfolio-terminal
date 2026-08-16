import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-3xl font-bold mt-6 mb-3" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold mt-5 mb-2" {...props} />,
    h3: (props) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
    p: (props) => <p className="mb-3 leading-relaxed" {...props} />,
    ul: (props) => <ul className="list-disc list-inside mb-3 flex flex-col gap-1" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside mb-3 flex flex-col gap-1" {...props} />,
    li: (props) => <li {...props} />,
    a: (props) => <a className="text-blue-500 hover:underline" {...props} />,
    code: (props) => <code className="bg-black/10 dark:bg-white/10 rounded px-1 py-0.5 text-sm" {...props} />,
    ...components,
  };
}
