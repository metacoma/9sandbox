#!/bin/sh

. ./env

INFERNO_EMU_OPTS="-d /dis/emuinit.dis /host/export_alpha"
if [ -n "$*" ]; then
	INFERNO_EMU_OPTS="$*"
fi

docker run --rm -it                                     \
  -p 0.0.0.0:1800:1800                                  \
  -v `pwd`/alpha:/usr/inferno/host                      \
  ${INFERNO_IMAGE} $INFERNO_EMU_OPTS
