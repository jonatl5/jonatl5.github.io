'use strict';

// Case studies are edited here. All project facts and images come from the supplied portfolio.
const projects = {
  guangdong: {
    number: '01', category: 'EXHIBITION / 史志展陈', title: '广东省气象局史馆',
    intro: '让气象历史，从档案走入空间。',
    role: '全流程策划落地与运营统筹', context: '气象史志馆 / 中国气象局华风气象传媒集团项目',
    cover: 'museum-gallery', alt: '广东省气象局史馆的历史叙事与多媒体展陈空间',
    description: '面对庞杂的历史资料，策划的任务是建立清晰的叙事秩序，再让文字、影像与交互共同讲述地方气象的发展历程。工作覆盖前期调研、展陈策划、多媒体脚本及后续运营设计。',
    metrics: [['50 万字', '资料梳理、策划与展陈文本'], ['18 个', '多媒体交互设计'], ['20 个', '影片脚本、分镜及成片审核']],
    sections: [
      ['从档案中建立叙事', '整理历史资料，形成展馆策划全案，撰写立面文字与导览词，兼顾内容的准确性和观众的阅读体验。'],
      ['把内容转译成体验', '规划一体机交互逻辑与文案，撰写影片脚本、绘制分镜，并跟进多媒体制作与成片审核。'],
      ['让开馆成为新的起点', '参与票务与客流统计平台、文创产品、线下活动等运营内容设计，把场馆内容延伸到持续的公众服务中。']
    ],
    gallery: [['museum-research', '前期资料调研与整理'], ['museum-space', '展馆空间呈现'], ['museum-storyboard', '影片分镜与脚本工作稿'], ['museum-interactive', '多媒体交互项目画面']],
    pages: '作品集第 6—7 页'
  },
  hebei: {
    number: '02', category: 'DIGITAL EXPERIENCE / 数字互动', title: '河北省气象网络数字科普馆',
    intro: '把气象知识，变成可以探索的世界。',
    role: '项目经理 / 全流程策划落地与运营统筹', context: '线上数字科普馆 / 升级改造项目',
    cover: 'digital-island', alt: '河北数字科普馆中的三维主题游戏岛屿',
    description: '以气象科普为内容核心，通过游戏岛屿、沉浸式场景与 IP 形象建立可探索的数字世界。将知识体系转化为游戏世界观、交互逻辑、场景手绘与执行脚本，并与技术团队对接落地。',
    metrics: [['8 个', '独立游戏岛屿'], ['14 个', '核心沉浸式游戏场景'], ['3 个', '游戏 IP 形象设计']],
    sections: [
      ['先梳理知识，再搭建世界', '拆解气象知识点与核心 IP，绘制场景逻辑图、鸟瞰图和手绘稿，建立世界观与空间关系。'],
      ['逐个节点写清体验', '输出游戏、视频与图文脚本，明确剧情、触发规则和反馈机制；对接技术方案，确认交互边界与实现方式。'],
      ['从内容策划到整体推进', '参与施工方案、投标、合同、采购及开工文件，统筹媒资库、云端商城、直播平台与 AI 机器人等配套内容的策划对接。']
    ],
    gallery: [['digital-sketch', '前期场景手绘与构想'], ['digital-island', '对应主题的项目三维场景呈现'], ['digital-city', '城市气象科普场景'], ['digital-ecology', '低碳与生态主题场景'], ['digital-map', '数字馆世界地图'], ['digital-interface', '界面与交互规划']],
    pages: '作品集第 8—10、20 页'
  },
  dream: {
    number: '03', category: 'INDEPENDENT CURATION / 独立策展', title: '梦境日记：控梦人的 18 个梦',
    intro: '让一场关于梦的叙事，拥有自己的空间。',
    role: '独立策展 / 展厅全案策划与视觉设计', context: '中央美术学院美术馆 / 2021—2022',
    cover: 'dream-booklet', alt: '梦境日记展览导览手册',
    description: '在中央美术学院美术馆落地的独立策展实践。从主题策划、展览叙事到海报、空间搭建与导览手册，建立一套围绕梦境主题展开的展览表达。',
    metrics: [['独立策办', '主题与展览叙事'], ['空间 + 视觉', '展厅与传播物料'], ['央美美术馆', '展览落地']],
    sections: [
      ['策展：建立一条观看的线索', '围绕梦境主题组织作品与叙事，形成展览结构和观展动线，让各部分内容之间产生联系。'],
      ['设计：让主题贯穿每个触点', '完成展览海报、空间规划、导览手册等工作，让线上传播与线下观展拥有一致的视觉语言。']
    ],
    gallery: [['dream-poster', '展览主视觉海报'], ['dream-plan', '叙事结构与展览线索'], ['dream-space', '展厅空间规划'], ['dream-booklet', '观众导览手册']],
    pages: '作品集第 22 页'
  },
  century: {
    number: '04', category: 'ART & PUBLIC ENGAGEMENT / 艺术与公众', title: '百年无极 · 北京中华世纪坛',
    intro: '在艺术史的深度与公众的理解之间，搭一座桥。',
    role: '展览内容策划核心成员 / 活动执行', context: '意大利国家现当代美术馆馆藏作品展 / 2022.10—12',
    cover: 'century-opening', alt: '百年无极展览开幕式',
    description: '围绕意大利国家现当代美术馆的馆藏作品，参与展览整体叙事、艺术品解读与公众活动，让学术内容通过导览、工作坊和传播活动，成为观众可以进入的艺术体验。',
    metrics: [['内容策划', '展览框架与作品解读'], ['公众教育', '语音导览与艺术工坊'], ['整合传播', '开幕活动与新媒体']],
    sections: [
      ['把专业研究写成可读的内容', '参与展览大纲与叙事框架，撰写艺术品深度解读，在学术准确性和公众可读性之间寻找合适的表达。'],
      ['从观看到参与', '策划并录制语音导览，参与亲子艺术工坊、创作体验与手工活动，拓展展览的公共教育价值。'],
      ['让展览被更多人看见', '参与开幕活动、策展人直播、艺术科普短视频与社交媒体互动，将线下体验延伸至线上传播。']
    ],
    gallery: [['century-opening', '展览开幕现场'], ['century-workshop', '展厅导览与公众活动']],
    pages: '作品集第 12 页'
  },
  ningbo: {
    number: '05', category: 'RESEARCH & EDUCATION / 研究与研学', title: '宁波河海博物馆',
    intro: '沿着河海文明，寻找一座博物馆的起点。',
    role: '前期筹备项目工作专班成员 / 文旅研学开发', context: '宁波博物馆 / 2023.08—2024.05',
    cover: 'ningbo-research', alt: '宁波河海博物馆前期研究交流现场',
    description: '参与宁波河海博物馆前期筹备，围绕河海文明、海丝文化与文化遗产展开调研，推动研究材料转化为场馆定位、展陈原则和研学体验。',
    metrics: [['40 余处', '中国东部沿线遗产点考察'], ['3 条', '分龄研学线路'], ['前期筹备', '功能定位与展陈研究']],
    sections: [
      ['在实地与案例之间交叉研究', '结合美国国家运河博物馆考察与中国东部沿线遗产点调研，开展标杆对比和学术研究，支持新馆功能定位与展陈框架。'],
      ['把地方文化编进研学路线', '围绕宁波海丝文化与河海文明，串联博物馆、文博点位和文化体验，开发分龄、轻量化的沉浸式研学线路。'],
      ['为未来的场馆建立基础', '参与功能定位可行性报告、展览结构大纲与顶层运营策略研究，提出文旅 IP 项目并获得资金支持。']
    ],
    gallery: [['ningbo-research', '学术研究与项目交流'], ['ningbo-fieldwork', '文化遗产实地研学']],
    pages: '作品集第 13 页'
  },
  christies: {
    number: '06', category: 'ART COMMUNICATION / 艺术传播', title: '佳士得 · 艺术传播',
    intro: '让专业艺术内容，抵达更广阔的公众。',
    role: 'PR 公关 / AE 客户执行', context: '佳士得公关部（北京）/ 2023.05—07',
    cover: 'christies-exhibition', alt: '佳士得艺术展览现场',
    description: '围绕拍卖与艺术周展览，参与新闻与社交媒体内容、媒体关系、活动执行和市场研究。将作品研究转化为有效的公众沟通，同时关注活动预算、流程与品牌表达。',
    metrics: [['公关传播', '新闻稿与媒体沟通'], ['活动执行', '媒体活动与藏家交流'], ['市场研究', '艺术市场趋势与数据']],
    sections: [
      ['让专业内容进入传播语境', '撰写新闻宣传稿与发言稿，参与艺术品介绍、艺术家访谈等内容传播，并协助媒体采访与关系维护。'],
      ['把活动细节组织起来', '参与拍卖与展览推广、预算编制和现场安排，协同宣传、场地与媒体投放等环节。'],
      ['用研究支持判断', '关注当代艺术市场趋势、收集市场数据，参与艺术市场调研报告工作，并开展舆情监测与公关支持。']
    ],
    gallery: [['christies-exhibition', '艺术展览现场与传播项目素材']],
    pages: '作品集第 14 页'
  }
};

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#project-content');
const label = document.querySelector('#dialog-label');

function imageMarkup(name, alt, lazy = true) {
  return `<img src="assets/images/${name}.webp" alt="${alt}" ${lazy ? 'loading="lazy"' : ''}>`;
}

function syncProject() {
  const key = location.hash.startsWith('#project-') ? location.hash.slice(9) : '';
  const project = Object.hasOwn(projects, key) ? projects[key] : null;
  if (!project) {
    if (dialog.open) dialog.close();
    document.body.classList.remove('dialog-open');
    return;
  }
  if (dialog.open && dialog.dataset.project === key) return;
  label.textContent = `${project.number} / ${project.category}`;
  content.innerHTML = `
    <div class="case-heading"><p class="section-index">${project.category}</p><h2 id="dialog-title">${project.title}</h2><p class="case-intro">${project.intro}</p><dl class="case-meta"><div><dt>我的角色</dt><dd>${project.role}</dd></div><div><dt>项目背景</dt><dd>${project.context}</dd></div></dl></div>
    <figure class="case-cover">${imageMarkup(project.cover, project.alt, false)}</figure>
    <div class="case-body"><p class="case-description">${project.description}</p><dl class="case-metrics">${project.metrics.map(([value, title]) => `<div><dt>${title}</dt><dd>${value}</dd></div>`).join('')}</dl><div class="case-sections">${project.sections.map(([title, text], i) => `<section><span>0${i + 1}</span><div><h3>${title}</h3><p>${text}</p></div></section>`).join('')}</div><div class="case-gallery">${project.gallery.map(([name, caption]) => `<figure>${imageMarkup(name, caption)}<figcaption>${caption}</figcaption></figure>`).join('')}</div><div class="case-footer"><p>${project.pages} · 图片为项目与个人作品材料</p><a class="text-link" href="assets/documents/tianduoduo-portfolio.pdf" download="田朵朵-作品集.pdf">下载完整作品集 <span aria-hidden="true">↓</span></a></div></div>`;
  dialog.dataset.project = key;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}

function closeProject() {
  if (history.state?.portfolioProject) {
    history.back();
  } else {
    history.replaceState(null, '', '#work');
    syncProject();
    document.querySelector('#work').scrollIntoView({ block: 'start' });
  }
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.setAttribute('aria-label', `查看项目：${projects[button.dataset.project].title}`);
  button.addEventListener('click', () => {
    history.pushState({ portfolioProject: true }, '', `#project-${button.dataset.project}`);
    syncProject();
  });
});
document.querySelector('.dialog-close').addEventListener('click', closeProject);
dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) closeProject();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
window.addEventListener('hashchange', syncProject);
window.addEventListener('popstate', syncProject);
syncProject();

let feedbackTimer;
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = '微信号已复制：CokeZerogirl';
    } catch {
      status.textContent = '请手动复制微信号：CokeZerogirl';
    }
    status.classList.add('is-visible');
    clearTimeout(feedbackTimer);
    feedbackTimer = setTimeout(() => status.classList.remove('is-visible'), 4500);
  });
});
