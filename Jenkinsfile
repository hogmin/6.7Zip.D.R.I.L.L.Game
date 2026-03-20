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
stage('Testing') {
    steps {
        echo 'Тест 1: Linting (Аналіз стилю коду)'
        bat 'npm run lint'

        echo 'Тест 2: Type Checking (Перевірка TypeScript)'
        bat 'npx tsc --noEmit'

        echo 'Тест 3: Smoke Test (Спроба зібрати білд)'
        bat 'npm run build'
    }
}
post {
    always {
        junit 'test-results/*.xml'
        echo 'Формування звіту завершено'
    }
}