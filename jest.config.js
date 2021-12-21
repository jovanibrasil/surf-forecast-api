const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: "root-tests", // its a label to help visualisation
  testMatch: ["<rootDir>/src/**/*.test.ts"], // unit tests will be in the src directory
  testEnvironment: "node",
  clearMocks: true,
  preset: "ts-jest",
  moduleNameMapper: {
    //aliases mapped in the ts configs
    "@src/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
};
