import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, User } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.includes('admin') || email === '') {
      navigate('/admin/dashboard')
    } else {
      navigate('/patient/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] max-w-full flex rounded-2xl overflow-hidden shadow-2xl bg-white">
        {/* Left panel */}
        <div
          className="hidden md:flex w-1/2 flex-col justify-end p-10 relative"
          style={{
            background: 'linear-gradient(135deg, #0a2e0a 0%, #1a4a1a 40%, #0d3d2b 100%)',
            minHeight: '580px',
          }}
        >
          <img
            src="/nero.png"
            alt="Brain scan"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="relative z-10">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 mb-4 inline-block">
              <div className="flex gap-6">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">ĐỘ CHÍNH XÁC</p>
                  <p className="text-white text-2xl font-bold">99.8%</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">THỜI GIAN XỬ LÝ</p>
                  <p className="text-white text-2xl font-bold">&lt; 2 Giây</p>
                </div>
              </div>
            </div>
            <h2 className="text-white text-2xl font-bold leading-tight">
              Chẩn đoán thông minh hơn với{' '}
              <span className="text-green-400">NeuroScan AI</span>
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Giải pháp AI hàng đầu cho phân tích hình ảnh hệ thần kinh và hỗ trợ bác sĩ lâm sàng với độ chính xác tuyệt đối.
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full" />
            </div>
            <span className="font-bold text-gray-800 text-lg">NeuroScan AI</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">Chào mừng trở lại</h1>
          <p className="text-gray-500 text-sm mb-8">Vui lòng nhập thông tin để truy cập hệ thống của bạn</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại hoặc Email
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Nhập email hoặc SĐT"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Mật khẩu</label>
                <button type="button" className="text-green-600 text-sm hover:underline">
                  Quên mật khẩu?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Đăng nhập →
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs uppercase tracking-wider">HOẶC ĐĂNG NHẬP VỚI</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.687 0 8.5 3.813 8.5 8.5 0 3.863-2.576 7.13-6.1 8.165V15.5h2.1l.4-2.5H14.4v-1.6c0-.7.35-1.4 1.45-1.4h1.15V7.9s-1.05-.15-2.05-.15c-2.1 0-3.45 1.275-3.45 3.55V13H9.35v2.5h2.1v4.665C7.576 19.13 5 15.863 5 12c0-4.687 3.813-8.5 8.5-8.5z" />
              </svg>
              Táo (Apple)
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Chưa có tài khoản?{' '}
            <button className="text-green-600 font-medium hover:underline">Đăng ký ngay →</button>
          </p>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-center text-xs text-gray-400 mb-3">Đăng nhập nhanh (demo):</p>
            <div className="flex gap-2">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="flex-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 rounded-lg transition-colors"
              >
                Bảng điều khiển
              </button>
              <button
                onClick={() => navigate('/patient/dashboard')}
                className="flex-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 rounded-lg transition-colors"
              >
                Cổng bệnh nhân
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
