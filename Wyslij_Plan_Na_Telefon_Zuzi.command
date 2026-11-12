#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "========================================================"
echo "   ❤️  Wysyłanie planu na stronę internetową Zuzi  ❤️"
echo "========================================================"
echo ""
echo "Wysyłam najnowsze zajęcia na listopad do GitHuba..."
echo ""

git push origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "========================================================"
  echo "✅ SUKCES! Plan został wysłany na stronę internetową!"
  echo "Zuzia ma już zaktualizowany plan pod adresem:"
  echo "👉 https://lutovak.github.io/plan-zuzi/"
  echo "========================================================"
else
  echo ""
  echo "⚠️ Wystąpił błąd autoryzacji GitHuba."
fi

echo ""
read -p "Naciśnij klawisz ENTER, aby zamknąć to okno..."
