FROM ubuntu
MAINTAINER Jake Deichert

##############################################################
# Install packages
##############################################################

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
RUN curl -sS https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash

# Install the latest version of node.
RUN /bin/bash -c "source /root/.nvm/nvm.sh \
    && nvm install node \
    && nvm alias default node"

##############################################################
# Define volume and port
##############################################################

WORKDIR /root/project
VOLUME /root/project
