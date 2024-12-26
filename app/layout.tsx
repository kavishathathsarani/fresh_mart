import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

// Import Quicksand font
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Fresh Mart POS System",
  description: "Manage your supermarket efficiently with Fresh Mart POS System.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="antialiased bg-gray-100 text-gray-800">
        {/* Layout with Sidebar and Main Content */}
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="bg-white w-64 p-6 shadow-md border-r">
            {/* Logo Section */}
            <div className="flex flex-col items-center mb-8">
              <img
                src="/images/freshmart.png" // Corrected path
                alt="Fresh Mart Logo"
                className="w-20 h-20"
              />
              <h1 className="text-xl font-bold mt-2">FRESH MART</h1>
            </div>

            {/* Navigation Links */}
            <nav>
              <ul className="space-y-4"> {/* Increased gap */}
                <li className="sidebar-link font-semibold">Home</li>
                <li className="sidebar-link font-semibold">Customer</li>
                <li className="sidebar-link font-semibold text-blue-500">
                  Supplier
                </li>
                <li className="sidebar-link font-semibold">Product</li>
                <li className="sidebar-link font-semibold">Stock</li>
                <li className="sidebar-link font-semibold">Discount</li>
                <li className="sidebar-link font-semibold">Sale</li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="main-content flex-1 p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
