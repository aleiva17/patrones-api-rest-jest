import { app } from "../src/app";
import request from "supertest";

describe("GET /problem", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get("/problem").send();
    expect(response.status).toBe(200);
  })

  test("Should respond with a 200 status code when getting a problem by a valid id", async () => {
    const response = await request(app).get("/problem/63657055b18737e80f8d9f1b").send();
    expect(response.status).toBe(200);
  })
})

describe("POST /problem", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).post("/problem").send({
      title: "Test title",
      statement: "Test statement",
      level: "Hard",
      testCases: [
        {
          input: "TC-01 input",
          output: "TC-01 output",
        },
        {
          input: "TC-02 input",
          output: "TC-02 output",
        }
      ]
    });
    expect(response.status).toBe(200);
  })
})

describe("PUT /problem/:id", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/problem").send();
    const lastOne = response.body
    const putResponse = await request(app).put(`/problem/${ lastOne[1]["_id"] }`).send({
      title: "NEW Test title",
      statement: "NEW Test statement",
      level: "Easy",
      testCases: [
        {
          input: "NEW TC-01 input",
          output: "NEW TC-01 output",
        },
        {
          input: "NEW TC-02 input",
          output: "NEW TC-02 output",
        }
      ]
    });
    expect(putResponse.status).toBe(200);
  })  
})

describe("DELETE /problem/:id", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/problem").send();
    const lastOne = response.body;
    const deleteResponse = await request(app).delete(`/problem/${ lastOne[1]["_id"] }`).send();
    expect(deleteResponse.status).toBe(200);
  })
})