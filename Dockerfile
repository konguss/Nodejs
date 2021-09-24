FROM node:14
WORKDIR /usr/src/app
COPY .eslintrc.js ./
COPY *.json ./ 
RUN npm install typescript -g &&  npm install && npm run lint-fix
COPY . . 
EXPOSE 3000 
ENV SKIP_PREFLIGHT_CHECK=true
CMD [ "npm" , "run", "start" ] 
