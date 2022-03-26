# Dependency installation stage.
FROM node:16-alpine AS dependencies

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /Monorepo/frontend

COPY package.json package-lock.json ./

RUN npm ci

# React app build stage.
FROM node:alpine AS runner

WORKDIR /Monorepo/frontend

COPY . .

COPY --from=dependencies ./Monorepo/frontend/node_modules ./Monorepo/frontend/node_modules

ENTRYPOINT ["npm", "run", "start"]
