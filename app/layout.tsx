import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { DockDemo } from "@/components/dock";
import "./globals.css";
import "../util/css/satoshi.css";
export const metadata: Metadata = {
  title: "Kartik Bhatt | I Like to Code :)",
  description:
    "Sometimes I code, sometimes I stare at my screen wondering why it’s broken. Fullstack vibe coder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col 2xl:max-w-[46vw] xl:max-w-[60vw] lg:max-w-[70vw] md:max-w-[80vw] sm:max-w-[80vw]  mx-auto mt-4 md:mt-10 p-6 md:p-4 md:pb-24 pb-10  min-h-screen">
            {children}
            <DockDemo />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
