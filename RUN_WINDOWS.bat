@echo off
setlocal
cd /d "%~dp0"
echo --------------------------------------------
echo  Prathyusha FinTech React Frontend
 echo --------------------------------------------
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Please install Node.js 22 LTS from https://nodejs.org
  pause
  exit /b 1
)
call npm install
if errorlevel 1 (
  echo npm install failed. Check your internet connection and npm settings.
  pause
  exit /b 1
)
call npm run dev
pause
