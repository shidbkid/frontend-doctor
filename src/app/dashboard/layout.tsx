import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        {/* Navbar */}
        <Navbar />
        

        {/* Page Content */}
        <main className="p-6 bg-gray-50 flex-grow">{children}</main>
      </div>
    </div>
  );
}
