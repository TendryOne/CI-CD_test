const app = require("../../index");
const User = require("../../model/user.model");
const request = require("supertest")(app);
const {
  connectToDatabase,
  clearCollections,
  closeDatabaseConnection,
} = require("../db");

beforeAll(async () => {
  await connectToDatabase();
});

beforeEach(async () => {
  await clearCollections();
});

afterAll(async () => {
  await closeDatabaseConnection();
});

describe("GET /", () => {
  it("test reussie de user", async () => {
    await User.create({ name: "hi" });
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.body[0].name).toBe("hi");
  });
});
