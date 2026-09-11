# Upstream reference map

이 문서는 `macos_dis`에서 참고한 세 저장소의 역할을 기록한다. 목적은 업데이트 추적과 디자인 의사결정의 출처를 명확히 남기는 것이다.

## 1. Runixe786/Macified-Windows

참고 영역:

- Windows 11 전체 macOS화 순서
- 테마 → 배경화면 → 위젯 → Dock/메뉴 막대 → Stage Manager → 아이콘 → Explorer → 커서로 이어지는 구성
- Rainmeter 위젯과 MyDockFinder 계열의 조합 방식
- ExplorerBlurMica를 이용한 파일 탐색기 블러 방향

`macos_dis` 반영:

- 데스크톱 전체를 하나의 경험으로 묶는 구조
- Stage Manager 영역
- Finder/Explorer를 중심 창으로 두는 화면 구성
- 시스템 패치와 사용자 UI 레이어를 분리하는 설치 문서

원본: https://github.com/Runixe786/Macified-Windows

## 2. SuperSpacer54376/Macnify-Windows

참고 영역:

- macOS Tahoe 26 계열의 최신 디자인 방향
- uWidgets 기반 데스크톱 위젯
- MyDockFinder 기반 상태바/Dock
- SecureUXTheme, 7TSP, ExplorerBlurMica, StartAllBack를 조합한 Windows 11 커스터마이징 흐름
- Tahoe 커서 구성

`macos_dis` 반영:

- 더 밝고 투명한 Tahoe 계열 글래스 표현
- 둥근 위젯 카드
- 메뉴 막대와 Dock을 같은 투명도 계열로 묶는 방식
- 한국어 UI 길이에 맞춘 더 넓은 Finder 사이드바

원본: https://github.com/SuperSpacer54376/Macnify-Windows

## 3. rollecode/macos-dock-for-windows

참고 영역:

- macOS Big Sur 계열의 미니멀 Dock 디자인
- Winstep Xtreme 기반 Dock 테마
- Selawik/Segoe UI 폰트 방향
- TaskbarX, SecureUxTheme 등의 조합
- Dock 아이콘과 실행 인디케이터 비율

`macos_dis` 반영:

- Dock의 낮은 높이와 가운데 정렬
- 아이콘 아래 실행 상태 점
- 아이콘 간 좁은 기본 간격 + hover 시 확대
- 시스템 영역 앞 구분선
- Windows 기본 폰트와 호환되는 타이포그래피 폴백

원본: https://github.com/rollecode/macos-dock-for-windows

## 통합 원칙

세 프로젝트의 파일 구조를 기계적으로 한 폴더에 덮어쓰는 대신, 역할을 다음과 같이 통합했다.

```text
Macified-Windows      → 전체 데스크톱 구성/흐름
Macnify-Windows       → Tahoe 시각 언어/최근 Windows 11 구성
macos-dock-for-windows→ Dock 비율/아이콘/미니멀리즘
                         ↓
                   macos_dis KR
```

중복되는 오래된 설치 방식은 최신 Windows 11에서 충돌할 수 있으므로 `docs/INSTALL-KR.md`에서 선택형 단계로 분리한다.

## 원본 보존에 관하여

현재 루트 구현은 세 프로젝트에서 영감을 받아 재구성한 통합 UI다. 원본 프로젝트의 바이너리/대형 리소스는 각 upstream 저장소에서 추적하는 것을 기본으로 하며, 실제 배포 패키지를 만들 때는 사용 허가 범위에 맞춰 `vendor/` 아래에 고정 버전으로 넣는 것을 권장한다.
