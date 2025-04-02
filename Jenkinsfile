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

        stage('Deploy') {
            steps {
                script {
                    sh 'docker run -dit -p 8080:8080 $DOCKER_IMAGE'
                }
            }
        }
    }
}
