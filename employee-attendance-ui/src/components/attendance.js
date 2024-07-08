// attendance.js
const { db } = require('../firebase');

const recordAttendance = async (employeeId) => {
  try {
    const timestamp = new Date();
    await db.collection('attendance').add({
      employeeId,
      timestamp
    });
    console.log("Attendance recorded");
  } catch (error) {
    console.error("Error recording attendance:", error.message);
  }
};

const getAttendanceRecords = async (employeeId) => {
  try {
    const records = [];
    const snapshot = await db.collection('attendance')
      .where('employeeId', '==', employeeId)
      .orderBy('timestamp', 'desc')
      .get();

    snapshot.forEach(doc => {
      records.push(doc.data());
    });

    return records;
  } catch (error) {
    console.error("Error getting attendance records:", error.message);
  }
};

module.exports = { recordAttendance, getAttendanceRecords };
