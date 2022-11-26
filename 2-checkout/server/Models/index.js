const db = require('../db.js');

const postInfo = () => {
  q = "insert into form (name, email, password) values ( 'billy', 'andrew@gmail.com', 'acb123');"
  db.query(q, (err, results) => {
    console.log(results);
  });
}

module.exports.postInfo = postInfo;