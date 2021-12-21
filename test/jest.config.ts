const { resolve } = require("path");
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  rootDir: root,
  displayName: "feature-tests", // its a label to help visualisation
  testMatch: ["<rootDir>/test/**/*.test.ts"], // feature tests will be in the src directory
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"] // setup that runs before the tests
};
