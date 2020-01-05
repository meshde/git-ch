echo "Welcome to git-ch!!!"

echo ""
echo "I use a very unpopular editor that generates secret files for it's internal working"
echo "I don't want these files to appear in my git-status and I most definitely don't want to commit these files"
echo "I know I can add these to the repository's .gitignore file"
echo "but my colleagues strongly suggest not polluting the project's .gitignore due to my local environment."
echo "What should I do?"
echo ""

PROMPT_COMMAND="/bin/bash /usr/bin/check || exit"
