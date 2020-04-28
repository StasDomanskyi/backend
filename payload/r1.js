const connection = require('./database');

module.exports = {
  getAll: (req, res) => {
    connection.query('SELECT * FROM r1;', (err, data) => {
      res.send(data);
    })
  },

  getClient: (req, res) => {     
    connection.query(`
      SELECT * FROM r1
      WHERE ${req.params.key} LIKE "%${req.params.value}%"
      AND user_status = ${req.params.status};
    `, (err, data) => {
      res.send(data);
    });
  },

  postClient: (req, res) => { 
    connection.query(`
      INSERT r1(user_number, user_name, email, phone, user_status, balance)
      VALUES (
        '${req.body.user_number}',
        '${req.body.user_name}',
        '${req.body.email}',
        '${req.body.phone}',
        '${req.body.user_status}',
        '${req.body.balance}'
      );`, (err, data) => { 
      res.send(req.body);
    });
  },

  updateClient: (req, res) => {
    connection.query(`
      UPDATE r1
      SET ${req.body.field} = '${req.body.valueOfField}'
      WHERE ${req.body.key} LIKE "%${req.body.valueOfKey}%";
    `, (err, data) => {
      res.send(req.body);
    });
  },

  deleteClient: (req, res) => {
    connection.query(`
      DELETE FROM r1
      WHERE ${req.params.key} = ${req.params.value};
    `, (err, data) => {
      res.send({message: 'deleted'});
    });
  }
}