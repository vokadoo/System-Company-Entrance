// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { registerEmployee, loginEmployee } = require('./auth');
const { recordAttendance, getAttendanceRecords } = require('./attendance');

const app = express();
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  await registerEmployee(email, password);
  res.send("Employee registered");
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  await loginEmployee(email, password);
  res.send("Employee logged in");
});

app.post('/attendance', async (req, res) => {
  const { employeeId } = req.body;
  await recordAttendance(employeeId);
  res.send("Attendance recorded");
});

app.get('/attendance/:employeeId', async (req, res) => {
  const { employeeId } = req.params;
  const records = await getAttendanceRecords(employeeId);
  res.send(records);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
