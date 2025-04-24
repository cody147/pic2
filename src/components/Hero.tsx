import React, { useState } from 'react';

const Hero = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      processFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.match('image.*')) {
      alert('请上传图片文件！');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        setUploadedImage(e.target.result);
        setRestoredImage(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const restorePhoto = () => {
    if (!uploadedImage) return;
    
    setIsProcessing(true);
    
    // 模拟照片修复过程
    setTimeout(() => {
      // 在实际应用中，这里会调用修复API
      setRestoredImage(uploadedImage);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            让老照片焕发新生命
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            专业的照片修复技术，一键还原珍贵回忆，让模糊破损的老照片重现清晰细节
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-4 p-6">
              <div 
                className={`border-2 rounded-lg flex flex-col items-center justify-center h-64 md:h-80 transition-all cursor-pointer ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300'} ${uploadedImage ? 'p-0' : 'p-8'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput')?.click()}
              >
                {uploadedImage ? (
                  <img 
                    src={uploadedImage} 
                    alt="待修复照片" 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-blue-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto h-12 w-12">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-2">拖放照片到这里，或点击上传</p>
                    <p className="text-gray-400 text-sm">支持 JPG、PNG、WEBP 格式</p>
                  </div>
                )}
                <input 
                  type="file" 
                  id="fileInput" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileInput}
                />
              </div>
              
              <div className="border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center h-64 md:h-80 relative">
                {restoredImage ? (
                  <img 
                    src={restoredImage} 
                    alt="修复后照片" 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="text-gray-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto h-12 w-12">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">修复后的照片将在这里显示</p>
                  </div>
                )}
                
                {isProcessing && (
                  <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <p className="text-gray-700">正在修复中...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6 pt-0 text-center">
              <button 
                className={`px-8 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors ${(!uploadedImage || isProcessing) ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!uploadedImage || isProcessing}
                onClick={restorePhoto}
              >
                一键修复
              </button>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm">
            上传照片即表示您同意我们的<a href="#" className="text-blue-600 hover:underline">服务条款</a>和<a href="#" className="text-blue-600 hover:underline">隐私政策</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;