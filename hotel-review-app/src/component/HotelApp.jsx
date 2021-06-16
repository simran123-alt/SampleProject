import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListHotelsComponent from "./ListHotelsComponent";
import HotelComponent from "./HotelComponent";
import AddReviewComponent from "./AddReviewComponent";
import ReviewComponent from "./ReviewComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import HalfRating from "./StarRating";
import FormComponent from "./FormComponent";
import StarRating from "./StarRating";
import ReactStars from "react-rating-stars-component";
//import Rating from "./Rating";

//
// const styles = {
//     fontFamily: "sans-serif",
//     textAlign: "center"
// };


class HotelApp extends Component{

    // constructor(props) {
    //     super(props);
    // }

    // constructor(props) {
    //     super(props);
    //     console.log(props)
    //     this.state={message:null}
    //     this.callbackFunction=this.callbackFunction.bind(this)
    // }


    // callbackFunction=(childData)=>{
    //     console.log(childData)
    //     this.setState({message:childData})
    // }
    // constructor(props) {
    //     super(props)
    //     this.state={
    //     message:null}
    // }

    render() {
        // const color1 = "#000066";
        // const color2 = "#99ccff";
        // const color1 = "#33ccff";
        // const color2 = "#ff99cc";
        const color1 = "#ccffff";
        const color2 = "#9966ff";
        console.log(React.version);
       // linear-gradient(to top, #ccffff 0%, #9966ff 100%)
        return(
            <>
                {/*<ReactStars size={30}value={4.5} edit={false} isHalf={true}/>*/}
                {/*<FormComponent />, document.getElementById('star-rating')*/}

                {/*<StarRating parentCallback={this.callbackFunction}/>*/}
                {/*<p>{this.state.message}</p>*/}


                <HeaderComponent/>
                {/*<div className="jumbotron d-flex justify-content-sm-center mb-1 " >*/}
                <div className="jumbotron d-flex justify-content-sm-center mb-1"
                     // style={{background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`}}
                     style={{background: `linear-gradient(to top,  ${color1} 0%,${color2} 100%)`}}
                >
                <h1 style={{color: "#997300"}}>Hotel Review Application</h1>
                </div>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={ListHotelsComponent}/>
                            <Route path="/login" exact component={LoginComponent}/>
                            <Route path="/logout" exact component={LogoutComponent}/>
                            <Route path="/welcome/:name" exact component={WelcomeComponent}/>
                            <Route path="/showHotels" exact component={ListHotelsComponent}/>
                            <Route path="/showHotelDetails/:id" component={HotelComponent}/>
                            <Route path="/showReviewForHotel/:id" component={ReviewComponent}/>
                            <Route path="/addReview/:hId/:uId" component={AddReviewComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </BrowserRouter>
                <FooterComponent/>
            </>
        );
    }
}


function ErrorComponent(){
    return <div>An Error Occured. U typed wrong link ...</div>
}

export default HotelApp