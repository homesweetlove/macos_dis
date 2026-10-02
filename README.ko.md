[![English](https://img.shields.io/badge/README-English-24292f?style=for-the-badge)](./README.md) [![한국어](https://img.shields.io/badge/README-%ED%95%9C%EA%B5%AD%EC%96%B4-24292f?style=for-the-badge)](./README.ko.md)

# macos_dis

Windows에서 사용하는 macOS 스타일 Rainmeter 데스크톱 스킨입니다.

## 메인 패키지

주요 구현은 `rainmeter/` 폴더에 있습니다.

포함된 스킨:
- 메뉴 바
- 시계
- 시스템 모니터
- 이미지 기반 Dock
- 설정 패널

Dock은 유니코드 글리프 깨짐이나 아이콘 폰트 누락 문제를 피하기 위해 로컬 PNG 리소스를 함께 사용합니다.

## 설치

GitHub Actions의 `Build Rainmeter Package` 워크플로에서 최신 아티팩트를 내려받아 ZIP을 풀고, 생성된 `.rmskin` 파일을 실행합니다.

설치 후 다음 스킨을 불러옵니다.

`MacosDisKR\\Setup\\Setup.ini`

그다음 `LOAD ALL + AUTO LAYOUT`을 클릭합니다.

## 참고

- 렌더링 호환성을 위해 UI 텍스트는 의도적으로 영어 우선으로 구성되어 있습니다.
- 기본 폰트는 Windows에 포함된 `Segoe UI`입니다.
- 아이콘은 `rainmeter/Skins/MacosDisKR/@Resources/Images/` 아래의 PNG 파일로 포함됩니다.
- Rainmeter는 데스크톱 위젯 영역만 다루며 Explorer 창 테두리나 Windows 전체 테마 엔진을 대체하지 않습니다.
