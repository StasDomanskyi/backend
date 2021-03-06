const connection = require('./database');

module.exports = {
  getAll: (req, res) => {
    connection.query('SELECT * FROM r6', (err, data) => {
      res.send(data);
    })
  },

  /* SELECT * FROM 
  (SELECT r6.employee_full_name,
          r6.experience,
          r6.position,
          r6.email,
          r6.employee_number,
          r4.ticket_status,
          COUNT(r4.ticket_status) AS count_of_open_tickets FROM r6 
  LEFT JOIN r4 ON r6.employee_number = r4.executive_worker AND r4.ticket_status = ${req.params.status}
  WHERE r6.experience >= '${req.params.experience}'
  GROUP BY 1,2,3,4,5 
  ORDER BY 1)a
  WHERE a.count_of_open_tickets > 0
  GROUP BY 1,2,3,4,5 
  ORDER BY 1 */

  getEmployee: (req, res) => {           
    connection.query(`
    SELECT r6.employee_full_name, r6.experience, r6.position, r6.email, r6.employee_number, r4.ticket_status, r4.ticket_number
    FROM r6 
    LEFT JOIN r4 ON r6.employee_number = r4.executive_worker AND r4.ticket_status = ${req.params.status}
    WHERE r6.experience >= ${req.params.experience};
    `, (err, data) => {
      res.send(data);
    });
  },

  postEmployee: (req, res) => {  
    connection.query(`
      INSERT r6(employee_full_name, age, experience, position, email, phone_number, employee_number)
      VALUES (
        '${req.body.employee_full_name}',
        '${req.body.age}',
        '${req.body.experience}',
        '${req.body.position}',
        '${req.body.email}',
        '${req.body.phone_number}',
        '${req.body.employee_number}'
      )`, (err, data) => { 
      res.send(req.body);
    });
  },

  updateEmployee: (req, res) => {
    connection.query(`
      UPDATE r6
      SET ${req.body.field} = '${req.body.valueOfField}'
      WHERE ${req.body.key} LIKE "%${req.body.valueOfKey}%";
    `, (err, data) => {
      res.send(req.body);
    });
  },

  deleteEmployee: (req, res) => {
    connection.query(`
      DELETE FROM r6
      WHERE ${req.params.key} = '${req.params.value}';
    `, (err, data) => {
      res.send({message: 'deleted'});
    });
  }
}