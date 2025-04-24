import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "照片修复需要多长时间？",
      answer: "大多数照片修复在几分钟内即可完成。对于特别复杂或需要专业人工修复的照片，可能需要24-48小时。我们会在处理过程中及时通知您进度。"
    },
    {
      question: "支持哪些类型的照片修复？",
      answer: "我们支持各种照片问题的修复，包括但不限于：划痕、折痕、褪色、变色、模糊、撕裂、水渍、霉斑等。无论您的照片损坏程度如何，我们都将尽力为您提供最佳修复效果。"
    },
    {
      question: "修复后的照片质量如何？",
      answer: "我们采用先进的AI技术和专业的图像处理手段，确保修复后的照片保持高清晰度和自然效果。修复过程会尽可能保留原照片的细节和质感，同时提升整体画质。"
    },
    {
      question: "一次可以上传多少张照片？",
      answer: "根据您选择的套餐不同，单次上传数量有所差异。基础套餐支持单次上传5张照片，高级套餐支持20张，专业套餐则无上传数量限制。您也可以根据需要购买单张照片的修复服务。"
    },
    {
      question: "修复后的照片如何保存和下载？",
      answer: "修复完成后，您将收到电子邮件通知。您可以登录账户查看并下载高清修复结果。所有修复后的照片会在您的账户中保存30天，请在此期间下载。我们也提供额外的云存储服务，可长期保存您的珍贵照片。"
    },
    {
      question: "如果对修复效果不满意怎么办？",
      answer: "我们提供满意保证。如果您对修复效果不满意，可以提交修改建议，我们的技术团队将免费进行二次修复。如果您仍不满意，我们提供无条件退款服务。客户满意度是我们的首要任务。"
    },
    {
      question: "我的照片安全吗？会被用于其他用途吗？",
      answer: "我们非常重视您的隐私。所有上传的照片都经过加密处理，仅用于您请求的修复服务。修复完成后，您的原始照片将在30天内从我们的服务器中删除。我们绝不会将您的照片用于任何其他目的，也不会与第三方共享。"
    },
    {
      question: "支持哪些支付方式？",
      answer: "我们支持多种支付方式，包括支付宝、微信支付、银联卡以及主流国际信用卡（Visa、MasterCard等）。所有支付过程均采用安全加密通道，确保您的支付信息安全。"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">常见问题</h2>
          <p className="text-xl text-gray-600">
            关于照片修复服务的一些常见问题解答
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">还有其他问题？</p>
          <a href="mailto:bourneliu66@gmail.com" className="text-blue-600 hover:underline">联系我们获取支持</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;