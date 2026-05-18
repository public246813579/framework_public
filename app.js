const frameworks = [
  {
    id: 'essential-thinking',
    file: 'preview (1).html',
    title: '本質的思考フレームワーク48',
    sourceTitle: '本質的思考フレームワーク48 実用HTML',
    category: '本質思考',
    count: '48',
    scenes: ['問題を分解したい', '意思決定したい', '会議・交渉で使いたい'],
    features: ['標準ワークフロー', '実務テンプレート', '用途別おすすめセット'],
    summary: '問題解決の基本動作を、定義から検証まで一枚で追える入口です。',
    diagram: [
      { label: '定義', detail: '何が問題か、誰に影響するか、成功条件は何かを固定する。' },
      { label: '仮説', detail: '原因・打ち手・前提を分け、まず検証すべき論点を絞る。' },
      { label: '決定', detail: '選択肢を比較し、判断基準・リスク・次アクションを明文化する。' },
      { label: '学習', detail: 'AARで結果と学びを残し、次回の判断材料に変える。' }
    ],
    application: '週次レビューや企画前の30分で、散らかった論点を「決めるべき問い」に変換する。'
  },
  {
    id: 'communication',
    file: 'preview.html',
    title: '人間関係・コミュニケーション思考フレームワーク24',
    sourceTitle: '人間関係・コミュニケーション思考フレームワーク24',
    category: '人間関係',
    count: '24',
    scenes: ['人間関係を整理したい', '会議・交渉で使いたい', '意思決定したい'],
    features: ['会話前チェック', '状況別選択表', '難しい会話テンプレート'],
    summary: '会話の目的、関係、伝え方を整える対話設計ツールです。',
    diagram: [
      { label: '目的', detail: '合意、相談、依頼、確認など、会話のゴールを先に決める。' },
      { label: '関係', detail: '相手の関心・不安・立場を想定し、衝突点を減らす。' },
      { label: '内容', detail: '事実、解釈、感情、依頼を分けて短く組み立てる。' },
      { label: '次手', detail: '最後に期限・担当・確認方法を合わせ、曖昧さを残さない。' }
    ],
    application: '1on1、依頼、謝罪、合意形成の前に、伝える順番をメモ化してから話す。'
  },
  {
    id: 'organizational-alignment',
    file: 'preview (7).html',
    title: '社内政治フレームワーク24 実践ツールキット',
    sourceTitle: '社内政治フレームワーク24 実践ツールキット',
    category: '社内政治',
    count: '24',
    scenes: ['社内政治を有利に進めたい', '会議・交渉で使いたい', '意思決定したい'],
    features: ['関係者マップ', '一枚紙思考', '週次運用'],
    summary: '組織内の合意形成を、関係者・判断基準・進め方で整理します。',
    diagram: [
      { label: '関係者', detail: '決裁者、影響者、実務担当、反対要因を見える化する。' },
      { label: '基準', detail: '相手が何で判断するかを先取りし、材料を圧縮する。' },
      { label: '事前調整', detail: '会議前に小さく確認し、サプライズと誤解を減らす。' },
      { label: '合意', detail: '論点、選択肢、依頼事項を一枚にまとめて決めやすくする。' }
    ],
    application: '稟議、横断案件、上司報告で、会議前に「誰の何を揃えるか」を確認する。'
  },
  {
    id: 'network-building',
    file: 'preview (6).html',
    title: '素晴らしい人脈づくりのための24思考フレームワーク',
    sourceTitle: '素晴らしい人脈づくりのための24思考フレームワーク',
    category: '人脈形成',
    count: '24',
    scenes: ['人脈を作りたい', '人間関係を整理したい', '戦略を立てたい'],
    features: ['人脈設計シート', '関係温度スコア', '紹介・フォローテンプレート'],
    summary: '偶然任せにせず、相互価値のある関係を設計します。',
    diagram: [
      { label: '目的', detail: '学習、協業、採用、相談など、関係づくりの北極星を決める。' },
      { label: '価値', detail: '相手に渡せる情報、紹介、手伝い、視点を具体化する。' },
      { label: '接点', detail: '紹介、イベント、発信、再会など自然な接点を選ぶ。' },
      { label: '継続', detail: '24時間フォローと90日運用で信頼を薄く長く育てる。' }
    ],
    application: '会いたい人リストを作る前に、相手に提供できる小さな価値を3つ書き出す。'
  },
  {
    id: 'creativity',
    file: 'preview (5).html',
    title: '創造性・革新性のための思考フレームワーク24',
    sourceTitle: '創造性・革新性のための思考フレームワーク24',
    category: '創造性・革新',
    count: '24',
    scenes: ['アイデアを出したい', '問題を分解したい', '戦略を立てたい'],
    features: ['5ステップ運用', '共通ワークシート', '実戦での選び方'],
    summary: '視点を変え、組み合わせ、試すための発想ワークブックです。',
    diagram: [
      { label: '観察', detail: '顧客、現場、制約を見直し、違和感や未充足を拾う。' },
      { label: '転換', detail: '逆転、分解、結合、置換でいつもの見方を崩す。' },
      { label: '生成', detail: '質より量で案を出し、用途別に束ねて比較する。' },
      { label: '試作', detail: '最小の実験を作り、反応から次の仮説を更新する。' }
    ],
    application: '企画会議前に「観察メモ→転換問い→3案→小実験」までを1シートで回す。'
  },
  {
    id: 'strategic-advantage',
    file: 'preview (3).html',
    title: '戦略的有利化フレームワーク24',
    sourceTitle: '戦略的有利化フレームワーク24｜実用ワークブック',
    category: '戦略',
    count: '24',
    scenes: ['戦略を立てたい', '意思決定したい', '会議・交渉で使いたい'],
    features: ['8ステップ統合', '現在地整理', '倫理的ガードレール'],
    summary: '条件を整え、選択肢を増やし、実行しやすい戦略へ落とします。',
    diagram: [
      { label: '現在地', detail: '資源、制約、期限、失ってはいけないものを確認する。' },
      { label: '土俵', detail: '勝ち筋がある評価軸、比較条件、競争領域を選ぶ。' },
      { label: '選択肢', detail: '交渉余地、協力者、代替案を増やして一手依存を避ける。' },
      { label: '仕組み', detail: '再現できる手順、観測指標、撤退条件まで設計する。' }
    ],
    application: '新規提案や競争環境の整理で、「頑張る」前に条件設計を見直す。'
  },
  {
    id: 'situation-recovery',
    file: 'preview (2).html',
    title: '形勢逆転のための24思考フレームワーク',
    sourceTitle: '形勢逆転のための24思考フレームワーク 実戦プレイブック',
    category: '形勢逆転',
    count: '24',
    scenes: ['会議・交渉で使いたい', '問題を分解したい', '意思決定したい'],
    features: ['5分ワークフロー', '状況別早見表', '実戦テンプレート'],
    summary: '不利な状況を分解し、打開の条件を組み直します。',
    diagram: [
      { label: '盤面', detail: '争点、相手の要求、自分の制約、残り時間を整理する。' },
      { label: '条件', detail: '何が変われば前進するか、意思決定条件を再定義する。' },
      { label: '代替案', detail: 'BATNAや価値交換を用意し、選択肢の少なさを補う。' },
      { label: '提案', detail: '相手も受け取りやすい形に再構成し、小さな合意から始める。' }
    ],
    application: '会議や交渉で詰まったら、反論より先に「盤面・条件・代替案」を書く。'
  },
  {
    id: 'presence',
    file: 'preview (4).html',
    title: '天才っぽく見せるアピール用フレームワーク24',
    sourceTitle: '天才っぽく見せるアピール用フレームワーク24',
    category: '表現・プレゼンス',
    count: '24',
    scenes: ['会議・交渉で使いたい', '意思決定したい', '人脈を作りたい'],
    features: ['60秒スクリプト', '報告・レビュー型', '提案の型'],
    summary: '考えを短く、構造的に、伝わりやすく見せる表現練習です。',
    diagram: [
      { label: '結論', detail: '最初に何を言いたいか、聞き手に何を決めてほしいかを出す。' },
      { label: '前提', detail: '定義、範囲、判断軸を揃え、話の土台を共有する。' },
      { label: '根拠', detail: '事実、解釈、示唆を分けて、短い論理の階段にする。' },
      { label: '次手', detail: '確認、依頼、選択肢、期限を提示し、会話を前に進める。' }
    ],
    application: '報告や提案の前に、60秒で「結論→前提→根拠→次手」を声に出して整える。'
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
    subtitle: 'まず構造化、次に対話、最後に打開策。',
    ids: ['essential-thinking', 'communication', 'situation-recovery']
  },
  {
    title: '仕事向け',
    subtitle: '調整、対話、戦略設計を順に確認。',
    ids: ['organizational-alignment', 'communication', 'strategic-advantage']
  },
  {
    title: '起業・新規事業向け',
    subtitle: '発想、戦略、人脈形成を接続。',
    ids: ['creativity', 'strategic-advantage', 'network-building']
  },
  {
    title: '対人関係向け',
    subtitle: '会話設計から状況整理へ。',
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
    framework.application,
    framework.scenes.join(' '),
    framework.features.join(' '),
    framework.diagram.map((step) => `${step.label} ${step.detail}`).join(' '),
    framework.file
  ].join(' ').toLowerCase();
  const searchMatch = !state.search || text.includes(state.search.toLowerCase());
  const categoryMatch = state.category === 'all' || framework.category === state.category;
  const usecaseMatch = state.usecase === 'all' || framework.scenes.includes(state.usecase);
  return searchMatch && categoryMatch && usecaseMatch;
}

function renderDiagram(framework) {
  return `
    <div class="diagram" aria-label="${framework.title}の実務応用図解">
      ${framework.diagram.map((step, index) => `
        <div class="diagram-node">
          <span class="node-number">${index + 1}</span>
          <strong>${step.label}</strong>
          <p>${step.detail}</p>
        </div>
      `).join('')}
    </div>
  `;
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
        <span class="count">${framework.count} tools</span>
      </div>
      <h3>${framework.title}</h3>
      <p class="summary">${framework.summary}</p>
      ${renderDiagram(framework)}
      <div class="practice-box">
        <span>実務での使い方</span>
        <p>${framework.application}</p>
      </div>
      <details class="mini-details">
        <summary>場面・機能を見る</summary>
        <dl>
          <div>
            <dt>使える場面</dt>
            <dd>${framework.scenes.map((scene) => `<span>${scene}</span>`).join('')}</dd>
          </div>
          <div>
            <dt>主な機能</dt>
            <dd>${framework.features.map((feature) => `<span>${feature}</span>`).join('')}</dd>
          </div>
        </dl>
      </details>
      <div class="card-footer">
        <div class="source">出典：<code>${framework.file}</code></div>
        <a class="button card-button" href="${makeFileUrl(framework.file)}">本体を開く</a>
      </div>
    `;
    article.addEventListener('click', (event) => {
      if (event.target.closest('a, button, details, summary')) return;
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
