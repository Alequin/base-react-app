const PORT = 5000

module.exports = Object.freeze({
  serverConfig: {
    port: PORT,
    authTitle: "title",
    authKey: "key"
  },
  hostname: {
    dev: `http://localhost:${PORT}`
  }
})
