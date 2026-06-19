// public/site-helper.js
(function() {
  'use strict';

  const SITE_CONFIG = {
    url: 'https://siteapp-aiyouxi.com.cn',
    keyword: '爱游戏',
    bannerColor: '#4a90d9',
    accentColor: '#f5a623'
  };

  const helpData = [
    { title: '快速导航', content: '使用顶部菜单浏览不同版块，支持键盘快捷键 Alt + 数字。' },
    { title: '账户安全', content: '请勿向他人透露密码或验证码，本站不会索要您的敏感信息。' },
    { title: '内容反馈', content: '发现不适当内容？点击每条内容旁的「举报」按钮，我们会在 24 小时内处理。' }
  ];

  const tags = ['新手入门', '热门推荐', '活动公告', '客服支持'];

  function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'helper-card';
    card.style.cssText = 'border:1px solid #ddd;border-radius:8px;padding:12px;margin:8px 0;background:#f9f9f9;box-shadow:0 1px 3px rgba(0,0,0,0.08);';
    const titleEl = document.createElement('h4');
    titleEl.textContent = title;
    titleEl.style.cssText = 'margin:0 0 6px 0;color:' + SITE_CONFIG.bannerColor + ';font-size:1.05em;';
    const contentEl = document.createElement('p');
    contentEl.textContent = content;
    contentEl.style.cssText = 'margin:0;color:#333;line-height:1.5;';
    card.appendChild(titleEl);
    card.appendChild(contentEl);
    return card;
  }

  function createBadge(text) {
    const badge = document.createElement('span');
    badge.className = 'keyword-badge';
    badge.textContent = text;
    badge.style.cssText = 'display:inline-block;background:' + SITE_CONFIG.accentColor + ';color:#fff;border-radius:12px;padding:3px 10px;margin:4px 6px 4px 0;font-size:0.85em;font-weight:500;';
    return badge;
  }

  function buildAccessNotice() {
    const notice = document.createElement('div');
    notice.className = 'access-notice';
    notice.style.cssText = 'background:#eef6ff;border-left:4px solid ' + SITE_CONFIG.bannerColor + ';padding:10px 14px;margin:14px 0;border-radius:4px;';
    const p1 = document.createElement('p');
    p1.style.cssText = 'margin:0 0 6px 0;font-size:0.95em;';
    p1.innerHTML = '欢迎访问 <strong>' + SITE_CONFIG.url + '</strong>，本平台专注 <strong>' + SITE_CONFIG.keyword + '</strong> 相关内容。';
    const p2 = document.createElement('p');
    p2.style.cssText = 'margin:0;font-size:0.88em;color:#555;';
    p2.textContent = '使用说明：页面功能持续优化中，如遇问题请刷新或联系客服。';
    notice.appendChild(p1);
    notice.appendChild(p2);
    return notice;
  }

  function initHelper() {
    const container = document.createElement('div');
    container.id = 'site-helper-panel';
    container.style.cssText = 'max-width:600px;margin:20px auto;padding:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;';

    const heading = document.createElement('h3');
    heading.textContent = '💡 页面帮助';
    heading.style.cssText = 'margin:0 0 10px 0;color:' + SITE_CONFIG.bannerColor + ';';

    const notice = buildAccessNotice();

    const cardContainer = document.createElement('div');
    cardContainer.className = 'helper-cards';
    helpData.forEach(item => {
      cardContainer.appendChild(createCard(item.title, item.content));
    });

    const badgeSection = document.createElement('div');
    badgeSection.style.cssText = 'margin:12px 0;';
    const badgeLabel = document.createElement('span');
    badgeLabel.textContent = '关键词徽章：';
    badgeLabel.style.cssText = 'font-weight:600;color:#444;margin-right:6px;';
    badgeSection.appendChild(badgeLabel);
    tags.forEach(tag => {
      badgeSection.appendChild(createBadge(tag));
    });

    const footerNote = document.createElement('div');
    footerNote.style.cssText = 'margin-top:14px;font-size:0.85em;color:#888;text-align:center;';
    footerNote.textContent = '本助手仅提供界面指引，不收集任何用户数据。';

    container.appendChild(heading);
    container.appendChild(notice);
    container.appendChild(cardContainer);
    container.appendChild(badgeSection);
    container.appendChild(footerNote);

    const target = document.querySelector('main') || document.querySelector('.content') || document.body;
    target.appendChild(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHelper);
  } else {
    initHelper();
  }
})();