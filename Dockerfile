# production stage
FROM nginx:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
COPY src /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]