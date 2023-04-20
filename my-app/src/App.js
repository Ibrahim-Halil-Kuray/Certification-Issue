import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Insert from './components/Insert';
import NewInsert from './components/NewInsert';
import AllParticipants from './components/AllParticipants';


function App() {

  const [data, setData] = useState(null)

  const handleFormSubmit = (formData) => {
    setData(formData)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certify-form" element={<Form onSubmit={handleFormSubmit}/>} />
        <Route path="/insert" element={<Insert/>} />
        <Route path="/new-insert" element={<NewInsert data={data} />} />
        <Route path="/get-all" element={<AllParticipants />} />
      </Routes>
  </Router>
  );
}

export default App;
