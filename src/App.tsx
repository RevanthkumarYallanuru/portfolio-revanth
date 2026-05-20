/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import Layout from '@/src/components/Layout';
import ScrollToTop from '@/src/components/ScrollToTop';
import ProtectedRoute from '@/src/components/ProtectedRoute';
import ErrorBoundary from '@/src/components/ErrorBoundary';
import { AuthProvider } from '@/src/context/AuthContext';
import { PortfolioProvider } from '@/src/context/PortfolioContext';

// Pages
import Home from '@/src/pages/Home';
import Projects from '@/src/pages/Projects';
import Services from '@/src/pages/Services';
import Contact from '@/src/pages/Contact';
import AdminLogin from '@/src/pages/Admin/Login';
import AdminDashboard from '@/src/pages/Admin/Dashboard';

export default function App() {
  return (
    <AuthProvider>
      <PortfolioProvider>
        <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <AnimatePresence mode="wait">
            <ErrorBoundary>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/projects" element={<Layout><Projects /></Layout>} />
              <Route path="/services" element={<Layout><Services /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Layout><AdminLogin /></Layout>} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              
              {/* Fallback */}
              <Route path="*" element={<Layout><Home /></Layout>} />
            </Routes>
            </ErrorBoundary>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
      </PortfolioProvider>
    </AuthProvider>
  );
}

