pipeline {
  agent any

  stages{
    
    stage('create new image') {
      steps {
        sh 'docker build --tag node  .'
      }
    }
    stage('Stop and Remove Existing Container') {
      steps {
        sh 'docker rm -f node'
      }
    }

    stage('Run Docker Container') {
      steps {
        sh 'docker run -d -p 4000:3004 -v $(pwd):/app --env-file .env --name node node'
      } 
    }

    stage('Check Application Status') {
      steps {
        sh 'docker ps -a'
      }
    }
    stage('Check Application Logs') {
      steps {
        sh 'docker logs node'
      }
    }
  }
}

