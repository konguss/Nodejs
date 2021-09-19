FROM node:14
WORKDIR /usr/src/app
COPY package.json ./ 
RUN npm install typescript -g &&  npm install
COPY . . 
EXPOSE 3000 
ENV SKIP_PREFLIGHT_CHECK=true
CMD [ "npm" , "run, "start" ] 
