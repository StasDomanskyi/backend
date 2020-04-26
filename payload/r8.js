const connection = require('./database');

module.exports = {
/*   getAll: (req, res) => {
    connection.query('SELECT * FROM r1', (err, data) => {
      res.send(data);
    })
  }, */

/*   getDomain: (req, res) => {
    let query = req.params.key === 'user_name' ?
    `SELECT * FROM r1 WHERE ${req.params.key} LIKE "%${req.params.value}%" AND user_status = ${req.params.status}` :
    `SELECT * FROM r1 WHERE ${req.params.key} = ${req.params.value} AND user_status = ${req.params.status}`;
            
    connection.query(query, (err, data) => {
      res.send(data);
    });
  }, */

  postDomain: (req, res) => { 
    console.log(req.body); 
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

/*   updateDomain: (req, res) => {
    connection.query(`UPDATE r1
    SET ${req.body.field} = '${req.body.valueOfField}'
    WHERE ${req.body.key} = ${req.body.valueOfKey};`, (err, data) => {
      res.send(req.body);
    });
  }, */

/*   deleteDomain: (req, res) => {
    let query = req.params.key === 'user_name' ?
    `DELETE FROM r1 WHERE ${req.params.key} = "${req.params.value}"` :
    `DELETE FROM r1 WHERE ${req.params.key} = ${req.params.value}`;

    connection.query(query, (err, data) => {
      res.send({message: 'deleted'});
    });
  } */
}