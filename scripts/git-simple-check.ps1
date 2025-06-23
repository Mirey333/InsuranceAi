Write-Host "Git Diagnose fuer YoYo"
Write-Host ""

Write-Host "1. Git ueber PowerShell:"
try {
    $gitVersion = git --version
    Write-Host "OK: $gitVersion"
} catch {
    Write-Host "FEHLER: Git nicht verfuegbar ueber PowerShell"
}

Write-Host ""
Write-Host "2. Git ueber cmd.exe:"
try {
    $cmdResult = cmd /c "git --version 2>&1"
    if ($cmdResult -like "*git version*") {
        Write-Host "OK: $cmdResult"
    } else {
        Write-Host "FEHLER: $cmdResult"
    }
} catch {
    Write-Host "FEHLER: Git nicht verfuegbar ueber cmd.exe"
}

Write-Host ""
Write-Host "3. Git-Pfade pruefen:"
$gitPaths = @(
    "C:\Program Files\Git\bin\git.exe",
    "C:\Program Files\Git\cmd\git.exe"
)

foreach ($path in $gitPaths) {
    if (Test-Path $path) {
        Write-Host "GEFUNDEN: $path"
    } else {
        Write-Host "FEHLT: $path"
    }
}

Write-Host ""
Write-Host "4. PATH-Variable:"
$paths = $env:PATH -split ";"
$gitInPath = $false
foreach ($path in $paths) {
    if ($path -like "*Git*") {
        Write-Host "Git-Pfad im PATH: $path"
        $gitInPath = $true
    }
}
if (-not $gitInPath) {
    Write-Host "FEHLER: Kein Git-Pfad im PATH"
}

Write-Host ""
Write-Host "5. Repository-Status:"
try {
    $repoStatus = git status --porcelain
    if ($?) {
        Write-Host "OK: Git-Repository erkannt"
        $currentBranch = git branch --show-current
        Write-Host "Branch: $currentBranch"
    }
} catch {
    Write-Host "FEHLER: Kein Git-Repository"
}

Write-Host ""
Write-Host "6. .git-Ordner:"
if (Test-Path ".git") {
    Write-Host "OK: .git-Ordner vorhanden"
} else {
    Write-Host "FEHLER: .git-Ordner fehlt"
}

Write-Host ""
Write-Host "=== Loesungsvorschlaege ==="
Write-Host "1. Cursor/YoYo komplett neu starten"
Write-Host "2. Computer neu starten"
Write-Host "3. Git neu installieren" 