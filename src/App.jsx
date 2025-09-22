import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [postTitle, changeTitle] = useState(['Java에 관해서', 'Spring에 관해서', 'Python에 관해서']);
  postTitle.sort();
  let [goodCount, changeGood] = useState(Array(postTitle.length).fill(0));
  let [modalState, setModal] = useState(false);
  let [clickIndex, setClickIndex] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      
      {
        postTitle.map(function(param, i){ //첫째 파람은 배열의 값을 하나씩 꺼내와주고, 두번째 배열은 인덱스를 1씩 증가한다.
          return(
            <div className='list' key={i}>
                <h4 onClick={()=>{
                  setModal(!modalState);
                  setClickIndex(i);
                }}>{postTitle[i]} <span onClick={()=>{
                  let copy = [...goodCount];
                  copy[i] = copy[i]+1;
                  changeGood(copy);
                }}>👍</span> {goodCount[i]} </h4>
                <p>9월18일 발행</p>
            </div>
          )
        })
      }
      {
        modalState == true ? <Modal postTitle={postTitle} changeTitle={changeTitle} clickIndex={clickIndex}/> : null
      }
    </div>
  )
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.postTitle[props.clickIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.postTitle];
        copy[0] = 'JS에 관해서';
        props.changeTitle(copy);
      }}>글수정</button>
    </div>
  )
};

export default App
