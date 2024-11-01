import React ,{useState}from 'react'

const App = () => {
  let [counter, setCounter] = useState(5);
  const update = () => {
    setCounter(counter+1);
  }

  const decrease = () => {
    setCounter(counter-1);
  }
  return (
    <div>
    <h1>น่องหมาราดซอส หม่าล่า!!</h1>
    <p>ราคาไม้ละ {counter} บาท <button onClick={update}>Add counter</button> <button onClick={decrease}>Add remove</button></p>
     <p>5 ไม้    {counter*5} บาท</p>
     <p>10 ไม้   {counter*10} บาท</p>
     <p>20 ไม้   {counter*20} บาท</p>
     <p>30 ไม้   {counter*30} บาท</p>
     <h2>อร่อยเด็ดเผ็ดสุดๆ !!!!</h2>
    
    
    </div>
  )
}

export default App
