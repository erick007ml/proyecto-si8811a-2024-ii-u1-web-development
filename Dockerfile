FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY postcss.config.js ./
COPY tailwind.config.js ./

RUN npm install

COPY . .

ARG VITE_SERVER_EVENTO
ARG VITE_SERVER_EQUIPO
ARG VITE_SERVER_PARTICIPANTE
ARG VITE_SERVER_LUGARES
ARG VITE_SERVER_CATEGORIAS

ENV VITE_SERVER_EVENTO=${VITE_SERVER_EVENTO}
ENV VITE_SERVER_EQUIPO=${VITE_SERVER_EQUIPO}
ENV VITE_SERVER_PARTICIPANTE=${VITE_SERVER_PARTICIPANTE}
ENV VITE_SERVER_LUGARES=${VITE_SERVER_LUGARES}
ENV VITE_SERVER_CATEGORIAS=${VITE_SERVER_CATEGORIAS}

RUN npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
