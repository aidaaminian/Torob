import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeUsername } from './actions/recentActions'

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
            searchblock: 'displaynone'
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
                            <input id="username" onFocus={this.changeUsernameFocusStyle.bind(this)} onBlur={this.changeUsernameBlurStyle.bind(this)} style={nameinputStyle.input} type="text" /> 
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
                            <input id="password" onFocus={this.changePasswordFocusStyle.bind(this)} onBlur={this.changePasswordBlurStyle.bind(this)} style={nameinputStyle.input} type="text" /> 
                        </div>
                        <div class={this.state.passwordError}>
                            رمز عبور باید دارای حداق ۸ حرف و شامل یک حرف بزرگ، یک حرف کوچک و یک عدد باشد.
                        </div>
                    </div>
                    <div class={this.state.emailClass}>
                        <div class="login-register-input-label">
                            آدرس ایمیل
                        </div>
                        <div class="input-block">
                            <input id="email" style={nameinputStyle.input} onFocus={this.changeEmailFocusStyle.bind(this)} onBlur={this.changeEmailBlurStyle.bind(this)} type="text" /> 
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
                                <a class="navlinks" href="/favorite">
                                    محبوب‌ها
                                </a>
                                <a class="navlinks" href="/history">
                                    مشاهدات اخیر
                                </a>
                                <div class="navlinks" onClick={this.closeClick.bind(this)}>
                                    خروج
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={this.state.mtdisp}>
                        <div class="dropdown-items">
                            <a href="/mobiletablet" class="dropdown-title">
                                موبایل و تبلت
                            </a>
                            <div class="dropdown-categories">
                                <div class="category">
                                    <a href="/mobile" class="category-title">
                                        گوشی موبایل 
                                    </a>
                                    <a href="/mobile/samsung" class="category-item">
                                        گوشی سامسونگ
                                    </a>
                                    <a href="/mobile/xiaomi" class="category-item">
                                        گوشی شیائومی
                                    </a>
                                    <a href="/mobile/apple" class="category-item">
                                        گوشی اپل
                                    </a>
                                </div>
                                <div class="category">
                                    <a href="/tablet" class="category-title">
                                        تبلت 
                                    </a>
                                    <a href="/tablet/samsung" class="category-item">
                                        تبلت سامسونگ
                                    </a>
                                    <a href="/tablet/xiaomi" class="category-item">
                                        تبلت  شیائومی
                                    </a>
                                    <a href="/tablet/apple" class="category-item">
                                        تبلت اپل
                                    </a>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class={this.state.laptopdisp}>
                        <div class="dropdown-items">
                            <a href="/laptop" class="dropdown-title">
                                لپتاپ
                            </a>
                            <div class="dropdown-categories">
                                <div class="category">
                                    <a href="/laptop" class="category-title">
                                        لپتاپ 
                                    </a>
                                    <a href="/laptop/lenovo" class="category-item">
                                        لپتاپ لنوو
                                    </a>
                                    <a href="/laptop/asus" class="category-item">
                                        لپتاپ  ایسوس
                                    </a>
                                    <a href="/laptop/apple" class="category-item">
                                        لپتاپ اپل
                                    </a>
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
                            <a href="/">
                                <img src="https://torob.com/static/images/torob_logo.svg"/>
                            </a>
                        </div>
                        <div class="search">
                            <input name="searchinput" style={searchinputStyle.input} type="text" placeholder="نام کالا را وارد کنید" />
                            <img class="serachicon" src="https://torob.com/static/images/search.svg"/>       
                        </div>
                        <div class={this.state.searchblock}>
                        </div>
                    </div>
                    <div class="navbar-bottom">
                        <a href="/shopping" class="nav-item-bottom">پنل فروشگاه‌ها</a>
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
