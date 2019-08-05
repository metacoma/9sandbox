#!/bin/sh

. ./env

docker run --rm -it                                     \
  -p 0.0.0.0:1800:1800                                  \
  -v `pwd`/alpha:/usr/inferno/host                      \
  ${INFERNO_IMAGE} $*
