const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-[#050505] p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">Valtus Dashboard</h1>
          <button className="text-red-400 text-sm font-bold">Logout</button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="glass-card p-6 rounded-xl">
            <p className="text-gray-500 text-xs uppercase mb-1">Total Sales</p>
            <h3 className="text-2xl font-bold">IDR 2.450.000</h3>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <p className="text-gray-500 text-xs uppercase mb-1">Pending Orders</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <p className="text-gray-500 text-xs uppercase mb-1">Total Members</p>
            <h3 className="text-2xl font-bold">142</h3>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-gray-400">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Item</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-4 font-medium">siZhens_Dev</td>
                <td className="p-4 text-gray-400">1000 Robux (Group)</td>
                <td className="p-4"><span className="text-green-400 bg-green-400/10 px-2 py-1 rounded text-[10px]">Success</span></td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Player_One</td>
                <td className="p-4 text-gray-400">500 Robux (Gamepass)</td>
                <td className="p-4"><span className="text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded text-[10px]">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
