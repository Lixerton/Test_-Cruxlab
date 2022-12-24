
import { useEffect } from 'react';
import './App.css';



function App() {

const fetchData = async() => {
  const resp = await fetch('http://localhost:3000/test.txt');
  const firstOperation = await resp.text();
  const secondOperation = firstOperation.split(['\n']).map(item => item.replace('\r',''));
  const thirdOperation = secondOperation.map(item => item.split([' ']));
  let counter = 0
  for (let i = 0; i < thirdOperation.length; i++) {
    const key = thirdOperation[i][0];
    const start = Number(thirdOperation[i][1][0]);
    const end = Number(thirdOperation[i][1][2]);
    const pass = thirdOperation[i][3]; 
    if(pass.split('').filter(char => char === key).length >= start && pass.split('').filter(char => char === key).length <= end) {
      
      counter = counter + 1
    } else {
      console.log(i+1, '- не валідний')
    }
  }
  console.log("валідних паролей:", counter)  
}

useEffect(() => {
  fetchData();
},[])
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
