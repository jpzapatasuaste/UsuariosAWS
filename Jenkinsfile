pipeline{
    agent any
    stages{
        stage('install'){
            steps{
                sh 'npm install -f'
            }

        }
        stage('deploy'){
            steps('deploy'){
                sh 'serverless -version'
            }

        }
    }
}