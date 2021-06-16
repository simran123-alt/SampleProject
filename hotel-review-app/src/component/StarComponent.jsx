import React, {Component} from 'react';
import ReactStars from "react-rating-stars-component/dist/react-stars";

const secondExample = {
    size: 30,
    count: 5,
    color: "black",
    activeColor: "red",
    value: 3.5,
    edit:false,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onLoad:newValue=>{console.log(`loaded star`)},
    onChange: value => {
        console.log(`Example 2: new value is ${value}`);
    }
};

class StarComponent extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>


                <ReactStars {...secondExample} />



            </div>
        );
    }
}
export default StarComponent