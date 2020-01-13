cd /home/my-repository
cp /usr/bin/assets/original.py ./file.py
git add . && git commit -m "First Commit"
cp /usr/bin/assets/modified.py ./file.py
git commit -am  "Changes that may require partial revert"
git log --oneline > /usr/bin/base-log.txt
