# PMA Insurance Platform - Port Management Script
# Usage: ./scripts/manage-ports.ps1 [start|stop|status|clean]

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet('start', 'stop', 'status', 'clean')]
    [string]$Action
)

$ErrorActionPreference = 'SilentlyContinue'

function Write-Status {
    param([string]$Message, [string]$Color = 'White')
    Write-Host "[PMA] $Message" -ForegroundColor $Color
}

function Get-NodeProcesses {
    return Get-Process | Where-Object { $_.ProcessName -eq "node" -and $_.Id -ne $null }
}

function Get-PortUsage {
    $ports = @(3000, 3001, 3002, 3003, 5555)
    foreach ($port in $ports) {
        $connection = Test-NetConnection -ComputerName localhost -Port $port -InformationLevel Quiet
        if ($connection) {
            Write-Host "Port ${port}: BELEGT" -ForegroundColor Red
        } else {
            Write-Host "Port ${port}: FREI" -ForegroundColor Green
        }
    }
}

function Stop-AllNode {
    Write-Status "Stoppe alle Node.js-Prozesse..." "Yellow"
    $processes = Get-NodeProcesses
    if ($processes) {
        foreach ($proc in $processes) {
            Write-Host "  Stoppe Prozess ID: $($proc.Id)" -ForegroundColor Yellow
        }
        taskkill /F /IM node.exe
        Start-Sleep 2
        Write-Status "Alle Node.js-Prozesse gestoppt." "Green"
    } else {
        Write-Status "Keine Node.js-Prozesse gefunden." "Green"
    }
}

function Start-DevServer {
    Write-Status "Starte Next.js Entwicklungsserver..." "Cyan"
    Write-Status "Server startet auf http://localhost:3000" "Cyan"
    
    # Cache leeren für sauberen Start
    if (Test-Path ".next") {
        Remove-Item -Recurse -Force .next
        Write-Status "Next.js Cache geleert" "Yellow"
    }
    
    # Entwicklungsserver starten
    Start-Process powershell -ArgumentList "-Command", "npm run dev" -WindowStyle Normal
    
    # Warten bis Server bereit ist
    Write-Status "Warte auf Server-Start..." "Yellow"
    $timeout = 30
    $elapsed = 0
    
    do {
        Start-Sleep 2
        $elapsed += 2
        try {
            $response = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 5
            if ($response.StatusCode -eq 200) {
                Write-Status "Server erfolgreich gestartet!" "Green"
                Write-Status "Homepage: http://localhost:3000" "Cyan"
                Write-Status "Dashboard: http://localhost:3000/dashboard" "Cyan"
                Write-Status "Export: http://localhost:3000/export" "Cyan"
                return
            }
        } catch {
            Write-Host "." -NoNewline -ForegroundColor Yellow
        }
    } while ($elapsed -lt $timeout)
    
    Write-Status "Server-Start dauert länger als erwartet" "Yellow"
}

function Start-PrismaStudio {
    Write-Status "Starte Prisma Studio auf Port 5555..." "Magenta"
    Start-Process powershell -ArgumentList "-Command", "npx prisma studio" -WindowStyle Normal
    Start-Sleep 3
    Write-Status "Prisma Studio: http://localhost:5555" "Magenta"
}

function Show-Status {
    Write-Status "Aktuelle System-Status:" "Cyan"
    Write-Host ""
    
    Write-Host "Node.js Prozesse:" -ForegroundColor Cyan
    $nodeProcesses = Get-NodeProcesses
    if ($nodeProcesses) {
        foreach ($proc in $nodeProcesses) {
            Write-Host "  PID: $($proc.Id) | Memory: $([math]::Round($proc.WS/1MB, 1))MB | CPU: $($proc.CPU)s" -ForegroundColor White
        }
    } else {
        Write-Host "  Keine Node.js-Prozesse aktiv" -ForegroundColor Gray
    }
    
    Write-Host ""
    Write-Host "Port-Status:" -ForegroundColor Cyan
    Get-PortUsage
    
    Write-Host ""
    Write-Host "Verfügbare Services:" -ForegroundColor Cyan
    
    # Teste Services
    $services = @(
        @{ Name = "Homepage"; Url = "http://localhost:3000" },
        @{ Name = "Dashboard"; Url = "http://localhost:3000/dashboard" },
        @{ Name = "Leads"; Url = "http://localhost:3000/leads" },
        @{ Name = "Campaigns"; Url = "http://localhost:3000/campaigns" },
        @{ Name = "Landing Pages"; Url = "http://localhost:3000/landingpage-builder" },
        @{ Name = "Export"; Url = "http://localhost:3000/export" },
        @{ Name = "Prisma Studio"; Url = "http://localhost:5555" }
    )
    
    foreach ($service in $services) {
        try {
            $response = Invoke-WebRequest -Uri $service.Url -UseBasicParsing -TimeoutSec 3
            if ($response.StatusCode -eq 200) {
                Write-Host "  $($service.Name): ONLINE - $($service.Url)" -ForegroundColor Green
            }
        } catch {
            Write-Host "  $($service.Name): OFFLINE - $($service.Url)" -ForegroundColor Red
        }
    }
}

function Clean-Environment {
    Write-Status "Führe komplette Umgebungsbereinigung durch..." "Yellow"
    
    # Stoppe alle Prozesse
    Stop-AllNode
    
    # Lösche Caches
    Write-Status "Lösche Build-Caches..." "Yellow"
    if (Test-Path ".next") { Remove-Item -Recurse -Force .next }
    if (Test-Path "node_modules/.cache") { Remove-Item -Recurse -Force node_modules/.cache }
    
    # Prüfe Ports
    Write-Status "Prüfe Port-Verfügbarkeit..." "Yellow"
    Get-PortUsage
    
    Write-Status "Umgebung bereinigt und bereit für Neustart!" "Green"
}

# Main Script Logic
Write-Host ""
Write-Host "PMA Insurance Platform - Port Management" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

switch ($Action) {
    'start' {
        Write-Status "Starte Entwicklungsumgebung..." "Green"
        Clean-Environment
        Start-DevServer
        Show-Status
    }
    'stop' {
        Write-Status "Stoppe Entwicklungsumgebung..." "Red"
        Stop-AllNode
        Show-Status
    }
    'status' {
        Show-Status
    }
    'clean' {
        Clean-Environment
    }
}

Write-Host ""
Write-Host "Fertig! Nächste Schritte:" -ForegroundColor Green
Write-Host "   Start: ./scripts/manage-ports.ps1 start" -ForegroundColor White
Write-Host "   Stop:  ./scripts/manage-ports.ps1 stop" -ForegroundColor White  
Write-Host "   Status: ./scripts/manage-ports.ps1 status" -ForegroundColor White
Write-Host "   Clean: ./scripts/manage-ports.ps1 clean" -ForegroundColor White
Write-Host "" 