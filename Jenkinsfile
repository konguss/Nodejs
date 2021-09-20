pipeline {
    agent any
    stages {
        stage('checkout'){
            steps{
                script{
                    checkout([
                        $class: 'GitSCM', 
                        branches: [[name: '*/main']], 
                        doGenerateSubmoduleConfigurations: false, 
                        extensions: [[$class: 'CleanCheckout']], 
                        submoduleCfg: [], 
                        userRemoteConfigs: [[ url: 'https://github.com/konguss/Nodejs.git']]
            ])
                }
            }
        }
        stage('build app'){
            steps {
                sh '''
                export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
                cd /Users/nilla/.jenkins/workspace/npm-test
                /usr/local/bin/npm install 
                '''
            }
        }
         stage('test apps'){
            steps {
                sh '''
                export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
                cd /Users/nilla/.jenkins/workspace/npm-test
                /usr/local/bin/npm run lint
                '''
            }
        }  
           stage('build apps'){
            steps {
                sh '''
                export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
                cd /Users/nilla/.jenkins/workspace/npm-test
                docker build -t node-js . 
                '''
            }
        } 
        }
}
