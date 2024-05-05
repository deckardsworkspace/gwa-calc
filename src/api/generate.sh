#!/bin/bash
BACKEND_URL="http://localhost:9050"
SCHEMA_PATH="./openapi.json"

run_pre_commit() {
  xargs pre-commit run --files "$@" || exit 0
}

echo "Fetching OpenAPI schema from ${BACKEND_URL}"
curl -s --connect-timeout 5 \
  -o "${SCHEMA_PATH}" \
  "${BACKEND_URL}/openapi.json"

if [ $? -ne 0 ] || [ ! -f "./openapi.json" ]; then
  echo -e "Failed to fetch OpenAPI schema. Is the backend running?\n"
  exit 1
fi

echo "Generating API client from OpenAPI schema"
npx @openapitools/openapi-generator-cli \
  generate -i "${SCHEMA_PATH}" \
  -g typescript-fetch \
  -o src/api >/dev/null

echo "[PASS 1] Running pre-commit hooks"
find src/api -type f -name '*.ts' | run_pre_commit

echo "[PASS 2] Running pre-commit hooks"
find src/api -type f -name '*.ts' | run_pre_commit

echo -e "\nDone!"
rm "${SCHEMA_PATH}"
