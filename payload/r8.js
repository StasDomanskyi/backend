const connection = require('./database');

module.exports = {
  getAll: (req, res) => {
    connection.query('SELECT * FROM r8', (err, data) => {
      res.send(data);
    })
  },

  getDomain: (req, res) => {
    let query = `
      SELECT r1.user_name, r1.email, r8.domain_name, r8.NS, r8.register, r8.register_date, r8.end_date 
      FROM r8 LEFT JOIN r1 ON r1.user_number=r8.client_number 
      WHERE r8.end_date >= CURRENT_DATE AND r8.register LIKE "%${req.params.register}%"
      ORDER BY 1
    `;
            
    connection.query(query, (err, data) => {
      res.send(data);
    });
  },

  postDomain: (req, res) => { 
    connection.query(`
    INSERT r8(domain_name, NS, client_number, domain_status, invoice, register, register_date, end_date) 
    VALUES (
      '${req.body.domain_name}',
      '${req.body.NS}',
      '${req.body.client_number}',
      '${req.body.domain_status}',
      '${req.body.invoice}',
      '${req.body.register}',
      '${req.body.register_date}',
      '${req.body.end_date}'
    )`, (err, data) => { 
      res.send(req.body);
    });
  },

  updateDomain: (req, res) => {
    connection.query(`
      UPDATE r8
      SET ${req.body.field} = '${req.body.valueOfField}'
      WHERE ${req.body.key} LIKE "%${req.body.valueOfKey}%";
    `, (err, data) => {
      res.send(req.body);
    });
  },

  deleteDomain: (req, res) => {
    connection.query(`
      DELETE FROM r8
      WHERE ${req.params.key} = '${req.params.value}';
    `, (err, data) => {
      res.send({message: 'deleted'});
    });
  }
}