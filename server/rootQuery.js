// import db from "./connect";
//
// const createPromise = (sql) => {
//   return new Promise((resolve, reject) => {
//     db.query(sql, function (err, rows, fields) {
//       if (err) throw err;
//       console.log('The solution is: ', rows);
//       resolve(rows)
//     });
//   })
// }

export default {
  hello(obj, args, context, info) {
    console.log(args.db)
    // db.getConnection   pool.escape
    return new Promise((resolve, reject) => {
      args.db.query('select  * from test', function (err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows);
        resolve(rows)
      });
    })
    // return createPromise('select  * from test')
  }
}