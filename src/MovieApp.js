
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
// 그전에 깃헙에서 호스팅하기 위해서 pakage.json에서 deploy와predeploy를 설정하고 homepage를 깃헙 호스팅 형식에 맞는 도메인으로 작성함
function MovieApp() {
    
    return (
       <Router>
           <Routes>
               <Route path="/movie/:id" element={<Detail />}>
               </Route>
               <Route path="/" element={<Home />}>
               </Route>
           </Routes>
       </Router>
    );
}

export default MovieApp;