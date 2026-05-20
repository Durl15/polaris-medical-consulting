# Polaris Medical Consulting - Windows Setup Script
# Copy and paste this entire script into PowerShell

$projectPath = "$env:USERPROFILE\Projects\polaris-app"
$imageSource = "$env:USERPROFILE\Downloads\SARAH-14.jpg"

# Create project directory
New-Item -ItemType Directory -Path $projectPath -Force | Out-Null
Write-Host "✓ Created project directory: $projectPath" -ForegroundColor Green

# Create subdirectories
@('src\components', 'src\pages', 'public\images') | ForEach-Object {
    New-Item -ItemType Directory -Path "$projectPath\$_" -Force | Out-Null
}
Write-Host "✓ Created subdirectories" -ForegroundColor Green

# Note: You'll need to manually copy the downloaded files from Claude to this directory
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Download all files from Claude as a zip" -ForegroundColor White
Write-Host "2. Extract the zip to: $projectPath" -ForegroundColor White
Write-Host "3. Copy your headshot (SARAH-14.jpg) to: $projectPath\public\images\dr-johnson.jpg" -ForegroundColor White
Write-Host "4. Open PowerShell in $projectPath" -ForegroundColor White
Write-Host "5. Run: npm install" -ForegroundColor White
Write-Host "6. Get NewsAPI key from https://newsapi.org" -ForegroundColor White
Write-Host "7. Update .env with your NewsAPI key" -ForegroundColor White
Write-Host "8. Run: npm run dev" -ForegroundColor White
