# macos_dis KR — Rainmeter 설치 / 사용

이 프로젝트의 주 사용 목적은 **Windows 바탕화면에서 실제로 쓰는 한국어 macOS 스타일 Rainmeter 스킨 세트**다.

## 포함 스킨

```text
MacosDisKR
├─ Setup      빠른 실행 / 전체 불러오기
├─ MenuBar    한국어 상단 메뉴바 + 날짜/시간
├─ Clock      큰 시계 + 한국어 날짜/요일
├─ System     CPU / RAM / C: / 네트워크
├─ Dock       탐색기 / 브라우저 / 터미널 / 설정 / 휴지통 런처
└─ @Resources
   ├─ Variables.inc
   └─ Scripts/DateKR.lua
```

## 가장 쉬운 설치

GitHub Actions에서 생성된 `macos_dis_KR-rmskin` 아티팩트를 내려받아 압축을 풀고 `.rmskin` 파일을 더블클릭한다.

Rainmeter Skin Installer가 열리면 **Install**을 누른다. 설치 후 `macos_dis KR Setup`이 자동으로 열리며 **전체 불러오기**를 누르면 4개 스킨이 활성화된다.

## 직접 패키지 만들기

저장소를 내려받은 뒤 PowerShell에서:

```powershell
.\tools\build-rmskin.ps1
```

스크립트는 유효한 Rainmeter 패키지를 만들기 위해 `rmskin-builder 2.0.4`를 사용한다. 단순 ZIP 이름 변경 방식은 사용하지 않는다.

결과물은 `dist` 폴더에 생성된다.

## 수동 설치

`.rmskin`을 쓰지 않는 경우 `rainmeter/Skins/MacosDisKR` 폴더를 다음 위치에 복사한다.

```text
%USERPROFILE%\Documents\Rainmeter\Skins\MacosDisKR
```

Rainmeter에서 **Refresh all** 후 다음을 순서대로 Load한다.

```text
MacosDisKR\Setup\Setup.ini
MacosDisKR\MenuBar\MenuBar.ini
MacosDisKR\Clock\Clock.ini
MacosDisKR\System\System.ini
MacosDisKR\Dock\Dock.ini
```

## 런처 바꾸기

`rainmeter/Skins/MacosDisKR/@Resources/Variables.inc` 파일의 아래 값만 바꾸면 된다.

```ini
ExplorerCommand=["explorer.exe"]
BrowserCommand=["cmd.exe" /c start "" "https://www.google.com"]
TerminalCommand=["wt.exe"]
SettingsCommand=["cmd.exe" /c start "" "ms-settings:"]
RecycleCommand=["explorer.exe" "shell:RecycleBinFolder"]
```

예를 들어 Chrome을 직접 지정하려면:

```ini
BrowserCommand=["C:\Program Files\Google\Chrome\Application\chrome.exe"]
```

변경 후 Rainmeter에서 **Refresh all** 한다.

## 배치 추천

- `MenuBar`: 화면 맨 위, X=0 / Y=0
- `Clock`: 오른쪽 위
- `System`: Clock 아래
- `Dock`: 화면 아래 가운데
- `Setup`: 설정이 끝나면 Unload 해도 됨

Rainmeter의 스킨은 드래그로 위치를 바꿀 수 있다. 상단 메뉴바는 기본적으로 드래그를 막아두었다.

## 디자인 설정

공통 색상 / 글꼴 / 크기는 `@Resources/Variables.inc`에 있다.

기본 폰트는 `Pretendard`다. 설치되어 있지 않으면 Windows에서 사용할 수 있는 한국어 글꼴로 대체될 수 있다. 가장 깔끔하게 쓰려면 Pretendard 설치를 권장한다.

## Rainmeter가 담당하지 않는 것

Rainmeter는 데스크톱 위젯/런처/오버레이를 만드는 도구다. 다음 항목은 Rainmeter 스킨만으로 Windows 자체 UI를 완전히 변경하지 않는다.

- 파일 탐색기 전체 외형
- 창 제목 표시줄 / 신호등 버튼
- 시스템 아이콘 팩
- Windows 커서
- Windows 테마 엔진

이 부분은 `docs/INSTALL-KR.md`의 선택형 Windows 커스터마이징 단계를 참고한다.

## 안전성

현재 `MacosDisKR` Rainmeter 스킨 자체는 Windows 시스템 DLL을 패치하지 않는다. `Variables.inc`에 정의된 런처 명령만 실행하며, 시스템 테마 패치는 별도의 선택 단계다.
