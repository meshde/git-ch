cd /home/my-repository
echo "First Commit" > file.txt
git add . && git commit -m "First Commit"
git commit --allow-empty -m "Empty Commit"
git commit --allow-empty -m "Empty Commit #2"
echo "Second Commit" >> file.txt
git add . && git commit -m "Second Commit"
echo "Third Commit" >> file.txt
git add . && git commit -m "Third Commit"
echo "Fourth Commit" >> file.txt
git add . && git commit -m "Fourth Commit"

git log --oneline | cut -d ' ' -f 2- | grep -v "Empty Commit" > /usr/bin/log.txt
