import request from 'supertest'
import { describe, expect, test } from 'vitest'
import app from './app.js'

describe("Backend API", () => {
    test("GET / mengembalikan message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: "Backend API CI/CD berhasil" });
    });

    test("GET /health mengembalikan status OK", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: "OK" });
    });
});