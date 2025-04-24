import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "产品",
      links: [
        { name: "照片修复", href: "#" },
        { name: "彩色化处理", href: "#" },
        { name: "高清增强", href: "#" },
        { name: "人像优化", href: "#" },
        { name: "批量处理", href: "#" }
      ]
    },
    {
      title: "公司",
      links: [
        { name: "关于我们", href: "#" },
        { name: "联系我们", href: "#" },
        { name: "加入我们", href: "#" },
        { name: "媒体报道", href: "#" },
        { name: "合作伙伴", href: "#" }
      ]
    },
    {
      title: "资源",
      links: [
        { name: "帮助中心", href: "#" },
        { name: "修复教程", href: "#" },
        { name: "API文档", href: "#" },
        { name: "常见问题", href: "#" },
        { name: "服务状态", href: "#" }
      ]
    },
    {
      title: "法律",
      links: [
        { name: "隐私政策", href: "#" },
        { name: "服务条款", href: "#" },
        { name: "版权声明", href: "#" },
        { name: "退款政策", href: "#" }
      ]
    }
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">老照片新生</h2>
              <p className="text-gray-400 mt-2">
                让每一张珍贵照片焕发新生命
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M13.698 5.5C9.539 5.5 6 8.515 6 12.242c0 2.018 1.18 3.85 3.052 5.068a.634.634 0 01.206.533l-.141 1.07a.634.634 0 00.908.656l1.296-.695a.614.614 0 01.458-.037 8.79 8.79 0 001.926.246c.11 0 .172-.124.118-.228-.424-.798-.64-1.71-.64-2.68 0-3.226 3.037-5.87 6.762-5.87.112 0 .174-.125.123-.227C17.805 7.242 15.586 5.5 13.698 5.5zm1.786 10.191a.96.96 0 100-1.922.96.96 0 000 1.922zm-4.214 0a.96.96 0 100-1.922.96.96 0 000 1.922z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">微博</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.096 18.857c-3.094 0-5.598-1.477-5.598-3.99 0-2.316 1.512-3.994 4.409-3.994 3.027 0 5.26 1.823 5.126 4.233-.006 2.22-2.147 3.75-3.937 3.75zm.568-5.757c-1.38 0-2.5 1.25-2.5 2.791 0 1.541 1.12 2.791 2.5 2.791 1.38 0 2.5-1.25 2.5-2.791 0-1.541-1.12-2.791-2.5-2.791zm7.636-1.84a2.645 2.645 0 00-.648-.988 2.628 2.628 0 00-.974-.64 2.614 2.614 0 00-2.608.384 2.625 2.625 0 00-.966 2.477l.063.315a5.654 5.654 0 01-5.593 6.324 5.652 5.652 0 01-5.654-5.654c0-3.12 2.534-5.654 5.654-5.654.335 0 .664.03.985.086l.3.061a2.625 2.625 0 002.405-1.053 2.626 2.626 0 00-.001-2.95 2.626 2.626 0 00-2.404-1.053l-.31.063a8.903 8.903 0 00-1.553.136C4.428 5.011 1.5 8.169 1.5 11.998c0 4.211 3.289 7.624 7.5 7.624 4.009 0 7.27-3.154 7.5-7.12a8.893 8.893 0 00-.123-1.556l-.063-.31a2.625 2.625 0 00.986-1.376z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">小红书</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.086-10.432c.241-.1.58-.268.58-.806 0-.393-.309-.685-.676-.685-.407 0-.646.371-.646.685 0 .402.29.806.742.806zM10.36 13.57c-.367 0-.645-.312-.645-.685 0-.393.278-.686.645-.686.387 0 .677.312.677.686 0 .382-.29.685-.677.685zm7.603-3.941c-.108-.393-.547-.574-.87-.335-.33.226-.321.73.01.95.332.229.809.095.96-.268.09-.2.016-.238-.1-.347zM16.157 13.5c-.745 0-1.354-.626-1.354-1.401 0-.774.609-1.4 1.354-1.4.754 0 1.364.626 1.364 1.4 0 .775-.61 1.401-1.364 1.401zm.344-3.775c-.535-.382-1.392-.382-1.918 0-.533.373-.533.998.01 1.371.534.372 1.393.382 1.918-.01.524-.392.533-1.008-.01-1.36z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 md:flex md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} 老照片新生. 版权所有 &middot; 刘小排 &middot; <a href="mailto:bourneliu66@gmail.com" className="hover:text-white">bourneliu66@gmail.com</a>
            </p>
            
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                <span className="inline-block mr-4">
                  <svg className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  400-123-4567
                </span>
                <span className="inline-block">
                  <svg className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@oldimagenew.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;