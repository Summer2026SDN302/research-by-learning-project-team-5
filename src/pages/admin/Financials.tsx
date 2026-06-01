import {
  AreaChart, Area, XAxis, YAxis, ResponsiveContainer,
  BarChart, Bar, Tooltip
} from 'recharts'
import { Download, TrendingUp, TrendingDown, DollarSign, CreditCard } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'

const revenueData = [
  { month: 'Th1', revenue: 42000000 },
  { month: 'Th2', revenue: 58000000 },
  { month: 'Th3', revenue: 51000000 },
  { month: 'Th4', revenue: 73000000 },
  { month: 'Th5', revenue: 66000000 },
  { month: 'Th6', revenue: 89000000 },
]

const serviceData = [
  { name: 'MRI Não', value: 340 },
  { name: 'CT Đầu', value: 210 },
  { name: 'MRI Cột sống', value: 180 },
  { name: 'Tư vấn AI', value: 290 },
  { name: 'Báo cáo PDF', value: 420 },
]

const transactions = [
  { id: 'TX-8821', patient: 'Nguyễn Văn A', service: 'Phân tích MRI AI', amount: '850.000đ', date: '01/06/2026', method: 'Chuyển khoản', status: 'Thành công', statusColor: 'text-green-600 bg-green-50' },
  { id: 'TX-8820', patient: 'Trần Thị B', service: 'Báo cáo PDF chuyên sâu', amount: '320.000đ', date: '01/06/2026', method: 'Thẻ tín dụng', status: 'Thành công', statusColor: 'text-green-600 bg-green-50' },
  { id: 'TX-8819', patient: 'Lê Minh C', service: 'Gói Premium năm', amount: '99.000đ', date: '31/05/2026', method: 'Ví điện tử', status: 'Thành công', statusColor: 'text-green-600 bg-green-50' },
  { id: 'TX-8818', patient: 'Phạm Thị D', service: 'Tư vấn AI 24/7', amount: '150.000đ', date: '31/05/2026', method: 'Tiền mặt', status: 'Đang xử lý', statusColor: 'text-yellow-600 bg-yellow-50' },
]

const fmt = (v: number) => v >= 1000000 ? `${(v / 1000000).toFixed(0)}M` : `${(v / 1000).toFixed(0)}K`

export default function Financials() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Tài chính</h1>
            <p className="text-sm text-gray-500 mt-0.5">Theo dõi doanh thu và giao dịch phòng khám</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Download size={16} />
            Xuất báo cáo
          </button>
        </header>

        <main className="flex-1 p-6">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Doanh thu tháng 6', value: '89.000.000đ', change: '+34%', up: true, icon: DollarSign },
              { label: 'Số giao dịch', value: '1.042', change: '+12%', up: true, icon: CreditCard },
              { label: 'Trung bình / giao dịch', value: '85.000đ', change: '+8%', up: true, icon: TrendingUp },
              { label: 'Hoàn tiền', value: '3.200.000đ', change: '-2%', up: false, icon: TrendingDown },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <s.icon size={18} className="text-green-700" />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${s.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {s.change}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">{s.label}</p>
                <p className="text-xl font-bold text-gray-900">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Revenue Chart */}
            <div className="col-span-2 bg-white rounded-2xl p-5 border border-gray-100">
              <h2 className="font-semibold text-gray-900 mb-4">Doanh thu theo tháng</h2>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={revenueData} margin={{ top: 5, right: 0, bottom: 0, left: 10 }}>
                  <defs>
                    <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2d7d32" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#2d7d32" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} tickFormatter={fmt} />
                  <Tooltip formatter={(v) => [`${Number(v).toLocaleString('vi-VN')}đ`, 'Doanh thu']}
                    contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                  <Area type="monotone" dataKey="revenue" stroke="#2d7d32" strokeWidth={2.5} fill="url(#revGradient)" dot={false} activeDot={{ r: 5, fill: '#2d7d32' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Service breakdown */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h2 className="font-semibold text-gray-900 mb-4">Dịch vụ phổ biến</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={serviceData} layout="vertical" margin={{ top: 0, right: 10, bottom: 0, left: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6b7280' }} width={80} />
                  <Tooltip contentStyle={{ border: 'none', borderRadius: '10px' }} />
                  <Bar dataKey="value" fill="#2d7d32" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-white rounded-2xl border border-gray-100">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Giao dịch gần đây</h2>
              <button className="text-sm text-green-600 font-medium hover:underline">Xem tất cả</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-xs uppercase border-b border-gray-50">
                  {['Mã GD', 'Bệnh nhân', 'Dịch vụ', 'Số tiền', 'Ngày', 'Phương thức', 'Trạng thái'].map(h => (
                    <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {transactions.map(tx => (
                  <tr key={tx.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3 font-mono text-xs text-gray-500">{tx.id}</td>
                    <td className="px-5 py-3 font-medium text-gray-800">{tx.patient}</td>
                    <td className="px-5 py-3 text-gray-600">{tx.service}</td>
                    <td className="px-5 py-3 font-semibold text-gray-800">{tx.amount}</td>
                    <td className="px-5 py-3 text-gray-500">{tx.date}</td>
                    <td className="px-5 py-3 text-gray-600">{tx.method}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${tx.statusColor}`}>{tx.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
