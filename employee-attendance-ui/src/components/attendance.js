// src/components/Attendance.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import * as XLSX from 'xlsx';


function Attendance({ user }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      const querySnapshot = await getDocs(collection(db, 'attendance'));
      const recordsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRecords(recordsArray);
      setLoading(false);
    };

    fetchRecords();
  }, []);

  const handleAddEntry = async () => {
    const newRecord = {
      name: user,
      type: 'entry',
      timestamp: new Date().toLocaleString(),
    };
    await addDoc(collection(db, 'attendance'), newRecord);
    setRecords([...records, newRecord]);
  };

  const handleAddExit = async () => {
    const newRecord = {
      name: user,
      type: 'exit',
      timestamp: new Date().toLocaleString(),
    };
    await addDoc(collection(db, 'attendance'), newRecord);
    setRecords([...records, newRecord]);
  };

  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(records);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance Records');
    XLSX.writeFile(workbook, 'attendance_records.xlsx');
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div>
      <h2>Attendance Records for {user}</h2>
      <div className="buttons">
        <button onClick={handleAddEntry}>Check In</button>
        <button onClick={handleAddExit}>Check Out</button>
        <button onClick={handleExportExcel}>Export to Excel</button>
      </div>
      <ul>
        {records.map((record, index) => (
          <li key={index} className={record.type === 'entry' ? 'entry' : 'exit'}>
            <span>{record.name}</span>
            <span>{record.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
