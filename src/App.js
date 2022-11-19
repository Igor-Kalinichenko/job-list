import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import DataContext from './context/DataContext';
import JobList from './components/JobList/JobList';
import DetailedJob from './components/DetailedJob/DetailedJob';
import './css/fonts.css';
import './css/output.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

  useEffect(() => {
    fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data', {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        setJobList(data);
        setIsLoading(false);
        });
  },[]);

  if(isLoading) return <>
  <h1>Loading...</h1>
  </>

  return <>
  <DataContext.Provider value={jobList} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path=":jobId" element={<DetailedJob />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  </DataContext.Provider>
</>
  
}

export default App;
