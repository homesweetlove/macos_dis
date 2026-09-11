$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$source = Join-Path $repoRoot 'rainmeter'
$dist = Join-Path $repoRoot 'dist'

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    throw 'Python이 필요합니다. Python을 설치한 뒤 다시 실행하세요.'
}

$builder = Get-Command rmskin-builder.exe -ErrorAction SilentlyContinue
if (-not $builder) {
    Write-Host '정식 Rainmeter .rmskin 빌더를 설치합니다...'
    python -m pip install --user rmskin-builder==2.0.4
    $userScripts = python -c "import site, pathlib; print(pathlib.Path(site.USER_BASE) / 'Scripts')"
    $env:Path = "$userScripts;$env:Path"
    $builder = Get-Command rmskin-builder.exe -ErrorAction Stop
}

if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item -ItemType Directory -Path $dist | Out-Null

& $builder.Source --path $source --dir-out $dist

$package = Get-ChildItem $dist -Filter '*.rmskin' | Select-Object -First 1
if (-not $package) { throw '.rmskin 패키지가 생성되지 않았습니다.' }

Write-Host "완료: $($package.FullName)"
Write-Host '파일을 더블클릭하고 Install을 누르면 됩니다.'
