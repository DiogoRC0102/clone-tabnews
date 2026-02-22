const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const jestConfig = {
  testEnvironment: "node",
};

module.exports = createJestConfig(jestConfig);
