pipeline {
  agent any

  stages{
    
    stage('Stop and Remove Existing Container') {
      steps {
        sh 'docker rm -f node'
      }
    }

    stage('Run Docker Container') {
      steps {
        sh 'docker run -d -p 4000:3004 -v $(pwd):/app -v /app/node_modules --env-file .env --name node node'
      } 
    }

    stage('Check Application Status') {
      steps {
        sh 'docker ps'
      }
    }
  }
}

