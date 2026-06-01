import { useNavigate } from 'react-router-dom'
import { Check, X, Shield, FileCheck, Zap, ChevronDown, ChevronUp, Bell } from 'lucide-react'
import { useState } from 'react'
import PatientSidebar from '../../components/PatientSidebar'

const freeFeatures = [
  { text: 'Lưu trữ hồ sơ 30 ngày', included: true },
  { text: 'Phân tích AI cơ bản', included: true },
  { text: 'Không có hỗ trợ 24/7', included: false },
]

const premiumFeatures = [
  { text: 'Lưu trữ vĩnh viễn' },
  { text: 'AI chuyên sâu & Lịch sử' },
  { text: 'Chat AI Trợ lý 24/7' },
  { text: 'Ưu tiên từ bác sĩ' },
  { text: 'Báo cáo PDF chuyên sâu' },
  { text: 'Cảnh báo sớm rủi ro' },
]

const faqs = [
  {
    q: 'Tôi có thể hủy gói Premium bất cứ lúc nào không?',
    a: 'Có, bạn có thể hủy gói Premium bất cứ lúc nào. Sau khi hủy, bạn vẫn được sử dụng dịch vụ đến hết chu kỳ đã thanh toán.',
  },
  {
    q: 'Phân tích AI chuyên sâu khác gì với phân tích cơ bản?',
    a: 'Phân tích AI chuyên sâu sử dụng mô hình v4.2 với độ chính xác 98%+, phân tích đa chiều và so sánh với 1.2 triệu ca lâm sàng tương tự.',
  },
]

export default function Premium() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  void navigate

  return (
    <div className="flex min-h-screen bg-gray-50">
      <PatientSidebar />

      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Tìm kiếm hồ sơ, phân tích..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500"><Bell size={20} /></button>
            <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
              <img src="/nero4.png" alt="avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <main className="p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              GÓI HỘI VIÊN
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Nâng cấp trải nghiệm chăm sóc sức khỏe với{' '}
              <span className="text-green-600">Premium</span>
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto">
              Tiếp cận các công cụ phân tích não bộ tiên tiến nhất, lưu trữ không giới hạn và sự hỗ trợ ưu tiên từ các chuyên gia hàng đầu.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Free */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="font-semibold text-gray-800 mb-1">Gói Cơ bản</h2>
              <p className="text-xs text-gray-500 mb-4">Dành cho theo dõi sức khỏe cơ bản</p>
              <p className="text-4xl font-black text-gray-900 mb-5">Miễn phí</p>
              <div className="space-y-3 mb-6">
                {freeFeatures.map(f => (
                  <div key={f.text} className="flex items-center gap-3">
                    {f.included ? (
                      <Check size={16} className="text-green-600 flex-shrink-0" />
                    ) : (
                      <X size={16} className="text-gray-300 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${f.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full border border-gray-200 text-gray-600 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                Đang sử dụng
              </button>
            </div>

            {/* Premium */}
            <div className="bg-green-700 rounded-2xl p-6 text-white relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                PHỔ BIẾN NHẤT
              </div>
              <h2 className="font-semibold mb-1">Gói Premium</h2>
              <p className="text-xs text-green-200 mb-4">Giải pháp toàn diện cho sức khỏe thần kinh</p>
              <div className="mb-5">
                <span className="text-4xl font-black">99.000đ</span>
                <span className="text-green-200 text-sm">/năm</span>
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-6">
                {premiumFeatures.map(f => (
                  <div key={f.text} className="flex items-center gap-2">
                    <Check size={14} className="text-green-300 flex-shrink-0" />
                    <span className="text-sm text-green-50">{f.text}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-white text-green-700 py-3 rounded-xl text-sm font-bold hover:bg-green-50 transition-colors">
                Nâng cấp ngay
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mb-8 text-gray-400 text-xs">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              BẢO MẬT DỮ LIỆU
            </div>
            <div className="flex items-center gap-2">
              <FileCheck size={16} />
              CHỨNG NHẬN Y KHOA
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} />
              KẾT QUẢ TỨC THÌ
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 text-center mb-4">Câu hỏi thường gặp</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm font-medium text-gray-800">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4">
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
