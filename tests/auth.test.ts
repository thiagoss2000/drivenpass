import supertest from "supertest";
import app from "../app.js";
import dotenv from "dotenv";
dotenv.config();

const userData = {
    email: "thsdtavgfdfgfdsa@fdvv.com",
    password: "fadsdsafkjgl"
}

describe("authentication test", () => {
    it("testing signup...", async () => {
        const response = await supertest(app).post("/signUp").send(userData);
        expect(response.statusCode).toBe(201);
    });
    
    it("testing signin...", async () => {
      const response = await supertest(app).post("/signIn").send(userData);
      expect(response.statusCode).toBe(200);
    });
  
    it("testing signup...", async () => {
        const response = await supertest(app).post("/signUp").send(userData);
        expect(response.statusCode).toBe(409);
    });
});