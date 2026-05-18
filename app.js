const frameworks = [
  {
    id: 'essential-thinking',
    file: 'preview (1).html',
    title: '本質的思考フレームワーク48',
    sourceTitle: '本質的思考フレームワーク48 実用HTML',
    category: '本質思考',
    count: '48',
    scenes: ['問題を分解したい', '意思決定したい', '会議・交渉で使いたい'],
    features: ['標準ワークフロー', '目次とフレームワーク一覧', '実務用テンプレート', '用途別おすすめセット'],
    summary: '課題定義、仮説検証、意思決定、振り返りまでを一通り整理できる基礎ライブラリ。迷ったときの最初の入口として使いやすい構成です。'
  },
  {
    id: 'communication',
    file: 'preview.html',
    title: '人間関係・コミュニケーション思考フレームワーク24',
    sourceTitle: '人間関係・コミュニケーション思考フレームワーク24',
    category: '人間関係',
    count: '24',
    scenes: ['人間関係を整理したい', '会議・交渉で使いたい', '意思決定したい'],
    features: ['基本ワークフロー', '会話前チェックリスト', '状況別クイック選択表', '難しい会話のテンプレート'],
    summary: '対話の目的、関係性、伝え方を落ち着いて整理するための実用集。難しい会話や合意形成を、対立ではなく相互理解の文脈で扱えます。'
  },
  {
    id: 'organizational-alignment',
    file: 'preview (7).html',
    title: '社内政治フレームワーク24 実践ツールキット',
    sourceTitle: '社内政治フレームワーク24 実践ツールキット',
    category: '社内政治',
    count: '24',
    scenes: ['社内政治を有利に進めたい', '会議・交渉で使いたい', '意思決定したい'],
    features: ['標準ワークフロー', '24フレームワーク', '実務テンプレート', '週次運用'],
    summary: '組織内の調整、合意形成、意思決定の準備を支援するツールキット。関係者や判断基準を可視化し、建設的に案件を前へ進めるために使えます。'
  },
  {
    id: 'network-building',
    file: 'preview (6).html',
    title: '素晴らしい人脈づくりのための24思考フレームワーク',
    sourceTitle: '素晴らしい人脈づくりのための24思考フレームワーク',
    category: '人脈形成',
    count: '24',
    scenes: ['人脈を作りたい', '人間関係を整理したい', '戦略を立てたい'],
    features: ['24フレームワーク', '人脈設計ワークシート', '関係温度スコア表', '紹介依頼・フォロー文面テンプレート'],
    summary: '短期的な名刺交換ではなく、相互に価値を生む関係づくりを設計するための実践集。紹介、面談、フォロー、90日運用まで扱います。'
  },
  {
    id: 'creativity',
    file: 'preview (5).html',
    title: '創造性・革新性のための思考フレームワーク24',
    sourceTitle: '創造性・革新性のための思考フレームワーク24',
    category: '創造性・革新',
    count: '24',
    scenes: ['アイデアを出したい', '問題を分解したい', '戦略を立てたい'],
    features: ['5ステップの使い方', '目次', '共通ワークシート', '実戦での選び方'],
    summary: 'アイデア発想、視点転換、改善案づくりを支援する創造性向けのワークブック。新規企画や既存課題の再設計に向いています。'
  },
  {
    id: 'strategic-advantage',
    file: 'preview (3).html',
    title: '戦略的有利化フレームワーク24',
    sourceTitle: '戦略的有利化フレームワーク24｜実用ワークブック',
    category: '戦略',
    count: '24',
    scenes: ['戦略を立てたい', '意思決定したい', '会議・交渉で使いたい'],
    features: ['8ステップ統合ワークフロー', '現在地整理シート', '全体マップ', '倫理的ガードレール'],
    summary: '置かれた条件を確認し、選択肢、利害、タイミングを整理する戦略設計用ワークブック。無理な押し切りではなく、環境づくりを実務的に考えます。'
  },
  {
    id: 'situation-recovery',
    file: 'preview (2).html',
    title: '形勢逆転のための24思考フレームワーク',
    sourceTitle: '形勢逆転のための24思考フレームワーク 実戦プレイブック',
    category: '形勢逆転',
    count: '24',
    scenes: ['会議・交渉で使いたい', '問題を分解したい', '意思決定したい'],
    features: ['5分ワークフロー', '作戦メモ生成', '状況別早見表', '実戦テンプレート集'],
    summary: '不利な状況を冷静に分解し、条件・争点・代替案を整理するためのプレイブック。対立を煽るのではなく、打開策を見つける目的で使います。'
  },
  {
    id: 'presence',
    file: 'preview (4).html',
    title: '天才っぽく見せるアピール用フレームワーク24',
    sourceTitle: '天才っぽく見せるアピール用フレームワーク24',
    category: '表現・プレゼンス',
    count: '24',
    scenes: ['会議・交渉で使いたい', '意思決定したい', '人脈を作りたい'],
    features: ['最短で効く使い方', '実戦コンボ', '60秒スクリプト', '報告・レビュー・提案の場面例'],
    summary: '考えを知的に、短く、誤解されにくく伝えるための表現技術集。会議、報告、企画提案で論点を構造化して伝える練習に使えます。'
  }
];

const quickOptions = [
  '問題を分解したい',
  '意思決定したい',
  '人間関係を整理したい',
  '社内政治を有利に進めたい',
  'アイデアを出したい',
  '人脈を作りたい',
  '戦略を立てたい',
  '会議・交渉で使いたい'
];

const recommendedPaths = [
  {
    title: '初心者向け',
    subtitle: '基本の思考整理から始める',
    ids: ['essential-thinking', 'communication', 'situation-recovery']
  },
  {
    title: '仕事向け',
    subtitle: '合意形成と実務推進を整える',
    ids: ['organizational-alignment', 'communication', 'strategic-advantage']
  },
  {
    title: '起業・新規事業向け',
    subtitle: '発想から戦略、人脈形成へ',
    ids: ['creativity', 'strategic-advantage', 'network-building']
  },
  {
    title: '対人関係向け',
    subtitle: '会話、状況整理、組織調整の順に確認',
    ids: ['communication', 'situation-recovery', 'organizational-alignment']
  }
];

const state = {
  search: '',
  category: 'all',
  usecase: 'all'
};

const elements = {
  totalCount: document.querySelector('#total-count'),
  quickSelector: document.querySelector('#quick-selector'),
  searchInput: document.querySelector('#search-input'),
  categoryFilter: document.querySelector('#category-filter'),
  usecaseFilter: document.querySelector('#usecase-filter'),
  resetFilters: document.querySelector('#reset-filters'),
  resultCount: document.querySelector('#result-count'),
  cardGrid: document.querySelector('#card-grid'),
  emptyState: document.querySelector('#empty-state'),
  pathGrid: document.querySelector('#path-grid')
};

function makeFileUrl(fileName) {
  return encodeURI(fileName);
}

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'ja'));
}

function setSelectOptions(select, values) {
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function renderQuickSelector() {
  elements.quickSelector.innerHTML = '';
  quickOptions.forEach((label) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quick-chip';
    button.textContent = label;
    button.setAttribute('aria-pressed', String(state.usecase === label));
    button.addEventListener('click', () => {
      state.usecase = state.usecase === label ? 'all' : label;
      elements.usecaseFilter.value = state.usecase;
      render();
      document.querySelector('#frameworks').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    elements.quickSelector.append(button);
  });
}

function frameworkMatches(framework) {
  const text = [
    framework.title,
    framework.sourceTitle,
    framework.category,
    framework.summary,
    framework.scenes.join(' '),
    framework.features.join(' '),
    framework.file
  ].join(' ').toLowerCase();
  const searchMatch = !state.search || text.includes(state.search.toLowerCase());
  const categoryMatch = state.category === 'all' || framework.category === state.category;
  const usecaseMatch = state.usecase === 'all' || framework.scenes.includes(state.usecase);
  return searchMatch && categoryMatch && usecaseMatch;
}

function renderCards() {
  const visible = frameworks.filter(frameworkMatches);
  elements.cardGrid.innerHTML = '';
  elements.resultCount.textContent = String(visible.length);
  elements.emptyState.hidden = visible.length > 0;

  visible.forEach((framework) => {
    const article = document.createElement('article');
    article.className = 'framework-card';
    article.innerHTML = `
      <div class="card-meta">
        <span class="category">${framework.category}</span>
        <span class="count">収録数 ${framework.count}</span>
      </div>
      <h3>${framework.title}</h3>
      <p class="summary">${framework.summary}</p>
      <dl class="details">
        <div>
          <dt>使える場面</dt>
          <dd>${framework.scenes.map((scene) => `<span>${scene}</span>`).join('')}</dd>
        </div>
        <div>
          <dt>主な機能</dt>
          <dd>${framework.features.map((feature) => `<span>${feature}</span>`).join('')}</dd>
        </div>
      </dl>
      <div class="source">出典ファイル名：<code>${framework.file}</code></div>
      <a class="button card-button" href="${makeFileUrl(framework.file)}">開く</a>
    `;
    article.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      window.location.href = makeFileUrl(framework.file);
    });
    elements.cardGrid.append(article);
  });
}

function renderPaths() {
  const byId = new Map(frameworks.map((framework) => [framework.id, framework]));
  elements.pathGrid.innerHTML = '';
  recommendedPaths.forEach((path) => {
    const section = document.createElement('article');
    section.className = 'path-card';
    const items = path.ids
      .map((id, index) => {
        const framework = byId.get(id);
        return `<li><span>${index + 1}</span><a href="${makeFileUrl(framework.file)}">${framework.title}</a></li>`;
      })
      .join('');
    section.innerHTML = `
      <h3>${path.title}</h3>
      <p>${path.subtitle}</p>
      <ol>${items}</ol>
    `;
    elements.pathGrid.append(section);
  });
}

function render() {
  renderQuickSelector();
  renderCards();
}

function bindEvents() {
  elements.searchInput.addEventListener('input', (event) => {
    state.search = event.target.value.trim();
    renderCards();
  });
  elements.categoryFilter.addEventListener('change', (event) => {
    state.category = event.target.value;
    renderCards();
  });
  elements.usecaseFilter.addEventListener('change', (event) => {
    state.usecase = event.target.value;
    render();
  });
  elements.resetFilters.addEventListener('click', () => {
    state.search = '';
    state.category = 'all';
    state.usecase = 'all';
    elements.searchInput.value = '';
    elements.categoryFilter.value = 'all';
    elements.usecaseFilter.value = 'all';
    render();
  });
}

function init() {
  elements.totalCount.textContent = String(frameworks.length);
  setSelectOptions(elements.categoryFilter, uniqueValues(frameworks.map((framework) => framework.category)));
  setSelectOptions(elements.usecaseFilter, quickOptions);
  renderPaths();
  render();
  bindEvents();
}

init();
