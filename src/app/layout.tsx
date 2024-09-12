import QueryProvider from "@/providers/query-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
