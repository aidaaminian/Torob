import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeUsername } from './actions/actions'

const searchinputStyle = {
    input: {
        color: "black",
        backgroundColor: "white",
        border: 0,
        fontFamily: "iranyekan",
        direction: "rtl",
        "padding-bottom": "10px"
    }
};

const nameinputStyle = {
    input: {
        color: "black",
        backgroundColor: "white",
        border: 0,
        "padding-left": "10px",
        height: "26px",
        width:"300px",
        "padding-bottom": "0px",
        fontFamily: "iranyekan",
    }
};

function hasLowerCase(str) {
    return (/[a-z]/.test(str));
}

function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

function hasMoreThan7letter(str) {
    return str.length > 7;
}

function hasEmailForm(str) {
    return (/\S+@\S+\.\S+/.test(str));
}

class Home extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            mtdisp: 'displaynone',
            laptopdisp: 'displaynone',
            loginregisterdialogue: 'displaynone',
            dim: '',
            loginchange: 'login-register-change-mode',
            registerchange: 'displaynone',
            emailClass: 'login-register-input-div',
            userdropdown: 'displaynone',
            usernameError: 'displaynone',
            passwordError: 'displaynone',
            emailError: 'displaynone',
            searchblock: 'displaynone',
            searchItems: []
        };
    }

    componentDidMount() {
        
        this.setState({
            mtdisp: 'displaynone',
            laptopdisp: 'displaynone',
            loginregisterdialogue: 'displaynone',
            dim: '',
            loginchange: 'login-register-change-mode',
            registerchange: 'displaynone',
            emailClass: 'login-register-input-div',
            userdropdown: 'displaynone',
            usernameError: 'displaynone',
            passwordError: 'displaynone',
            emailError: 'displaynone',
            searchblock: 'displaynone'
        })
            
    }

    mobileDropdown(){
        let dispv = this.state.mtdisp === 'disp' ? 'displaynone': 'disp'
        this.setState({
            mtdisp: dispv
        })
    }

    laptopDropdown(){
        let dispv = this.state.laptopdisp === 'disp' ? 'displaynone': 'disp'
        this.setState({
            laptopdisp: dispv
        })
    }


    userButtonClick(){
        let dimv = this.props.username !== null ? '' : (this.state.dim === 'dim' ? '': 'dim')
        let userdropdownv = this.props.username === null ? 'displaynone' : 'user-dropdown'
        let loginregisterdialoguev = this.props.username !== null ? 'displaynone' : (this.state.loginregisterdialogue === 'login-register-dialogue' ? 'displaynone': 'login-register-dialogue')
        this.setState({
            dim: dimv,
            loginregisterdialogue: loginregisterdialoguev,
            userdropdown: userdropdownv
        })
    }

    changePasswordType(){
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }

    removeClick(){
        this.state.dim === 'dim' ? this.setState({dim: ''}) : this.setState({})
        this.state.mtdisp === 'disp' ? this.setState({mtdisp: 'displaynone'}) : this.setState({})
        this.state.laptopdisp === 'disp' ? this.setState({laptopdisp: 'displaynone'}) : this.setState({})
        this.state.userdropdown === 'user-dropdown' ? this.setState({userdropdown: 'displaynone'}) : this.setState({})
        this.state.loginregisterdialogue === 'login-register-dialogue' ? this.setState({loginregisterdialogue: 'displaynone'}) : this.setState({})
        this.setState({
            loginchange: 'login-register-change-mode',
            registerchange: 'displaynone',
            emailClass: 'login-register-input-div'
        })
    }

    loginRegisterClick() {
        let allow = true
        if (!hasLowerCase(document.getElementById("password").value)){
            this.setState({passwordError: 'error-block'})
            allow = false
        }
        else
            this.setState({passwordError: 'displaynone'})
        if (!hasUpperCase(document.getElementById("password").value)){
            this.setState({passwordError: 'error-block'})
            allow = false
        }
        else
            this.setState({passwordError: 'displaynone'})
        if (!hasMoreThan7letter(document.getElementById("password").value)){
            this.setState({passwordError: 'error-block'})
            allow = false
        }
        else
            this.setState({passwordError: 'displaynone'})
        if (!hasEmailForm(document.getElementById("email").value)){
            this.setState({emailError: 'error-block'})
            allow = false
        }
        else
            this.setState({emailError: 'displaynone'})
        if(allow)
            this.props.changeUsername(document.getElementById("username").value)
    }

    closeClick(){
        this.props.changeUsername(null)
    }

    changeloginRegisterMode(){
        this.state.loginchange === 'displaynone' ? this.setState({loginchange: 'login-register-change-mode'}) : this.setState({loginchange: 'displaynone'})
        this.state.registerchange === 'login-register-change-mode' ? this.setState({registerchange: 'displaynone'}) : this.setState({registerchange: 'login-register-change-mode'})
        this.state.loginchange === 'login-register-change-mode' ? this.setState({emailClass: 'displaynone'}) : this.setState({emailClass: 'login-register-input-div'})
    }

    changeUsernameFocusStyle(){
        document.getElementById("username").style.border = "2px solid black"; 
    }

    changeUsernameBlurStyle(){
        document.getElementById("username").style.border = "0"; 
    }

    changePasswordFocusStyle(){
        document.getElementById("password").style.border = "2px solid black"; 
    }

    changePasswordBlurStyle(){
        document.getElementById("password").style.border = "0"; 
    }

    changeEmailFocusStyle(){
        document.getElementById("email").style.border = "2px solid black"; 
    }

    changeEmailBlurStyle(){
        document.getElementById("email").style.border = "0"; 
    }

    changeBlurStyle(){
        document.getElementById("searchinput").style.border = "0"; 
        this.setState({searchblock: 'displaynone'})
    }

    searchInput(){
        this.setState({searchblock: 'search-block'})
        fetch("http://localhost:3000/api/" + document.getElementById("searchinput").value
            ).then((res) => res.json())
            .then((json) => {
                this.setState({
                    searchItems: json
                }
            );
        })
    }

    render(){  
        let loginregistervalue = this.props.username === null ? "ورود / ثبت نام" : this.props.username  
        return(
            <div class="app">
                <div class={this.state.loginregisterdialogue}>
                    <div class="login-register-close-flex">
                        <div onClick={this.removeClick.bind(this)} class="login-register-close">
                            ×
                        </div>
                    </div>
                    <div class="login-register-div">
                        <div class="login-register-title">
                            ورود یا ثبت نام
                        </div>
                        <div class="login-register-line">
                        </div>
                    </div>
                    <div class="login-register-input-div">
                        <div class="login-register-input-label">
                            نام کاربری
                        </div>
                        <div class="input-block">
                            <input autocomplete="off" id="username" onFocus={this.changeUsernameFocusStyle.bind(this)} onBlur={this.changeUsernameBlurStyle.bind(this)} style={nameinputStyle.input} type="text" /> 
                        </div>
                        <div class={this.state.usernameError}>
                            نام کاربری قبلا استفاده شده است.
                        </div>
                    </div>
                    <div class="login-register-input-div">
                        <div class="login-register-input-label">
                            رمز عبور
                        </div>
                        <div class="input-block">
                            <input id="password" onFocus={this.changePasswordFocusStyle.bind(this)} onBlur={this.changePasswordBlurStyle.bind(this)} style={nameinputStyle.input} type="password" /> 
                        </div>
                        <label>
                            <input type="checkbox" onClick={this.changePasswordType.bind(this)}/>
                            <span class="checkbox-text">
                                show password
                            </span>
                        </label>
                        <div class={this.state.passwordError}>
                            رمز عبور باید دارای حداق ۸ حرف و شامل یک حرف بزرگ، یک حرف کوچک و یک عدد باشد.
                        </div>
                    </div>
                    <div class={this.state.emailClass}>
                        <div class="login-register-input-label">
                            آدرس ایمیل
                        </div>
                        <div class="input-block">
                            <input autocomplete="off" id="email" style={nameinputStyle.input} onFocus={this.changeEmailFocusStyle.bind(this)} onBlur={this.changeEmailBlurStyle.bind(this)} type="text" /> 
                        </div>
                        <div class={this.state.emailError}>
                            آدرس ایمیل وارد شده معتبر نیست.
                        </div>
                    </div>
                    <button id="usernamebutton" onClick={this.loginRegisterClick.bind(this)} class="login-register-button">ثبت نام</button>
                    <a onClick={this.changeloginRegisterMode.bind(this)} class={this.state.loginchange}>
                        .قبلاً در ترب حساب کاربری داشتم
                    </a>
                    <a onClick={this.changeloginRegisterMode.bind(this)} class={this.state.registerchange}>
                        .حساب کاربری جدید می‌سازم
                    </a>   
                </div>
                <div onClick={this.removeClick.bind(this)} class={"home " + this.state.dim}>
                    <div class="navbar">
                        <div class="nav-links">
                            <a onClick={this.mobileDropdown.bind(this)} class="nav-item">موبایل و تبلت</a>
                            <a onClick={this.laptopDropdown.bind(this)} class="nav-item" >لپ‌تاپ</a>
                        </div>
                        <div class="">
                            <button onClick={this.userButtonClick.bind(this)} class="user-button">{loginregistervalue}</button>
                            <div class={this.state.userdropdown}>
                                <Link class="navlinks" to="/favorite">
                                    محبوب‌ها
                                </Link>
                                <Link class="navlinks" to="/history">
                                    مشاهدات اخیر
                                </Link>
                                <div class="navlinks" onClick={this.closeClick.bind(this)}>
                                    خروج
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={this.state.mtdisp}>
                        <div class="dropdown-items">
                            <Link to="/browse/mobiletablet" class="dropdown-title">
                                موبایل و تبلت
                            </Link>
                            <div class="dropdown-categories">
                                <div class="category">
                                    <Link to="/browse/mobiletablet/mobile" class="category-title">
                                        گوشی موبایل 
                                    </Link>
                                    <Link to="/browse/mobiletablet/mobile/samsung" class="category-item">
                                        گوشی سامسونگ
                                    </Link>
                                    <Link to="/browse/mobiletablet/mobile/xiaomi" class="category-item">
                                        گوشی شیائومی
                                    </Link>
                                    <Link to="/browse/mobiletablet/mobile/apple" class="category-item">
                                        گوشی اپل
                                    </Link>
                                </div>
                                <div class="category">
                                    <Link to="/browse/mobiletablet/tablet" class="category-title">
                                        تبلت 
                                    </Link>
                                    <Link to="/browse/mobiletablet/tablet/samsung" class="category-item">
                                        تبلت سامسونگ
                                    </Link>
                                    <Link to="/browse/mobiletablet/tablet/xiaomi" class="category-item">
                                        تبلت  شیائومی
                                    </Link>
                                    <Link to="/browse/mobiletablet/tablet/apple" class="category-item">
                                        تبلت اپل
                                    </Link>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class={this.state.laptopdisp}>
                        <div class="dropdown-items">
                            <Link to="/browse/laptop" class="dropdown-title">
                                لپتاپ
                            </Link>
                            <div class="dropdown-categories">
                                <div class="category">
                                    <Link to="/browse/laptop/laptop" class="category-title">
                                        لپتاپ 
                                    </Link>
                                    <Link to="/browse/laptop/laptop/lenovo" class="category-item">
                                        لپتاپ لنوو
                                    </Link>
                                    <Link to="/browse/laptop/laptop/asus" class="category-item">
                                        لپتاپ  ایسوس
                                    </Link>
                                    <Link to="/browse/laptop/laptop/apple" class="category-item">
                                        لپتاپ اپل
                                    </Link>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="home-content">
                        <div class="home-title-icon">   
                            <div class="home-title-detail">
                                <div class="home-title">
                                    ترب
                                </div>
                                <div class="home-detail">
                                    موتور جستجوی هوشمند خرید
                                </div>
                            </div>
                            <Link to="/">
                                <img src="https://torob.com/static/images/torob_logo.svg"/>
                            </Link>
                        </div>
                        <div class="search">
                            <input id="searchinput" onInput={this.searchInput.bind(this)} onBlur={this.changeBlurStyle.bind(this)} style={searchinputStyle.input} type="text" placeholder="نام کالا را وارد کنید" />
                            <img class="serachicon" src="https://torob.com/static/images/search.svg"/>       
                        </div>
                        <div class={this.state.searchblock}>
                        </div>
                    </div>
                    <div class="navbar-bottom">
                        <Link to="/shopping" class="nav-item-bottom">پنل فروشگاه‌ها</Link>
                    </div>
                </div>    
            </div>
        )        
    }
}
const mapStateToProps = (state)=>{
    return {
      username: state.username
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        changeUsername: (id) => {dispatch(changeUsername(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
