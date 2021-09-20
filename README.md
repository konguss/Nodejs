
 
## Prerequistes


nodejs >=10.13.0
npm >=6.x.x
## Installation 


```bash
$ npm install
```

## Running the app

```bash
# development


$ npm run lint
$ npm run start


######################################################
Jenkins build pipline steps. 

The steps are performed in the jenkins pipeline mentioned in Jenkinsfile. 

1. Stage one. 

 Clone the repo from git to jenkins workspace 

2. stage two. 

 Stage two of the jenkins pipleline perform the npm install, it add the dependines mentioned in pacakge.json file. 

3. app test 

Stage 3 runs npm lint. 

4. build image 

The stage docker image is build from the setps mentioned in Dockerfile. 

