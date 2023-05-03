pipeline {
  agent any

//   stages {
//     stage('Clone Repository') {
//       steps {
//         checkout([$class: 'GitSCM', branches: [[name: 'master']], userRemoteConfigs: [[url: 'https://github.com/Saifaligour/node1.git']]])
//       }
//     }
  stages{
    
    stage('Stop and Remove Existing Container') {
      steps {
        sh 'docker-compose down'
      }
    }

    stage('Run Docker Container') {
      steps {
        // sh 'docker run -p 3000:3000 -d --name my-node-container my-node-app'
        sh 'docker-compose up -d '
      } 
    }

    stage('Check Application Status') {
      steps {
        sh 'docker ps'
      }
    }
  }
}

