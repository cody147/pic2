import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: '上传照片',
      description: '将您需要修复的老照片上传至我们的平台。支持多种图片格式，包括JPG、PNG、WEBP等。'
    },
    {
      number: '02',
      title: '智能修复',
      description: '我们的AI系统会自动识别照片中的问题，并进行精细修复，包括去除划痕、修复褪色、增强细节等。'
    },
    {
      number: '03',
      title: '专家优化',
      description: '对于复杂的照片，我们的专业技术团队会进行二次优化，确保最佳修复效果。'
    },
    {
      number: '04',
      title: '下载成果',
      description: '修复完成后，您可以预览并下载高清修复后的照片，重现珍贵的历史瞬间。'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">简单四步，重现珍贵回忆</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            轻松的操作流程，让您的老照片焕发新生命
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 h-full shadow-sm relative z-10">
                <div className="text-5xl font-bold text-blue-600 opacity-30 mb-6">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#3B82F6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            立即体验
          </a>
        </div>
        
        <div className="mt-20">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  我们的技术优势
                </h3>
                <p className="text-gray-600 mb-6">
                  老照片修复不仅仅是简单的图像处理，而是一门需要专业技术和丰富经验的艺术。我们结合先进的AI算法和专业的图像处理技术，能够：
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>智能识别并修复各类照片损伤</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>提升照片清晰度和细节表现</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>还原照片原有色彩和质感</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>保留照片中的历史情感与价值</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="照片修复示例" 
                  className="rounded-lg max-h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;