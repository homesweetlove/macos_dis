# macos_dis 디자인 시스템 — KR

## 1. 방향

`macos_dis`는 macOS UI를 픽셀 단위로 복제하는 프로젝트가 아니라 **Windows에서 macOS의 시각적 질서와 사용감을 한국어 환경에 맞게 재구성**하는 프로젝트다.

핵심 키워드:

- Tahoe 계열의 유리 질감
- 낮은 대비의 레이어
- 둥근 모서리
- 강한 그림자보다 넓고 부드러운 깊이감
- 한국어 메뉴가 답답해지지 않는 넓은 간격
- Dock 아이콘의 정사각형 비율과 hover 확대

## 2. 타이포그래피

우선순위:

```css
font-family: Pretendard, "Apple SD Gothic Neo", "Segoe UI", sans-serif;
```

Windows에서 별도 폰트를 설치하지 않아도 `Segoe UI`로 폴백된다. Pretendard가 설치되어 있으면 한국어 자형의 폭과 무게가 더 안정적이다.

권장 크기:

| 영역 | 크기 | 무게 |
|---|---:|---:|
| 상단 메뉴 | 13px | 400–700 |
| Finder 사이드바 | 12px | 400–600 |
| 보조 레이블 | 10–11px | 600–800 |
| 본문 | 13px | 400 |
| 창 제목 | 13px | 700 |
| Finder 섹션 제목 | 24px | 650–700 |

## 3. 한국어 메뉴 폭

영문 메뉴의 고정 폭을 그대로 쓰지 않는다.

- 상단 메뉴 버튼: 좌우 패딩 9px 이상
- 팝오버: 최소 190px
- Finder 사이드바: 최소 184px
- `응용 프로그램`, `최근 사용 항목`, `보기 옵션 표시`처럼 긴 항목은 줄바꿈하지 않는다.

## 4. 코너 반경

- 메뉴 막대: 12px
- Dock: 22px
- 메인 창: 22px
- 위젯: 24px
- 파일 카드: 17px
- 일반 버튼: 7–9px
- 앱 아이콘: 12px

한 화면에서 모든 요소가 동일한 radius를 쓰지 않도록 계층별로 차이를 둔다.

## 5. 글래스 레이어

메인 글래스:

```css
background: linear-gradient(145deg,
  rgba(255,255,255,.22),
  rgba(255,255,255,.10));
backdrop-filter: blur(30px) saturate(1.35);
border: 1px solid rgba(255,255,255,.24);
```

작은 위젯은 blur를 약간 줄이고 배경 대비도 낮춘다.

## 6. Dock

`rollecode/macos-dock-for-windows`의 미니멀한 Dock 비율을 참고하되, 현재 프로토타입은 Winstep 종속성 없이 CSS로 재구성했다.

- 기본 아이콘 박스: 45 × 45px
- 버튼 hit area: 52 × 52px
- hover: `translateY(-9px) scale(1.2)`
- 실행 상태: 아이콘 아래 4px 점
- 구분선: 최근 항목/시스템 항목 앞에 1px

## 7. Finder형 파일 탐색기

구조:

```text
Window
├─ Toolbar
│  ├─ Traffic lights
│  ├─ Back / Forward
│  ├─ Title
│  └─ View / Share / Search
└─ Body
   ├─ Sidebar
   │  ├─ 즐겨찾기
   │  ├─ iCloud
   │  └─ 위치
   └─ Content
```

Windows 실제 적용에서는 Explorer 자체의 메뉴 문자열을 억지로 변경하기보다, Windows 한국어 UI를 유지하면서 시각 테마/블러/아이콘만 macOS 방향으로 맞추는 것을 우선한다.

## 8. 상단 메뉴 막대

한국어 기본 세트:

```text
Finder · 파일 · 편집 · 보기 · 이동 · 윈도우 · 도움말
```

오른쪽에는 Wi‑Fi, 배터리, 날짜/시간처럼 자주 확인하는 정보만 유지한다. 아이콘이 너무 많아 Windows 작업표시줄처럼 보이지 않게 제한한다.

## 9. Stage Manager

왼쪽 세로 스택에 108 × 70px 미리보기를 배치한다. 활성 창은 투명도를 올리고 4px 오른쪽으로 이동시켜 선택 상태를 표현한다.

## 10. 다크/라이트

라이트 모드에서는 단순 배경색 반전이 아니라 유리 레이어의 알파값을 높이고 글자색을 짙게 바꾼다. Dock/창의 형태와 여백은 동일하게 유지한다.
