class Query {
  constructor(db) {
    this.db = db
    this.params = ''
    this.table = ''  // table name
    this.query = '*' //query key default *
  }

  where(params) {
    this.params += params
    return this;
  }

  and() {
    this.params += ` AND`
    return this;
  }

  or() {
    this.params += ` OR`
    return this;
  }

  query() {
    db.query(`SELECT ${this.query} FROM ${this.table} WHERE ${this.params}`)
  }

  print() {
    return `SELECT ${this.query} FROM ${this.table} WHERE ${this.params}` // todo
  }
}