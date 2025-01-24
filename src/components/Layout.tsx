import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16 px-4">{children}</main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-200">
        <p>© 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
