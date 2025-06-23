# Manuelle Git-PATH-Konfiguration für YoYo

## Problem
YoYo/Cursor erkennt Git nicht, obwohl es installiert ist.

## Lösung 1: Cursor neustarten (Einfachste Lösung)
1. **Cursor komplett schließen** (alle Fenster)
2. **30 Sekunden warten**
3. **Cursor neu öffnen**
4. **Projekt erneut öffnen**
5. **Strg+Alt+S erneut versuchen**

## Lösung 2: Git-PATH manuell hinzufügen

### Über Windows-Systemsteuerung:
1. **Windows-Taste + R** drücken
2. **`sysdm.cpl`** eingeben und Enter
3. **Erweitert**-Tab öffnen
4. **Umgebungsvariablen** klicken
5. Bei **Systemvariablen** → **Path** auswählen → **Bearbeiten**
6. **Neu** klicken und hinzufügen:
   - `C:\Program Files\Git\bin`
   - `C:\Program Files\Git\cmd`
7. **OK** klicken (alle Dialoge)
8. **Computer neu starten**

### Über PowerShell (Administrator):
1. **PowerShell als Administrator** öffnen
2. Ausführen: `./scripts/fix-git-path.ps1`
3. **Cursor neu starten**

## Lösung 3: Git neu installieren
1. Git deinstallieren über **Programme hinzufügen/entfernen**
2. Von https://git-scm.com/download/win **neu herunterladen**
3. Bei Installation: **"Git from the command line and also from 3rd-party software"** wählen
4. **Computer neu starten**
5. **Cursor neu starten**

## Lösung 4: YoYo-spezifische Einstellungen
1. In Cursor: **Strg+Shift+P**
2. **"Settings"** eingeben
3. Nach **"git.path"** suchen
4. Pfad setzen auf: `C:\Program Files\Git\bin\git.exe`
5. **Cursor neu starten**

## Verifizierung
Nach jeder Lösung testen mit:
```powershell
./scripts/git-simple-check.ps1
```

## Status
- ✅ Git ist installiert (Version 2.50.0)
- ✅ Git funktioniert in PowerShell
- ✅ Git funktioniert in cmd.exe
- ✅ .git-Repository ist vorhanden
- ❌ YoYo erkennt Git nicht (wahrscheinlich PATH-Problem)

## Kontakt
Falls keine Lösung funktioniert, YoYo-Support kontaktieren mit diesem Diagnose-Report. 