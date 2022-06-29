import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const searchinputStyle = {
    input: {
        color: "black",
        backgroundColor: "white",
        border:"0",
        fontFamily: "iranyekan",
        direction: "rtl",
        width: "402px",
        height: "41px",
        "padding-bottom" : "2px",
        "border-radius": "4px",
        "padding-right": "10px"
    }
};

class Navbar extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            mtdisp: 'displaynone',
            laptopdisp: 'displaynone',
            userdropdown: 'displaynone',
            userdropdownClick: 1,
            searchblock: 'displaynone',
            searchItems: []
        };
    }

    componentDidMount() {
        
        this.setState({
            mtdisp: 'displaynone',
            laptopdisp: 'displaynone',
            searchblock: 'displaynone'
        })
            
    }
    
    mobileDropdown(){
        let dispv = this.state.mtdisp === 'disp' ? 'displaynone': 'disp-nav'
        this.setState({
            mtdisp: dispv
        })
    }

    laptopDropdown(){
        let dispv = this.state.laptopdisp === 'disp' ? 'displaynone': 'disp-nav'
        this.setState({
            laptopdisp: dispv
        })
    }

    changeFocusStyle(){
        document.getElementById("searchinput").style.border = "2px solid black"; 
    }

    changeBlurStyle(){
        document.getElementById("searchinput").style.border = "0"; 
        this.setState({searchblock: 'displaynone'})
    }

    userButtonClick(){
        document.getElementById("usernamebutton").style.backgroundColor = "var(--white)";
        let userdropdownv = this.state.userdropdownClick && this.props.username !== null? 'user-dropdown-nav' : 'displaynone'
        this.setState({
            userdropdown: userdropdownv,
            userdropdownClick: ~this.state.userdropdownClick
        })
    }

    closeClick(){
        this.props.changeUsername(null)
    }

    removeClick(){
        this.state.mtdisp === 'disp-nav' ? this.setState({mtdisp: 'displaynone'}) : this.setState({})
        this.state.laptopdisp === 'disp-nav' ? this.setState({laptopdisp: 'displaynone'}) : this.setState({})
        this.state.userdropdown === 'user-dropdown-nav' ? this.setState({userdropdown: 'displaynone'}) : this.setState({})
        this.setState({
        })
    }

    searchInput(){
        this.setState({searchblock: 'search-block-nav'})
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
        return(
            <nav onClick={this.removeClick.bind(this)}>
                <div class="navtop">
                    <div class="nav-dropdown">
                        <button id="usernamebutton" onClick={this.userButtonClick.bind(this)} class="nav-userbutton">
                            {this.props.username}
                        </button>
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
                    <div class="nav-search-icon">
                        <div class="nav-search">
                            <div class="nav-serachicon">     
                                <svg fill="white" height="33" viewBox="0 0 24 24" width="33" xmlns="http://www.w3.org/2000/svg" title="search"> <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path> <path d="M0 0h24v24H0z" fill="none"></path> </svg>
                            </div>
                            <input id="searchinput" onInput={this.searchInput.bind(this)} onFocus={this.changeFocusStyle.bind(this)} onBlur={this.changeBlurStyle.bind(this)} style={searchinputStyle.input} type="text" placeholder="نام کالا را وارد کنید" />
                        </div>
                        <div class={this.state.searchblock}>
                        </div>
                        <Link to="/">
                            <div class="nav-title-icon">
                                <p class="navtitle">
                                    ترب
                                </p>
                                <img src="https://torob.com/static/images/torob_logo.svg" class="nav-icon"/>
                            </div>    
                        </Link>
                    </div>
                </div>
                <div class="navlinks">
                    <a onClick={this.mobileDropdown.bind(this)} class="navitem">موبایل و تبلت</a>
                    <a onClick={this.laptopDropdown.bind(this)} class="navitem" >لپ‌تاپ</a>
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
            </nav>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        username: state.username
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)