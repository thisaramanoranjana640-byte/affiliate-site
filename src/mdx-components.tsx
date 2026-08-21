import type { MDXComponents } from 'mdx/types';
import AffiliateButton from '@/components/AffiliateButton';
import ComparisonTable from '@/components/ComparisonTable';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3 text-slate-800 border-b pb-2">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-slate-700 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">{children}</ul>
    ),
    // Expose your custom components globally inside MDX files
    AffiliateButton,
    ComparisonTable,
    ...components,
  };
}