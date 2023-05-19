pipeline{
    agent any
    stages{
        stage('install'){
            steps{
                bat 'npm install -f'
                bat 'npm install serverless -g'
            }

        }
        stage('deploy'){
            steps{
                bat 'serverless -version'
            }

        }
    }
}