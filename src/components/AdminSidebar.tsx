import { useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Users, Brain, Stethoscope,
  DollarSign, HelpCircle, Plus, Activity, LogOut
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Bảng điều khiển', path: '/admin/dashboard' },
  { icon: Users, label: 'Hồ sơ bệnh nhân', path: '/admin/patients' },
  { icon: Brain, label: 'Phân tích AI', path: '/admin/system' },
  { icon: Stethoscope, label: 'Không gian làm sàng', path: '/admin/clinical' },
  { icon: DollarSign, label: 'Tài chính', path: '/admin/financials' },
  { icon: HelpCircle, label: 'Hỗ trợ', path: '/admin/support' },
]

export default function AdminSidebar() {
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
            <p className="text-green-600 text-xs">Độ chính xác Lâm sàng</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive =
            location.pathname === path ||
            (path === '/admin/dashboard' && location.pathname === '/admin/dashboard') ||
            (path === '/admin/system' && location.pathname === '/admin/system')
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

      <div className="p-3 space-y-1">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-green-700 text-white text-sm font-medium hover:bg-green-800 transition-colors"
        >
          <Plus size={18} />
          + Phân tích mới
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 text-sm hover:bg-gray-50 transition-colors">
          <Activity size={18} />
          Sức khỏe hệ thống
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 text-sm hover:bg-red-50 transition-colors"
        >
          <LogOut size={18} />
          Đăng xuất
        </button>
      </div>
    </aside>
  )
}
