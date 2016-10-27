FROM ubuntu
MAINTAINER Jake Deichert

##############################################################
# Install packages
##############################################################
# Set the terminal so we can use commands like "clear"
ENV TERM xterm

RUN apt-get update && apt-get install -y \
    git \
    vim \
    curl

# Clean unneeded packages after.
RUN apt-get --purge autoremove -y

##############################################################
# Install node with nvm
##############################################################

WORKDIR /root
RUN curl -sS https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

# Install the latest version of node and yarn.
RUN /bin/bash -c "source /root/.nvm/nvm.sh \
    && nvm install node \
    && nvm alias default node \
    && npm install -g yarn"

##############################################################
# Define volume
##############################################################

WORKDIR /root/project
VOLUME /root/project
