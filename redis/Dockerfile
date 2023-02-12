FROM redis:alpine

LABEL Author="hungntsol"

COPY ./conf/nodes.conf /data/nodes.conf
COPY ./conf/redis.conf /conf/redis.conf
COPY entrypoint.sh /conf/entrypoint.sh
COPY hello.sh /conf/hello.sh

EXPOSE 6379
#ENTRYPOINT [ "/conf/entrypoint.sh" ]
#CMD [ "redis-server", "/conf/redis.conf" ]
CMD [ "sh", "-c", "/conf/entrypoint.sh; redis-server /conf/redis.conf; /conf/hello.sh"]