import React,{Component} from "react";
import {FaStar} from 'react-icons/fa'
class StarRating extends Component{
    constructor(props) {
        super(props)

        this.state={
            rating:null,
            //setRating:null,
            hover:null,
            //setHover:null
        }
        //console.log(this.state)
        //this.sendData=this.sendData.bind(this)
    }
    sendData=()=>{
        this.props.parentCallback(this.state.rating)
    }
    render() {

        return(
            <div>
                {[...Array(5)].map((star,i) =>{
                    let ratingValue=i+1;
                    return(
                        <label>
                            <input type="radio" name="rating" value={ratingValue} onClick={() => {
                                this.setState({rating:ratingValue})
                                this.props.parentCallback(ratingValue)
                            }}/>
                            <FaStar className="star"
                                    color={ratingValue <= (this.state.hover ||this.state.rating) ? "#ffc107" :"#e4e5e9"}
                                    size={50}
                                    onMouseEnter={() => this.setState({hover:ratingValue})}
                                    onMouseLeave={() => {
                                        this.setState({hover:null})
                                        this.props.parentCallback(ratingValue)
                                    }}

                            />
                        </label>
                    )
                })}
                {/*<p>The rating is {this.state.rating} </p>*/}

            </div>

        )
    }
}
export default StarRating;



// import React,{useState} from "react";
// import {FaStar} from 'react-icons/fa'
//
// const  StarRating=()=>{
//     const [rating,setRating]=useState(null);
//     const [hover,setHover]=useState(null);
//     console.log(rating);
//     return (
//
//         <div>
//             {[...Array(5)].map((star,i)=>{
//                 const ratingValue=i+1;
//
//                 return (
//                     <label>
//                         <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}/>
//                         <FaStar className="star"
//                                 color={ratingValue <= (hover ||rating) ? "#ffc107" :"#e4e5e9"}
//                                 size={50}
//                                 onMouseEnter={() => setHover(ratingValue)}
//                                 onMouseLeave={() => setHover(null)}
//                         />
//                     </label>
//                     )
//             })}
//             <p>The rating is {rating}</p>
//         </div>
//         )
//
// }
// export default StarRating;




// import React ,{Component}from 'react';
// import Rating from '@material-ui/lab/Rating';
// import { makeStyles } from '@material-ui/core/styles';
//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         '& > * + *': {
//             marginTop: theme.spacing(1),
//         },
//     },
// }));
//
// export default function HalfRating() {
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//             <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
//         </div>
//     );
// }

// class StarRating extends Component{
//     render()
//     {
//         return<div>A</div>
//     }
// }
// export default StarRating;