pipeline{
    agent any
    stages{
        stage('install'){
            steps{
                bat 'npm install -f'
                bat 'serverless plugin install -n serverless-plugin-include-dependencies'
            }

        }
        stage('deploy'){
            steps('deploy'){
                bat 'serverless -version'
            }

        }
    }
}