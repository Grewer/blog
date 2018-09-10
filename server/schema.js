export default `
  type testArr {
    user:String
  }

  type Query {
    hello: [testArr]
  }
`