#!/bin/sh

. ./env

#-v `pwd`/entrypoint.sh:/usr/local/bin/entrypoint.sh   \
#--entrypoint /bin/sh                                  \
docker run --rm -it                                     \
  -p 0.0.0.0:1800:1800                                  \
  -v `pwd`/alpha:/usr/inferno/host                      \
  ${INFERNO_IMAGE} $*
