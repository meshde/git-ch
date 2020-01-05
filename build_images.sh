for challenge in `ls -1 challenges`; do
  docker build -t git-ch:${challenge} challenges/${challenge}
done
