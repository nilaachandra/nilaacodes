import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: '#1e293b', // Dark background for code blocks
              color: '#f1f5f9', // Default text color
              borderRadius: '0.375rem', // Rounded corners
              padding: '1rem', // Padding inside code blocks
            },
            code: {
              backgroundColor: '#1e293b', // Inline code background color
              color: '#f1f5f9', // Inline code text color
              padding: '0.2rem 0.4rem', // Padding for inline code
              borderRadius: '0.375rem', // Rounded corners
            },
            // Highlight.js specific styles
            '.hljs': {
              backgroundColor: '#1e293b',
              color: '#f1f5f9',
              borderRadius: '0.375rem',
              padding: '1rem',
              overflowX: 'auto',
            },
            '.hljs-comment, .hljs-quote': {
              color: '#64748b', // Gray for comments and quotes
            },
            '.hljs-keyword, .hljs-selector-tag, .hljs-subst': {
              color: '#f59e0b', // Amber for keywords and tags
            },
            '.hljs-string, .hljs-title, .hljs-name, .hljs-type, .hljs-attr': {
              color: '#10b981', // Green for strings, titles, etc.
            },
            '.hljs-variable, .hljs-template-variable, .hljs-link': {
              color: '#f472b6', // Pink for variables and links
            },
            '.hljs-number, .hljs-literal, .hljs-symbol, .hljs-bullet': {
              color: '#38bdf8', // Light blue for numbers, literals, etc.
            },
            '.hljs-built_in, .hljs-builtin-name': {
              color: '#3b82f6', // Blue for built-in functions
            },
            '.hljs-meta': {
              color: '#a855f7', // Purple for meta tags
            },
            '.hljs-emphasis': {
              fontStyle: 'italic', // Italic emphasis
            },
            '.hljs-strong': {
              fontWeight: 'bold', // Bold emphasis
            },
            '.hljs-addition': {
              backgroundColor: 'rgba(16, 185, 129, 0.1)', // Background for additions in diffs
              color: '#10b981',
            },
            '.hljs-deletion': {
              backgroundColor: 'rgba(239, 68, 68, 0.1)', // Background for deletions in diffs
              color: '#ef4444',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class', // for dark mode
};

export default config;
