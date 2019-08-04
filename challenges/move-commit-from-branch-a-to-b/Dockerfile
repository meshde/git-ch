FROM ubuntu
RUN apt-get update && apt-get install -y git
RUN git config --global user.name "test" && git config --global user.email "test@testing.co"
ADD check /usr/bin
ADD .bashrc /root/.bashrc
RUN mkdir /home/my-repository
WORKDIR /home/my-repository
RUN git init
RUN echo "first file" > file.txt
RUN git add . && git commit -m "First commit"
RUN echo "\nByline" >> file.txt && git commit -am "Latest commit on master"
RUN echo "\nAdd Feature" >> file.txt && git commit -am "Feature Commit"
RUN git log --oneline > /usr/bin/feature-base.txt && git log --oneline HEAD~1 > /usr/bin/master-base.txt
