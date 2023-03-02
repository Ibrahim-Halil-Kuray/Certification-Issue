import './App.css';
import Certificate from './components/Certificate';
import pdf from './Certificate.pdf'
import img from './Certificate.jpg'
import Form from './components/Form';

function App() {
  return (
    <main className="App">
    
      <Form />
      {/* <Certificate pdf={pdf} img={img}/> */}

    </main>
  );
}

export default App;
