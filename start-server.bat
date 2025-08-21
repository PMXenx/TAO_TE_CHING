@echo off
echo =====================================
echo   TAO DAILY PWA - LOCAL TEST SERVER
echo =====================================
echo.
echo Starting local server...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Python found! Starting server...
    echo.
    echo Server running at: http://localhost:8000
    echo.
    echo To test on phone:
    echo 1. Find your IP: ipconfig
    echo 2. On phone: http://[YOUR-IP]:8000
    echo.
    echo Press Ctrl+C to stop server
    echo =====================================
    python -m http.server 8000
) else (
    echo Python not found. Trying Python 3...
    python3 --version >nul 2>&1
    if %errorlevel% == 0 (
        echo Python 3 found! Starting server...
        echo.
        echo Server running at: http://localhost:8000
        echo.
        echo To test on phone:
        echo 1. Find your IP: ipconfig
        echo 2. On phone: http://[YOUR-IP]:8000
        echo.
        echo Press Ctrl+C to stop server
        echo =====================================
        python3 -m http.server 8000
    ) else (
        echo ERROR: Python not installed!
        echo.
        echo Please install Python from python.org
        echo OR use one of these alternatives:
        echo.
        echo 1. VS Code with Live Server extension
        echo 2. Node.js: npx http-server
        echo 3. XAMPP/WAMP local server
        echo.
        pause
    )
)