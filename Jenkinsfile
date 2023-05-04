// pipeline {
//   agent any

//   // environment { 
//   //       COMPOSE_DOCKER_CLI_BUILD = "1"
//   //   }
//   stages{
    
//     stage('Stop and Remove Existing Container') {
//       steps {
//         withEnv(['PATH+=/usr/local/bin/']){
//         sh 'docker-compose down'
//         }
//       }
//     }

//     stage('Run Docker Container') {
//       steps {
//         // sh 'docker run -p 3000:3000 -d --name my-node-container my-node-app'
//         sh 'docker-compose up -d '
//       } 
//     }

//     stage('Check Application Status') {
//       steps {
//         sh 'docker-compose ps'
//       }
//     }
//   }
// }
pipeline {
  agent {
    docker {
      image 'docker:latest'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t my-node-app .'
      }
    }
    stage('Run') {
      steps {
        script {
          dockerImage = docker.build('my-node-app', '.')
          dockerImage.inside {
            sh 'npm install'
            sh 'npm start'
          }
        }
      }
    }
  }
}


