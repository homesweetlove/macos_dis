# macos_dis

Windows를 **macOS처럼 보이게 만드는 한국어 중심 디자인 프로젝트**입니다.

이 저장소는 다음 세 프로젝트의 아이디어와 구성을 하나의 한국어 데스크톱 경험으로 통합합니다.

- `Runixe786/Macified-Windows` — Windows 11 전체 macOS화 흐름, Rainmeter/테마/Explorer 구성
- `SuperSpacer54376/Macnify-Windows` — macOS Tahoe 26 계열의 최근 UI 방향, 위젯/상태바/Dock 구성
- `rollecode/macos-dock-for-windows` — 미니멀 Dock 비율, Winstep 기반 Dock 디자인 및 아이콘 구성

> 원본 프로젝트 사용/참고 허가는 저장소 소유자가 별도로 확보한 것을 전제로 구성했습니다. 원본 파일을 추적하기 쉽도록 `docs/UPSTREAM.md`에 출처와 적용 지점을 기록합니다.

## 목표

단순 영문 → 한글 번역이 아니라, 한국어가 들어갔을 때 macOS 특유의 밀도와 여백이 무너지지 않도록 레이아웃 자체를 다시 잡는 것이 목표입니다.

- 상단 메뉴 막대: `파일 · 편집 · 보기 · 이동 · 윈도우 · 도움말`
- Finder 스타일 파일 탐색기
- 한국어 길이에 맞춘 사이드바/메뉴 폭
- Tahoe 계열 반투명 글래스 UI
- Stage Manager 스타일 작업 전환 영역
- 가운데 정렬 Dock + 확대 인터랙션
- 한국어 날짜/시간 표시
- Windows 11에서 실제 적용할 때 참고할 구성표 제공

## 바로 보기

`index.html`을 브라우저로 열면 설치 없이 디자인 프로토타입을 볼 수 있습니다.

```text
macos_dis/
├─ index.html
├─ styles.css
├─ app.js
├─ config/
│  └─ macos-dis.kr.json
└─ docs/
   ├─ DESIGN-SYSTEM-KR.md
   ├─ INSTALL-KR.md
   └─ UPSTREAM.md
```

## 디자인 원칙

1. **한국어 우선** — 영문 UI를 기계적으로 번역하지 않고 한국어 폭에 맞춰 재배치합니다.
2. **macOS 느낌, Windows 동작** — 시각 언어는 macOS에 가깝게 가져가되 실제 시스템은 Windows의 안정성을 우선합니다.
3. **복구 가능성** — 시스템 패치가 필요한 단계는 선택 사항으로 분리하고 복원 지점을 권장합니다.
4. **교체 가능 구조** — Dock, Explorer, 위젯 도구를 특정 앱 하나에 묶지 않고 역할별로 분리합니다.

## 현재 포함된 화면

- 한국어 메뉴 막대
- 글래스 Finder 창
- 즐겨찾기/위치 한국어 사이드바
- 데스크톱 위젯
- Stage Manager 스타일 미니 창
- macOS 스타일 Dock
- 라이트/다크 전환
- 실시간 한국어 날짜/시간

## 참고 프로젝트

자세한 매핑은 [`docs/UPSTREAM.md`](docs/UPSTREAM.md)를 확인하세요.

## 주의

이 저장소의 웹 프로토타입 자체는 시스템 파일을 수정하지 않습니다. 실제 Windows 테마 패치, Explorer 패치, 아이콘 패치 등을 적용할 경우에는 반드시 복원 지점을 만들고 사용 중인 Windows 빌드와 도구 호환성을 확인하세요.
