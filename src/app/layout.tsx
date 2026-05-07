import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SignalScope | Stock Research Terminal",
  description: "AI-assisted equity research dashboard with mocked market data for the MVP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{document.documentElement.dataset.theme=localStorage.getItem('signalscope-theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}",
        }}
      />
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
