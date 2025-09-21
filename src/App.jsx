import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [postTitle, changeTitle] = useState(['cJava에 관해서', 'bpring에 관해서', 'aPython에 관해서']);
  postTitle.sort();
  let [goodCount, changeGood] = useState([1,2,3]);
  let [modalState, setModal] = useState(false);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{postTitle[0]} <span onClick={()=>{
            let copy = [...goodCount];
            copy[0] = copy[0]+1;
            changeGood(copy);
          }}>👍</span> {goodCount[0]} </h4>
        <p>9월18일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          setModal(!modalState);
        }}>{postTitle[1]} <span>👍</span> {goodCount[1]} </h4>
        <p>9월18일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitle[2]} <span>👍</span> {goodCount[2]} </h4>
        <p>9월18일 발행</p>
      </div>
      {
        postTitle.map(function(param){
          return(
            <div>
              <div>안녕</div>
              <div>바이</div>
            </div>
          );
        })
      }
      {
        modalState == true ? <Modal/> : null
      }
    </div>
  )
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
};

export default App
