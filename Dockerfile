FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /etc/nginx/logs
RUN touch /etc/nginx/logs/error.log
RUN chmod 777 /etc/nginx/logs/error.log

COPY ./nginx.conf /etc/nginx
COPY ./build/ /usr/share/nginx/html

EXPOSE 80 443

CMD nginx -g "daemon off;"
