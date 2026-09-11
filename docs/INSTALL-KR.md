# macos_dis — Windows 11 적용 가이드

이 문서는 디자인 프로토타입을 실제 Windows 11 데스크톱에 옮길 때의 권장 순서다.

## 0. 먼저 할 것

시스템 파일/테마를 건드리는 단계까지 진행할 예정이라면 Windows 복원 지점을 먼저 만든다. Windows 빌드가 바뀌면 테마 패처나 Explorer 관련 도구가 깨질 수 있으므로 한 번에 모든 패치를 적용하지 않는다.

## 1. 안전한 기본 구성

시스템 DLL을 수정하지 않고 먼저 아래 레이어만 맞춘다.

1. 배경화면
2. Dock
3. 상단 상태/메뉴 영역
4. 위젯
5. 아이콘
6. 동적 배경/Quick Look 같은 보조 기능

이 상태만으로도 `macos_dis` 디자인의 대부분을 재현할 수 있다.

## 2. Dock

두 방향 중 하나를 선택한다.

### A. MyDockFinder 계열

`Macified-Windows`, `Macnify-Windows`에서 사용한 흐름에 가깝다.

권장 시각값:

- 위치: 화면 아래 중앙
- Dock 전체 높이: 약 70px
- 기본 아이콘: 약 45px
- 아이콘 확대: 약 120%
- 실행 표시점: 켬
- 불투명도: 낮음
- 배경 blur: 높음
- 구분선: 다운로드/휴지통 영역 앞 한 번만

### B. Winstep Nexus 계열

`rollecode/macos-dock-for-windows`의 방향에 가깝다.

- Dock 테마는 macOS형으로 구성
- 아이콘 간격을 좁게 유지
- 실행 인디케이터는 작은 점 형태
- Windows 작업표시줄은 별도로 최소화/자동 숨김 처리

실제 값은 [`config/macos-dis.kr.json`](../config/macos-dis.kr.json)을 기준으로 조정한다.

## 3. 상단 메뉴/상태 영역

한국어 기본 메뉴:

```text
Finder  파일  편집  보기  이동  윈도우  도움말
```

오른쪽 상태 영역:

```text
제어 센터  Wi‑Fi  배터리  9월 11일 금요일 오후 3:14
```

영문 기준 폭을 그대로 쓰면 `윈도우`, `도움말`이 답답해 보이므로 메뉴 항목 좌우 여백을 줄이지 않는다.

## 4. 위젯

`Macnify-Windows`의 uWidgets 방식 또는 `Macified-Windows`의 Rainmeter 방식을 사용할 수 있다.

권장 위치:

- 시계: 오른쪽 위
- 날씨: 시계 바로 아래
- 위젯 폭: 약 216px
- radius: 약 24px
- 너무 많은 위젯을 한 화면에 넣지 않는다.

## 5. Explorer / Finder 느낌

안전 우선 순서:

1. Windows 탐색기의 한국어 시스템 문자열은 그대로 유지
2. 아이콘을 macOS 계열로 통일
3. ExplorerBlurMica 계열로 유리/블러 표현 적용
4. 필요할 때만 테마 패처를 추가

목표 사이드바 폭은 약 184px이며, 다음 항목이 한 줄에 들어가야 한다.

```text
최근 항목
AirDrop
응용 프로그램
데스크탑
문서
다운로드
iCloud Drive
공유됨
이 PC
네트워크
```

## 6. 아이콘

`7TSP` 계열 패치를 사용할 경우 현재 Windows 빌드와 호환되는 팩인지 먼저 확인한다. 앱 Dock 아이콘은 시스템 아이콘 패치와 별개로 관리하는 것을 권장한다.

Dock 아이콘 기준:

- 실제 표시 크기: 45px 전후
- 정사각형 앱 아이콘 radius: 약 12px
- 활성 앱 하단: 4px 점

## 7. 커서

Tahoe 계열 커서 또는 원하는 macOS 커서 스킴을 Windows 포인터 설정에서 적용한다. 커서 설치는 Explorer/DLL 패치보다 먼저 테스트해도 무방하다.

## 8. 선택형 시스템 테마 단계

다음은 기본값이 아니라 선택 사항이다.

- SecureUxTheme
- 7TSP 시스템 아이콘 패치
- StartAllBack 등의 Explorer/작업표시줄 변경
- 추가 Explorer 셸 패치

이 단계들은 Windows 업데이트와 충돌 가능성이 있으므로 하나씩 적용하고 재부팅 후 확인한다.

## 9. 한국어 폰트

권장 우선순위:

1. Pretendard
2. Apple SD Gothic Neo가 이미 사용 가능한 환경이라면 해당 폰트
3. Segoe UI / Windows 기본 한국어 폴백

시스템 전체 글꼴 강제 교체보다 Dock/위젯/커스텀 UI부터 적용하는 것을 권장한다.

## 10. 디자인 확인

실제 패치 전 루트의 `index.html`을 브라우저에서 열어 목표 레이아웃을 확인한다. Dock의 크기, 사이드바 폭, 메뉴 한글 길이, 위젯 위치는 이 프로토타입을 기준으로 맞춘다.
