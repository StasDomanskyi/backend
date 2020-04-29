const connection = require('./database');

module.exports = {
  getAll: (req, res) => {
    connection.query('SELECT * FROM r7', (err, data) => {
      res.send(data);
    })
  },

/*   getServer: (req, res) => {
    let query = req.params.key === 'user_name' ?
    `SELECT * FROM r1 WHERE ${req.params.key} LIKE "%${req.params.value}%" AND user_status = ${req.params.status}` :
    `SELECT * FROM r1 WHERE ${req.params.key} = ${req.params.value} AND user_status = ${req.params.status}`;
            
    connection.query(query, (err, data) => {
      res.send(data);
    });
  }, */

  postServer: (req, res) => {
    connection.query(`
      INSERT r7(server_name, RAM, CPU, drive_size, handler, db_version, services)
      VALUES (
        '${req.body.server_name}',
        '${req.body.RAM}',
        '${req.body.CPU}',
        '${req.body.drive_size}',
        '${req.body.handler}',
        '${req.body.db_version}',
        '${req.body.services}'
      )`, (err, data) => { 
      res.send(req.body);
    });
  },

  updateServer: (req, res) => {
    connection.query(`
      UPDATE r7
      SET ${req.body.field} = '${req.body.valueOfField}'
      WHERE ${req.body.key} LIKE "%${req.body.valueOfKey}%";
    `, (err, data) => {
      res.send(req.body);
    });
  },

  deleteServer: (req, res) => {
    connection.query(`
      DELETE FROM r7
      WHERE ${req.params.key} = '${req.params.value}';
    `, (err, data) => {
      res.send({message: 'deleted'});
    });
  }
}