for challenge in `ls -d challenges/*/`; do
  docker build -f challenges/Dockerfile -t git-ch:`basename ${challenge}` ${challenge}
done
