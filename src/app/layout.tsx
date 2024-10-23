// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Author",
  description: "Profile page created with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
