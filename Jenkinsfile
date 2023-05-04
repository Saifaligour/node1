pipeline {
  agent any

  stages{
    
    stage('Stop and Remove Existing Container') {
      steps {
        withEnv(['PATH+=/usr/local/bin/']){
        sh 'docker-compose down'
        }
      }
    }

    stage('Run Docker Container') {
      steps {
        sh 'docker-compose up -d '
      } 
    }

    stage('Check Application Status') {
      steps {
        sh 'docker-compose ps'
      }
    }
  }
}

