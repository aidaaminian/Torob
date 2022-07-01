import React, { Component } from 'react';
import { connect } from 'react-redux'

const emailinputStyle = {
    input: {
        color: "black",
        backgroundColor: "white",
        border:"1px solid #ccc",
        "border-top-left-radius": "4px",
        "border-bottom-left-radius": "4px",
        fontFamily: "iranyekan",
        "padding-left": "10px",
        height: "32px",
        width:"88%"
    }
};

const nameinputStyle = {
    input: {
        color: "black",
        backgroundColor: "white",
        border:"1px solid #ccc",
        "border-top-left-radius": "4px",
        "border-bottom-left-radius": "4px",
        fontFamily: "iranyekan",
        "padding-left": "10px",
        "padding-bottom": "2px",
        height: "34px",
        width:"98.5%"
    }
};

class ShopOwnerAccount extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            emailClass: 'login-register-input-div'
        };
    }

    componentDidMount() {
        
        this.setState({
            emailClass: 'login-register-input-div'
        })
            
    }
    

    userButtonClick(){

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
            <body class="shop-page">
                <div class="account-panel">
                    <div class="shop-panel-item">
                        <a href="/shop" ><svg stroke="currentColor" color="#333333" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="35px" width="35px" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></a>
                        <div class="shop-panel-item-name">
                            فروشگاه
                        </div>
                    </div>
                    <div class="shop-panel-item  active-item">
                        <a href="/shopAccount" ><svg stroke="currentColor" color="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="35px" width="35px" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                        <div class="shop-panel-item-name">
                            حساب من
                        </div>
                    </div>
                </div>
                <div class="middle-panel">
                    <button id="usernamebutton" onClick={this.userButtonClick.bind(this)} class="account-middle-panel-change">اطلاعات کاربری</button>      
                    <button id="usernamebutton" onClick={this.userButtonClick.bind(this)} class="account-middle-panel-exit">خروج</button>        
                </div>
                <div class="shop-account-left-panel">                   
                    <div class="acconut-container">
                        <div class="shop-account-title" >
                            اطلاعات فردی       
                        </div>
                        <div class="login-register-input-div">
                            <div class="resgister-input-label">
                                نام کاربری
                            </div>
                            <div class="account-input-button">
                                <button id="usernamebutton" onClick={this.userButtonClick.bind(this)} class="account-change-button">تغییر شماره</button>
                                <div class="account-username-block">{this.props.username}</div>
                            </div>
                        </div>
                        <div class="login-register-input-div">
                            <div class="resgister-input-label">
                                آدرس ایمیل  
                            </div>
                            <div class="account-input-button">
                                <button id="usernamebutton" onClick={this.userButtonClick.bind(this)} class="account-change-button">دریافت کد تایید</button>
                                <input  autoComplete='off' id="address" onFocus={this.changeAddressFocusStyle.bind(this)} onBlur={this.changeAddressBlurStyle.bind(this)} style={emailinputStyle.input}/> 
                            </div>    
                        </div>
                        <div class="login-register-input-div">
                            <div class="resgister-input-label">
                                نام خانوادگی رابط فروشگاه   
                            </div>
                            <input autoComplete='off' id="name" onFocus={this.changeNameFocusStyle.bind(this)} onBlur={this.changeNameBlurStyle.bind(this)} style={nameinputStyle.input}/> 
                        </div>
                        <div class="add-product-shop-button-block">
                        </div>
                    </div>
                </div> 
            </body>
        )        
    }          
}
const mapStateToProps = (state) =>{
    return {
        username : state.username
    }
}
export default connect(mapStateToProps)(ShopOwnerAccount)
