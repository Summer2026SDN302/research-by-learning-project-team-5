import { useNavigate } from 'react-router-dom'
import { Bell, Heart, Moon, Zap, MessageCircle } from 'lucide-react'
import PatientSidebar from '../../components/PatientSidebar'

const schedule = [
  {
    time: '08:00 AM',
    title: 'Uống thuốc hỗ trợ trí nhớ',
    desc: 'Liều lượng: 1 viên Donepezil 5mg sau ăn sáng.',
    tags: ['Đã uống', 'Nhắc lại sau 15p'],
    tagColors: ['bg-green-100 text-green-700', 'bg-gray-100 text-gray-600'],
    dot: 'bg-green-500',
  },
  {
    time: '10:30 AM',
    title: 'Khám lâm sàng định kỳ',
    desc: 'Bác sĩ: Dr. Lê Minh - Chuyên khoa Thần kinh.',
    tags: ['Cuộc gọi Video sẽ bắt đầu sau 2h'],
    tagColors: ['bg-blue-50 text-blue-600 border border-blue-200'],
    dot: 'bg-gray-400',
  },
  {
    time: '04:00 PM',
    title: 'Tập luyện nhận thức',
    desc: '30 phút trò chơi giải đố & ghi nhớ trên ứng dụng.',
    tags: [],
    tagColors: [],
    dot: 'bg-gray-300',
  },
]

export default function PatientDashboard() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <PatientSidebar showUpgradeBanner />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">Chào buổi sáng, Nguyễn Văn A</h2>
            <p className="text-xs text-green-600 mt-0.5">
              Hôm nay là Thứ Tư, ngày 24 tháng 5 năm 2024. Sức khỏe của bạn đang rất tốt.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-xl">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
                <img src="/nero4.png" alt="avatar" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Nguyễn Văn A</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-5 overflow-auto">
          <div className="grid grid-cols-3 gap-4">
            {/* Left: Metrics + MRI */}
            <div className="col-span-2 space-y-4">
              {/* Health Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {/* Heart Rate */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                      <Heart size={16} className="text-red-500" fill="currentColor" />
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">Ổn định</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Nhịp tim</p>
                  <p className="text-2xl font-bold text-gray-900">72 <span className="text-sm font-normal text-gray-500">BPM</span></p>
                  <div className="flex gap-0.5 mt-2">
                    {[3, 5, 4, 6, 4, 5, 3].map((h, i) => (
                      <div key={i} className="flex-1 bg-red-100 rounded-sm" style={{ height: `${h * 5}px` }} />
                    ))}
                  </div>
                </div>

                {/* Sleep */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <Moon size={16} className="text-indigo-500" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg">+15%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Giấc ngủ</p>
                  <p className="text-2xl font-bold text-gray-900">7h 45m</p>
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-indigo-400 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>

                {/* Activity */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center">
                      <Zap size={16} className="text-yellow-500" />
                    </div>
                    <span className="text-sm font-bold text-gray-700">8,421</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Hoạt động</p>
                  <p className="text-2xl font-bold text-gray-900">84% <span className="text-sm font-normal text-gray-500">mục tiêu</span></p>
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-green-500 rounded-full" style={{ width: '84%' }} />
                  </div>
                </div>
              </div>

              {/* MRI Result Card */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative bg-gray-900 min-h-[220px]">
                    <img src="/nero3.png" alt="MRI" className="w-full h-full object-cover absolute inset-0" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        PHÁT HIỆN BỞI AI
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg font-mono">ID: NS-2024-0524</span>
                      <span className="text-xs text-gray-400">Cập nhật 2 giờ trước</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Kết quả phân tích MRI Não</h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                      Hệ thống AI đã hoàn tất việc quét và so sánh dữ liệu với 1.2 triệu ca lâm sàng tương tự. Kết quả không cho thấy dấu hiệu bất thường về cấu trúc vỏ não.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-400">MẬT ĐỘ NƠ-RON</p>
                        <p className="font-semibold text-gray-800 mt-0.5">Bình thường</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-400">TỈ LỆ ĐỐI XỨNG</p>
                        <p className="font-semibold text-gray-800 mt-0.5">98.4%</p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate('/patient/analysis')}
                      className="w-full bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      Xem báo cáo chi tiết →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Schedule + AI Chat */}
            <div className="space-y-4">
              {/* Schedule */}
              <div className="bg-white rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Lịch trình</h3>
                  <button className="text-green-600 text-xs font-medium hover:underline">Xem tất cả</button>
                </div>
                <div className="space-y-4">
                  {schedule.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 ${item.dot}`} />
                        {i < schedule.length - 1 && <div className="w-px flex-1 bg-gray-100 mt-1" />}
                      </div>
                      <div className="pb-3 flex-1">
                        <p className="text-xs text-gray-400 font-medium">{item.time}</p>
                        <p className="text-sm font-semibold text-gray-800 mt-0.5">{item.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                        {item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {item.tags.map((tag, j) => (
                              <span key={j} className={`text-xs px-2 py-0.5 rounded-lg font-medium ${item.tagColors[j]}`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Chat */}
              <div className="bg-gray-900 rounded-2xl p-4 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <p className="text-xs font-bold text-green-400 uppercase tracking-wider">NEUROAI TRỰC TUYẾN</p>
                </div>
                <h3 className="font-semibold text-base mb-3">Bạn cần hỗ trợ gì ngay bây giờ không?</h3>
                <div className="bg-gray-800 rounded-xl p-3 mb-3">
                  <p className="text-xs text-gray-300 leading-relaxed italic">
                    "Hôm nay tôi thấy hơi đau đầu nhẹ ở vùng thái dương, đây có phải là tác dụng phụ của thuốc không?"
                  </p>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle size={16} />
                  Hỏi AI ngay
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
