@echo off
echo ========================================
echo   Update Website Gym Rat
echo ========================================
echo.

echo [1] Checking Git status...
git status
echo.

echo [2] Adding all changes...
git add .
echo.

echo [3] Enter commit message:
set /p commit_msg="Commit message: "

echo.
echo [4] Committing changes...
git commit -m "%commit_msg%"
echo.

echo [5] Pushing to GitHub...
git push
echo.

echo ========================================
echo   Update Complete!
echo   Website will update in 30-60 seconds
echo ========================================
pause

