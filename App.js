// import logo from './logo.svg';
/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {
  let[title,tutle] = useState(['한국남자','여자신발 추천','남자 코트 추천']);
  
  let [따봉,따봉변경] = useState(0);

  return (
    <div className ="App">
      <div className= "black-nav">
        <h4>React Learning</h4>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy[0]='여자코트 추천';
        tutle(copy);
      }}>글수정</button>

      <div className= "list">
        <h4>{title[0]}</h4>
        <p>9월 27일 발행</p>
      </div>
      <div className= "list">
        <h4>{title[1]}<span onClick={ () => {따봉변경(따봉+1)}}>🐸</span>{따봉}</h4>
        <p>9월 25일 발행</p>
      </div>
      <div className= "list">
        <h4>{title[2]}</h4>
        <p>9월 24일 발행</p>
      </div>
    </div>
  );
}

export default App;
