import { Zap, MoreVertical, FileText, ChevronDown } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'

const ragDocs = [
  { name: 'Neurology_Standa...', size: '2.4 MB', vectors: 420, color: 'bg-red-500' },
  { name: 'Clinical_Guideline...', size: '15.8 MB', vectors: 1200, color: 'bg-red-500' },
  { name: 'Patient_Feedback_...', size: '1.2 MB', vectors: 85, color: 'bg-green-600', isTable: true },
]

export default function SystemAdmin() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
          <div />
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-sm font-semibold">TRẠNG THÁI HỆ THỐNG: TỐI ƯU</span>
              <span className="text-gray-400 text-xs">Đồng bộ lần cuối: 2 phút trước</span>
            </div>
            <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 ml-2">
              <img src="/nero4.png" alt="avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Hệ thống Quản trị</h1>
            <p className="text-gray-500 text-sm mt-0.5">Quản lý Hạ tầng AI & RAG</p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'HÀNG ĐỢI: 128 MỤC', value: '41.0', unit: '%', icon: '📊', barColor: '#2d7d32', barWidth: '41%' },
              { label: 'HÀNG ĐỢI: 128 MỤC', value: '88.2', unit: '%', icon: '📋', barColor: '#2d7d32', barWidth: '88%' },
              { label: 'HÀNG ĐỢI: 128 MỤC', value: '124', unit: 'ms', icon: null, showArrow: true },
              { label: 'HÀNG ĐỢI: 128 MỤC', value: '1.042', unit: '', icon: null, showAvatars: true },
            ].map((metric, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">{metric.label}</span>
                  {metric.icon && <span className="text-lg">{metric.icon}</span>}
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
                  <span className="text-lg text-gray-500">{metric.unit}</span>
                </div>
                {metric.barWidth && (
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 rounded-full" style={{ width: metric.barWidth, background: metric.barColor }} />
                  </div>
                )}
                {metric.showArrow && (
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>↘</span>
                    <span>Hàng đợi: 128 mục</span>
                  </div>
                )}
                {metric.showAvatars && (
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map(n => (
                      <div key={n} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <img src="/nero4.png" alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <span className="text-xs text-gray-500">+39</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-semibold text-gray-900">Hồ sơ Neural của Tác nhân AI</h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Trích xuất văn bản lâm sàng từ biểu mẫu nhập viện viết tay của bệnh nhân.
                  </p>
                </div>
                <button className="px-4 py-2 border border-green-600 text-green-600 text-sm font-medium rounded-xl hover:bg-green-50 transition-colors">
                  Triển khai Cập nhật Toàn cầu
                </button>
              </div>

              <div className="space-y-4">
                {/* OCR Agent */}
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText size={20} className="text-green-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900 text-sm">OCR Transformer</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">HOẠT ĐỘNG</span>
                        </div>
                        <button className="text-xs text-green-600 border border-green-200 px-3 py-1 rounded-lg hover:bg-green-50">
                          Triển khai Cập nhật Toàn cầu
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        Trích xuất văn bản lâm sàng từ biểu mẫu nhập viện viết tay của bệnh nhân.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-xs text-gray-400">Nhiệt độ</span>
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full relative">
                            <div className="absolute left-[10%] w-3 h-3 bg-green-600 rounded-full top-1/2 -translate-y-1/2" />
                            <div className="h-1.5 bg-green-600 rounded-full" style={{ width: '10%' }} />
                          </div>
                          <span className="text-xs text-gray-400">0.1</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-xs text-gray-400">Nhiệt độ</span>
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full relative">
                            <div className="absolute right-[5%] w-3 h-3 bg-green-600 rounded-full top-1/2 -translate-y-1/2" />
                            <div className="h-1.5 bg-green-600 rounded-full" style={{ width: '95%' }} />
                          </div>
                          <span className="text-xs text-gray-400">0.95</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Neural Translator */}
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-blue-600">Từ</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900 text-sm">Thông dịch viên Thần kinh</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">HOẠT ĐỘNG</span>
                        </div>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        Chuyển đổi các phát hiện MRI kỹ thuật thành tóm tắt dễ hiểu cho bệnh nhân.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-xs text-gray-400">Nhiệt độ</span>
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full relative">
                            <div className="absolute left-[35%] w-3 h-3 bg-green-600 rounded-full top-1/2 -translate-y-1/2" />
                            <div className="h-1.5 bg-green-600 rounded-full" style={{ width: '35%' }} />
                          </div>
                          <span className="text-xs text-gray-400">0.7</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-xs text-gray-400">Thẻ bài</span>
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full relative">
                            <div className="absolute left-[50%] w-3 h-3 bg-green-600 rounded-full top-1/2 -translate-y-1/2" />
                            <div className="h-1.5 bg-green-600 rounded-full" style={{ width: '50%' }} />
                          </div>
                          <span className="text-xs text-gray-400">2k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full text-center text-sm text-green-600 font-medium hover:underline flex items-center justify-center gap-1">
                  Xem thêm 3 tác nhân khác <ChevronDown size={16} />
                </button>
              </div>

              <div className="mt-5 border border-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Đánh giá khai thác trường hợp khó</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Các trường hợp biên được bác sĩ chỉnh sửa đang chờ đào tạo lại mô hình.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 mb-2">Hàng đợi: 128 mục</div>
                    <button className="px-4 py-2 border border-green-600 text-green-600 text-sm font-medium rounded-xl hover:bg-green-50 transition-colors">
                      Triển khai Cập nhật Toàn cầu
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RAG Tool */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-2xl p-5 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="font-semibold text-base">Công cụ RAG</h2>
                    <p className="text-gray-400 text-xs mt-0.5">Kho Vector Cơ sở Kiến thức</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-3 rounded-xl flex flex-col items-center gap-0.5 leading-tight transition-colors">
                    <span>Thêm</span>
                    <span>+</span>
                    <span>Tài liệu</span>
                  </button>
                </div>
                <div className="bg-gray-800 rounded-xl p-3 mb-3">
                  <p className="text-2xl font-bold text-white">64.281 Vector</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Cấu hình các tham số suy luận cho các quy trình chẩn đoán cụ thể.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">DỮ LIỆU MỚI NẠP</p>
                    <p className="text-xs text-green-400 uppercase font-medium">ĐANG ĐỒNG BỘ...</p>
                  </div>
                  <div className="space-y-2">
                    {ragDocs.map((doc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-7 h-7 ${doc.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          {doc.isTable ? (
                            <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                              <path d="M3 3h18v18H3V3zm2 2v4h4V5H5zm0 6v4h4v-4H5zm0 6v4h4v-4H5zm6-12v4h4V5h-4zm0 6v4h4v-4h-4zm0 6v4h4v-4h-4zm6-12v4h2V5h-2zm0 6v4h2v-4h-2zm0 6v4h2v-4h-2z" />
                            </svg>
                          ) : (
                            <FileText size={14} className="text-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white font-medium truncate">{doc.name}</p>
                          <p className="text-xs text-gray-400">{doc.size} • {doc.vectors >= 1000 ? '1.2k' : doc.vectors} Vectors</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-200">
                          <MoreVertical size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-400">Độ sâu ngữ cảnh tìm kiếm</p>
                    <p className="text-xs text-gray-400">Top 5</p>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full">
                    <div className="h-1.5 bg-green-500 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm">Lời nhắc Hệ thống</h3>
                  <button className="w-7 h-7 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <Zap size={14} className="text-yellow-800" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 bg-gray-50 rounded-xl p-3 leading-relaxed">
                  Bạn là trợ lý chẩn đoán AI y tế chuyên nghiệp, hỗ trợ bác sĩ phân tích hình ảnh thần kinh...
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
