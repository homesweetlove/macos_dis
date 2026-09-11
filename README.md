# macos_dis

Windows에서 **실제로 사용하는 한국어 macOS 스타일 Rainmeter 데스크톱 세트**입니다.

`Macified-Windows`, `Macnify-Windows`, `macos-dock-for-windows`의 구성과 디자인 방향을 참고해 한국어 환경에 맞게 다시 구성했습니다.

## 현재 핵심: Rainmeter

이 저장소의 메인 결과물은 웹 목업이 아니라 `rainmeter/` 아래의 실제 Rainmeter 스킨입니다.

포함된 스킨:

- **Setup** — 한 번에 전체 스킨 불러오기 / 설정 열기
- **MenuBar** — `Finder · 파일 · 편집 · 보기 · 이동 · 윈도우 · 도움말` 한국어 상단바
- **Clock** — 큰 시계 + `9월 11일 금요일` 형식의 한국어 날짜
- **System** — CPU / 메모리 / C: 사용량 / 네트워크
- **Dock** — 탐색기 / 브라우저 / 터미널 / 설정 / 휴지통 런처

```text
rainmeter/
├─ RMSKIN.ini
└─ Skins/
   └─ MacosDisKR/
      ├─ @Resources/
      │  ├─ Variables.inc
      │  └─ Scripts/DateKR.lua
      ├─ Setup/Setup.ini
      ├─ MenuBar/MenuBar.ini
      ├─ Clock/Clock.ini
      ├─ System/System.ini
      └─ Dock/Dock.ini
```

## 설치

### 1. 자동 빌드된 `.rmskin`

`main`에 Rainmeter 파일이 변경되면 GitHub Actions가 설치 가능한 `.rmskin` 패키지를 자동 생성합니다.

Actions의 **Build Rainmeter Package** 실행 결과에서 `macos_dis_KR-rmskin` 아티팩트를 내려받아 `.rmskin`을 더블클릭 → **Install** 하면 됩니다.

### 2. 직접 빌드

Windows PowerShell:

```powershell
.\tools\build-rmskin.ps1
```

정식 Rainmeter 패키지 포맷을 생성하는 `rmskin-builder`를 사용합니다.

### 3. 수동 설치

`rainmeter/Skins/MacosDisKR`를 아래로 복사합니다.

```text
%USERPROFILE%\Documents\Rainmeter\Skins\MacosDisKR
```

그 다음 Rainmeter → Refresh all → `MacosDisKR\Setup\Setup.ini`를 Load합니다.

자세한 내용: [`docs/RAINMETER-KR.md`](docs/RAINMETER-KR.md)

## 런처 커스터마이징

`rainmeter/Skins/MacosDisKR/@Resources/Variables.inc`에서 프로그램 경로와 디자인 공통값을 한 번에 수정할 수 있습니다.

```ini
ExplorerCommand=["explorer.exe"]
BrowserCommand=["cmd.exe" /c start "" "https://www.google.com"]
TerminalCommand=["wt.exe"]
SettingsCommand=["cmd.exe" /c start "" "ms-settings:"]
```

## 참고한 프로젝트

- `Runixe786/Macified-Windows` — 전체 macOS화 흐름 / Rainmeter / MyDockFinder
- `SuperSpacer54376/Macnify-Windows` — Tahoe 계열 디자인 / 위젯 / Windows 11 구성
- `rollecode/macos-dock-for-windows` — 미니멀 Dock 비율 / 아이콘 구성

세 프로젝트의 역할 매핑은 [`docs/UPSTREAM.md`](docs/UPSTREAM.md)에 정리되어 있습니다.

## 웹 프로토타입

루트의 `index.html`, `styles.css`, `app.js`는 디자인 확인용 프로토타입으로 유지합니다. 실제 바탕화면 사용은 Rainmeter 버전이 우선입니다.

## Rainmeter 밖의 Windows 테마

Rainmeter는 위젯/메뉴바/런처 레이어를 담당합니다. Explorer 전체 외형, 시스템 아이콘, 커서, Windows 테마 패치까지 원한다면 [`docs/INSTALL-KR.md`](docs/INSTALL-KR.md)의 선택형 단계를 추가로 적용할 수 있습니다.

시스템 패치 단계와 달리 현재 Rainmeter 스킨 자체는 Windows 시스템 DLL을 수정하지 않습니다.
