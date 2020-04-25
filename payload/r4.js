const connection = require('./database');

module.exports = {
/*   getAll: (req, res) => {
    connection.query('SELECT * FROM r2', (err, data) => {
      res.send(data);
    })
  }, */

  getService: (req, res) => {

/* `SELECT * 
FROM CUSTOMERS 
WHERE ID IN (SELECT ID 
      FROM CUSTOMERS 
      WHERE SALARY > 44000);` */
    let query = 
    `SELECT * FROM r4
    WHERE ticket_status = ${req.params.status} 
    AND client_number = (
      SELECT user_number FROM r1
      WHERE ${req.params.key} LIKE "%${req.params.value}%"
    )`;
    
    console.log(query);
            
    connection.query(query, (err, data) => {      
      res.send(data);
    });
  },

  /* postClient: (req, res) => { 
    console.log(req.body); 
    connection.query(`
      INSERT r1(user_number, user_name, email, phone, user_status, balance)
      VALUES ('${req.body.user_number}', '${req.body.user_name}', '${req.body.email}', '${req.body.phone}', '${req.body.status}', '${req.body.balance}')`, (err, data) => { 
      res.send(req.body);
    });
  }, */

  /* updateClient: (req, res) => {
    connection.query(`UPDATE r1
    SET ${req.body.field} = '${req.body.valueOfField}'
    WHERE ${req.body.key} = ${req.body.valueOfKey};`, (err, data) => {
      res.send(req.body);
    });
  }, */

  /* deleteClient: (req, res) => {
    let query = req.params.key === 'user_name' ?
    `DELETE FROM r1 WHERE ${req.params.key} = "${req.params.value}"` :
    `DELETE FROM r1 WHERE ${req.params.key} = ${req.params.value}`;

    connection.query(query, (err, data) => {
      res.send({message: 'deleted'});
    });
  } */
}