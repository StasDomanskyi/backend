const connection = require('./database');

module.exports = {
  getAll: (req, res) => {
    connection.query('SELECT * FROM r5', (err, data) => {
      res.send(data);
    })
  },

  getAddon: (req, res) => {
    connection.query(`
      SELECT * FROM r5
      WHERE  ${req.params.key} LIKE "%${req.params.value}%" 
      AND addon_status = ${req.params.status};
    `, (err, data) => {      
      res.send(data);
    });
  },

  postAddon: (req, res) => { 
    connection.query(`
      INSERT r5(addon_name, addon_number, client_number, main_domain, addon_status, order_date, end_date)
      VALUES (
        '${req.body.addon_name}',
        '${req.body.addon_number}',
        '${req.body.client_number}',
        '${req.body.main_domain}',
        '${req.body.addon_status}',
        '${req.body.order_date}',
        '${req.body.end_date}'
      )`, (err, data) => { 
      res.send(req.body);
    });
  },

  updateAddon: (req, res) => {
    connection.query(`
      UPDATE r5
      SET ${req.body.field} = '${req.body.valueOfField}'
      WHERE ${req.body.key} = '${req.body.valueOfKey}';
    `, (err, data) => {
      res.send(req.body);
    });
  },

  deleteAddon: (req, res) => {
    connection.query(`
      DELETE FROM r5
      WHERE ${req.params.key} = '${req.params.value}';
    `, (err, data) => {
      res.send({message: 'deleted'});
    });
  }
}