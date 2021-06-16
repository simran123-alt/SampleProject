import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
// import ListHotelsComponent from "./ListHotelsComponent";
// import LoginComponent from "./LoginComponent";
// import LogoutComponent from "./LogoutComponent";
import AuthenticationService from "../service/AuthenticationService";
import HotelDataService from "../service/HotelDataService";

class HeaderComponent extends Component{

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         text:"First message"
    //     }
    //     this.updateHeader=this.updateHeader.bind(this)
    // }


    // componentDidMount() {
    //     this.refreshHeader()
    // }

    // refreshHeader(){
    //     const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
    //     console.log(isUserLoggedIn);
    //     const nameUserLoggedIn=AuthenticationService.getLoggedInUserName();
    //
    //     return(
    //         <BrowserRouter>
    //             <div>
    //                 <header>
    //                     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //                         <ul className="navbar-nav">
    //                             <li ><a className="nav-link" href="/" >Home</a></li>
    //                             <li ><a className="nav-link" href="/showHotels" >Show Hotels</a></li>
    //                         </ul>
    //                         <ul className="navbar-nav navbar-collapse justify-content-end">
    //                             {!isUserLoggedIn && <li ><a className="nav-link" href="/login" >Login</a></li>}
    //                             {isUserLoggedIn && <li><a className="nav-link" href="#"> Welcome {nameUserLoggedIn}</a></li>}
    //                             {isUserLoggedIn && <li ><a className="nav-link" href="/logout" onClick={AuthenticationService.logout}>Logout</a></li>}
    //
    //                         </ul>
    //                     </nav>
    //                 </header>
    //                 {/*<Route path="/" exact component={ListHotelsComponent}/>*/}
    //                 {/*<Route path="/showHotels" exact component={ListHotelsComponent}/>*/}
    //                 {/*<Route path="/login" exact component={LoginComponent}/>*/}
    //                 {/*<Route path="#" exact component={LogoutComponent}/>*/}
    //             </div>
    //         </BrowserRouter>
    //
    //     )
    // }

    // updateHeader(text){
    //     this.setState({text})
    // }


    render() {
         const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
         console.log('header '+isUserLoggedIn);
         const nameUserLoggedIn=AuthenticationService.getLoggedInUserName();


        return(
            <BrowserRouter>
                <div>
                    <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><a className="nav-link" href="/" >Home</a></li>
                            <li className="nav-item active"><a className="nav-link" href="/showHotels" >Show Hotels</a></li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li className="nav-item active"><a className="nav-link" href="/login" >Login</a></li>}
                            {isUserLoggedIn && <li className="nav-item active navbar-text"><a className="nav-link" href="#"> Welcome {nameUserLoggedIn}</a></li>}
                            {isUserLoggedIn && <li className="nav-item active"><a className="nav-link" href="/logout" onClick={AuthenticationService.logout}>Logout</a></li>}

                        </ul>
                    </nav>
                    </header>
                    {/*<Route path="/" exact component={ListHotelsComponent}/>*/}
                    {/*<Route path="/showHotels" exact component={ListHotelsComponent}/>*/}
                    {/*<Route path="/login" exact component={LoginComponent}/>*/}
                    {/*<Route path="#" exact component={LogoutComponent}/>*/}
                </div>
            </BrowserRouter>

        )
    }

}


export default HeaderComponent