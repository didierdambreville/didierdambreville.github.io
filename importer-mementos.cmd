@echo off
rem Importe les mementos depuis HUMANITAS_ET_SCIENTIA : PDF, source HTML et vignettes.
rem A relancer apres chaque nouveau memento ou nouvelle version d'un memento.
cd /d "%~dp0"
node outils\importer-mementos.mjs
echo.
pause
