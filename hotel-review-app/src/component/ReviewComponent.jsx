import React,{Component} from 'react';

//import { browserHistory } from 'react-router'
import HotelDataService from "../service/HotelDataService";
import AuthenticationService from "../service/AuthenticationService";
import ReactStars from "react-rating-stars-component";
import {PureComponent} from "react/cjs/react.production.min";

class ReviewComponent extends PureComponent{

    constructor(props) {
        super(props);
        this.state={
            //id:this.props.message,
            //id:this.props.match.params.id,
            //id:this.props.dataParentToChild,
            reviews:[],
            user_id:'',
            /*
            reviews:{
                feedback_id:'',
                user_id:'',
                review:''
            },
             */
            message:null
           // id:this.props.match.params.id,
           // user_id:'',
           // review:''
        }
        this.addReviewClicked =this.addReviewClicked.bind(this)
    }


    componentDidMount() {
        console.log(this.props.id)

        HotelDataService.retrieveReviewsForHotelById(this.props.id)
            .then(response=>this.setState({
                reviews:response.data
                //user_id:response.data.user_id,
                //review:response.data.review
            }))
    }

    addReviewClicked(hId,uId){
        console.log('add review'+ hId + uId)
        //this.props.history.push(`/addReview/${hId}/${uId}`)
        // browserHistory.push(`/addReview/${hId}/${uId}`)
        window.open(`/addReview/${hId}/${uId}`,"_self")
    }

    render() {
        //let{id,user_id,review}=this.state
       // let {id}=this.state.id

        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();

        if(isUserLoggedIn)
        {
            const loggedUserName=AuthenticationService.getLoggedInUserName()
            console.log(loggedUserName)
            HotelDataService.getUserId(loggedUserName)
                .then(response=>{
                    console.log('logged user id'+response.data)
                    this.state.user_id=response.data
                })
        }

        // return(
        //     <div>
        //         {_data.map(function(object, i){
        //             return <div className={"row"} key={i}>
        //                 {[ object.name ,
        //                     // remove the key
        //                     <b className="fosfo" key={i}> {object.city} </b> ,
        //                     object.age
        //                 ]}
        //             </div>;
        //         })}
        //     </div>
        // );

        return(
            <div className="container">
                {/*<h3>Review for Hotel ID : {id}</h3>*/}
                <h3 style={{color: "#997300"}} className="text-center text-uppercase">Review for Hotel ID : {this.props.id}</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr bgcolor={"#ffcccc"}
                            style={{color: "#0000ff"}} className={"text-uppercase"}>
                            <th>User ID</th>
                            <th>Review</th>
                            <th>Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                        {


                            // {myList.map((item, index) => (
                            //         <div key={index}>
                            //             <div class="some class">
                            //                 {item.someProperty}
                            //                 ....
                            //             </div>
                            //         </div>
                            //     )}

                            this.state.reviews.map(
                            (review,index) =>
                                    <tr key={index}
                                        bgcolor={(index % 2 === 0) ? "#b3d1ff" : "#e6f3ff"}
                                        // bgcolor={(review.feedback_id %2===0) ? "#b3d1ff" : "#e6f3ff"}
                                        style={{color: "#b300b3"}}
                                    >
                                        <td>{review.user_id}</td>
                                        <td>{review.review}</td>
                                        <td><ReactStars size={30} value={review.rating} edit={false} isHalf={true}/>
                                        </td>
                                    </tr>
                            )
                            //     this.state.reviews.map(function (review,index){
                            //         return <div className={"row"} key={index}>
                            //             {
                            //                 <tr key={index}
                            //                         bgcolor={(index %2===0) ? "#e6f3ff" : "#b3d1ff"}
                            //                         // bgcolor={(review.feedback_id %2===0) ? "#b3d1ff" : "#e6f3ff"}
                            //                         style={{color: "#b300b3"}}
                            //                     >
                            //                         <td>{review.user_id}</td>
                            //                         <td>{review.review}</td>
                            //                         <td><ReactStars size={30}value={review.rating} edit={false} isHalf={true}/></td>
                            //                     </tr>
                            //             }
                            //     }
                            //             )
                            //
                            // }
                        }
                        </tbody>
                    </table>
                    {isUserLoggedIn && <div className="row"><button className="btn btn-success" onClick={() =>this.addReviewClicked(this.props.id,this.state.user_id)}>Add Review</button></div>}
                </div>
                {/*browserHistory.push('/some/path')*/}
                {/*3:34*/}


            </div>
        )

        //between /table and /div
           // <div className="row"><button className="btn btn-success" onClick={this.addReviewClicked}>Add Review</button> </div>
    }
}
export default ReviewComponent