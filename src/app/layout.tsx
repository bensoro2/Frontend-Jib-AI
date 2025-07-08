import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { SITE_INFO } from "@/utils/constants/site";
import { AppSidebar } from "@/components/features/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DarkmodeProvider from "@/components/providers/darkmode-provider";
import { HeaderDashboard } from "@/components/features/header";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: SITE_INFO.title,
  description: SITE_INFO.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.className} antialiased`}>
        <DarkmodeProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <div
                className="bg-[url('/images/bg.png')] h-full bg-cover bg-top bg-no-repeat"
              >
                <HeaderDashboard />
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </DarkmodeProvider>
      </body>
    </html>
  );
}
