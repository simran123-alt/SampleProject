import React, {Component} from 'react';
//import {Formik,Form,Field,ErrorMessage} from "formik";
import HotelDataService from "../service/HotelDataService";
import ReviewComponent from "./ReviewComponent";
//import ReactStars from "react-rating-stars-component";

import StarRatings from 'react-star-ratings';
//import {BrowserRouter, Link, Route} from "react-router-dom";


// class HotelComponent extends Component{
//
//     constructor(props) {
//         super(props);
//         this.state={
//             id:this.props.match.params.id,
//             //hotel_details:[]
//
//
//             hotel_name:'',
//             hotel_contact_no:'',
//             hotel_address:'',
//             occupancies:'',
//             minimum_price:'',
//             hotel_ratings:Number(null)
//
//         }
//
//         this.showReviewClicked=this.showReviewClicked.bind(this)
//
//      }
//
//     componentDidMount() {
//         console.log(this.state.id)
//
//
//
//         HotelDataService.retrieveHotel(this.state.id)
//             .then(response=>this.setState({
//                 hotel_name:response.data.hotel_name,
//                 hotel_contact_no:response.data.hotel_contact_no,
//                 hotel_address:response.data.hotel_address,
//                 occupancies:response.data.occupancies,
//                 minimum_price:response.data.minimum_price,
//                 hotel_ratings:response.data.hotel_ratings
//             })
//             )
//         //console.log('rating'+this.state.hotel_ratings)
//
//
//
//
//     }
//
//     showReviewClicked(id){
//         console.log('show review'+id)
//         this.props.history.push(`/showReviewForHotel/${id}`)
//     }
//
//
//
//
//  //   CREATE TABLE hotels(hotel_id serial PRIMARY KEY, hotel_name VARCHAR(20),hotel_contact_no VARCHAR(10),hotel_address VARCHAR(40),occupancies av_oc,minimum_price float,hotel_ratings float);
//
//
//
//     render() {
//
//       //  const {id}=this.state
//         let {hotel_name,hotel_contact_no,hotel_address,occupancies,minimum_price,hotel_ratings}=this.state
//        const numbers = this.state.hotel_ratings;
//         //const {v}={hotel_ratings}
//       //  let {hotelRatingValue}=hotel_ratings
//         console.log("props",this.state);
//         console.log('type is');
//         console.log(typeof hotel_ratings);
//       //  let {newValue}={hotel_ratings};
//        // var obj = {value: {hotel_ratings}}
//         //console.log('Value of v '+v)
//
//
//         return(
//
//
//
//                 <div className="container text-uppercase">
//
//                     <h3 style={{color: "#997300"}} className={"text-uppercase"}>Hotel</h3>
//                     <div className="container" style={{color: "#0000ff"}}>
//                     <div>Hotel Id : {this.state.id}</div>
//                     <div>Hotel Name : {hotel_name}</div>
//                     <div>Contact No. : {hotel_contact_no}</div>
//                     <div>Address : {hotel_address}</div>
//                     <div>Occupancy : {occupancies}</div>
//                     <div>Minimum Price : {minimum_price}</div>
//                         <div>Hotel Rating : </div>
//
//
//                         { console.log("a11"+ hotel_ratings)}
//                         {hotel_ratings !== null && (<ReactStars size={30} value={this.state.hotel_ratings} edit={false} isHalf={true}/>)}
//                         {/*<ReactStars size={30} value={this.state.hotel_ratings} edit={false} isHalf={true}/>*/}
//
//                         <div>{hotel_ratings}</div>
//                     </div>
//                     <br/>
//                     <br/>
//                     {/*<ReviewComponent/>*/}
//                     {/*<button className="btn btn-success" onClick={() =>this.showReviewClicked(this.state.id)}>Show Reviews</button>*/}
//                     <ReviewComponent id={this.state.id}/>
//                 </div>
//                 )
//
//
//
//     }
// }

class HotelComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            hotel_details: []


        }

        // this.showReviewClicked = this.showReviewClicked.bind(this)
        // this.refreshHotels = this.refreshHotels.bind(this)
        // this.updateSearch = this.updateSearch.bind(this)
        // this.routeChange = this.routeChange.bind(this);


    }

    componentDidMount() {
        HotelDataService.retrieveHotel(this.state.id)
            .then(response=>this.setState({
                hotel_details: response.data })
            )

    }







    render() {
        const data=this.state.hotel_details
        // const data = {
        //     hotel_id: this.state.id,//1
        //     hotel_name: this.state.hotel_details.hotel_name,//"Hotel Indraprasth",
        //     hotel_contact_no: this.state.hotel_details.hotel_contact_no,//"8867896754",
        //     hotel_ratings: this.state.hotel_details.hotel_ratings//3
        // };


        //let a=this.props.hotel_id

        //new add start
        // let filteredContacts=this.state.hotel_details.filter(
        //     (hotel)=>{
        //         return hotel.hotel_name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
        //     }
        // )

        //new add end

        // const color1 = "#000066";
        // const color2 = "#99ccff";

        // const color1 = "#33ccff";
        // const color2 = "#ff99cc";

        //linear-gradient(to top, #ccffff 0%, #9966ff 100%)
        return (
            // <div style="width:800px;">
            //     <div style="width:300px; float:left;"></div>
            //     <div style="width:300px; float:right;"></div>
            // </div>

            <>
                <br/>
                <div className="container text-uppercase" style={{width:"100%;"}}>
                    <h3 style={{color: "#997300"}}  className={"text-uppercase"}>{data.hotel_name}</h3>

                    <div className="container" style={{color: "#0000ff",width:"40%",float:"left"}}>
                        <br/>
            <div>Hotel Id : {data.hotel_id}</div>
                <div>Hotel Name : {data.hotel_name}</div>
                <div>Contact No. : {data.hotel_contact_no}</div>
                <div>Address : {data.hotel_address}</div>
                <div>Occupancy : {data.occupancies}</div>
                <div>Minimum Price : {data.minimum_price}</div>
                {/*<div>{parseFloat(data.hotel_ratings)}</div>*/}
                {/*<ReactStars size={30} value={parseFloat(data.hotel_ratings)} isHalf={true} edit={false}/>*/}
                <StarRatings
                    rating={data.hotel_ratings}
                    starRatedColor="blue"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                />
                    </div>
                        <div className="image" style={{width:"60%",float:"right"}} >
                            <img src="https://www.berjayahotel.com/sites/default/files/colombo_7.jpg" width="500"  alt="Hotel Image" />
                            {/*<img src={data.hotel_url} width="600"  alt="Hotel Image" />*/}
                        </div>


                </div>

                <div style={{clear:"both"}}></div>
                <br/>
                <br/>
                    <br/>
                    <br/>
                <ReviewComponent id={this.state.id}/>


                </>

/*
            <div className="container text-uppercase">
                <h3 style={{color: "#997300"}} className={"text-uppercase"}>Hotel</h3>
                <div className="container" style={{color: "#0000ff"}}>
                    <table className="table table-hover" width="600" border="0">

                        <tbody >
                        {
                            // this.state.hotel_details.map(
                            //Object.values(this.state.hotel_details).map(function(key, index) {
                            //Object.values(this.state.hotel_details).map( hotel =>

                            // Object.keys(this.state.hotel_details).forEach(function(hotels) {
                            //     console.log(this.state.hotel_details[hotels]);
                            // })
                            Object.entries(this.state.hotel_details).forEach(([key, value]) => {
                               // console.log(key, value);
                               return(<tr>
                                    {key==="hotel_rating" && <ReactStars size={30} value={value} edit={false} isHalf={true}/>}
                                    {key!=="hotel_rating" && <td>{key} {value}</td>}





                                            </tr>)
                            })
                            // this.state.hotel_details.key(
                            //     hotel=>

                        //             <tr
                        //             >
                        //                 <td>{hotel.hotel_id}</td>
                        //                 <td>{hotel.hotel_name}</td>
                        //                 <td>{hotel.hotel_contact_no}</td>
                        //                 <td>{hotel.hotel_address}</td>
                        //                 <td>{hotel.occupancies}</td>
                        //                 <td>{hotel.minimum_price}</td>
                        //                 <ReactStars size={30}value={hotel.hotel_ratings} edit={false} isHalf={true}/>
                        //
                        //
                        //
                        //             </tr>
                        //
                        // )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
*/

        )




    }

}

export default HotelComponent

