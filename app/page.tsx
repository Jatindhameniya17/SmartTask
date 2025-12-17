'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.8);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }

        @keyframes spinRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-smooth {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp-footer {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spinRotate 4s linear infinite;
        }

        .animate-bounce-smooth {
          animation: bounce-smooth 2s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fade-in-up-footer {
          animation: fadeInUp-footer 0.6s ease-out forwards;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #06b6d4, #0ea5e9);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          color: white;
        }
      `}</style>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="logo-container animate-fade-in-down">
              <div className="logo-icon animate-spin-slow">✓</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">SmartTask</h2>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-4">
              <button className="px-6 py-2 text-slate-700 font-medium hover:text-blue-600 transition-colors animate-fade-in-down stagger-2">
                Features
              </button>
              <button className="px-6 py-2 text-slate-700 font-medium hover:text-blue-600 transition-colors animate-fade-in-down stagger-3">
                Pricing
              </button>
              <button className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all font-medium animate-fade-in-down stagger-4">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors animate-fade-in-down stagger-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-200 animate-fade-in-up">
              <button className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded">
                Features
              </button>
              <button className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded">
                Pricing
              </button>
              <button className="w-full mt-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all font-medium">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            Manage Your Work <br className="hidden sm:block" /> Smarter & Faster
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
            SmartTask helps you organize tasks, track progress, and boost productivity with a clean and simple interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-3">
            <button className="px-8 py-3 sm:py-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 active:scale-95 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto animate-pulse-glow">
              Get Started
            </button>
            <button className="px-8 py-3 sm:py-4 bg-transparent text-white border-2 border-slate-400 font-semibold rounded-lg hover:bg-slate-700 hover:border-white active:scale-95 transition-all w-full sm:w-auto">
              Learn More
            </button>
          </div>

          <p className="text-slate-400 text-sm">No credit card required. Free to use.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-4 animate-fade-in-up">
            Why SmartTask?
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-lg animate-fade-in-up stagger-2">
            Everything you need to stay organized and productive
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Optimized performance for smooth task handling with instant updates.',
              },
              {
                icon: '📱',
                title: 'Fully Responsive',
                description: 'Looks great on mobile, tablet, and desktop with a seamless experience.',
              },
              {
                icon: '🎯',
                title: 'Beautifully Simple',
                description: 'Minimal UI focused on productivity without unnecessary complexity.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-cyan-300 transition-all duration-300 animate-fade-in-up stagger-${idx + 1}`}
              >
                <div className="text-4xl mb-4 animate-float">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { stat: '10K+', label: 'Active Users' },
              { stat: '99.9%', label: 'Uptime' },
              { stat: '4.9★', label: 'Rating' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900">{item.stat}</div>
                <p className="text-slate-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Organizing Your Tasks Today
          </h2>
          <p className="text-lg sm:text-xl text-cyan-100 mb-8">
            Join thousands of users who are already smarter with SmartTask.
          </p>
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 active:scale-95 transition-all shadow-lg hover:shadow-xl text-lg">
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in-up-footer stagger-1">
              <h3 className="text-white font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Pricing</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up-footer stagger-2">
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up-footer stagger-3">
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Terms</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up-footer stagger-4">
              <h3 className="text-white font-bold mb-4">Follow</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center animate-fade-in-up-footer stagger-5">
            <div className="logo-container justify-center mb-4">
              <div className="logo-icon animate-spin-slow">✓</div>
              <p className="text-white font-semibold">SmartTask</p>
            </div>
            <p>© 2025 SmartTask. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}