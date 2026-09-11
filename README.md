# macos_dis

A macOS-inspired Rainmeter desktop skin for Windows.

## Main package

The primary implementation lives in `rainmeter/`.

Included skins:
- Menu Bar
- Clock
- System monitor
- Image-based Dock
- Setup panel

The Dock uses bundled local PNG assets to avoid broken Unicode glyphs or missing icon fonts.

## Install

Download the latest GitHub Actions artifact from the `Build Rainmeter Package` workflow, extract the ZIP, then open the generated `.rmskin` file.

After installation, load:

`MacosDisKR\\Setup\\Setup.ini`

Then click `LOAD ALL + AUTO LAYOUT`.

## Notes

- UI text is intentionally English-first for maximum rendering compatibility.
- Default font is `Segoe UI`, included with Windows.
- Icons are bundled PNG files under `rainmeter/Skins/MacosDisKR/@Resources/Images/`.
- Rainmeter handles desktop widgets only; it does not replace Explorer window chrome or the full Windows theme engine.
