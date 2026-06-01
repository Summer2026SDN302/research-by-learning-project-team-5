import { useState } from 'react'
import { MessageCircle, Phone, Mail, ChevronDown, ChevronUp, Search, Send } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'

const tickets = [
  { id: 'TK-0091', subject: 'Lỗi hiển thị kết quả MRI trên trình duyệt Safari', priority: 'Cao', status: 'Đang xử lý', date: '01/06/2026', statusColor: 'bg-yellow-100 text-yellow-700' },
  { id: 'TK-0090', subject: 'Không thể xuất báo cáo PDF cho BN NS-2399', priority: 'Trung bình', status: 'Chờ phản hồi', date: '31/05/2026', statusColor: 'bg-blue-100 text-blue-700' },
  { id: 'TK-0089', subject: 'Yêu cầu thêm tài khoản bác sĩ mới cho khoa Thần kinh', priority: 'Bình thường', status: 'Đã giải quyết', date: '30/05/2026', statusColor: 'bg-green-100 text-green-700' },
  { id: 'TK-0088', subject: 'AI phân tích sai độ tương phản trên scan CT', priority: 'Khẩn cấp', status: 'Đã giải quyết', date: '29/05/2026', statusColor: 'bg-green-100 text-green-700' },
]

const faqs = [
  { q: 'Làm thế nào để thêm bác sĩ mới vào hệ thống?', a: 'Vào Bảng điều khiển → nhấn nút "Thêm bác sĩ" góc trên phải. Điền đầy đủ thông tin và phân quyền phù hợp.' },
  { q: 'Dữ liệu hình ảnh được lưu trữ ở đâu và có an toàn không?', a: 'Toàn bộ dữ liệu được mã hóa AES-256 và lưu trên máy chủ đạt chuẩn HIPAA tại Việt Nam.' },
  { q: 'Làm sao để xuất toàn bộ hồ sơ bệnh nhân?', a: 'Vào Hồ sơ bệnh nhân → chọn nhiều bệnh nhân → nhấn "Xuất sao kê". Hỗ trợ định dạng PDF và Excel.' },
  { q: 'Tôi có thể tích hợp NeuroScan AI với phần mềm HIS hiện tại không?', a: 'Có, chúng tôi cung cấp API REST đầy đủ và hỗ trợ tích hợp HL7 FHIR. Liên hệ đội kỹ thuật để được hỗ trợ.' },
]

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [message, setMessage] = useState('')

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-6 py-4">
          <h1 className="text-xl font-bold text-gray-900">Hỗ trợ</h1>
          <p className="text-sm text-gray-500 mt-0.5">Trung tâm hỗ trợ kỹ thuật và vận hành</p>
        </header>

        <main className="flex-1 p-6">
          {/* Contact options */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { icon: MessageCircle, title: 'Chat trực tiếp', desc: 'Phản hồi trong vòng 2 phút', action: 'Bắt đầu chat', color: 'bg-green-700' },
              { icon: Phone, title: 'Hotline kỹ thuật', desc: '1800 1234 — Miễn phí 24/7', action: 'Gọi ngay', color: 'bg-blue-600' },
              { icon: Mail, title: 'Gửi email', desc: 'support@neuroscan.ai', action: 'Soạn email', color: 'bg-purple-600' },
            ].map(c => (
              <div key={c.title} className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col items-start gap-3">
                <div className={`w-11 h-11 ${c.color} rounded-xl flex items-center justify-center`}>
                  <c.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{c.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{c.desc}</p>
                </div>
                <button className={`mt-auto px-4 py-2 ${c.color} text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity`}>
                  {c.action}
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Tickets */}
            <div className="col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900">Yêu cầu hỗ trợ của tôi</h2>
                  <button className="text-sm text-green-600 font-medium hover:underline">+ Tạo yêu cầu mới</button>
                </div>
                <div className="p-3">
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                    <input type="text" placeholder="Tìm kiếm yêu cầu..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div className="space-y-2">
                    {tickets.map(tk => (
                      <div key={tk.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
                        <span className="font-mono text-xs text-gray-400 w-16 flex-shrink-0">{tk.id}</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">{tk.subject}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{tk.date} • Ưu tiên: {tk.priority}</p>
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-lg font-medium flex-shrink-0 ${tk.statusColor}`}>
                          {tk.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl border border-gray-100">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-900">Câu hỏi thường gặp</h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <button
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="text-sm font-medium text-gray-800 pr-4">{faq.q}</span>
                        {openFaq === i ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
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
            </div>

            {/* Quick message */}
            <div className="bg-white rounded-2xl border border-gray-100 flex flex-col">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Gửi tin nhắn nhanh</h2>
                <p className="text-xs text-gray-500 mt-0.5">Đội hỗ trợ phản hồi trong 2 giờ</p>
              </div>
              <div className="p-4 space-y-3 flex-1 flex flex-col">
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700">
                  <option>Chọn chủ đề hỗ trợ...</option>
                  <option>Lỗi kỹ thuật</option>
                  <option>Câu hỏi về tính năng</option>
                  <option>Thanh toán & Hóa đơn</option>
                  <option>Yêu cầu tính năng mới</option>
                </select>
                <textarea
                  rows={6}
                  placeholder="Mô tả vấn đề của bạn..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="flex-1 w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-gray-700 placeholder-gray-400"
                />
                <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <Send size={15} />
                  Gửi yêu cầu hỗ trợ
                </button>
                <p className="text-center text-xs text-gray-400">
                  Hoặc gọi hotline <span className="font-semibold text-gray-600">1800 1234</span> để được hỗ trợ ngay
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
