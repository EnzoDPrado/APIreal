const app = require("../../app")
const serverless = require("serverless-http")

console.log(app);
exports.handler = serverless(app)

