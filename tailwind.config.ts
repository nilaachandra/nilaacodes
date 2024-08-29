import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: "#1e293b", // Dark background for code blocks
              color: "#f1f5f9", // Default text color
              borderRadius: "0.375rem", // Rounded corners
              padding: "1rem", // Padding inside code blocks
            },
            code: {
              backgroundColor: "#1e293b", // Inline code background color
              color: "#f1f5f9", // Inline code text color
              padding: "0.2rem 0.4rem", // Padding for inline code
              borderRadius: "0.375rem", // Rounded corners
            },
            // Highlight.js specific styles
            ".hljs": {
              backgroundColor: "#1e293b",
              color: "#f1f5f9",
              borderRadius: "0.375rem",
              padding: "1rem",
              overflowX: "auto",
            },
            ".hljs-comment, .hljs-quote": {
              color: "#64748b", // Gray for comments and quotes
            },
            ".hljs-keyword, .hljs-selector-tag, .hljs-subst": {
              color: "#f59e0b", // Amber for keywords and tags
            },
            ".hljs-string, .hljs-title, .hljs-name, .hljs-type, .hljs-attr": {
              color: "#10b981", // Green for strings, titles, etc.
            },
            ".hljs-variable, .hljs-template-variable, .hljs-link": {
              color: "#f472b6", // Pink for variables and links
            },
            ".hljs-number, .hljs-literal, .hljs-symbol, .hljs-bullet": {
              color: "#38bdf8", // Light blue for numbers, literals, etc.
            },
            ".hljs-built_in, .hljs-builtin-name": {
              color: "#3b82f6", // Blue for built-in functions
            },
            ".hljs-meta": {
              color: "#a855f7", // Purple for meta tags
            },
            ".hljs-emphasis": {
              fontStyle: "italic", // Italic emphasis
            },
            ".hljs-strong": {
              fontWeight: "bold", // Bold emphasis
            },
            ".hljs-addition": {
              backgroundColor: "rgba(16, 185, 129, 0.1)", // Background for additions in diffs
              color: "#10b981",
            },
            ".hljs-deletion": {
              backgroundColor: "rgba(239, 68, 68, 0.1)", // Background for deletions in diffs
              color: "#ef4444",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};

export default config;
