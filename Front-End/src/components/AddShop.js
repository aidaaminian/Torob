import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const inputStyle = {
    input: {
        color: "black",
        backgroundColor: "white",
        border:"1px solid #ccc",
        "border-radius": "4px",
        fontFamily: "iranyekan",
        "padding-left": "10px",
        height: "32px",
        width:"310px"
    }
};

class NewShop extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
        };
    }

    componentDidMount() {
        
        this.setState({
        })
            
    }
    

    buttonClick(){
        this.setState({
        })
    }

    changeNameFocusStyle(){
        document.getElementById("name").style.boxShadow = "0px 0px 0px 3px #e8f1ff";
    }

    changeNameBlurStyle(){
        document.getElementById("name").style.boxShadow = "unset";
    }

    changeAddressFocusStyle(){
        document.getElementById("address").style.boxShadow = "0px 0px 0px 3px #e8f1ff";
    }

    changeAddressBlurStyle(){
        document.getElementById("address").style.boxShadow = "unset";
    }
    
    render(){
        return(
            (
                <body>
                    <div class="resgister-page">
                        <Link to="/shop" class="register-return">
                            <div class="register-return-text">
                                بازگشت
                            </div>
                            ×
                        </Link>
                        <div class="resgister-container">
                            <div class="resgister-title" >
                                اطلاعات فروشگاه     
                            </div>
                            <div class="login-register-input-div">
                                <div class="resgister-input-label">
                                    نام کاربری
                                </div>
                                <input autoComplete='off' id="name" onFocus={this.changeNameFocusStyle.bind(this)} onBlur={this.changeNameBlurStyle.bind(this)} style={inputStyle.input}/> 
                            </div>
                            <div class="login-register-input-div">
                                <div class="resgister-input-label">
                                    آدرس سایت فروشگاه بدون www     
                                </div>
                                <input autoComplete='off' id="address" onFocus={this.changeAddressFocusStyle.bind(this)} onBlur={this.changeAddressBlurStyle.bind(this)} style={inputStyle.input}/> 
                            </div>
                            <button id="button" onClick={this.buttonClick.bind(this)} class="register-button">ثبت فروشگاه</button>
                        </div>
                    </div>
                </body>
            )
        )        
    }          
}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps)(NewShop)