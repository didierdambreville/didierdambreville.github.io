# ============================================================
#  Portfolio - demarrage du site en local
#  Double-cliquez sur lancer.cmd : ce script s'occupe du reste.
# ============================================================

$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot

Write-Host ""
Write-Host "  Portfolio - demarrage" -ForegroundColor Cyan
Write-Host "  ---------------------"
Write-Host ""

# --- 1. Node.js est-il installe ? ---------------------------
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Host "  Node.js n'est pas installe sur cet ordinateur." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  C'est le seul logiciel necessaire, et l'installation ne se fait qu'une fois."
    Write-Host "  Telechargez la version LTS sur :  https://nodejs.org"
    Write-Host "  Installez-la en laissant toutes les options par defaut,"
    Write-Host "  puis relancez ce fichier."
    Write-Host ""
    Read-Host "  Appuyez sur Entree pour ouvrir le site de telechargement"
    Start-Process "https://nodejs.org"
    exit
}

$version = (& node --version).TrimStart('v')
$majeure  = [int]($version.Split('.')[0])
Write-Host ("  Node.js {0} detecte." -f $version)

if ($majeure -lt 22) {
    Write-Host ""
    Write-Host "  Cette version est trop ancienne : il faut Node 22 ou plus." -ForegroundColor Yellow
    Write-Host "  Installez la version LTS depuis https://nodejs.org, puis relancez."
    Write-Host ""
    Read-Host "  Appuyez sur Entree pour fermer"
    exit
}

# --- 2. Premiere fois : installer les composants ------------
if (-not (Test-Path -LiteralPath 'node_modules')) {
    Write-Host ""
    Write-Host "  Premiere utilisation : telechargement des composants." -ForegroundColor Cyan
    Write-Host "  Cela prend une a deux minutes, une seule fois."
    Write-Host ""
    & npm install --no-audit --no-fund
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "  Le telechargement a echoue. Verifiez la connexion Internet." -ForegroundColor Red
        Read-Host "  Appuyez sur Entree pour fermer"
        exit
    }
}

# --- 3. Demarrer et ouvrir le navigateur --------------------
Write-Host ""
Write-Host "  Demarrage du site..." -ForegroundColor Cyan
Write-Host "  Adresse : http://localhost:4321"
Write-Host ""
Write-Host "  Le navigateur va s'ouvrir tout seul dans quelques secondes."
Write-Host "  Le site se rafraichit a chaque fois que vous enregistrez un fichier."
Write-Host ""
Write-Host "  POUR ARRETER : fermez simplement cette fenetre." -ForegroundColor Yellow
Write-Host ""

Start-Job -ScriptBlock {
    Start-Sleep -Seconds 6
    Start-Process 'http://localhost:4321'
} | Out-Null

& npm run dev
