export default function Widget({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <div className="p-6 bg-white shadow rounded-lg">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        {children}
      </div>
    );
  }
  