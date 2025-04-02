pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ecommerce-frontend:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git clone 'https://github.com/SarthakRana21/ecommerce-fontend.git'
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
                    sh 'docker run -dit -p 8080:8080 $DOCKER_IMAGE'
                }
            }
        }
    }
}
