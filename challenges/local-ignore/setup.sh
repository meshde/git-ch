cd /home/my-repository
echo "some text" > file.text && git add . && git commit -m "Important Commit"
touch file_to_be_ignored
git log --oneline > /usr/bin/commit-log.txt
