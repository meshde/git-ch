cd /home/my-repository
echo "first file" > file.txt
git add . && git commit -m "First commit"
echo "\nByline" >> file.txt && git commit -am "Latest commit on master"
echo "\nAdd Feature" >> file.txt && git commit -am "Feature Commit"
git log --oneline > /usr/bin/feature-base.txt && git log --oneline HEAD~1 > /usr/bin/master-base.txt
