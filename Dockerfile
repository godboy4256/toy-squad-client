FROM node:18-buster AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# Production 런타임 - nginx
FROM nginxinc/nginx-unprivileged:1.23 AS runner
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]