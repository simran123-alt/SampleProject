import React,{Component} from "react";
import AuthenticationService from "../service/AuthenticationService"
import HotelDataService from "../service/HotelDataService";
import HeaderComponent from "./HeaderComponent";


class LoginComponent extends Component{

    constructor(props) {
        super(props);

        this.state={
            user_name:'',
            password:'',
            showSuccessMessage:false,
            hasLoginFailed:false,
            value_received:''
        }

        this.loginClicked=this.loginClicked.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }


    loginClicked(){
        console.log('login')
        console.log(this.state)
        let answer={
            user_name:this.state.user_name,
            password:this.state.password
        }
       // HotelDataService.loginUser(this.state.user_name,this.state.password)
            // .then((response)=>{
            //     console.log(response)
            //     this.setState({value_received:response.data})
            //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            //     this.props.history.push(`/welcome/${this.state.username}`)
            //     console.log('Successful')
            //     this.setState({showSuccessMessage:true})
            //     this.setState({hasLoginFailed:false})
            //     //console.log('inside')
            // })
            // .catch((error)=>{
            //     console.log(error)
            //     console.log('Failed')
            //     this.setState({hasLoginFailed:true})
            //     this.setState({showSuccessMessage:false})
            // })
        // HotelDataService.loginUser(answer)
        //     .then(
        //         response=>{
        //             console.log(response);
        //             this.setState({ value_received: response.data })
        //         }
        //     )


        // HotelDataService.loginUser(answer)
        //     .then((response)=>{
        //         console.log(response)
        //         this.setState({value_received:response.data})
        //         console.log('Successful')
        //         this.setState({showSuccessMessage:true})
        //         this.setState({hasLoginFailed:false})
        //         AuthenticationService.registerSuccessfulLogin(response.data.user_name,response.data.password)
        //         this.props.history.push(`/welcome/${response.data.user_name}`)
        //
        //             //console.log('inside')
        //         })
        //         .catch((error)=>{
        //             console.log(error)
        //             console.log('Failed')
        //             this.setState({hasLoginFailed:true})
        //             this.setState({showSuccessMessage:false})
        //         })

        HotelDataService.loginUser(answer)
            .then((response)=>{
                console.log(response)
                if(this.state.user_name===response.data.user_name && this.state.password===response.data.password){
                    AuthenticationService.registerSuccessfulLogin(this.state.user_name,this.state.password)
                    console.log(AuthenticationService.getLoggedInUserName())
                    //this.props.history.push(`/welcome/${this.state.username}`)
                   // this.props.history.push(`/welcome/${this.state.user_name}`)
                    console.log('Successful')
                    this.setState({showSuccessMessage:true})
                    this.setState({hasLoginFailed:false})
                    this.props.history.push(`/`)
                    console.log('before refresh')
                    window.location.reload(false);
                    //this.updateHeader("abc")
                    //HeaderComponent.updateHeader("abc")
                    console.log('after refresh')

                }
                else {
                    console.log('Failed')
                    this.setState({hasLoginFailed:true})
                    this.setState({showSuccessMessage:false})
                }
            })



        // //abc,dummy
        // if(this.state.username==='abc' && this.state.password==='dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     console.log('Successful')
        //     this.setState({showSuccessMessage:true})
        //     this.setState({hasLoginFailed:false})
        // }
        // else
        // {
        //     console.log('Failed')
        //     this.setState({hasLoginFailed:true})
        //     this.setState({showSuccessMessage:false})
        //
        // }
    }

    handleChange(event){
        //console.log(event)
        //console.log(event.target.value);
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]:
                event.target.value

            }
        )
    }

    render() {



       // let{user_name,password}=this.state
        return(
            <div>
                <h3 className="text-center text-uppercase" style={{color: "#997300"}}>Login</h3>
                <div className="container text-center text-uppercase">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}

                    <div className="image">
                        {/*<img class="img-thumbnail" src="userLogin.png" />*/}
                        {/*<img className="https://www.freeiconspng.com/img/3048"/>*/}
                        <img src="https://www.freeiconspng.com/uploads/user-login-icon-14.png" width="100" alt="User Login Icon" />
                    </div>


                    <div className={"p-1"} style={{color: "#0000ff"}}>
                        <b>User Name: </b>
                        <input className={"text-justify w-25 p-1"} type="text" name="user_name" placeholder="Please enter user name" value={this.state.user_name} onChange={this.handleChange}/>
                    </div>
                    <div className={"p-1"} style={{color: "#0000ff"}}>
                        <b>Password: </b>
                        <input className={"text-justify w-25 p-1"} type="password" name="password" placeholder="Please enter password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-success p-2" onClick={this.loginClicked}>Login</button>

                </div>
                {/*<div className="container" style="background color:#f1f1f1">*/}

                {/*</div>*/}
            </div>
        )
    }
}
export default LoginComponent