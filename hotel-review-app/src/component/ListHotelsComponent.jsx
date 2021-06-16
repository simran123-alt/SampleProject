import React,{Component} from 'react';
import HotelDataService from "../service/HotelDataService";
import {BrowserRouter, Link, Route} from "react-router-dom";
import HotelComponent from "./HotelComponent";
import ReactStars from "react-rating-stars-component";
import {PureComponent} from "react/cjs/react.production.min";


class ListHotelsComponent extends PureComponent{

    constructor(props) {
        super(props);

        this.state={
            hotel_details:[],
            search:'',


            /*
            hotel_details : {
                hotel_id:'',
                hotel_name:''
            },
             */

            message :null

        }

        this.refreshHotels = this.refreshHotels.bind(this)
        //this.updateSearch=this.updateSearch.bind(this)
        //this.routeChange=this.routeChange.bind(this);
    }

    /*
    hotel=>(content)
    handleModalView(){
        this.refs.temp.handleShow();
    }
    */

    componentDidMount() {
        this.refreshHotels();

    }
/*
    componentWillMount() {
        const urlString=window.location.href;
        const  url=new URL(urlString);
        const contratId=url;
    }


 */
    routeChange(id){
        console.log('update '+id)
        this.props.history.push(`/showHotelDetails/${id}`);
    }

    refreshHotels(){
        HotelDataService.retriveAllDetails()
            .then(
                //res=>res.json()).then(result=>this.setState({hotel_details:result}))
                response=>{
                    console.log(response);
                    this.setState({ hotel_details: response.data })
        }

    )
    }

    //new add start
    updateSearch(event){
        console.log(event)
        console.log('a'+this.state.search)
        this.setState({search:event.target.value.substr(0,20)});
        HotelDataService.getHotelPattern(this.state.search)
            .then(
                response=>{
                    console.log(response);
                    //this.setState({search:event.target.value.substr(0,20)});
                }
            )
    }
    //new add end

    render() {
        //let a=this.props.hotel_id

        //new add start
        let filteredContacts=this.state.hotel_details.filter(
            (hotel)=>{
                return hotel.hotel_name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
            }
        )

        //new add end

        // const color1 = "#000066";
        // const color2 = "#99ccff";

        const color1 = "#33ccff";
        const color2 = "#ff99cc";

        //linear-gradient(to top, #ccffff 0%, #9966ff 100%)
        return (


            <div className="container" style={{background: `linear-gradient(to top,  ${color1} 0%,${color2} 100%)`}}>

                <BrowserRouter>
                    <Route exact path="/showHotelDetails/:id" component={HotelComponent}/>
                </BrowserRouter>

                {/*new add start*/}
                <hr/>
                <input className={"text-justify w-25 p-2"} type="text" value={this.state.search} placeholder="Search Hotel" onChange={this.updateSearch.bind(this)}/>
                <hr/>
                <hr/>
                {/*new add end*/}

                <h3 className="text-center text-uppercase" style={{color: "#997300"}}>All Hotels</h3>
                <div className="container">
                    <table className="table table-hover" width="600" border="0">
                        <thead>
                        <tr bgcolor={"#ffcccc"} className={"text-uppercase"} style={{color: "#0000ff"}}>
                            <th>Id</th>
                            <th>Hotel Name</th>
                            <th>Hotel Rating</th>
                            <th>Click for more info.</th>
                        </tr>
                        </thead>
                        <tbody >
                        {
                            // this.state.hotel_details.map(
                            filteredContacts.map(
                             hotel=>
                                    <tr key={hotel.hotel_id}
                                        bgcolor={(hotel.hotel_id %2===0) ? "#e6f3ff" : "#b3d1ff"}
                                        className={"text-uppercase"}
                                        style={{color: "#b300b3"}}

                                    >
                                        <td>{hotel.hotel_id}</td>
                                        <td>{hotel.hotel_name}</td>
                                        <ReactStars size={30}value={hotel.hotel_ratings} edit={false} isHalf={true}/>
                                        {/*<td>{hotel.hotel_ratings}</td>*/}
                                        <td><Link to={`showHotelDetails/${hotel.hotel_id}`} className="btn btn-primary">More Info.</Link></td>


                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        )
            /*
            <Link to={{
            pathname: '/yourPage',
                state: [{id: 1, name: 'hotelname'}]
        }}> Your Page </Link>

             */

            // <td><button color="link" className="px-0" onClick={this.routeChange(hotel.hotel_id)}>More Info.</button></td>
//<td><Link to={{pathname:'/showHotelDetails'}} className="btn btn-primary">More Info.</Link></td>

    }
//<button className="btn btn-success" onClick={this.addReviewClicked}>More Info.</button>

//<td><Link to="/showHotelDetails/:this.props" className="btn btn-primary">More Info.</Link></td>
}

export default ListHotelsComponent;

//<td><Link to={()=><showHotelDetails id={this.state.id}}></Link></td>