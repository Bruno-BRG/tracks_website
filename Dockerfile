FROM node:24-slim

WORKDIR /app

# Instala dependências (inclui dev: tsx e o CLI são necessários em runtime,
# pois o app roda do fonte TypeScript sem build nesta fase).
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# Diretório padrão do SQLite; monte um volume aqui no Coolify para persistir.
RUN mkdir -p /data

ENV PORT=3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://localhost:' + (process.env.PORT || 3000) + '/').then((r) => { if (!r.ok) process.exit(1) }).catch(() => process.exit(1))"

# Gera o manifesto (.jot/), aplica migrations e sobe sem --watch.
CMD ["sh", "-c", "npx jot db:migrate && exec node --disable-warning=ExperimentalWarning --import tsx --enable-source-maps .jot/entry.ts"]
