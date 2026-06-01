import {
  AreaChart, Area, XAxis, YAxis, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip
} from 'recharts'
import { Bell, Settings, Download, UserPlus, Brain } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'

const chartData = [
  { month: 'Th1', scans: 320 },
  { month: 'Th2', scans: 480 },
  { month: 'Th3', scans: 410 },
  { month: 'Th4', scans: 600 },
  { month: 'Th5', scans: 520 },
  { month: 'Th6', scans: 750 },
]

const pieData = [
  { name: 'Người lớn (18–60)', value: 75, color: '#2d7d32' },
  { name: 'Người cao tuổi (60+)', value: 20, color: '#4a4a4a' },
  { name: 'Nhi khoa', value: 5, color: '#d1d5db' },
]

const recentActivity = [
  { id: 'NS-2401', doctor: 'Bs. Minh', scanType: 'MRI Não', status: 'Hoàn thành', time: '2 phút trước', statusColor: 'text-green-600 bg-green-50' },
  { id: 'NS-2400', doctor: 'Bs. Lan', scanType: 'CT Đầu', status: 'Đang xử lý', time: '8 phút trước', statusColor: 'text-yellow-600 bg-yellow-50' },
  { id: 'NS-2399', doctor: 'Bs. Hùng', scanType: 'MRI Cột sống', status: 'Hoàn thành', time: '15 phút trước', statusColor: 'text-green-600 bg-green-50' },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm bệnh nhân hoặc lần quét..."
                className="w-72 pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-xl">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-xl">
              <Settings size={20} />
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
                <img src="/nero4.png" alt="avatar" className="w-full h-full object-cover" />
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">Bs. Alexander Vane</p>
                <p className="text-xs text-gray-500">Trưởng khoa Chẩn đoán hình ảnh</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bảng điều khiển Phòng khám</h1>
              <p className="text-gray-500 text-sm mt-0.5">
                Chào mừng trở lại, Bs. Vane. Đây là tổng quan hiệu suất phòng khám của bạn.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors">
                <Download size={16} />
                Xuất sao kê
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-xl text-sm font-medium hover:bg-green-800 transition-colors">
                <UserPlus size={16} />
                Thêm bác sĩ
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <svg width="20" height="20" fill="none" stroke="#2d7d32" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  +12% so với tháng trước
                </span>
              </div>
              <p className="text-gray-500 text-sm">Tổng số bệnh nhân</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">1.284</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                  <Brain size={20} className="text-white" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  +8% hôm nay
                </span>
              </div>
              <p className="text-gray-500 text-sm">Tổng số lượt quét AI</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">8.432</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-white">
              <p className="text-gray-400 text-sm mb-1">Số dư ví hiện tại</p>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">2.500.000đ</p>
                <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-3 rounded-xl transition-colors flex flex-col items-center gap-0.5 leading-tight">
                  <span>Nạp</span>
                  <span>tiền</span>
                  <span>ngay</span>
                </button>
              </div>
              <div className="flex gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs text-gray-400">Đã bật tự động nạp tiền</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="text-xs text-gray-400">Chu kỳ tiếp theo: 15 Th10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2 bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Xu hướng sử dụng AI hàng tháng</h2>
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <span className="w-3 h-3 rounded-full bg-green-600 inline-block" />
                  Số lần quét
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={chartData} margin={{ top: 5, right: 0, bottom: 0, left: -30 }}>
                  <defs>
                    <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2d7d32" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#2d7d32" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <Tooltip
                    contentStyle={{ border: 'none', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                    formatter={(v) => [`${v} lần quét`, '']}
                  />
                  <Area
                    type="monotone"
                    dataKey="scans"
                    stroke="#2d7d32"
                    strokeWidth={2.5}
                    fill="url(#scanGradient)"
                    dot={false}
                    activeDot={{ r: 5, fill: '#2d7d32' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h2 className="font-semibold text-gray-900 mb-3">Nhân khẩu học bệnh nhân</h2>
              <div className="flex justify-center">
                <PieChart width={160} height={160}>
                  <Pie
                    data={pieData}
                    cx={75}
                    cy={75}
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="text-center -mt-20 mb-14">
                <p className="text-2xl font-bold text-gray-900">1,2k</p>
                <p className="text-xs text-gray-400 uppercase">Tổng cộng</p>
              </div>
              <div className="space-y-2">
                {pieData.map(item => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                      <span className="text-xs text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity & Whitepaper */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Hoạt động gần đây</h2>
                <button className="text-green-600 text-sm font-medium hover:underline">Xem tất cả</button>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs uppercase">
                    <th className="text-left pb-3 font-medium">Mã bệnh nhân</th>
                    <th className="text-left pb-3 font-medium">Bác sĩ</th>
                    <th className="text-left pb-3 font-medium">Loại quét</th>
                    <th className="text-left pb-3 font-medium">Trạng thái</th>
                    <th className="text-left pb-3 font-medium">Thời gian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentActivity.map(row => (
                    <tr key={row.id}>
                      <td className="py-3 font-medium text-gray-800">{row.id}</td>
                      <td className="py-3 text-gray-600">{row.doctor}</td>
                      <td className="py-3 text-gray-600">{row.scanType}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 text-gray-400">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden relative">
              <img src="/nero2.png" alt="nghiên cứu" className="w-full h-full object-cover absolute inset-0 opacity-50" />
              <div className="relative p-5 flex flex-col justify-end h-full min-h-[200px]">
                <span className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">NGHIÊN CỨU TIÊN TIẾN</span>
                <h3 className="text-white font-bold text-lg leading-tight">
                  Sách trắng kết nối thần kinh 2024
                </h3>
                <button className="mt-3 text-sm text-green-400 font-medium hover:text-green-300 text-left">
                  Đọc thêm →
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
