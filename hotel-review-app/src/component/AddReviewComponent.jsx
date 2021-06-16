import React, {Component} from 'react';
import {Formik,Form,Field,ErrorMessage} from "formik";
//import StarRatings from 'react-star-ratings';
import ReactStars from "react-rating-stars-component";
import HotelDataService from "../service/HotelDataService";
//import StarRating from "./StarRating";
//import ReactStars from "react-rating-stars-component";
import {PureComponent} from "react/cjs/react.production.min";
//import StarComponent from "./StarComponent";


class AddReviewComponent extends Component{

    constructor(props) {
        super(props)

        this.state={

            hId:this.props.match.params.hId,
            uId:this.props.match.params.uId,
            rating:4.5,
            //rating:3.5,
            review:'',
            //message:null

        }
        this.onSubmit=this.onSubmit.bind(this)
        this.validate=this.validate.bind(this)
        this.callbackFunction=this.callbackFunction.bind(this)
        // this.secondExample=this.secondExample.bind(this)

    }

    callbackFunction=(childData)=>{
        console.log(childData)
        this.setState({rating:childData})
    }

    componentDidMount() {

        console.log('addreview for '+this.state.hId+this.state.uId)

        /*
        HotelDataService.addReviewForHotelByUserId(this.state.hId,this.state.uId)
            .then(response=>this.setState({
                rating:this.data.rating,
                review:this.data.review
            }))
         */
    }

    onSubmit(values){
         console.log(values);
        // let result={
        //     hId: this.state.hId,
        //     uId: this.state.uId,
        //     rating:values.rating,
        //     review:values.review
        // }
        //
        // HotelDataService.addReviewForHotelByUserId(this.state.hId,this.state.uId)
        //     .then(()=>this.props.history.push(`/showHotelDetails/${this.state.hId}`))
        //
        // console.log(values);


        let feedback={

            hotel_id:this.state.hId,
            user_id:this.state.uId,
            rating:values.rating,
            review:values.review
        }
        console.log('feedback'+feedback.review+feedback.rating)
        HotelDataService.addReviewForHotelByUserId(this.state.hId,this.state.uId,{feedback})
            .then(
                ()=>{
                    console.log(this.state.hId)
                    this.props.history.push(`/showHotelDetails/${this.state.hId}`)}

            )

        //window.open(`/showHotelDetails/${this.state.hId}`,"_self")


        // let username = AuthenticationService.getLoggedInUserName()
        //
        // let todo = {
        //     id: this.state.id,
        //     description: values.description,
        //     targetDate: values.targetDate
        // }
        //
        // if (this.state.id === -1) {
        //     TodoDataService.createTodo(username, todo)
        //         .then(() => this.props.history.push('/todos'))
        // } else {
        //     TodoDataService.updateTodo(username, this.state.id, todo)
        //         .then(() => this.props.history.push('/todos'))
        // }
        //
        // console.log(values);

    }

    validate(values){
        let errors={}

        if(values.rating<0 || values.rating>5){
            errors.rating='Enter rating between 0 and 5'
        }
        if(!values.review){
            errors.review='Enter review'
        }
        else if(values.review.length >100){
            errors.review='Enter review in less than 100 words'
        }
        return errors
    }





    render() {

        let{rating,review}=this.state


        return(

            <div>

            <h3 className="text-center text-uppercase" style={{color: "#997300"}}>Add Review</h3>
                {/*<StarComponent/>*/}
            <div className="container text-center text-uppercase">
                <Formik
                    initialValues={{ rating,review }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >

            {/*        const AddReviewComponent =>{*/}
                    {
                        (props)=>(
                            <Form >
                                <ErrorMessage name="rating" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="review" component="div" className="alert alert-warning"/>
                                <fieldset className="form-group">

                                    <label style={{color: "#0000ff"}} >Rating</label>

                                {/*    <StarComponent/>*/}

                                {/*    <StarRating*/}
                                {/*        disabled={false}*/}
                                {/*        maxStars={5}*/}
                                {/*        rating={this.state.starCount}*/}
                                {/*        selectedStar={(rating) => this.onStarRatingPress(rating)}*/}
                                {/*>*/}

                                    {/*<Field classname="form-control" type="text" name="rating" ></Field>*/}




                                    <div className="d-flex justify-content-center">
                                    <ReactStars   size={30}value={4.5}  edit={true} isHalf={true} a11y={true} activeColor={"#ffc107"}
                                                emptyIcon={<i className="far fa-star" />}
                                                halfIcon={<i className="fa fa-star-half-alt" />}
                                                onChange={(newValue)=>{
                                                    console.log('NewValue'+newValue)
                                                    this.setState({rating:newValue})
                                                }}
                                    />
                                    </div>




                                {/*    <ReactStars*/}
                                {/*    size={50}*/}
                                {/*    count={5}*/}
                                {/*    color={"#000000"}*/}
                                {/*    activeColor={"#ffc107"}*/}
                                {/*    value={3.5}*/}
                                {/*    a11y={true}*/}
                                {/*    isHalf={true}*/}
                                {/*    emptyIcon={<i className="far fa-star" />}*/}
                                {/*    halfIcon={<i className="fa fa-star-half-alt" />}*/}
                                {/*    filledIcon={<i className="fa fa-star" />}*/}
                                {/*    onChange={newValue => {*/}
                                {/*       // this.setState*/}
                                {/*    console.log(`Example 2: new value is ${newValue}`)*/}
                                {/*}}*/}
                                {/*/>*/}

                                    {/*<StarRating parentCallback={this.callbackFunction}/>*/}

                                    {/*<p>{this.state.message}</p>*/}



                                </fieldset>

                                {/*<MyTextArea*/}
                                {/*    classname="form-control"*/}
                                {/*    label="Review"*/}
                                {/*    name="review"*/}
                                {/*    rows="6"*/}
                                {/*    placeholder="Add Review"*/}
                                {/*/>*/}


                                <fieldset className="form-group">
                                    <label style={{color: "#0000ff"}}>Review </label>
                                    <br/>
{/*                                    <textarea cols="50" rows="5" name="review" className="form-control">    */}

{/*</textarea>*/}
                                    <Field as="textarea" classname="form-control text-area" type="text-area" name="review" ></Field>
                                </fieldset>

                                <button className="btn btn-success" type="submit" onClick={this.onSubmit}>Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>

            </div>


            )



    }


}







export default AddReviewComponent