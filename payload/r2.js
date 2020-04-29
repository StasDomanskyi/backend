const connection = require('./database');

module.exports = {
  getAll: (req, res) => {
    connection.query('SELECT * FROM r2;', (err, data) => {
      res.send(data);
    })
  },

  getAccount: (req, res) => {
    connection.query(`
      SELECT * FROM r2
      WHERE account_status = ${req.params.status}
      AND account_description LIKE "%${req.params.account}%";
    `, (err, data) => {      
      res.send(data);
    });
  },

  postAccount: (req, res) => {  
    connection.query(`
      INSERT r2(account_number, account_description, sum, account_status, client_number)
      VALUES (
        '${req.body.account_number}',
        '${req.body.account_description}',
        '${req.body.sum}',
        '${req.body.account_status}',
        '${req.body.client_number}'
      );`, (err, data) => {
      res.send(req.body);
    });
  },

  updateAccount: (req, res) => {
    connection.query(`
      UPDATE r2
      SET ${req.body.field} = '${req.body.valueOfField}'
      WHERE ${req.body.key} LIKE "%${req.body.valueOfKey}%";
    `, (err, data) => {
      res.send(req.body);
    });
  },

  deleteAccount: (req, res) => {
    connection.query(`
      DELETE FROM r2
      WHERE ${req.params.key} = ${req.params.value};
    `, (err, data) => {
      res.send({message: 'deleted'});
    });
  }
}