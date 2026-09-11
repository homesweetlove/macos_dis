$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$source = Join-Path $repoRoot 'rainmeter'
$dist = Join-Path $repoRoot 'dist'
$zip = Join-Path $dist 'macos_dis_KR.zip'
$rmskin = Join-Path $dist 'macos_dis_KR.rmskin'

if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item -ItemType Directory -Path $dist | Out-Null

Compress-Archive -Path (Join-Path $source '*') -DestinationPath $zip -CompressionLevel Optimal
Move-Item $zip $rmskin

Write-Host "완료: $rmskin"
Write-Host '파일을 더블클릭하면 Rainmeter Skin Installer로 설치할 수 있습니다.'
