import React,{Component} from "react";
class FooterComponent extends Component{
    render() {
        return(
            <footer className="footer position-relative m-5 ">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                    <ul className="navbar-nav p-200" >
                        <li className="nav-item active"><a className="nav-link" href="#" >About Us</a></li>
                        <li className="nav-item active"><a className="nav-link" href="#" >Connect With Us</a></li>
                    </ul>
                    <ul className="navbar-nav p-200 navbar-collapse justify-content-end">
                        <li className="nav-item active"><a className="nav-link" href="#" >Make Money with Us</a></li>
                        <li className="nav-item active"><a className="nav-link" href="#" >Let Us Help You</a></li>
                    </ul>
                </nav>
                <span className="text-muted center-align">All Rights Reserved @2013</span>

            </footer>



            // <div>
            //     <hr/>Footer
            // </div>
        )
    }
}
export default FooterComponent