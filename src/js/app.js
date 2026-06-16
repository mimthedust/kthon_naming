/* ─────────────────────────────────────
   System Prompt
───────────────────────────────────── */
const SYSTEM_PROMPT = `당신은 케이뱅크(Kbank) 전문 금융 브랜드 네이밍 컨설턴트입니다.

## 최우선 원칙: 직관성
네이밍의 목표는 단 하나, 보는 순간 "아, 이런 기능이구나"를 즉시 알 수 있는 이름입니다.
화려하거나 창의적인 이름이 아니라, 누구에게 설명하지 않아도 기능·서비스가 바로 보이는 이름이 최선입니다.

### 직관적 네이밍 기준 예시 (케이뱅크 현행 — 이 수준이 목표)
- "이체하기" → 이체 기능임을 즉시 알 수 있음
- "잠자는 잔고 모으기" → 여기저기 흩어진 휴면 잔고를 한데 모아주는 기능
- "이달의 지출점검" → 이번 달 지출을 확인·점검하는 기능
- "친구에게 1만원 선물하기" → 친구 초대 시 1만원 지급 이벤트
- "용돈받기" → 미션 수행 시 소액 지급
- "대출 비교하기" → 대출 상품들을 비교해주는 기능
- "우리집 변동알림" → 내 집 관련 금리·조건 변동을 알려주는 기능

### 피해야 할 네이밍 (이런 이름은 절대 제안하지 마세요)
- "핀테크 익스프레스" → 무슨 기능인지 전혀 알 수 없음
- "머니버스" → 금융 관련인지는 알지만 구체적 기능 불명확
- "스마트세이브+" → 무엇을 하는 서비스인지 불명확
- "K플로우" → 어떤 기능인지 짐작조차 어려움
- "햇살적금" → 감성적이나 어떤 적금인지 전혀 모름

## K/THON 26 경진대회 맥락
K/THON 26은 케이뱅크 사내 AI 경진대회로, AI를 활용한 금융상품·서비스 또는 업무 프로세스 개선 아이디어를 제출하는 행사.
아이디어 유형에 따라 네이밍 방향이 다르므로 반드시 구분하여 적용할 것.

### [업무 프로세스 개선] — 임직원 대상 인터널 브랜딩
- AI 활용이 드러나거나 연상되는 네이밍 권장 ('AI'라는 단어 불필요)
- 기능의 핵심을 직접 표현하는 네이밍을 우선으로 제안할 것
- '자동으로 상품요약하기', '내게 맞는 혜택만 받기'처럼 기능을 직관적으로 서술하는 형식이 훌륭한 네이밍
- 임직원이 이름만 들어도 "아, 이런 기능이구나"를 바로 알 수 있어야 함

### [신규 상품·서비스] — 대고객 브랜딩
- 고객이 앱에서 이름만 보고 기능·서비스를 즉시 이해할 수 있어야 함
- 기존 케이뱅크 서비스명(이체하기, 잠자는 잔고 모으기, 이달의 지출점검 등)과 동일한 결의 네이밍 제안
- 무분별한 네이밍은 케이뱅크 앱의 seamless한 경험을 해침 — 기존 taxonomy의 톤·형식과 일관성을 반드시 고려

## 케이뱅크 현행 서비스 네이밍 체계 (대고객 아이디어 참고용)
100% 준수 불필요. 각 카테고리 중 하나에 포함될 수 있도록 직관적이고 띄어쓰기 포함 10글자 이하로 네이밍할 것.
- 이체/출금: 이체하기, 이체내역, 이체한도 변경, 자동이체 등록/조회, 세금/공과금 내기, 타행 자동납부 가져오기, 케이뱅크페이
- 계좌: 잠자는 잔고 모으기, 계좌통합조회, 계좌 만들기, 계좌 숨기기, 나의 현금흐름, 휴대폰 계좌번호, 이달의 지출점검
- 카드: 체크카드 만들기, 카드 사용내역, 신용카드 만들기, 브랜드 쿠폰북, 교통카드 이용내역, 정부지원금 받기
- 대출: 내 신용관리, 대출 비교하기, 내 DSR 계산기, 우리집 변동알림
- 투자: 업비트 라운지, 주간 투자왕, 업비트 입금한도, 주식 둘러보기, 주식 투자, 투자 스터디, 공모주 메이트, 투자 캘린더, 금 투자 서비스
- 해외: 해외송금하기, 우대받고 환전하기
- 생활/편의: 오아시스장보기, 입출금 리워드, 오늘의 생활시세, 요즘 케뱅, 친구에게 1만원 선물하기
- 사장님: 사장님 통장, 사장님 전용대출, 거래처 정보조회, 사장님 경영컨설팅, 사장님 신용리포트, 맞춤 정책자금 받기, AI 세무상담
- 청소년: 알파 통장, 머니미션, 알파카드, 청소년 교통카드 조회/충전

## 케이뱅크 브랜드 정체성
- 핵심 가치: 심플함, 간편함, 신뢰감, 디지털 혁신
- 톤앤매너: 친근하되 신뢰감 있음 / 명확하고 군더더기 없음
- 지양: 과도하게 화려한 표현, 장난스러운 표현, 영어 조어 남발, 감성적·추상적 브랜드명
- 허용(서비스의 경우): 병맛이 아닌 위트 있는 수준까지 — 단, 금융 상품에는 적용 불가

## 네이밍 필수 조건 (모두 충족)
1. 사용 가능 문자: 한글(가~힣), 로마자(A~Z, a~z), 숫자(0~9), 띄어쓰기만 허용. 한자·일본어(히라가나·가타카나)·아랍어·인도어 등 그 외 모든 문자 사용 절대 금지.
2. 글자 수: 2글자 이상 ~ 10글자 이하 (띄어쓰기 포함)
   - 적정 범위: 3~8글자 (발음하기 쉽고 기억하기 좋음)
   - 2글자는 강한 임팩트가 있을 때만 허용
   - 두 단어 조합 시 띄어쓰기 포함 최대 10글자
3. 경쟁사 기존 서비스명과 동일하거나 유사한 이름 절대 금지
4. 적금·예금·포인트 등 보편적 금융 용어 사용 시 차별화 수식어 필수
5. 외국어 사용 원칙: 한국어로 표현 가능하면 반드시 한국어 사용. 영어는 유치원생도 이해할 수 있는 수준(기프트·코인·라운지·캘린더·페이·카드·포인트 수준)만 허용. 세 안 중 최소 2개는 순한국어 또는 한자어 기반으로 제안.
6. 세 가지 안은 반드시 아래 다양성 원칙을 따를 것

## 네이밍 다양성 원칙 (3가지 안 필수 준수)
세 가지 안은 모두 직관성을 최우선으로 하되, 표현 형태를 다르게 구성합니다.
감성적·추상적 이름, 설명 없이는 뜻을 알 수 없는 이름은 어떤 안에도 포함하지 마세요.

### 형태 유형 (3가지 안 각각 다른 형태로)
- **서술·동사형**: 행동을 직접 서술. 가장 직관적인 형태. (예: "잠자는 잔고 모으기", "이체하기", "친구에게 1만원 선물하기", "대출 비교하기", "자동으로 상품요약하기")
- **수식·명사형**: 수식어+명사로 성격·대상을 드러냄. (예: "이달의 지출점검", "내 신용관리", "우리집 변동알림", "오늘의 생활시세", "나의 현금흐름")
- **압축·직접형**: 핵심 기능·대상을 간결하게 압축. (예: "용돈받기", "계좌 숨기기", "계좌통합조회", "AI 세무상담")

### 언어 구성 우선순위
- 순한국어·한자어형 최우선: 가장 폭넓은 연령대가 이해 가능. **세 안 중 최소 2개 이상 반드시 순한국어·한자어 기반**
- 혼용형(필요 시): 한국어+영어 결합. 영어 단어가 유치원생도 아는 수준일 때만. 세 안 중 최대 1개.
- 영문차용형 최소화: 반드시 필요한 경우에만 세 안 중 최대 1개. 절대 조어 영어 합성어 금지.

## 조어(신조어) 규칙
- **허용**: 두 단어의 의미론적 결합으로 새 의미를 만드는 경우 (예: "돈모아", "키움통장")
- **허용**: 발음 유사성을 활용한 창의적 조합 (단, 의미가 명확해야 함)
- **금지**: 의미 없는 음절 나열, 무작위 영어 발음 조합
- **금지**: 동음이의어로 인해 오해를 유발할 수 있는 조합
- **금지**: 경쟁사 기존 조어와 유사한 패턴

## 금융감독원 준수사항 (반드시 준수)
- 소비자에게 오해·오인을 유발할 수 있는 과장된 표현 금지
- 원금 손실 가능 상품에 "안전", "보장", "원금 보호" 등 혼동 유발 단어 사용 금지
- 금리·수익률을 과대 암시하는 표현 금지 (예: "고수익", "최고금리" 등)
- 실제 상품 특성과 다른 명칭 사용 금지

## 네이밍 검토 시 참고 기준 (학습된 지식을 바탕으로 유사 사례 검토)
제안하는 네이밍과 태그라인은 아래 공신력 있는 출처에서 확인 가능한 기존 사례와 충돌하지 않도록 검토하세요.
블로그·SNS(인스타그램, 유튜브, X 등) 기반 정보는 참고하지 마세요.

- 특허청 키프리스 (kipris.or.kr): 상표 등록 현황 — 동일·유사 상표 충돌 가능성 검토
- 금융감독원 금융상품 통합비교공시 (finlife.fss.or.kr): 기존 금융상품명 중복 여부 검토
- 은행연합회 공시 자료: 국내 은행권 상품명 중복 여부 검토
- 경쟁사 공식 홈페이지: 토스, 카카오뱅크, KB국민, 신한, 하나, 우리, IBK기업, NH농협 등 공식 채널 기준
- 주요 언론사 보도자료: 연합뉴스, 조선일보, 중앙일보, 한국경제, 매일경제, 한겨레 등 신뢰 언론사
- 금융위원회·금융감독원 보도자료 및 공시 자료
- 공신력 있는 국내외 금융 관련 기관·협회 자료

## 경쟁사 기존 서비스명 (동일/유사 명칭 사용 금지)
- 토스: 토스뱅크, 토스페이, 티니(TINI), 만보기, 행운복권, 돈관리, 용돈기록장, 모임통장, 파킹통장, 먹고자는데쓰는통장, 이자농사
- 카카오뱅크: 한달적금, 모임통장, 세이프박스, 26주적금, 저금통, 비상금대출, 미니(mini), 연결계좌, 프리덤적금
- KB국민: KB스타뱅킹, 리브(Liiv), 리브넥스트, 마이머니, 스타클럽, 락스타
- 신한: 쏠(SOL), 머니버스, 쏠야구, 쏠페이, 신한페이판
- 하나: 하나원큐, 모이머니, 클럽원, 하나멤버스
- 우리: 우리WON뱅킹, 위비(WiBee), 우리페이
- IBK기업: 아이원(i-ONE)
- NH농협: 올원뱅크, NH페이

## 응답 형식
반드시 아래 JSON 형식으로만 응답하세요. JSON 외의 텍스트는 절대 포함하지 마세요.

{
  "namings": [
    {
      "name": "네이밍 (2~10글자, 띄어쓰기 포함)",
      "tagline": "핵심 가치를 담은 태그라인 (20자 이내)",
      "rationale": "이 네이밍이 USP를 어떻게 반영하는지, 케이뱅크 브랜드와 왜 맞는지 설명 (2~3문장)"
    },
    { "name": "...", "tagline": "...", "rationale": "..." },
    { "name": "...", "tagline": "...", "rationale": "..." }
  ]
}`;

/* ─────────────────────────────────────
   State
───────────────────────────────────── */
let selectedRole     = null;
let selectedIdeaType = null;
let currentUSP       = '';
let previousNames    = [];
let currentResults   = null;
let retryCount       = 0;
let loadingTimer     = null;
let elapsedTimer     = null;
let triviaTimer      = null;
let triviaQueue      = [];
let triviaIdx        = 0;
let autoScrollRAF    = null;
let autoScrollPaused = false;

/* ─────────────────────────────────────
   Init
───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderRoleCards();
  startAutoScroll();

  const grid = document.getElementById('roleGrid');
  grid.addEventListener('mouseenter', () => { autoScrollPaused = true; });
  grid.addEventListener('mouseleave', () => { autoScrollPaused = false; });
  grid.addEventListener('touchstart',  () => { autoScrollPaused = true; }, { passive: true });
  grid.addEventListener('touchend',    () => { setTimeout(() => { autoScrollPaused = false; }, 2000); }, { passive: true });

  document.getElementById('uspInput').addEventListener('input', function () {
    const len = this.value.length;
    const el  = document.getElementById('charCount');
    el.textContent = `${len} / 500`;
    el.style.color = len > 450 ? '#C0392B' : '';

    // 실시간 욕설 감지
    if (hasProfanity(this.value)) {
      showProfanityPopup();
      this.value = this.value.slice(0, -1); // 마지막 글자 제거
      el.textContent = `${this.value.length} / 500`;
    }
  });
});

/* ─────────────────────────────────────
   Auto scroll
───────────────────────────────────── */
function startAutoScroll() {
  function step() {
    const grid = document.getElementById('roleGrid');
    if (grid && !autoScrollPaused) {
      const max = grid.scrollWidth - grid.clientWidth;
      if (grid.scrollLeft >= max) {
        grid.scrollLeft = 0;
      } else {
        grid.scrollLeft += 0.4;
      }
    }
    autoScrollRAF = requestAnimationFrame(step);
  }
  autoScrollRAF = requestAnimationFrame(step);
}

function scrollRoles(direction) {
  const grid = document.getElementById('roleGrid');
  const cardW = 130 + 8; // card width + gap
  autoScrollPaused = true;
  grid.scrollBy({ left: direction * cardW, behavior: 'smooth' });
  setTimeout(() => { autoScrollPaused = false; }, 1200);
}

/* ─────────────────────────────────────
   Role cards
───────────────────────────────────── */
function renderRoleCards() {
  const grid = document.getElementById('roleGrid');
  grid.innerHTML = ROLES.map((role, i) => `
    <button class="role-card" data-id="${role.id}" onclick="selectRole('${role.id}')"
      style="animation-delay:${(0.18 + i * 0.04).toFixed(2)}s">
      <span class="role-card-label">${escHtml(role.label)}</span>
      <span class="role-card-desc">${escHtml(role.desc)}</span>
    </button>
  `).join('');
}

function selectRole(id) {
  selectedRole = ROLES.find(r => r.id === id) || null;

  document.querySelectorAll('.role-card').forEach(el => {
    el.classList.toggle('selected', el.dataset.id === id);
  });
}

/* ─────────────────────────────────────
   Idea type selection
───────────────────────────────────── */
const IDEA_TYPE_LABELS = {
  process: '업무 프로세스 개선 아이디어',
  product: '신규 상품·서비스 아이디어',
};

function selectIdeaType(type) {
  if (type === 'beta') {
    showComingSoonPopup();
    return;
  }

  selectedIdeaType = type;
  document.querySelectorAll('.idea-type-card').forEach(el => {
    el.classList.toggle('selected', el.dataset.type === type);
  });

  document.getElementById('uspInput').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showComingSoonPopup() {
  document.getElementById('comingSoonBackdrop').classList.remove('hidden');
  document.getElementById('comingSoonPopup').classList.remove('hidden');
}

function closeComingSoonPopup() {
  document.getElementById('comingSoonBackdrop').classList.add('hidden');
  document.getElementById('comingSoonPopup').classList.add('hidden');
}

/* ─────────────────────────────────────
   Generate — validation gate
───────────────────────────────────── */
async function generateNames() {
  const usp = document.getElementById('uspInput').value.trim();

  if (!selectedIdeaType) {
    shakeEl('generateBtn');
    showToast('아이디어 유형을 먼저 선택해 주세요.');
    return;
  }

  if (!usp || usp.length < 10) {
    shakeEl('uspInput');
    showToast('아이디어 핵심 내용을 10자 이상 입력해 주세요.');
    return;
  }

  // 욕설은 키워드로 즉시 차단
  if (hasProfanity(usp)) {
    showProfanityPopup();
    return;
  }

  // AI 의도 분류
  setGenerateBtnAnalyzing(true);
  const { category, summary, meme } = await classifyUSP(usp);
  setGenerateBtnAnalyzing(false);

  if (category === 'personal') {
    showMemePopup(meme);
    return;
  }
  if (category === 'offcontext') {
    showConfirmPopup(usp, summary);
    return;
  }

  doGenerate(usp);
}

async function doGenerate(usp) {
  currentUSP = usp;

  setGenerateBtnLoading(true);
  showSection('loadingSection');
  startLoadingMessages();

  try {
    const data = await callAI(usp, previousNames);
    currentResults = data.namings;
    renderResults(data.namings);
    showSection('resultSection');
  } catch (err) {
    showSection('inputSection');
    showToast(err.message || '오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  } finally {
    stopLoadingMessages();
    setGenerateBtnLoading(false);
  }
}

/* ─────────────────────────────────────
   Guard popup functions
───────────────────────────────────── */

// ① 욕설 팝업 (1초 후 자동 소멸)
function showProfanityPopup() {
  const popup = document.getElementById('profanityPopup');
  popup.classList.remove('hidden', 'fading');
  clearTimeout(popup._t);
  popup._t = setTimeout(() => {
    popup.classList.add('fading');
    setTimeout(() => popup.classList.add('hidden'), 300);
  }, 1000);
}

// ② 밈 팝업
function showMemePopup(dynamicMeme) {
  const meme = (dynamicMeme && dynamicMeme.main) ? dynamicMeme : randomMeme();
  document.getElementById('memeEmoji').textContent = meme.emoji;
  document.getElementById('memeMain').textContent  = meme.main;
  document.getElementById('memeSub').textContent   = meme.sub;
  document.getElementById('memeBackdrop').classList.remove('hidden');
  document.getElementById('memePopup').classList.remove('hidden');
}

function closeMemePopup() {
  document.getElementById('memeBackdrop').classList.add('hidden');
  document.getElementById('memePopup').classList.add('hidden');
}

// ③ 컨펌 팝업 (summary: AI가 정리한 의도, 없으면 원문 축약)
function showConfirmPopup(usp, summary) {
  const display = summary || (usp.length > 70 ? usp.slice(0, 70) + '…' : usp);
  document.getElementById('confirmText').textContent = `"${display}"`;
  document.getElementById('confirmBackdrop').classList.remove('hidden');
  document.getElementById('confirmPopup').classList.remove('hidden');
}

function closeConfirmPopup() {
  document.getElementById('confirmBackdrop').classList.add('hidden');
  document.getElementById('confirmPopup').classList.add('hidden');
}

function proceedGenerate() {
  const usp = document.getElementById('uspInput').value.trim();
  closeConfirmPopup();
  doGenerate(usp);
}

/* ─────────────────────────────────────
   AI 호출 (Pollinations — 키 불필요)
───────────────────────────────────── */
async function callAI(usp, prevNames, feedbackNote) {
  const ideaLabel = IDEA_TYPE_LABELS[selectedIdeaType] || '';
  let userMessage = '';
  if (ideaLabel)     userMessage += `아이디어 유형: ${ideaLabel}\n`;
  if (selectedRole)  userMessage += `담당자 역할 (참고): [${selectedRole.label}] ${selectedRole.desc}\n`;
  userMessage += `\n핵심 내용:\n${usp}`;

  if (prevNames.length > 0) {
    userMessage += `\n\n이미 제안된 네이밍 (반드시 제외):\n` +
      prevNames.map((n, i) => `${i + 1}. ${n}`).join('\n');
  }

  if (feedbackNote && feedbackNote.trim()) {
    userMessage += `\n\n사용자 피드백 (이전 제안에 대한 의견, 반드시 반영):\n"${feedbackNote.trim()}"`;
  }

  const MAX_RETRIES = 4;
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      showToast(`잠시 대기 후 재시도 중... (${attempt}/${MAX_RETRIES - 1})`);
      await new Promise(r => setTimeout(r, 5000 * attempt));
    }

    let res, raw;
    try {
      res = await fetch(GROQ_URL, {
        method:  'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model:           GROQ_MODEL,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user',   content: userMessage },
          ],
          temperature:     1.0,
          response_format: { type: 'json_object' },
        }),
      });
      raw = await res.text();
    } catch {
      if (attempt < MAX_RETRIES - 1) continue;
      throw new Error('AI 서버에 연결할 수 없습니다. 네트워크를 확인해 주세요.');
    }

    let groqJson;
    try { groqJson = JSON.parse(raw); } catch {}

    if (res.status === 429 || groqJson?.error?.code === 'rate_limit_exceeded') {
      if (attempt < MAX_RETRIES - 1) continue;
      throw new Error('AI 서버가 일시적으로 바쁩니다. 잠시 후 다시 시도해 주세요.');
    }
    if (!res.ok || groqJson?.error) {
      throw new Error(groqJson?.error?.message || `오류가 발생했습니다 (${res.status})`);
    }

    const content = groqJson?.choices?.[0]?.message?.content;
    if (!content) { if (attempt < MAX_RETRIES - 1) continue; throw new Error('응답을 받지 못했습니다.'); }

    let parsed;
    try { parsed = JSON.parse(content); }
    catch {
      const m = content.match(/\{[\s\S]*\}/);
      if (!m) { if (attempt < MAX_RETRIES - 1) continue; throw new Error('응답을 파싱할 수 없습니다.'); }
      try { parsed = JSON.parse(m[0]); }
      catch { if (attempt < MAX_RETRIES - 1) continue; throw new Error('응답을 파싱할 수 없습니다.'); }
    }

    if (!Array.isArray(parsed?.namings) || parsed.namings.length !== 3) {
      if (attempt < MAX_RETRIES - 1) continue;
      throw new Error('네이밍 3개가 반환되지 않았습니다. 다시 시도해 주세요.');
    }

    // name·tagline에만 비허용 문자 검사 (rationale은 한자 혼용 가능성이 있어 제외)
    const BLOCKED_SCRIPT = /[一-鿿぀-ヿऀ-ॿ؀-ۿ]/;
    const hasBlocked = parsed.namings.some(n =>
      BLOCKED_SCRIPT.test(n.name) || BLOCKED_SCRIPT.test(n.tagline)
    );
    if (hasBlocked) {
      if (attempt < MAX_RETRIES - 1) continue;
      throw new Error('네이밍에 허용되지 않은 문자가 포함되었습니다. 다시 시도해 주세요.');
    }

    return parsed;
  }
}

/* ─────────────────────────────────────
   Render results
───────────────────────────────────── */
function renderResults(namings) {
  const grid = document.getElementById('resultGrid');
  grid.innerHTML = '';

  namings.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'naming-card';
    card.innerHTML = `
      <div class="card-number">0${i + 1}</div>
      <div class="card-content">
        <h3 class="card-name">${escHtml(item.name)}</h3>
        <p class="card-tagline">"${escHtml(item.tagline)}"</p>
        <div class="card-divider"></div>
        <p class="card-rationale">${escHtml(item.rationale)}</p>
        <button class="card-copy-btn"
          onclick="copyCard(this, '${escAttr(item.name)}', '${escAttr(item.tagline)}')">
          복사
        </button>
      </div>
    `;
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 80 + i * 130);
  });

  const uspEl = document.getElementById('resultUspText');
  uspEl.textContent = currentUSP.length > 90
    ? currentUSP.slice(0, 90) + '…'
    : currentUSP;

  updateRetryHint();
}

/* ─────────────────────────────────────
   Feedback
───────────────────────────────────── */
function handleFeedback(isAccepted) {
  if (isAccepted) {
    renderAccepted(currentResults);
    showSection('acceptedSection');
    return;
  }
  showFeedbackModal();
}

function showFeedbackModal() {
  document.getElementById('feedbackInput').value = '';
  document.getElementById('feedbackBackdrop').classList.remove('hidden');
  document.getElementById('feedbackPopup').classList.remove('hidden');
  setTimeout(() => document.getElementById('feedbackInput').focus(), 50);
}

function closeFeedbackModal() {
  document.getElementById('feedbackBackdrop').classList.add('hidden');
  document.getElementById('feedbackPopup').classList.add('hidden');
}

function submitFeedback(skipFeedback) {
  const note = skipFeedback ? '' : document.getElementById('feedbackInput').value.trim();
  closeFeedbackModal();

  previousNames.push(...currentResults.map(n => n.name));
  retryCount++;
  updateRetryHint();

  showSection('loadingSection');
  startLoadingMessages();

  callAI(currentUSP, previousNames, note)
    .then(data => {
      currentResults = data.namings;
      renderResults(data.namings);
      showSection('resultSection');
    })
    .catch(err => {
      showSection('resultSection');
      showToast(err.message || '재생성 중 오류가 발생했습니다.');
    })
    .finally(stopLoadingMessages);
}

function updateRetryHint() {
  const el = document.getElementById('retryHint');
  if (!el) return;
  el.textContent = retryCount > 0
    ? `${retryCount}회 재생성 · 이전 ${previousNames.length}개 네이밍 제외 중`
    : '';
}

/* ─────────────────────────────────────
   Accepted screen
───────────────────────────────────── */
function renderAccepted(namings) {
  const list = document.getElementById('acceptedList');
  list.innerHTML = '';

  const oldBtn = list.nextElementSibling;
  if (oldBtn && oldBtn.classList.contains('accepted-copy-all')) oldBtn.remove();

  namings.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'accepted-item';
    div.innerHTML = `
      <span class="accepted-num">0${i + 1}</span>
      <div>
        <span class="accepted-name-text">${escHtml(item.name)}</span>
        <span class="accepted-tagline-text">"${escHtml(item.tagline)}"</span>
      </div>
    `;
    list.appendChild(div);
  });

  const copyBtn = document.createElement('button');
  copyBtn.className = 'accepted-copy-all';
  copyBtn.innerHTML = '📋 전체 복사';
  copyBtn.onclick   = () => copyAll(copyBtn, namings);
  list.after(copyBtn);
}

function copyResults() {
  const btn = document.getElementById('copyResultsBtn');
  if (!currentResults) return;
  const text = currentResults
    .map((n, i) => `[0${i + 1}] ${n.name}\n     태그라인: "${n.tagline}"\n     ${n.rationale}`)
    .join('\n\n');
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ 복사됨';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '📋 결과 복사하기';
      btn.classList.remove('copied');
    }, 2000);
  });
}

function copyAll(btn, namings) {
  const text = namings
    .map((n, i) => `[0${i + 1}] ${n.name}\n     태그라인: "${n.tagline}"`)
    .join('\n\n');
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ 복사됨';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '📋 전체 복사';
      btn.classList.remove('copied');
    }, 2000);
  });
}

/* ─────────────────────────────────────
   Navigation
───────────────────────────────────── */
function showSection(id) {
  ['inputSection', 'loadingSection', 'resultSection', 'acceptedSection']
    .forEach(s => document.getElementById(s).classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function goBack() { showSection('inputSection'); }

function restart() {
  selectedRole     = null;
  selectedIdeaType = null;
  previousNames    = [];
  currentResults   = null;
  retryCount       = 0;
  document.querySelectorAll('.role-card').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.idea-type-card').forEach(el => el.classList.remove('selected'));
  document.getElementById('uspInput').value        = '';
  document.getElementById('charCount').textContent = '0 / 500';
  showSection('inputSection');
}

/* ─────────────────────────────────────
   Copy single card
───────────────────────────────────── */
function copyCard(btn, name, tagline) {
  navigator.clipboard.writeText(`${name}\n"${tagline}"`).then(() => {
    btn.textContent = '✓ 복사됨';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '복사';
      btn.classList.remove('copied');
    }, 2000);
  });
}

/* ─────────────────────────────────────
   Loading messages + timer
───────────────────────────────────── */
const LOADING_MSGS = [
  '경쟁사 서비스명 검토 중...',
  '케이뱅크 브랜드 가이드라인 적용 중...',
  '금융감독원 준수사항 확인 중...',
  '상표 등록 유사 사례 검토 중...',
  '창의적인 네이밍 조합 중...',
  '태그라인 다듬는 중...',
  '최종 검수 중...',
];

function startLoadingMessages() {
  let idx = 0;
  let elapsed = 0;
  const subEl  = document.getElementById('loadingSub');
  const barEl  = document.getElementById('loadingProgressBar');
  const timeEl = document.getElementById('loadingTimer');

  if (subEl) subEl.textContent = LOADING_MSGS[0];
  if (barEl) barEl.style.width = '0%';
  if (timeEl) timeEl.textContent = '잠시만 기다려 주세요';

  startTrivia();

  loadingTimer = setInterval(() => {
    idx++;
    const el = document.getElementById('loadingSub');
    if (el) {
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent   = LOADING_MSGS[idx % LOADING_MSGS.length];
        el.style.opacity = '1';
      }, 200);
    }
  }, 1800);

  // 경과 시간 + 진행 바 (최대 30초 기준으로 표시)
  elapsedTimer = setInterval(() => {
    elapsed++;
    const bar  = document.getElementById('loadingProgressBar');
    const time = document.getElementById('loadingTimer');
    if (bar)  bar.style.width  = `${Math.min(elapsed / 30 * 100, 95)}%`;
    if (time) time.textContent = `${elapsed}초 경과 중...`;
  }, 1000);
}

function stopLoadingMessages() {
  clearInterval(loadingTimer);
  clearInterval(elapsedTimer);
  clearInterval(triviaTimer);
  loadingTimer = null;
  elapsedTimer = null;
  triviaTimer  = null;
  const bar = document.getElementById('loadingProgressBar');
  if (bar) bar.style.width = '100%';
}

/* ─────────────────────────────────────
   Trivia
───────────────────────────────────── */
function startTrivia() {
  // 순서를 섞어서 중복 없이 순환
  triviaQueue = [...TRIVIA].sort(() => Math.random() - 0.5);
  triviaIdx   = 0;
  showTriviaItem(triviaQueue[triviaIdx++]);

  triviaTimer = setInterval(() => {
    const card = document.getElementById('triviaCard');
    if (!card) return;
    card.classList.add('fading');
    setTimeout(() => {
      if (triviaIdx >= triviaQueue.length) {
        triviaQueue.sort(() => Math.random() - 0.5);
        triviaIdx = 0;
      }
      showTriviaItem(triviaQueue[triviaIdx++]);
      card.classList.remove('fading');
    }, 350);
  }, 8000);
}

function showTriviaItem(item) {
  const ttl  = document.getElementById('triviaTitle');
  const body = document.getElementById('triviaContent');
  if (ttl)  ttl.textContent  = item.title;
  if (body) body.textContent = item.content;
}

/* ─────────────────────────────────────
   UI helpers
───────────────────────────────────── */
function setGenerateBtnLoading(on) {
  const btn   = document.getElementById('generateBtn');
  const label = btn.querySelector('.btn-label');
  btn.disabled      = on;
  label.textContent = on ? '생성 중...' : '네이밍 생성하기';
}

function setGenerateBtnAnalyzing(on) {
  const btn   = document.getElementById('generateBtn');
  const label = btn.querySelector('.btn-label');
  btn.disabled      = on;
  label.textContent = on ? '분석 중...' : '네이밍 생성하기';
}

function shakeEl(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.animation = 'shake .35s ease';
  setTimeout(() => { el.style.animation = ''; }, 400);
}

function showToast(msg) {
  let toast = document.getElementById('_toast');
  if (!toast) {
    toast    = document.createElement('div');
    toast.id = '_toast';
    toast.style.cssText = [
      'position:fixed', 'bottom:28px', 'left:50%', 'transform:translateX(-50%)',
      'background:#070D3B', 'color:#fff', 'padding:12px 22px',
      'border-radius:8px', 'font-size:14px', 'font-weight:600',
      'box-shadow:0 4px 16px rgba(1,20,167,.25)', 'z-index:999',
      'opacity:0', 'transition:opacity .25s', 'white-space:nowrap',
      'pointer-events:none',
    ].join(';');
    document.body.appendChild(toast);
  }
  toast.textContent   = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 3200);
}

/* ─────────────────────────────────────
   Escape helpers
───────────────────────────────────── */
function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escAttr(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
