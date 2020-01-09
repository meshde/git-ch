for challenge in `ls -d challenges/*/`; do
  cp challenges/.bashrc ${challenge}
  docker build -f challenges/Dockerfile -t git-ch:`basename ${challenge}` ${challenge}
  rm ${challenge}/.bashrc
done
