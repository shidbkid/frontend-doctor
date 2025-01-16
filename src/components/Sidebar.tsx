const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Analytics", href: "/dashboard/analytics" },
    { name: "Settings", href: "/dashboard/settings" },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-200 p-4">
        <h1 className="text-lg font-bold mb-4">Sidebar</h1>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
  