FROM ubuntu
RUN apt-get update && apt-get install -y git
RUN git config --global user.name "test" && git config --global user.email "test@testing.co"
ADD check /usr/bin
ADD .bashrc /root/.bashrc
RUN mkdir /home/my-repository
WORKDIR /home/my-repository
RUN git init
RUN echo "some text" > file.text && git add . && git commit -m "Important Commit"
RUN touch file_to_be_ignored
RUN git log --oneline > /usr/bin/commit-log.txt
