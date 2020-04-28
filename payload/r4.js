const connection = require('./database');

module.exports = {
/*   getSupportAll: (req, res) => {
    connection.query('SELECT * FROM r2', (err, data) => {
      res.send(data);
    })
  }, */

  getSupport: (req, res) => {
    connection.query(`
      SELECT * FROM r4
      WHERE ticket_status = ${req.params.status} 
      AND client_number = (
        SELECT user_number FROM r1
        WHERE ${req.params.key} LIKE "%${req.params.value}%"
    )`, (err, data) => {      
      res.send(data);
    });
  },

  postSupport: (req, res) => { 
    connection.query(`
      INSERT r4(prefix, ticket_number, executive_worker, ticket_status, client_number)
      VALUES (
        '${req.body.prefix}',
        '${req.body.ticket_number}',
        '${req.body.executive_worker}',
        '${req.body.ticket_status}',
        '${req.body.client_number}'
      )`, (err, data) => {
      res.send(req.body);
    });
  },

  updateSupport: (req, res) => {
    connection.query(`UPDATE r4
      SET ${req.body.field} = '${req.body.valueOfField}'
      WHERE ${req.body.key} = ${req.body.valueOfKey};`, (err, data) => {
        res.send(req.body);
    });
  },

  deleteSupport: (req, res) => {
    connection.query(`
      DELETE FROM r4
      WHERE prefix = '${req.params.prefix}'
      AND ticket_number = '${req.params.ticket_number}';
    `, (err, data) => {
      res.send({message: 'deleted'});
    });
  }
}