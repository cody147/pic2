import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "我找到了一张祖父年轻时的黑白照片，但有很多划痕和褪色。使用这个服务后，照片焕然一新，看到修复后的效果时我几乎落泪了。非常感谢！",
      author: "张女士",
      location: "北京",
      rating: 5
    },
    {
      content: "我是一名历史爱好者，有很多珍贵的老照片需要修复。这个平台的技术非常专业，修复效果超出了我的预期，保留了照片原有的历史感，同时提升了清晰度。",
      author: "李先生",
      location: "上海",
      rating: 5
    },
    {
      content: "为家庭相册中的老照片寻找修复方案时发现了这个网站。服务非常便捷，价格合理，最重要的是修复效果非常自然，没有那种过度处理的痕迹。",
      author: "王先生",
      location: "广州",
      rating: 5
    },
    {
      content: "我有一张珍贵的结婚照因保存不当而严重受损，试过很多方法都无法恢复。这个平台的技术团队不仅修复了照片，还提供了个性化的优化建议，非常专业！",
      author: "赵女士",
      location: "成都",
      rating: 5
    },
    {
      content: "作为一家小型博物馆的管理员，我们有大量需要数字化和修复的历史照片。这个平台不仅提供了批量处理服务，而且每张照片的修复质量都很高。强烈推荐！",
      author: "陈先生",
      location: "南京",
      rating: 5
    },
    {
      content: "我的祖母去世后，我想修复一些她年轻时的照片作为纪念。这个服务不仅恢复了照片的清晰度，还让照片中的色彩更加鲜活。看到修复后的照片，仿佛祖母又回到了我身边。",
      author: "刘女士",
      location: "杭州",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">用户的真实评价</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            看看我们的客户如何评价我们的照片修复服务
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-blue-50 px-6 py-4 rounded-lg">
            <div className="flex text-yellow-400 mr-4">
              {renderStars(5)}
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">4.9/5</span> 平均评分，基于 <span className="font-semibold">1000+</span> 用户评价
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;