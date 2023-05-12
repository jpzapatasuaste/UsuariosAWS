pipeline{
    agent any
    stages{
        stage{
            steps('install'){
                bat 'npm install -f'
            }
             steps('deploy'){
                bat 'sls deploy'
            }

        }
    }
}