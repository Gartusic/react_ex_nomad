import Button from "./Button";
import CoinTracker from "./CoinTracker";
import TodoList from "./TodoList";
import styles from "./App.module.css";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import React from "react";
import { //npm i react-router-dom 을 통해 설치한 후 라우터를 사용할 수 있똬
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//npm install gh-pages = github에서 제공하는 무료 서비스 - 도메인을 가진 웹페이지를 배포할 수 있도록 해줌
// 설치 후 npm run deploy 하면 댐,,
// 그전에 깃헙에서 호스팅하기 위해서 pakage.json에서 deploy와predeploy를 설정하고 
//homepage를 깃헙 호스팅 형식에 맞는 도메인으로 작성함


import {useEffect, useState} from "react";



// function Hello(){
//   useEffect(() => {
//     console.log("I am created! :)");
//     return () => console.log("destroyed...:("); // cleanup function. 요소가 사라질 떄 실행된다. 
//   },[]);
//   return <h1>Hello</h1>;
// }
function Hello(){
  function byFn(){
    console.log("destroyed");
  }
  function hiFn(){
    console.log("created");
    return byFn; // cleanup function
  }
  useEffect(hiFn,[]);
  return <h1>Hello</h1>;
}



function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev)=> prev +1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log('I run all the time');//새로고침하면 계속 나옴
  
  useEffect(()=> {
    console.log("I run only once");
  }, []); // 프로그램 실행시 단 한번만 실행됨
  useEffect(() =>{
    if (keyword !== ""&& keyword.length > 5){
      console.log("I run when you search for", keyword);
    }
  }, [keyword]); // keyword가 변화할 때에만 실행하게된다. 
  useEffect(() =>{
      console.log("I run when counter changes");
  }, [counter]); // counter가 변화할 때에만 실행하게된다.  
  useEffect(() =>{
    console.log("I run when keyword and counter changes");
}, [keyword,counter]); //keyword나 counter가 변화할 때에만 실행하게된다.  

  const [showing, setShowing] = useState(false);
  const onClickshow = () => setShowing((prev) => !prev);
  return (
    <div >
      <h1 className={styles.title}>welcome back!</h1>
      <Button text={"Continue"}/>
      <div>
        <input value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."/>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
      </div>
      <div>
        {showing? <Hello /> : null}
        <button onClick = {onClickshow}>{showing? "Hide" : "Show"}</button>
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        <CoinTracker />
      </div>
      <hr />
      <Router basename={process.env.PUBLIC_URL}>
           <Routes>
               <Route path="/movie/:id" element={<Detail />}>
               </Route>
               <Route path="/" element={<Home />}>
               </Route>
           </Routes>
       </Router>
    </div>
  );
}

export default App;
