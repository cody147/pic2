import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">老照片新生</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">功能特点</a>
            <a href="#how-it-works" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">使用流程</a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">用户评价</a>
            <a href="#faq" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">常见问题</a>
            <a href="#pricing" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">价格方案</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">立即修复</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-2 space-y-4">
            <a href="#features" className="block font-medium text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>功能特点</a>
            <a href="#how-it-works" className="block font-medium text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>使用流程</a>
            <a href="#testimonials" className="block font-medium text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>用户评价</a>
            <a href="#faq" className="block font-medium text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>常见问题</a>
            <a href="#pricing" className="block font-medium text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>价格方案</a>
            <a href="#" className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center" onClick={() => setIsMenuOpen(false)}>立即修复</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;