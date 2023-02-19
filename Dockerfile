FROM node:18
ENV GENERATE_SOURCEMAP=false
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --verbose
ENV NODE_ENV production
EXPOSE 3000
CMD ["npx", "serve", "build"]