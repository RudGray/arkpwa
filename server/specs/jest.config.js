module.exports = {
    testEnvironment: 'node', // cela spécifie que les tests sont exécutés dans un environnement Node et non dans un navigateur
    roots: ['<rootDir>'], // cela indique à Jest de ne chercher des tests que dans le dossier "server"
    transform: {
        '^.+\\.js$': 'babel-jest' // cela utilise babel-jest pour transpiler les fichiers avant de les tester
    }
};
