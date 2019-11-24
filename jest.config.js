module.exports = {
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
    "@tests(.*)$": "<rootDir>/tests$1",
    "@src(.*)$": "<rootDir>/src$1",
  },
}
