# macos_dis KR — Rainmeter macOS Desktop

Windows에서 **Rainmeter로 실제 사용하기 위한 한국어 macOS 스타일 데스크톱 스킨 세트**입니다.

이 저장소의 메인은 더 이상 웹 목업이 아닙니다. `rainmeter/` 아래의 스킨이 실제 사용 대상이며, GitHub Actions에서 설치 가능한 `.rmskin` 패키지를 자동 생성합니다.

## 포함된 Rainmeter 스킨

- **MenuBar** — 한국어 macOS 스타일 상단 메뉴바
- **Clock** — 한국어 날짜/요일/시간 위젯
- **System** — CPU / RAM / 디스크 / 네트워크 위젯
- **Dock** — macOS 스타일 런처 Dock
- **Setup** — 전체 스킨 불러오기, 화면 자동 배치, 다크/라이트 전환

```text
rainmeter/
└─ Skins/
   └─ MacosDisKR/
      ├─ @Resources/
      │  ├─ Variables.inc
      │  └─ Scripts/DateKR.lua
      ├─ MenuBar/MenuBar.ini
      ├─ Clock/Clock.ini
      ├─ System/System.ini
      ├─ Dock/Dock.ini
      └─ Setup/Setup.ini
```

## 설치

1. Rainmeter를 설치합니다.
2. 이 저장소의 **Actions → Build Rainmeter Package**에서 최신 성공 빌드의 `macos_dis_KR-rmskin` 아티팩트를 받습니다.
3. 압축을 풀고 `.rmskin` 파일을 더블클릭해 설치합니다.
4. Rainmeter에서 `MacosDisKR\\Setup\\Setup.ini`를 불러옵니다.
5. **전체 불러오기 + 추천 배치**를 누르면 메뉴바 / 시계 / 시스템 / Dock이 자동 배치됩니다.

## 현재 디자인 방향

세 프로젝트를 참고해 실제 Rainmeter에서 가볍게 쓸 수 있도록 재구성했습니다.

- `Runixe786/Macified-Windows` — 전체 macOS 데스크톱 구성과 Rainmeter 조합
- `SuperSpacer54376/Macnify-Windows` — Tahoe 계열 글래스 / 위젯 / 상태바 방향
- `rollecode/macos-dock-for-windows` — 미니멀 Dock 비율과 런처 배치

## 한국어 최적화

영문 UI를 단순 번역하지 않고 한국어 길이에 맞춰 메뉴 폭과 배치를 조정했습니다.

상단 기본 메뉴:

```text
Finder   파일   편집   보기   이동   윈도우   도움말
```

날짜는 Windows 로캘과 무관하게 한국어 요일이 나오도록 Lua 스크립트로 처리합니다.

## 테마

Setup에서 전체 스킨을 한 번에 다음 스타일로 전환할 수 있습니다.

- Dark Glass
- Light Glass

공통 색상과 실행 명령은 아래 파일에서 수정합니다.

```text
rainmeter/Skins/MacosDisKR/@Resources/Variables.inc
```

브라우저, 터미널, 탐색기, 설정 등의 실행 명령도 여기서 바꿀 수 있습니다.

## 웹 프로토타입

루트의 `index.html`, `styles.css`, `app.js`는 **디자인 참고용 미리보기**입니다. 실제 데스크톱 적용은 `rainmeter/`가 기준입니다.

## Windows 전체 macOS화

Rainmeter는 위젯 / 메뉴바 / Dock 영역을 담당합니다. Explorer 자체 블러, 창 스타일, 시스템 아이콘 변경은 별도 선택형 레이어입니다.

- ExplorerBlurMica
- SecureUxTheme
- 7TSP 계열 아이콘 팩
- 기타 Windows 셸 커스터마이징

이 부분은 Rainmeter 스킨과 분리해 유지합니다.

## 자동 빌드

`.github/workflows/build-rmskin.yml`이 `main` 변경 시 정식 `.rmskin` 패키지를 빌드합니다.

최근 검증에서는 패키지 생성 및 GitHub Actions 아티팩트 업로드까지 성공했습니다.
