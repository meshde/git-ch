echo "Welcome to git-ch!!!"

echo ""
cat /usr/bin/assets/problem.txt
echo ""

PROMPT_COMMAND="/bin/bash /usr/bin/check || (echo $'You Cleared the Challenge!!!\nExiting...' && exit 1) || exit"
