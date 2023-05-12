pipeline{
    agent any
    stages{
        stage('install'){
            steps{
                bat 'npm install -f'
            }

        }
        stage('deploy'){
            steps('deploy'){
                bat 'sls deploy'
            }

        }
    }
}