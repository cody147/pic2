import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "基础版",
      monthlyPrice: 29,
      annualPrice: 290,
      description: "适合个人用户偶尔修复老照片",
      features: [
        "每月最多修复5张照片",
        "基础AI修复功能",
        "标准分辨率输出",
        "电子邮件支持",
        "7天内完成",
        "照片存储30天"
      ],
      cta: "选择基础版",
      highlight: false
    },
    {
      name: "专业版",
      monthlyPrice: 99,
      annualPrice: 990,
      description: "适合经常需要修复照片的用户",
      features: [
        "每月最多修复20张照片",
        "高级AI修复功能",
        "高分辨率输出",
        "优先电子邮件支持",
        "3天内完成",
        "照片存储90天",
        "二次修改保证"
      ],
      cta: "选择专业版",
      highlight: true
    },
    {
      name: "企业版",
      monthlyPrice: 299,
      annualPrice: 2990,
      description: "适合专业机构和企业用户",
      features: [
        "无限制照片修复",
        "最高级AI修复 + 人工细修",
        "超高分辨率输出",
        "优先专属客服",
        "24小时加急完成",
        "永久照片存储",
        "无限次修改保证",
        "批量处理优化"
      ],
      cta: "选择企业版",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">选择适合您的方案</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            无论您是偶尔需要修复几张珍贵的家庭照片，还是需要批量处理大量历史照片，我们都有适合您的方案
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>月付</span>
            <button 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isAnnual ? 'bg-blue-600' : 'bg-gray-200'}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              年付
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                省20%
              </span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl ${plan.highlight ? 'bg-blue-50 border-2 border-blue-500 shadow-lg relative' : 'bg-gray-50 border border-gray-200'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                    最受欢迎
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ¥{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">
                    {isAnnual ? '/年' : '/月'}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.highlight 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">需要定制服务？</h3>
              <p className="text-gray-600 mb-6 md:mb-0">
                如果您有特殊需求或大量照片需要处理，我们可以提供定制化的解决方案。请联系我们的客户团队，我们将根据您的具体需求提供专属服务方案。
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <a 
                href="mailto:bourneliu66@gmail.com" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;