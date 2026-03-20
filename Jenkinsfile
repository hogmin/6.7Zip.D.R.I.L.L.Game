pipeline {
    agent any
    tools { nodejs 'node-latest' }
    stages {
        stage('Install') {
            steps { bat 'npm install' }
        }
        stage('Build') {
            steps { bat 'npm run build' }
        }
    }
}