echo "Welcome to git-ch!!!"

echo ""
echo "I fucked up git!! Can you help?"
echo "I was asked to create a new feature. I made the initial changes required and committed it."
echo "Being the clumsy fool that I am, I forgot to create a new branch from master before doing so and directly committed on top of master."
echo "I wanna fix this by having this new commit on a new branch and want master to got back to what it was before I added this commit."
echo "Please help or my boss is gonna kill me if I fuck up the commit history again!!!"

echo ""
echo "NOTE: Be sure to have checked out into your newly created branch for the verficiation process"

PROMPT_COMMAND="/bin/bash /usr/bin/check || exit"
