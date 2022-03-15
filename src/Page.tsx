import React from "react";
import Login from "./pages/Login";
import App from './App'
import Home from './pages/Home'
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const Page:React.FC = ():JSX.Element =>{
// const Page  = () =>{
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={ <Navigate to="/app" /> }></Route>
        //         <Route path="/login" element={ <Login /> }></Route>
        //         <Route path="/app" element={ <App /> }>
        //             {/* <Route path="/app/home" element={<Home /> }> </Route> */}

        //         </Route>
        //     </Routes>
        // </Router>

        <Router>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route path="/" component={App}></Route>
            </Switch>

        </Router>
    )
}


export default Page