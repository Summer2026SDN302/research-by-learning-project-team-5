import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import SystemAdmin from './pages/admin/SystemAdmin'
import PatientRecords from './pages/admin/PatientRecords'
import ClinicalWorkspace from './pages/admin/ClinicalWorkspace'
import Financials from './pages/admin/Financials'
import Support from './pages/admin/Support'
import PatientDashboard from './pages/patient/PatientDashboard'
import AIAnalysis from './pages/patient/AIAnalysis'
import Premium from './pages/patient/Premium'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/system" element={<SystemAdmin />} />
        <Route path="/admin/patients" element={<PatientRecords />} />
        <Route path="/admin/clinical" element={<ClinicalWorkspace />} />
        <Route path="/admin/financials" element={<Financials />} />
        <Route path="/admin/support" element={<Support />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/analysis" element={<AIAnalysis />} />
        <Route path="/patient/premium" element={<Premium />} />
      </Routes>
    </BrowserRouter>
  )
}
