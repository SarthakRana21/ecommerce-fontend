pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ecommerce-frontend:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SarthakRana21/ecommerce-fontend.git'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'sudo docker run -dit -p 3000:3000 $DOCKER_IMAGE'
                }
            }
        }
    }
}
