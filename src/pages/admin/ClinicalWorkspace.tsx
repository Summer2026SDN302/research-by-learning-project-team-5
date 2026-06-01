import { useNavigate } from 'react-router-dom'
import { Video, Clock, CheckCircle, AlertCircle, Calendar, ChevronRight } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'

const appointments = [
  { time: '08:00', patient: 'Nguyễn Văn A', type: 'Khám định kỳ', doctor: 'Bs. Lê Minh', room: 'Phòng 3A', status: 'Đang khám', statusColor: 'bg-green-100 text-green-700' },
  { time: '09:30', patient: 'Trần Thị B', type: 'Tái khám MRI', doctor: 'Bs. Hùng', room: 'Phòng 5B', status: 'Chờ khám', statusColor: 'bg-yellow-100 text-yellow-700' },
  { time: '10:00', patient: 'Lê Minh C', type: 'Hội chẩn khẩn', doctor: 'Bs. Lan', room: 'Phòng họp 1', status: 'Chờ khám', statusColor: 'bg-yellow-100 text-yellow-700' },
  { time: '11:00', patient: 'Phạm Thị D', type: 'Khám lần đầu', doctor: 'Bs. Lê Minh', room: 'Phòng 2A', status: 'Đã đặt lịch', statusColor: 'bg-blue-100 text-blue-700' },
  { time: '14:00', patient: 'Hoàng Văn E', type: 'Kiểm tra sau điều trị', doctor: 'Bs. Hùng', room: 'Phòng 4C', status: 'Đã đặt lịch', statusColor: 'bg-blue-100 text-blue-700' },
  { time: '15:30', patient: 'Vũ Thị F', type: 'Video tư vấn', doctor: 'Bs. Lan', room: 'Trực tuyến', status: 'Đã đặt lịch', statusColor: 'bg-blue-100 text-blue-700' },
]

const tasks = [
  { title: 'Xem xét kết quả MRI của NS-2401', priority: 'Khẩn cấp', due: 'Hôm nay 12:00', done: false, priorityColor: 'bg-red-100 text-red-600' },
  { title: 'Cập nhật phác đồ điều trị NS-2399', priority: 'Cao', due: 'Hôm nay 17:00', done: false, priorityColor: 'bg-orange-100 text-orange-600' },
  { title: 'Ký duyệt 12 báo cáo AI đang chờ', priority: 'Bình thường', due: '02/06/2026', done: false, priorityColor: 'bg-gray-100 text-gray-600' },
  { title: 'Hoàn thành đào tạo mô hình tháng 5', priority: 'Bình thường', due: '03/06/2026', done: true, priorityColor: 'bg-gray-100 text-gray-400' },
]

export default function ClinicalWorkspace() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Không gian làm sàng</h1>
            <p className="text-sm text-gray-500 mt-0.5">Lịch khám, hội chẩn và công việc hôm nay</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Calendar size={16} />
              01/06/2026
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-xl text-sm font-medium hover:bg-green-800 transition-colors">
              <Video size={16} />
              Cuộc gọi video mới
            </button>
          </div>
        </header>

        <main className="flex-1 p-6">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Lịch hẹn hôm nay', value: '6', icon: Calendar, color: 'bg-blue-50 text-blue-600' },
              { label: 'Đang khám', value: '1', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
              { label: 'Chờ xử lý', value: '3', icon: Clock, color: 'bg-yellow-50 text-yellow-600' },
              { label: 'Cần xem xét khẩn', value: '2', icon: AlertCircle, color: 'bg-red-50 text-red-600' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${s.color}`}>
                  <s.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Appointment list */}
            <div className="col-span-2 bg-white rounded-2xl border border-gray-100">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Lịch khám hôm nay</h2>
                <button className="text-sm text-green-600 font-medium hover:underline">Xem tất cả</button>
              </div>
              <div className="divide-y divide-gray-50">
                {appointments.map((apt, i) => (
                  <div key={i} className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                    <div className="text-center w-12 flex-shrink-0">
                      <p className="text-sm font-bold text-gray-800">{apt.time}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-semibold text-gray-800 text-sm">{apt.patient}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-lg font-medium ${apt.statusColor}`}>
                          {apt.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{apt.type} • {apt.doctor} • {apt.room}</p>
                    </div>
                    <button
                      onClick={() => navigate('/patient/analysis')}
                      className="flex items-center gap-1 text-xs text-green-600 font-medium hover:underline"
                    >
                      Xem hồ sơ <ChevronRight size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Task list */}
            <div className="bg-white rounded-2xl border border-gray-100">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Công việc cần làm</h2>
              </div>
              <div className="p-4 space-y-3">
                {tasks.map((task, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${task.done ? 'border-gray-100 opacity-50' : 'border-gray-100'}`}>
                    <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 ${task.done ? 'bg-green-500 border-green-500' : 'border-gray-300'}`} />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${task.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                        {task.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-lg font-medium ${task.priorityColor}`}>
                          {task.priority}
                        </span>
                        <span className="text-xs text-gray-400">{task.due}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
