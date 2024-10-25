import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Nếu bạn sử dụng thư mục `app`
    "./pages/**/*.{js,ts,jsx,tsx}", // Nếu bạn có thư mục `pages`
    "./components/**/*.{js,ts,jsx,tsx}", // Nếu bạn có thư mục `components`
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
