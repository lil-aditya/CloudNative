FROM nginx:1.27-alpine

# Optional: use supervisord if you add more processes later.
RUN apk add --no-cache supervisor

COPY nginx.conf /etc/nginx/nginx.conf
COPY supervisord.conf /etc/supervisord.conf

EXPOSE 80

CMD ["supervisord", "-c", "/etc/supervisord.conf"]
