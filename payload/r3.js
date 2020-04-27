const connection = require('./database');

module.exports = {
/*   getAll: (req, res) => {
    connection.query('SELECT * FROM r2', (err, data) => {
      res.send(data);
    })
  }, */

  getService: (req, res) => {
    let query = 
    `SELECT * FROM r3 WHERE  ${req.params.key} 
    LIKE "%${req.params.value}%" AND main_domain LIKE "%${req.params.domain}%"`;
    
    console.log(query);
            
    connection.query(query, (err, data) => {      
      res.send(data);
    });
  },

  postService: (req, res) => { 
    console.log(req.body); 
    connection.query(`
      INSERT r3 (service_name, service_number, client_number, main_domain, status, server, order_date, end_date)
      VALUES (
        '${req.body.service_name}',
        '${req.body.service_number}',
        '${req.body.client_number}',
        '${req.body.main_domain}',
        '${req.body.status}',
        '${req.body.server}',
        '${req.body.order_date}',
        '${req.body.end_date}'
      );`, (err, data) => { 
      res.send(req.body);
    });
  },

  updateService: (req, res) => {
    connection.query(`UPDATE r3
    SET ${req.body.field} = '${req.body.valueOfField}'
    WHERE ${req.body.key} = ${req.body.valueOfKey};`, (err, data) => {
      res.send(req.body);
    });
  },

  /* deleteService: (req, res) => {
    let query = req.params.key === 'user_name' ?
    `DELETE FROM r3 WHERE ${req.params.key} = "${req.params.value}"` :
    `DELETE FROM r3 WHERE ${req.params.key} = ${req.params.value}`;

    connection.query(query, (err, data) => {
      res.send({message: 'deleted'});
    });
  } */
}