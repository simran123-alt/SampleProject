import React,{Component} from "react";
class LogoutComponent extends Component{

    render() {
        return(
            <>
                <h3 className="text-center text-uppercase" style={{color: "#997300"}}>You are logged out</h3>
                <div className="container text-center" style={{color: "#0000ff"}}>
                    Thank You for using our application.
                </div>
            </>
        )
    }

}
export default LogoutComponent;