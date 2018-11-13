const exampleType = require("./type")

const schema = `
  type Type {
    ${exampleType}
  }

  type Query {
    search(id: Int): Type
  }
`

console.log(schema);

module.exports = schema
