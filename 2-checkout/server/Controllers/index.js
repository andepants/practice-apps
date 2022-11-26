const Models = require('../Models/index.js');



const postForm = () => {
  Models.postInfo()
    .then(response => {
      res.send('Successful postForm')
    }).catch(error => {
      res.send('ERROR in postForm')
    })
}

module.exports.postForm = postForm;