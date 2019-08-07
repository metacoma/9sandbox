FROM alpine
RUN apk update
RUN apk add alpine-sdk openssl-dev git
WORKDIR /tmp
RUN git clone https://github.com/novnc/websockify-other
WORKDIR /tmp/websockify-other/c
RUN make
RUN cp ./websockify /usr/local/bin/
ENTRYPOINT [ "/usr/local/bin/websockify" ]


