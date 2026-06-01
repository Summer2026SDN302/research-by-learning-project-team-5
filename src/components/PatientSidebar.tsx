import { useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, FileText, Bot, CreditCard,
  Activity, LogOut
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Tổng quan', path: '/patient/dashboard' },
  { icon: FileText, label: 'Hồ sơ y tế', path: '/patient/records' },
  { icon: Bot, label: 'Trợ lý AI', path: '/patient/ai' },
  { icon: CreditCard, label: 'Thanh toán', path: '/patient/premium' },
]

interface Props {
  showUpgradeBanner?: boolean
}

export default function PatientSidebar({ showUpgradeBanner = false }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <aside className="w-52 bg-white border-r border-gray-100 flex flex-col min-h-screen flex-shrink-0">
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">NeuroScan AI</p>
            <p className="text-green-600 text-xs">ĐỘ CHÍNH XÁC LÂM SÀNG</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img src="/nero4.png" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">Cổng bệnh nhân</p>
            <p className="text-xs text-gray-500">Mã lâm sàng: NS-8821</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                isActive ? 'bg-green-700 text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          )
        })}
      </nav>

      <div className="p-3 space-y-2">
        {showUpgradeBanner && (
          <div className="bg-green-700 rounded-xl p-3 text-white">
            <p className="font-bold text-sm mb-0.5">Nâng cấp Premium</p>
            <p className="text-xs text-green-200">Chỉ 99k/năm. Chat AI 24/7 & Phân tích chuyên sâu.</p>
            <button
              onClick={() => navigate('/patient/premium')}
              className="mt-2 w-full bg-white text-green-700 text-xs font-semibold py-1.5 rounded-lg hover:bg-green-50 transition-colors"
            >
              Nâng cấp ngay
            </button>
          </div>
        )}
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 text-sm hover:bg-gray-50 transition-colors">
          <Activity size={16} />
          Sức khỏe hệ thống
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-red-500 text-sm hover:bg-red-50 transition-colors"
        >
          <LogOut size={16} />
          Đăng xuất
        </button>
      </div>
    </aside>
  )
}
