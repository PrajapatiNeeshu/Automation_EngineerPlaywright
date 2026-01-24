#!/bin/bash

# Complete Test Execution and Allure Report Generation Script

echo "=========================================="
echo "  Cucumber BDD Test Execution Script"
echo "=========================================="
echo ""

# Set the working directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Clean previous results
echo -e "${BLUE}Step 1: Cleaning previous test results...${NC}"
rm -rf allure-results
mkdir -p allure-results
echo -e "${GREEN}✓ Previous results cleaned${NC}"
echo ""

# Step 2: Run Cucumber tests with JSON output
echo -e "${BLUE}Step 2: Running Cucumber BDD tests...${NC}"
npx cucumber-js --format json:allure-results/cucumber-report.json

# Capture exit code
CUCUMBER_EXIT=$?

if [ $CUCUMBER_EXIT -eq 0 ]; then
  echo -e "${GREEN}✓ All tests passed!${NC}"
else
  echo -e "${YELLOW}⚠ Some tests failed (exit code: $CUCUMBER_EXIT)${NC}"
fi
echo ""

# Step 3: Generate Allure Report
echo -e "${BLUE}Step 3: Generating Allure Report...${NC}"
npx allure generate -o allure-report
echo -e "${GREEN}✓ Allure report generated${NC}"
echo ""

# Step 4: Display summary
echo "=========================================="
echo -e "${GREEN}  Test Execution Complete!${NC}"
echo "=========================================="
echo ""
echo "📊 Report Location:"
echo "   allure-report/index.html"
echo ""
echo "📝 Test Results:"
echo "   allure-results/cucumber-report.json"
echo ""
echo "🌐 To view the report locally, run:"
echo "   cd allure-report && python3 -m http.server 8080"
echo "   Then open: http://localhost:8080"
echo ""

exit $CUCUMBER_EXIT
