import mysql from "mysql";

const dbOptions = {
  host: '127.0.0.1',
  user: 'root',
  password: 'qwerty',
  port: 3306,
  database: 'blog'
}

export default mysql.createPool(dbOptions);
