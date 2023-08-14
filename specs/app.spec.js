const request = require('supertest');
//const express = require('express');
const app = require('../server');  // Remplacez par le chemin vers votre fichier serveur

describe('Server Routes', () => {
    describe('GET /', () => {
        it('should return 200 OK and the content of index.html', async () => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
            expect(response.text).toContain('<title>Arkpwa</title>');  // Remplacez "SomeTitle" par un élément que vous attendez dans votre index.html
        });
    });

    // Vous pouvez ajouter d'autres tests pour d'autres routes ici
});
