import './App.css';
import {React, useEffect, useState} from 'react' 
import axios from 'axios';
import BstStudentList from './components/BstStudentList';

function App() {

  const [bstStudentList, setBstStudentList]=useState([]);
  const bstGetStudent = async () => {
    try {
      const response = await axios.get("https://666a537e7013419182cedff3.mockapi.io/bstreactapi");
      setBstStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    bstGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center my-3">xu ly chuc nang hook api </h1>
      <hr/>
      <BstStudentList renderBstStudentList = {bstStudentList}/>
    </div>
  );
}

export default App;
