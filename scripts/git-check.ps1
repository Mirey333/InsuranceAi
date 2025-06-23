# Git Diagnose-Skript für YoYo-Kompatibilität
# Führt umfassende Git-Checks durch

Write-Host "=== Git Diagnose für YoYo ===" -ForegroundColor Cyan
Write-Host ""

# 1. Git über PowerShell testen
Write-Host "1. Git über PowerShell:" -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "   ✅ $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "   ❌ Git nicht verfügbar über PowerShell" -ForegroundColor Red
}

# 2. Git über cmd.exe testen
Write-Host ""
Write-Host "2. Git über cmd.exe:" -ForegroundColor Yellow
try {
    $cmdResult = cmd /c "git --version 2>&1"
    if ($cmdResult -like "*git version*") {
        Write-Host "   ✅ $cmdResult" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $cmdResult" -ForegroundColor Red
    }
} catch {
    Write-Host "   ❌ Git nicht verfügbar über cmd.exe" -ForegroundColor Red
}

# 3. Git-Pfade prüfen
Write-Host ""
Write-Host "3. Git-Pfade prüfen:" -ForegroundColor Yellow
$gitPaths = @(
    "C:\Program Files\Git\bin\git.exe",
    "C:\Program Files\Git\cmd\git.exe"
)

foreach ($path in $gitPaths) {
    if (Test-Path $path) {
        Write-Host "   ✅ Gefunden: $path" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Nicht gefunden: $path" -ForegroundColor Red
    }
}

# 4. PATH-Variable prüfen
Write-Host ""
Write-Host "4. PATH-Variable prüfen:" -ForegroundColor Yellow
$paths = $env:PATH -split ";"
$gitInPath = $false
foreach ($path in $paths) {
    if ($path -like "*Git*") {
        Write-Host "   ✅ Git-Pfad im PATH: $path" -ForegroundColor Green
        $gitInPath = $true
    }
}
if (-not $gitInPath) {
    Write-Host "   ❌ Kein Git-Pfad im PATH gefunden" -ForegroundColor Red
}

# 5. Repository-Status prüfen
Write-Host ""
Write-Host "5. Repository-Status:" -ForegroundColor Yellow
try {
    $repoStatus = git status --porcelain
    if ($?) {
        Write-Host "   ✅ Git-Repository erkannt" -ForegroundColor Green
        $currentBranch = git branch --show-current
        Write-Host "   📌 Aktueller Branch: $currentBranch" -ForegroundColor Cyan
        $commitCount = git rev-list --count HEAD
        Write-Host "   📊 Commits: $commitCount" -ForegroundColor Cyan
    }
} catch {
    Write-Host "   ❌ Kein Git-Repository oder Git nicht verfügbar" -ForegroundColor Red
}

# 6. Git-Konfiguration
Write-Host ""
Write-Host "6. Git-Konfiguration:" -ForegroundColor Yellow
try {
    $userName = git config user.name
    $userEmail = git config user.email
    if ($userName -and $userEmail) {
        Write-Host "   ✅ Benutzer: $userName <$userEmail>" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Git-Benutzer nicht konfiguriert" -ForegroundColor Red
    }
} catch {
    Write-Host "   ❌ Git-Konfiguration nicht lesbar" -ForegroundColor Red
}

# 7. YoYo-spezifische Checks
Write-Host ""
Write-Host "7. YoYo-Kompatibilität:" -ForegroundColor Yellow

# Prüfe ob .git-Ordner existiert
if (Test-Path ".git") {
    Write-Host "   ✅ .git-Ordner vorhanden" -ForegroundColor Green
} else {
    Write-Host "   ❌ .git-Ordner fehlt" -ForegroundColor Red
}

# Prüfe .gitignore
if (Test-Path ".gitignore") {
    Write-Host "   ✅ .gitignore vorhanden" -ForegroundColor Green
} else {
    Write-Host "   ❌ .gitignore fehlt" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== Diagnose abgeschlossen ===" -ForegroundColor Cyan

# Empfehlungen
Write-Host ""
Write-Host "🔧 Lösungsvorschläge für YoYo:" -ForegroundColor Magenta
Write-Host "1. Cursor/YoYo komplett neu starten" -ForegroundColor White
Write-Host "2. Systemweite PATH-Variable aktualisieren" -ForegroundColor White
Write-Host "3. Git über Windows-Systemsteuerung reparieren" -ForegroundColor White
Write-Host "4. Dieses Verzeichnis in YoYo als Git-Repository markieren" -ForegroundColor White