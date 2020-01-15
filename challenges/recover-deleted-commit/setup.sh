cd /home/my-repository
echo "First Commit" > file.txt
git add . && git commit -m "First Commit"
echo "Second Commit" >> file.txt
git commit -am  "Second Commit"
git log > /usr/bin/log.txt
git reset --hard HEAD~1
