FROM ubuntu
RUN apt-get update && apt-get install -y git
RUN git config --global user.name "test" && git config --global user.email "test@testing.co"
ADD check /usr/bin
ADD .bashrc /root/.bashrc
ADD assets /usr/bin/assets
RUN mkdir /home/my-repository
WORKDIR /home/my-repository
RUN git init
ADD setup.sh /usr/bin
RUN bash setup.sh
