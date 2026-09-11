const desktop = document.querySelector('#desktop');
const dateTime = document.querySelector('#dateTime');
const bigTime = document.querySelector('#bigTime');
const fullDate = document.querySelector('#fullDate');
const themeToggle = document.querySelector('#themeToggle');
const contextMenu = document.querySelector('#contextMenu');
const menuPopover = document.querySelector('#menuPopover');

const menus = {
  apple: ['이 Mac에 관하여', '시스템 설정…', 'App Store…', '—', '최근 사용 항목', '강제 종료…', '—', '잠자기', '재시동…', '시스템 종료…', '화면 잠금'],
  finder: ['Finder에 관하여', '설정…', '—', '서비스', 'Finder 가리기', '기타 가리기'],
  file: ['새 Finder 윈도우', '새 폴더', '새 스마트 폴더', '—', '열기', '정보 가져오기', '—', '휴지통으로 이동'],
  edit: ['실행 취소', '복사', '붙여넣기', '모두 선택', '—', '받아쓰기', '이모티콘 및 기호'],
  view: ['아이콘으로', '목록으로', '열로', '갤러리로', '—', '사이드바 보기', '미리보기 보기', '보기 옵션 표시'],
  go: ['뒤로', '앞으로', '상위 폴더', '—', '최근 항목', '문서', '데스크탑', '다운로드', '응용 프로그램'],
  window: ['최소화', '확대/축소', '화면 왼쪽에 배치', '화면 오른쪽에 배치', '—', '모든 윈도우 앞으로 가져오기'],
  help: ['macos_dis 도움말', '검색']
};

function updateClock() {
  const now = new Date();
  bigTime.textContent = new Intl.DateTimeFormat('ko-KR', {
    hour: '2-digit', minute: '2-digit', hour12: false
  }).format(now);
  fullDate.textContent = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
  }).format(now);
  dateTime.textContent = new Intl.DateTimeFormat('ko-KR', {
    month: 'long', day: 'numeric', weekday: 'short', hour: 'numeric', minute: '2-digit'
  }).format(now).replace('오전', '오전').replace('오후', '오후');
}
updateClock();
setInterval(updateClock, 30000);

function openWindow(id) {
  document.querySelectorAll('.window').forEach(win => win.classList.add('hidden'));
  const target = document.getElementById(id);
  if (target) target.classList.remove('hidden');
  document.querySelectorAll('[data-window]').forEach(el => {
    el.classList.toggle('active', el.dataset.window === id);
  });
}

document.querySelectorAll('[data-window]').forEach(el => {
  el.addEventListener('click', () => openWindow(el.dataset.window));
});

themeToggle.addEventListener('click', () => {
  desktop.classList.toggle('theme-light');
});

document.querySelectorAll('.menu-trigger').forEach(trigger => {
  trigger.addEventListener('click', event => {
    event.stopPropagation();
    const key = trigger.dataset.menu;
    const items = menus[key] || [];
    menuPopover.innerHTML = '';
    items.forEach(item => {
      if (item === '—') {
        menuPopover.appendChild(document.createElement('div'));
        return;
      }
      const button = document.createElement('button');
      button.textContent = item;
      menuPopover.appendChild(button);
    });
    const rect = trigger.getBoundingClientRect();
    menuPopover.style.left = `${rect.left}px`;
    menuPopover.style.top = `${rect.bottom + 5}px`;
    menuPopover.classList.add('show');
    menuPopover.setAttribute('aria-hidden', 'false');
    contextMenu.classList.remove('show');
  });
});

desktop.addEventListener('contextmenu', event => {
  event.preventDefault();
  menuPopover.classList.remove('show');
  const width = 200;
  const height = 170;
  contextMenu.style.left = `${Math.min(event.clientX, innerWidth - width - 10)}px`;
  contextMenu.style.top = `${Math.min(event.clientY, innerHeight - height - 10)}px`;
  contextMenu.classList.add('show');
  contextMenu.setAttribute('aria-hidden', 'false');
});

document.addEventListener('click', () => {
  contextMenu.classList.remove('show');
  menuPopover.classList.remove('show');
  contextMenu.setAttribute('aria-hidden', 'true');
  menuPopover.setAttribute('aria-hidden', 'true');
});

document.querySelectorAll('.traffic.close').forEach(button => {
  button.addEventListener('click', event => {
    const win = event.target.closest('.window');
    if (win) win.classList.add('hidden');
  });
});

document.querySelectorAll('.traffic.minimize').forEach(button => {
  button.addEventListener('click', event => {
    const win = event.target.closest('.window');
    if (win) win.classList.add('hidden');
  });
});
