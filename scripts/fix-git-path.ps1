# Git PATH Fix für YoYo (Als Administrator ausführen)
# Rechtklick auf PowerShell -> Als Administrator ausführen

Write-Host "Git PATH Fix für YoYo-Kompatibilität"
Write-Host "======================================"
Write-Host ""

# Prüfe Administrator-Rechte
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")

if (-not $isAdmin) {
    Write-Host "WARNUNG: Dieses Skript benötigt Administrator-Rechte!"
    Write-Host "Bitte als Administrator ausführen:"
    Write-Host "1. Rechtsklick auf PowerShell"
    Write-Host "2. 'Als Administrator ausführen' wählen"
    Write-Host "3. Dieses Skript erneut ausführen"
    Write-Host ""
    Read-Host "Drücken Sie Enter zum Beenden"
    exit 1
}

Write-Host "Administrator-Rechte erkannt. Fortfahren..."
Write-Host ""

# Aktuelle System-PATH anzeigen
$systemPath = [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine)
Write-Host "Aktuelle System-PATH:"
Write-Host $systemPath
Write-Host ""

# Git-Pfade prüfen
$gitBinPath = "C:\Program Files\Git\bin"
$gitCmdPath = "C:\Program Files\Git\cmd"

$pathsToAdd = @()

if (-not $systemPath.Contains($gitBinPath)) {
    $pathsToAdd += $gitBinPath
    Write-Host "Hinzufügen: $gitBinPath"
}

if (-not $systemPath.Contains($gitCmdPath)) {
    $pathsToAdd += $gitCmdPath
    Write-Host "Hinzufügen: $gitCmdPath"
}

if ($pathsToAdd.Count -eq 0) {
    Write-Host "Git-Pfade sind bereits in der System-PATH vorhanden."
} else {
    try {
        $newPath = $systemPath
        foreach ($path in $pathsToAdd) {
            if (-not $newPath.EndsWith(";")) {
                $newPath += ";"
            }
            $newPath += $path
        }
        
        [Environment]::SetEnvironmentVariable("Path", $newPath, [EnvironmentVariableTarget]::Machine)
        Write-Host ""
        Write-Host "SUCCESS: Git-Pfade zur System-PATH hinzugefügt!"
        Write-Host ""
        Write-Host "WICHTIG: Neustarten erforderlich für:"
        Write-Host "- Cursor/YoYo"
        Write-Host "- Alle PowerShell-Fenster"
        Write-Host "- Oder Computer komplett neu starten"
        
    } catch {
        Write-Host "FEHLER beim Hinzufügen der Pfade: $($_.Exception.Message)"
    }
}

Write-Host ""
Write-Host "Zusätzliche Schritte für YoYo:"
Write-Host "1. Cursor komplett schließen"
Write-Host "2. 30 Sekunden warten"
Write-Host "3. Cursor neu öffnen"
Write-Host "4. Projekt erneut öffnen"
Write-Host "5. Strg+Alt+S erneut versuchen"
Write-Host ""
Read-Host "Drücken Sie Enter zum Beenden" 