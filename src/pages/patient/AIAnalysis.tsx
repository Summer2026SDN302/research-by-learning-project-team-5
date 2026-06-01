import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Hand, ZoomIn, Maximize2, SunMedium, Bell, Settings,
  ChevronLeft, ChevronRight, AlertTriangle
} from 'lucide-react'

const navLinks = ['Bảng điều khiển', 'Bệnh nhân', 'Phân tích', 'Báo cáo']

export default function AIAnalysis() {
  const navigate = useNavigate()
  const [slice, setSlice] = useState(42)
  const totalSlices = 128

  return (
    <div className="flex min-h-screen bg-gray-50 flex-col">
      {/* Top navbar */}
      <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-700 rounded-lg flex items-center justify-center">
              <div className="w-3.5 h-3.5 border-2 border-white rounded-full" />
            </div>
            <span className="font-bold text-gray-900 text-sm">NeuroScan AI</span>
          </div>
          <p className="text-xs text-green-600 font-medium uppercase tracking-wider">ĐỘ CHÍNH XÁC LÂM SÀNG</p>
        </div>
        <nav className="flex items-center gap-6">
          {navLinks.map(link => (
            <button
              key={link}
              className={`text-sm font-medium transition-colors ${
                link === 'Phân tích' ? 'text-green-700 border-b-2 border-green-700 pb-0.5' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {link}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-gray-500">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="p-2 text-gray-500"><Settings size={18} /></button>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <img src="/nero4.png" alt="avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="hover:text-gray-800 cursor-pointer">BỆNH NHÂN</span>
          <ChevronRight size={14} />
          <span className="hover:text-gray-800 cursor-pointer">Mã BN: NS-9942</span>
          <ChevronRight size={14} />
          <span className="text-gray-800 font-medium">MRI_BRAIN_AXIAL_04.DICOM</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-4 h-4 text-gray-400">⏱</span>
          Chỉnh sửa lần cuối: 2 phút trước
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-48 bg-white border-r border-gray-100 flex flex-col">
          <nav className="flex-1 p-3 space-y-1">
            {[
              { label: 'Bảng điều khiển', path: '/admin/dashboard', active: false },
              { label: 'Hồ sơ bệnh nhân', path: '/patient/dashboard', active: false },
              { label: 'Phân tích AI', path: '/patient/analysis', active: true },
              { label: 'Không gian làm sàng', path: '/', active: false },
            ].map(item => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                  item.active ? 'bg-green-700 text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.active && (
                  <div className="w-4 h-4 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
                {item.label}
              </button>
            ))}
          </nav>
          <div className="p-3 space-y-1">
            <button
              onClick={() => navigate('/patient/analysis')}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-green-700 text-white text-sm font-medium hover:bg-green-800"
            >
              + Phân tích mới
            </button>
            <div className="flex items-center gap-2 px-3 py-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Trạng thái hệ thống: Tối ưu
            </div>
          </div>
        </aside>

        {/* DICOM Viewer */}
        <div className="flex-1 bg-gray-900 flex flex-col relative">
          {/* DICOM Info overlay */}
          <div className="absolute top-3 left-3 z-10 text-green-400 font-mono text-xs space-y-0.5">
            <p>THIẾT BỊ: SIEMENS MAGNETOM SOMATOM</p>
            <p>TR: 2500ms | TE: 85ms</p>
            <p>ĐỘ PHÂN GIẢI: 512×512px</p>
            <p>CỬA SỔ: W:80 L:40</p>
          </div>

          {/* Toolbar */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
            {[Hand, ZoomIn, Maximize2, SunMedium].map((Icon, i) => (
              <button
                key={i}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  i === 0 ? 'bg-white text-gray-800' : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>

          {/* Main brain scan image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-[380px] h-[380px]">
              <img src="/nero3.png" alt="MRI Brain" className="w-full h-full object-contain" />
              {/* AI Detection box overlay */}
              <div
                className="absolute border-2 border-green-400"
                style={{ top: '28%', left: '25%', width: '50%', height: '44%' }}
              >
                <div className="absolute -top-5 -left-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded font-mono">
                  AI_DETECT: 0.982
                </div>
              </div>
            </div>
          </div>

          {/* Slice Navigator */}
          <div className="bg-gray-800/90 px-6 py-3 flex items-center gap-4">
            <button
              onClick={() => setSlice(s => Math.max(1, s - 1))}
              className="p-1.5 bg-gray-700 rounded-lg text-white hover:bg-gray-600"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex-1 h-1.5 bg-gray-600 rounded-full relative cursor-pointer"
              onClick={e => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                setSlice(Math.round((x / rect.width) * totalSlices))
              }}
            >
              <div
                className="h-1.5 bg-green-500 rounded-full"
                style={{ width: `${(slice / totalSlices) * 100}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow"
                style={{ left: `${(slice / totalSlices) * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
              />
            </div>
            <button
              onClick={() => setSlice(s => Math.min(totalSlices, s + 1))}
              className="p-1.5 bg-gray-700 rounded-lg text-white hover:bg-gray-600"
            >
              <ChevronRight size={16} />
            </button>
            <span className="text-gray-300 text-sm font-mono min-w-[80px] text-center">
              LỚP CẮT {slice} / {totalSlices}
            </span>
          </div>
        </div>

        {/* Right Panel - AI Results */}
        <div className="w-72 bg-white border-l border-gray-100 flex flex-col overflow-y-auto">
          {/* Patient Info */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img src="/nero4.png" alt="patient" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">Nguyễn Văn A</p>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-lg">CẤP CỨU</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Mã BN: NS-9942 • 64 tuổi</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">TIỀN SỬ</p>
                <p className="text-xs text-gray-700">Huyết áp cao, Đái tháo đường</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">CHỈ ĐỊNH</p>
                <p className="text-xs text-gray-700">Đau đầu dữ dội, nôn mửa</p>
              </div>
            </div>
          </div>

          {/* AI Analysis */}
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Phân tích AI</h3>
              <span className="text-xs bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full font-medium">
                MÔ HÌNH XÁC NHẬN v4.2
              </span>
            </div>

            {/* Confidence */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-gray-600">Độ tự tin</span>
                <span className="text-2xl font-bold text-gray-900">98%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: '98%' }} />
              </div>
            </div>

            {/* Prediction */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-3">
              <p className="text-xs text-gray-500 uppercase font-medium tracking-wider mb-1">DỰ ĐOÁN</p>
              <p className="text-xl font-bold text-gray-900">U màng não</p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Khối u nằm ở vùng thùy trán trái, kích thước xấp xỉ 12×15mm. Đề xuất chụp CT phân quang để xác định tưới máu.
              </p>
            </div>

            {/* Technical details */}
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">CHI TIẾT KỸ THUẬT</h4>
              <div className="space-y-2">
                {[
                  { label: 'Tọa độ khối (XYZ)', value: '124, 45, 88', color: 'text-green-600' },
                  { label: 'Thể tích ước tính', value: '2.4 cm³', color: 'text-green-600' },
                  { label: 'Phân loại WHO', value: 'Độ I (Dự kiến)', color: 'text-green-600' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.label}</span>
                    <span className={`text-xs font-semibold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-2">
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-xl text-sm font-medium transition-colors">
                Tạo báo cáo PDF
              </button>
              <button className="w-full border border-gray-200 text-gray-700 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                Yêu cầu xem xét của bác sĩ
              </button>
            </div>

            {/* Warning */}
            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
              <AlertTriangle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700 leading-relaxed">
                Kết quả AI chỉ mang tính hỗ trợ. Cần được xác nhận bởi bác sĩ chuyên khoa trước khi chẩn đoán cuối cùng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
