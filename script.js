document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单切换
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // 年月日选择器填充
  populateDateSelectors();
  
  // 监听生日年月变化，更新日期选择器
  const birthYear = document.getElementById('birth-year');
  const birthMonth = document.getElementById('birth-month');
  
  if (birthYear && birthMonth) {
    birthYear.addEventListener('change', updateDays);
    birthMonth.addEventListener('change', updateDays);
  }
  
  // 表单提交处理
  const fortuneForm = document.getElementById('fortune-form');
  const fortuneResult = document.getElementById('fortune-result');
  
  if (fortuneForm) {
    fortuneForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // 获取表单数据
      const name = document.getElementById('name').value;
      const year = document.getElementById('birth-year').value;
      const month = document.getElementById('birth-month').value;
      const day = document.getElementById('birth-day').value;
      const gender = document.getElementById('gender').value;
      
      // 生成运势结果
      const fortuneData = generateFortune(name, year, month, day, gender);
      
      // 显示结果
      displayFortuneResult(fortuneData);
      
      // 滚动到结果区域
      fortuneResult.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// 填充日期选择器
function populateDateSelectors() {
  const yearSelect = document.getElementById('birth-year');
  const monthSelect = document.getElementById('birth-month');
  const daySelect = document.getElementById('birth-day');
  
  if (!yearSelect || !monthSelect || !daySelect) return;
  
  // 填充年份 (1940-2023)
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1940; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year + '年';
    yearSelect.appendChild(option);
  }
  
  // 填充月份
  for (let month = 1; month <= 12; month++) {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month + '月';
    monthSelect.appendChild(option);
  }
  
  // 初始化日期
  updateDays();
}

// 更新日期选择器
function updateDays() {
  const yearSelect = document.getElementById('birth-year');
  const monthSelect = document.getElementById('birth-month');
  const daySelect = document.getElementById('birth-day');
  
  if (!yearSelect || !monthSelect || !daySelect) return;
  
  const year = parseInt(yearSelect.value) || new Date().getFullYear();
  const month = parseInt(monthSelect.value) || 1;
  
  // 清空现有选项
  daySelect.innerHTML = '';
  
  // 获取当月天数
  const daysInMonth = new Date(year, month, 0).getDate();
  
  // 填充日期
  for (let day = 1; day <= daysInMonth; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day + '日';
    daySelect.appendChild(option);
  }
}

// 生成运势数据
function generateFortune(name, year, month, day, gender) {
  // 根据姓名和生日计算各项运势指数
  const nameValue = calculateNameValue(name);
  const birthValue = calculateBirthValue(year, month, day);
  const totalValue = (nameValue + birthValue) % 100;
  
  // 计算各项运势评分 (0-100)
  const fortuneScore = totalValue;
  const careerScore = ((totalValue * 1.2) + (Math.random() * 20)) % 100;
  const wealthScore = ((totalValue * 0.8) + (Math.random() * 25)) % 100;
  const loveScore = ((totalValue * 1.5) + (Math.random() * 15)) % 100;
  const healthScore = ((totalValue * 0.7) + (Math.random() * 30)) % 100;
  
  // 确定运势等级
  let fortuneLevel = '';
  let fortuneColor = '';
  
  if (fortuneScore >= 90) {
    fortuneLevel = '大吉';
    fortuneColor = 'text-red-600';
  } else if (fortuneScore >= 80) {
    fortuneLevel = '吉';
    fortuneColor = 'text-orange-500';
  } else if (fortuneScore >= 70) {
    fortuneLevel = '中吉';
    fortuneColor = 'text-yellow-500';
  } else if (fortuneScore >= 60) {
    fortuneLevel = '小吉';
    fortuneColor = 'text-green-500';
  } else if (fortuneScore >= 50) {
    fortuneLevel = '平';
    fortuneColor = 'text-blue-500';
  } else if (fortuneScore >= 40) {
    fortuneLevel = '小凶';
    fortuneColor = 'text-indigo-500';
  } else if (fortuneScore >= 30) {
    fortuneLevel = '凶';
    fortuneColor = 'text-purple-500';
  } else {
    fortuneLevel = '大凶';
    fortuneColor = 'text-gray-500';
  }
  
  // 生成幸运颜色
  const luckyColors = ['红色', '橙色', '黄色', '绿色', '蓝色', '紫色', '白色', '黑色', '金色', '银色'];
  const luckyColor = luckyColors[Math.floor(Math.random() * luckyColors.length)];
  
  // 生成幸运数字
  const luckyNumber = Math.floor(Math.random() * 9) + 1;
  
  // 生成方位
  const directions = ['东', '南', '西', '北', '东南', '东北', '西南', '西北'];
  const luckyDirection = directions[Math.floor(Math.random() * directions.length)];
  
  // 生成宜忌事项
  const goodActivities = getGoodActivities(fortuneScore, careerScore, wealthScore, loveScore, healthScore);
  const badActivities = getBadActivities(fortuneScore, careerScore, wealthScore, loveScore, healthScore);
  
  // 生成运势分析
  const analysis = generateFortuneAnalysis(name, fortuneScore, careerScore, wealthScore, loveScore, healthScore, gender);
  
  // 返回运势结果
  return {
    name: name,
    birthdate: `${year}年${month}月${day}日`,
    gender: gender === 'male' ? '男' : gender === 'female' ? '女' : '其他',
    fortuneScore: Math.round(fortuneScore),
    fortuneLevel: fortuneLevel,
    fortuneColor: fortuneColor,
    careerScore: Math.round(careerScore),
    wealthScore: Math.round(wealthScore),
    loveScore: Math.round(loveScore),
    healthScore: Math.round(healthScore),
    luckyColor: luckyColor,
    luckyNumber: luckyNumber,
    luckyDirection: luckyDirection,
    goodActivities: goodActivities,
    badActivities: badActivities,
    analysis: analysis
  };
}

// 根据姓名计算数值
function calculateNameValue(name) {
  let value = 0;
  for (let i = 0; i < name.length; i++) {
    value += name.charCodeAt(i) % 80;
  }
  return value % 100;
}

// 根据生日计算数值
function calculateBirthValue(year, month, day) {
  const date = new Date(year, month - 1, day);
  const zodiacIndex = getZodiacSign(month, day);
  const chineseZodiacIndex = getChineseZodiac(year);
  
  return (date.getTime() % 100000 + zodiacIndex * 5 + chineseZodiacIndex * 8) % 100;
}

// 获取星座
function getZodiacSign(month, day) {
  const zodiacSigns = [
    { name: '水瓶座', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
    { name: '双鱼座', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
    { name: '白羊座', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
    { name: '金牛座', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
    { name: '双子座', startMonth: 5, startDay: 21, endMonth: 6, endDay: 21 },
    { name: '巨蟹座', startMonth: 6, startDay: 22, endMonth: 7, endDay: 22 },
    { name: '狮子座', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { name: '处女座', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { name: '天秤座', startMonth: 9, startDay: 23, endMonth: 10, endDay: 23 },
    { name: '天蝎座', startMonth: 10, startDay: 24, endMonth: 11, endDay: 22 },
    { name: '射手座', startMonth: 11, startDay: 23, endMonth: 12, endDay: 21 },
    { name: '摩羯座', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 }
  ];
  
  for (let i = 0; i < zodiacSigns.length; i++) {
    const sign = zodiacSigns[i];
    if ((month === sign.startMonth && day >= sign.startDay) || 
        (month === sign.endMonth && day <= sign.endDay)) {
      return i;
    }
  }
  
  return 0;
}

// 获取生肖
function getChineseZodiac(year) {
  const animals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  return (year - 1900) % 12;
}

// 生成宜做事项
function getGoodActivities(fortune, career, wealth, love, health) {
  const activities = [
    // 事业相关
    '商务谈判', '签署合同', '项目启动', '求职面试', '团队建设', '学习进修', '职业规划', '调整策略',
    // 财运相关
    '投资理财', '存款储蓄', '购买保险', '清理债务', '预算规划', '寻求合作', '开源节流', '资产盘点',
    // 感情相关
    '表白示爱', '约会交友', '修复关系', '婚姻规划', '家庭聚会', '增进理解', '沟通交流', '送礼物',
    // 健康相关
    '体检养生', '运动健身', '调整作息', '饮食调理', '冥想放松', '户外活动', '就医问诊', '情绪管理',
    // 其他
    '旅行出游', '搬家乔迁', '装修布置', '购物消费', '社交活动', '艺术欣赏', '慈善公益', '宗教祭祀'
  ];
  
  // 根据各项评分选择合适的宜做事项
  const good = [];
  const count = 4 + Math.floor(fortune / 25); // 根据总运势决定宜做事项数量
  
  const indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * activities.length));
  }
  
  indices.forEach(index => {
    good.push(activities[index]);
  });
  
  return good;
}

// 生成忌做事项
function getBadActivities(fortune, career, wealth, love, health) {
  const activities = [
    // 事业相关
    '跳槽转行', '冒险创业', '与上司争执', '过度加班', '推卸责任', '草率决策', '夸大成就', '忽视细节',
    // 财运相关
    '高风险投资', '奢侈消费', '借贷担保', '冲动购物', '赌博彩票', '随意捐赠', '忽视收支', '盲目跟风',
    // 感情相关
    '争吵冲突', '感情冒进', '沉溺过去', '草率分手', '隐瞒欺骗', '过度控制', '冷落伴侣', '感情纠缠',
    // 健康相关
    '熬夜加班', '暴饮暴食', '情绪失控', '过度劳累', '忽视症状', '自行用药', '饮酒过量', '久坐不动',
    // 其他
    '冲动行事', '闯红灯', '参加葬礼', '危险运动', '独自远行', '轻信他人', '参与争端', '居住装修'
  ];
  
  // 根据各项评分选择合适的忌做事项
  const bad = [];
  const count = 3 + Math.floor((100 - fortune) / 25); // 运势越低，忌做事项越多
  
  const indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * activities.length));
  }
  
  indices.forEach(index => {
    bad.push(activities[index]);
  });
  
  return bad;
}

// 生成运势分析
function generateFortuneAnalysis(name, fortune, career, wealth, love, health, gender) {
  // 姓名分析
  const nameAnalysis = `${name}${gender === 'male' ? '先生' : gender === 'female' ? '女士' : ''}，您的姓名蕴含${randomElement(['丰厚', '强大', '温和', '稳定', '活跃'])}的能量，从紫微斗数的角度来看，对您的${fortune > 70 ? '运势发展有积极影响' : '人生道路有一定挑战'}。`;
  
  // 总运势分析
  let overallAnalysis = '';
  if (fortune >= 90) {
    overallAnalysis = `您近期整体运势非常强劲，处于大吉状态，万事顺遂，是大展宏图的绝佳时机。紫微主星与吉星相位，预示着事业、财运、爱情等各方面都有突破性发展。`;
  } else if (fortune >= 80) {
    overallAnalysis = `您近期运势很好，各方面表现出色，大部分计划能够顺利进行。命宫有紫微星相照，是把握机遇、提升自我的良好时期。`;
  } else if (fortune >= 70) {
    overallAnalysis = `您近期运势良好，整体呈上升趋势。虽然可能会遇到些小挑战，但只要保持积极心态，问题都能迎刃而解。`;
  } else if (fortune >= 60) {
    overallAnalysis = `您近期运势较为平稳，有小吉之象。在一些方面会有不错的收获，但也需要注意潜在风险，保持谨慎态度更有利于事业发展。`;
  } else if (fortune >= 50) {
    overallAnalysis = `您近期运势一般，呈现中和状态。既有机遇也有挑战，需要更加努力才能取得预期效果。建议多关注自身情绪管理，避免冲动决策。`;
  } else if (fortune >= 40) {
    overallAnalysis = `您近期运势略显低迷，有些小凶之象。但凶中有吉，通过正确引导和适当调整，依然能够化解不利因素，迎来转机。`;
  } else if (fortune >= 30) {
    overallAnalysis = `您近期运势欠佳，面临一些困难和阻碍。命宫有煞星入驻，建议保持低调，避免重大决策和投资，耐心等待运势回升。`;
  } else {
    overallAnalysis = `您近期运势较为困难，处于大凶阶段。诸事不顺，易有意外发生。但人定胜天，通过积极调整心态，做好防范措施，依然可以减轻不利影响，转危为安。`;
  }
  
  // 事业分析
  let careerAnalysis = '';
  if (career >= 80) {
    careerAnalysis = `事业方面表现卓越，有升职加薪或项目成功的可能。紫微星照命宫，贵人相助，即使有竞争也能脱颖而出。`;
  } else if (career >= 60) {
    careerAnalysis = `事业发展稳定，工作能得到上级认可。有一定挑战但能应对自如，是积累经验和拓展人脉的好时机。`;
  } else if (career >= 40) {
    careerAnalysis = `事业上需要更加努力，可能遇到瓶颈或竞争加剧。建议提升专业能力，调整工作策略，保持良好的团队合作。`;
  } else {
    careerAnalysis = `事业面临较大压力，工作可能不如意，甚至有职位变动风险。建议暂时保持低调，做好本职工作，避免冲突和争执。`;
  }
  
  // 财运分析
  let wealthAnalysis = '';
  if (wealth >= 80) {
    wealthAnalysis = `财运亨通，收入有望增加，可能有意外之财。适合稳健投资和理财规划，但也要注意财富管理，避免奢侈消费。`;
  } else if (wealth >= 60) {
    wealthAnalysis = `财运稳定，收支平衡，有小额收益。理财方面可保持现有策略，避免高风险投资，适当储蓄更为有利。`;
  } else if (wealth >= 40) {
    wealthAnalysis = `财运一般，开支增加，需要精打细算。建议控制不必要的消费，暂缓大额投资计划，避免借贷和担保行为。`;
  } else {
    wealthAnalysis = `财运不佳，可能有意外支出或投资亏损。理财宫有破财之象，应严格控制支出，避免任何形式的冒险和投机活动。`;
  }
  
  // 感情分析
  let loveAnalysis = '';
  if (love >= 80) {
    loveAnalysis = `感情运势极佳，单身者有遇到心仪对象的机会，已婚者家庭和谐美满。桃花星入命，人际关系融洽，社交活动能带来积极影响。`;
  } else if (love >= 60) {
    loveAnalysis = `感情发展顺利，关系趋于稳定。适合增进情感交流，但也需要适当表达自己的真实想法，避免小误会发展成大问题。`;
  } else if (love >= 40) {
    loveAnalysis = `感情上有些波动，可能因沟通不畅导致误解。建议多一些包容和理解，主动创造浪漫气氛，避免因工作忽略伴侣感受。`;
  } else {
    loveAnalysis = `感情运势低迷，易有争执和疏远。情感宫有冲煞，建议控制情绪，避免因小事争吵，给彼此更多空间和理解，度过困难期。`;
  }
  
  // 健康分析
  let healthAnalysis = '';
  if (health >= 80) {
    healthAnalysis = `健康状况良好，精力充沛。但也不可掉以轻心，保持规律作息和适度运动，注意饮食均衡，避免过度劳累。`;
  } else if (health >= 60) {
    healthAnalysis = `健康状况稳定，偶有小恙但无大碍。建议加强锻炼，增强抵抗力，关注心理健康，保持积极乐观的心态。`;
  } else if (health >= 40) {
    healthAnalysis = `健康状况一般，易感疲劳，抵抗力下降。应当注意休息，避免熬夜，适时调整压力，必要时进行体检和保健。`;
  } else {
    healthAnalysis = `健康状况需要关注，有潜在风险。建议及时就医检查，注意预防慢性疾病，加强自我保健意识，避免过度紧张和焦虑。`;
  }
  
  // 汇总分析
  const summary = `综合来看，${name}${gender === 'male' ? '先生' : gender === 'female' ? '女士' : ''}的${fortune >= 60 ? '运势整体向好，按照建议行事，定能趋吉避凶，获得更多成功与幸福' : '近期运势有所波动，需谨慎行事，遵循宜忌指引，可有效减轻不利影响，迎来转机'}。紫微斗数与八字命理相结合的分析表明，${randomElement(['命宫吉星高照', '福德宫有贵人相助', '财帛宫流通有力', '事业宫积极向上'])}，但也要注意${randomElement(['桃花宫的变动', '健康宫的警示', '财帛宫的波动', '官禄宫的挑战'])}。建议定期关注运势变化，及时调整策略，优化人生路径。`;
  
  return {
    nameAnalysis: nameAnalysis,
    overallAnalysis: overallAnalysis,
    careerAnalysis: careerAnalysis,
    wealthAnalysis: wealthAnalysis,
    loveAnalysis: loveAnalysis,
    healthAnalysis: healthAnalysis,
    summary: summary
  };
}

// 随机选择数组中的一个元素
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 显示运势结果
function displayFortuneResult(data) {
  const fortuneResult = document.getElementById('fortune-result');
  if (!fortuneResult) return;
  
  // 构建HTML
  let html = `
    <div class="fortune-result animate-fadeIn">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-gray-900">尊敬的 ${data.name} ${data.gender}，您的运势分析结果</h3>
        <p class="text-sm text-gray-500 mt-1">出生日期：${data.birthdate}</p>
      </div>
      
      <div class="bg-indigo-50 rounded-lg p-6 mb-8">
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-xl font-semibold">综合运势：<span class="${data.fortuneColor}">${data.fortuneLevel}</span></h4>
          <span class="text-3xl font-bold ${data.fortuneColor}">${data.fortuneScore}分</span>
        </div>
        
        <div class="fortune-meter mb-8">
          <div class="fortune-meter-fill" style="width: ${data.fortuneScore}%"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <h5 class="text-lg font-medium text-gray-900 mb-2">事业运</h5>
            <div class="fortune-meter">
              <div class="fortune-meter-fill" style="width: ${data.careerScore}%"></div>
            </div>
            <p class="text-right mt-1 font-medium">${data.careerScore}分</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <h5 class="text-lg font-medium text-gray-900 mb-2">财富运</h5>
            <div class="fortune-meter">
              <div class="fortune-meter-fill" style="width: ${data.wealthScore}%"></div>
            </div>
            <p class="text-right mt-1 font-medium">${data.wealthScore}分</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <h5 class="text-lg font-medium text-gray-900 mb-2">感情运</h5>
            <div class="fortune-meter">
              <div class="fortune-meter-fill" style="width: ${data.loveScore}%"></div>
            </div>
            <p class="text-right mt-1 font-medium">${data.loveScore}分</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <h5 class="text-lg font-medium text-gray-900 mb-2">健康运</h5>
            <div class="fortune-meter">
              <div class="fortune-meter-fill" style="width: ${data.healthScore}%"></div>
            </div>
            <p class="text-right mt-1 font-medium">${data.healthScore}分</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <h5 class="text-lg font-medium text-gray-900 mb-2">吉祥色</h5>
            <p class="text-center text-xl font-bold text-indigo-600">${data.luckyColor}</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <h5 class="text-lg font-medium text-gray-900 mb-2">幸运数字</h5>
            <p class="text-center text-xl font-bold text-indigo-600">${data.luckyNumber}</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <h5 class="text-lg font-medium text-gray-900 mb-2">吉祥方位</h5>
            <p class="text-center text-xl font-bold text-indigo-600">${data.luckyDirection}</p>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg p-6 shadow-md">
          <h4 class="text-lg font-semibold text-green-600 mb-4">宜</h4>
          <ul class="space-y-2">
            ${data.goodActivities.map(activity => `
              <li class="flex items-center bg-green-50 px-4 py-3 rounded-lg recommendation-item">
                <svg class="h-5 w-5 text-green-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                ${activity}
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div class="bg-white rounded-lg p-6 shadow-md">
          <h4 class="text-lg font-semibold text-red-600 mb-4">忌</h4>
          <ul class="space-y-2">
            ${data.badActivities.map(activity => `
              <li class="flex items-center bg-red-50 px-4 py-3 rounded-lg recommendation-item">
                <svg class="h-5 w-5 text-red-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                ${activity}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      
      <div class="bg-white rounded-lg p-6 shadow-md mb-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4">详细运势解读</h4>
        
        <div class="space-y-6">
          <div>
            <h5 class="text-lg font-medium text-indigo-700 mb-2">姓名分析</h5>
            <p class="text-gray-700">${data.analysis.nameAnalysis}</p>
          </div>
          
          <div>
            <h5 class="text-lg font-medium text-indigo-700 mb-2">总体运势</h5>
            <p class="text-gray-700">${data.analysis.overallAnalysis}</p>
          </div>
          
          <div>
            <h5 class="text-lg font-medium text-indigo-700 mb-2">事业运势</h5>
            <p class="text-gray-700">${data.analysis.careerAnalysis}</p>
          </div>
          
          <div>
            <h5 class="text-lg font-medium text-indigo-700 mb-2">财富运势</h5>
            <p class="text-gray-700">${data.analysis.wealthAnalysis}</p>
          </div>
          
          <div>
            <h5 class="text-lg font-medium text-indigo-700 mb-2">感情运势</h5>
            <p class="text-gray-700">${data.analysis.loveAnalysis}</p>
          </div>
          
          <div>
            <h5 class="text-lg font-medium text-indigo-700 mb-2">健康运势</h5>
            <p class="text-gray-700">${data.analysis.healthAnalysis}</p>
          </div>
          
          <div class="border-t pt-4 mt-4">
            <h5 class="text-lg font-medium text-indigo-700 mb-2">综合建议</h5>
            <p class="text-gray-700">${data.analysis.summary}</p>
          </div>
        </div>
      </div>
      
      <div class="bg-indigo-100 rounded-lg p-6 shadow-sm">
        <div class="text-center">
          <h4 class="text-xl font-semibold text-indigo-800 mb-2">想获取更详细的运势解读？</h4>
          <p class="text-gray-700 mb-4">成为我们的会员，解锁更多专业分析和个性化改运方案</p>
          <a href="#pricing" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
            查看会员方案
          </a>
        </div>
      </div>
    </div>
  `;
  
  // 显示结果
  fortuneResult.innerHTML = html;
  fortuneResult.classList.remove('hidden');
}