import { useState } from 'react'
import { Search, Filter, Plus, Eye, FileText, MoreVertical } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'

const patients = [
  { id: 'NS-2401', name: 'Nguyễn Văn A', age: 64, gender: 'Nam', phone: '0901 234 567', diagnosis: 'U màng não', lastScan: '01/06/2026', status: 'Cấp cứu', statusColor: 'bg-red-100 text-red-600' },
  { id: 'NS-2400', name: 'Trần Thị B', age: 45, gender: 'Nữ', phone: '0912 345 678', diagnosis: 'Đột quỵ não', lastScan: '31/05/2026', status: 'Đang điều trị', statusColor: 'bg-yellow-100 text-yellow-700' },
  { id: 'NS-2399', name: 'Lê Minh C', age: 52, gender: 'Nam', phone: '0923 456 789', diagnosis: 'Parkinson giai đoạn 2', lastScan: '30/05/2026', status: 'Ổn định', statusColor: 'bg-green-100 text-green-700' },
  { id: 'NS-2398', name: 'Phạm Thị D', age: 38, gender: 'Nữ', phone: '0934 567 890', diagnosis: 'Đau đầu mãn tính', lastScan: '29/05/2026', status: 'Theo dõi', statusColor: 'bg-blue-100 text-blue-700' },
  { id: 'NS-2397', name: 'Hoàng Văn E', age: 71, gender: 'Nam', phone: '0945 678 901', diagnosis: 'Alzheimer nhẹ', lastScan: '28/05/2026', status: 'Ổn định', statusColor: 'bg-green-100 text-green-700' },
  { id: 'NS-2396', name: 'Vũ Thị F', age: 29, gender: 'Nữ', phone: '0956 789 012', diagnosis: 'Động kinh', lastScan: '27/05/2026', status: 'Đang điều trị', statusColor: 'bg-yellow-100 text-yellow-700' },
  { id: 'NS-2395', name: 'Đặng Văn G', age: 58, gender: 'Nam', phone: '0967 890 123', diagnosis: 'Xơ vữa não', lastScan: '26/05/2026', status: 'Theo dõi', statusColor: 'bg-blue-100 text-blue-700' },
  { id: 'NS-2394', name: 'Bùi Thị H', age: 43, gender: 'Nữ', phone: '0978 901 234', diagnosis: 'Rối loạn lo âu thần kinh', lastScan: '25/05/2026', status: 'Ổn định', statusColor: 'bg-green-100 text-green-700' },
]

export default function PatientRecords() {
  const [search, setSearch] = useState('')
  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase()) ||
    p.diagnosis.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Hồ sơ bệnh nhân</h1>
            <p className="text-sm text-gray-500 mt-0.5">Quản lý toàn bộ hồ sơ bệnh nhân trong hệ thống</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-xl text-sm font-medium hover:bg-green-800 transition-colors">
            <Plus size={16} />
            Thêm bệnh nhân
          </button>
        </header>

        <main className="flex-1 p-6">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Tổng bệnh nhân', value: '1.284', color: 'text-gray-900' },
              { label: 'Đang điều trị', value: '342', color: 'text-yellow-600' },
              { label: 'Cấp cứu', value: '18', color: 'text-red-600' },
              { label: 'Xuất viện tháng này', value: '96', color: 'text-green-700' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className={`text-3xl font-bold mt-1 ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100">
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Tìm theo tên, mã BN, chẩn đoán..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50">
                <Filter size={15} />
                Lọc
              </button>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-xs uppercase border-b border-gray-50">
                  <th className="text-left px-5 py-3 font-medium">Mã BN</th>
                  <th className="text-left px-5 py-3 font-medium">Họ và tên</th>
                  <th className="text-left px-5 py-3 font-medium">Tuổi / Giới</th>
                  <th className="text-left px-5 py-3 font-medium">Số điện thoại</th>
                  <th className="text-left px-5 py-3 font-medium">Chẩn đoán gần nhất</th>
                  <th className="text-left px-5 py-3 font-medium">Lần quét cuối</th>
                  <th className="text-left px-5 py-3 font-medium">Trạng thái</th>
                  <th className="text-left px-5 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map(p => (
                  <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-gray-500">{p.id}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold text-xs flex-shrink-0">
                          {p.name.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-800">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-gray-600">{p.age} / {p.gender}</td>
                    <td className="px-5 py-3 text-gray-600">{p.phone}</td>
                    <td className="px-5 py-3 text-gray-700">{p.diagnosis}</td>
                    <td className="px-5 py-3 text-gray-500">{p.lastScan}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${p.statusColor}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Eye size={15} />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <FileText size={15} />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
              <span>Hiển thị {filtered.length} / {patients.length} bệnh nhân</span>
              <div className="flex gap-1">
                {[1, 2, 3, '...', 12].map((p, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                      p === 1 ? 'bg-green-700 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
