#!/bin/sh

. ./env

#-v `pwd`/entrypoint.sh:/usr/local/bin/entrypoint.sh   \
#--entrypoint /bin/sh                                  \
docker run --rm -it                                     \
  -p 0.0.0.0:1801:1800                                  \
  -v `pwd`/beta:/usr/inferno/host                      \
  ${INFERNO_IMAGE} $*
