import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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

class Product extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            item: {},
            shops : [],
            mtdisp: 'displaynone',
            laptopdisp: 'displaynone',
            sortbuttonClicked: null,
            categoryDropdownClicked: null,
            priceDropdownClicked: null,
            showPriceButtonClicked: null,
            minValues: null,
            maxValues : null,
            favoriteClickColor: "#999",
            favorites: [],
            userdropdownClick: 1,
            searchblock: 'displaynone',
            searchItems: [],
            loginregisterdialogue: 'displaynone',
            dim: '',
            loginchange: 'login-register-change-mode',
            registerchange: 'displaynone',
            emailClass: 'login-register-input-div-home',
            userdropdown: 'displaynone',
            usernameError: 'displaynone',
            passwordError: 'displaynone',
            emailError: 'displaynone'
        };
    }

    // first time this component is mount, this function will execute
    componentDidMount() {
        /*fetch("https://api.coingecko.com/api/v3/coins/" + this.params.productid
            ).then((res) => res.json())
            .then((json) => {
                this.setState({
                    item: json
                }
            );
        })*/
        this.setState({
            item: {
                img_src: "https://storage.torob.com/backend-api/base/images/Np/T-/NpT-mU7_pyaDS9BX.jpg_/0x145.jpg",
                name: "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 GB",
                min_price: "۴۵٫۶۹۹٫۰۰۰",
                max_price: "۵۸٫۵۰۰٫۰۰۰",
                head: 'mobiletablet',
                category: 'mobile',
                sub_category: 'apple',
                internal_storage: '256 گیگابایت',
                weight: '240 گرم',
                warranty: 'گارانتی 18 ماهه',
                color: 'نقره‌ای'
            }
        })
        this.setState({
            shops : [{
                name: 'تکنولایف',
                price: '۵۱٫۸۹۹٫۰۰۰ تومان',
                link: 'https://banekala.ir/ProductDetail/11586/Apple-iPhone-13-Pro-Max-JA-Tak-SIM-256GB-NotActive/?utm_medium=PPC&utm_source=Torob'
            },
            {
                name: 'تکنولایف',
                price: '۵۱٫۸۹۹٫۰۰۰ تومان',
                link: 'https://banekala.ir/ProductDetail/11586/Apple-iPhone-13-Pro-Max-JA-Tak-SIM-256GB-NotActive/?utm_medium=PPC&utm_source=Torob'
            }
        ]
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

    showCategoryDropdown(){
        document.getElementById("categorydropdown").style.backgroundColor = "unset";
        this.setState({categoryDropdownClicked: ~this.state.categoryDropdownClicked})
    }

    showPriceDropdown(){
        document.getElementById("pricedropdown").style.backgroundColor = "unset";
        this.setState({priceDropdownClicked: ~this.state.priceDropdownClicked})
    }


    saveSortButtonClick(){
        document.getElementById("sortbuttonicon").style.backgroundColor = "unset";
        this.setState({sortbuttonClicked: ~this.state.sortbuttonClicked})
    }

    priceButtonClick(){
        const filteredItems = [].concat(this.state.items)
        /*filteredItems.filter((a) => (a.max_price <= this.state.maxValues && a.min_price >= this.state.minValues) ? 1 : -1)
        this.setState({
            showPriceButtonClicked: ~this.state.showPriceButtonClicked,
            items: filteredItems
        })*/
        this.setState({
            showPriceButtonClicked: ~this.state.showPriceButtonClicked
        })
    }

    changeUsernameBlurStyle(){
        document.getElementById("username").style.border = "1px solid #ccc"; 
    }

    minValueInput(){
        this.setState({minValues: document.getElementById("minvalue").value})
    }

    maxValueInput(){
        this.setState({maxValues: document.getElementById("maxvalue").value})
    }

    setFavoriteClick(id){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productid: id })
        };
        fetch('"http://localhost:3000/api/favorites/:userid', requestOptions)
        .then(response => response.json())
        .then(json => this.setState({ favorites: json }));
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
    
    userButtonClick(){
        let dimv = this.props.username !== null ? '' : (this.state.dim === 'dim' ? '': 'dim')
        document.getElementById("user-button").style.backgroundColor = "var(--white)";
        let userdropdownv = this.state.userdropdownClick && this.props.username !== null? 'user-dropdown-nav' : 'displaynone'
        let loginregisterdialoguev = this.props.username !== null ? 'displaynone' : (this.state.loginregisterdialogue === 'login-register-dialogue' ? 'displaynone': 'login-register-dialogue')
        this.setState({
            dim: dimv,
            userdropdown: userdropdownv,
            loginregisterdialogue: loginregisterdialoguev,
            userdropdownClick: ~this.state.userdropdownClick
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

    closeClick(){
        this.props.changeUsername(null)
    }

    removeClick(){
        this.state.dim === 'dim' ? this.setState({dim: ''}) : this.setState({})
        this.state.mtdisp === 'disp-nav' ? this.setState({mtdisp: 'displaynone'}) : this.setState({})
        this.state.laptopdisp === 'disp-nav' ? this.setState({laptopdisp: 'displaynone'}) : this.setState({})
        this.state.userdropdown === 'user-dropdown-nav' ? this.setState({userdropdown: 'displaynone'}) : this.setState({})
        this.state.loginregisterdialogue === 'login-register-dialogue' ? this.setState({loginregisterdialogue: 'displaynone'}) : this.setState({})
        this.setState({
            loginchange: 'login-register-change-mode',
            registerchange: 'displaynone',
            emailClass: 'login-register-input-div-home'
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
        this.state.loginchange === 'login-register-change-mode' ? this.setState({emailClass: 'displaynone'}) : this.setState({emailClass: 'login-register-input-div-home'})
    }

    changePasswordType(){
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
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

    render(){
        let userbuttonname = this.props.username ? this.props.username : "ورود / ثبت نام"
        let head = this.state.item.head
        let category = this.state.item.category
        let subCategory = this.state.item.sub_category
        switch(head){
            case('mobiletablet'):
                head = 'موبایل و تبلت'
                break;
            case('laptop'):
                head = 'لپ‌تاپ'
                break;
        }
        switch(category){
            case('laptop'):
                category = 'لپ‌تاپ'
                break;
            case('mobile'):
                category = 'موبایل'
                break;
            case('tablet'):
                category = 'تبلت'
                break;
            case('apple'):
                category = 'اپل (Apple)'
                break;
            case('samsung'):
                category = 'سامسونگ (Samsung)'
                break;
            case('xiaomi'):
                category = 'شیائومی (Xiaomi)'
                break;                
        }
        switch(subCategory){
            case('apple'):
                subCategory = 'اپل (Apple)'
                break;
            case('samsung'):
                subCategory = 'سامسونگ (Samsung)'
                break;
            case('xiaomi'):
                subCategory = 'شیائومی (Xiaomi)'
                break;
            case('lenovo'):
                subCategory = 'لنوو (Lenovo)'
                break;
            case('asus'):
                subCategory = 'ایسوس (Asus)'
                break; 
        }
        let shop_blocks = this.state.shops ? 
        (
            this.state.shops.map((shop) => {
                return(
                    <div class="shop-cart">
                        <div class="prdocut-detail-block">
                            {shop.name}    
                        </div>
                        <button class="report">
                            گزارش 
                            <img src="https://torob.com/static/images/flag_white.png" height="16" width="16" alt="price report" id="report-img" class="jsx-2827249071"></img>   
                        </button>
                        <div class="prdocut-price-buy-block">
                            <a href={shop.link} class="buy-block">
                                <button class="buy">
                                    خرید اینترنتی    
                                </button>
                            </a>
                            <div class="prdocut-price-block">
                                {shop.price}    
                            </div>
                        </div>
                    </div>
                )
            })
        ):
        (
            <div>
            </div>
        )
        return(
            (
                <body class="browse-page">
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
                        <div class="login-register-input-div-home">
                            <div class="login-register-input-label">
                                نام کاربری
                            </div>
                            <div class="input-block">
                                <input autocomplete="off" id="username" onFocus={this.changeUsernameFocusStyle.bind(this)} onBlur={this.changeUsernameBlurStyle.bind(this)} style={nameinputStyle.input}/> 
                            </div>
                            <div class={this.state.usernameError}>
                                نام کاربری قبلا استفاده شده است.
                            </div>
                        </div>
                        <div class="login-register-input-div-home">
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
                                <input autoComplete='off' id="email" style={nameinputStyle.input} onFocus={this.changeEmailFocusStyle.bind(this)} onBlur={this.changeEmailBlurStyle.bind(this)}/> 
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
                    <div onClick={this.removeClick.bind(this)} class={this.state.dim}>    
                        <nav>
                            <div class="navtop">
                                <div class="nav-dropdown">
                                    <button id="user-button" onClick={this.userButtonClick.bind(this)} class="nav-userbutton">
                                        {userbuttonname}
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
                                        <input id="searchinput" onInput={this.searchInput.bind(this)} onFocus={this.changeFocusStyle.bind(this)} onBlur={this.changeBlurStyle.bind(this)} style={searchinputStyle.input}placeholder="نام کالا را وارد کنید" />
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
                        <div class="product-page">
                            <div class="product-route">
                                <div class="category-route-item">
                                    ترب
                                </div>
                                <svg class="svg-arrow-left-route" width="10" height="10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="chevron-up" ><g><path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path></g></svg>  
                                <div class="category-route-item">
                                    {head}
                                </div>
                                <svg class="svg-arrow-left-route" width="10" height="10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="chevron-up" ><g><path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path></g></svg>  
                                <div class="category-route-item">
                                    {category} 
                                </div>
                                <svg class="svg-arrow-left-route" width="10" height="10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="chevron-up" ><g><path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path></g></svg>  
                                <div class="category-route-item">
                                    {subCategory}
                                </div>
                            </div>
                            <div class="prdocut-block">
                                <div class="prdocut-detail-price">
                                    <div class="prdocut-detail-block">
                                        {this.state.item.name}    
                                    </div>
                                    <div class="prdocut-price">
                                        از {this.state.item.min_price} تومان تا {this.state.item.max_price} تومان 
                                        
                                    </div>
                                </div>
                                <div class="product-img-block-gt">
                                    <img src="https://storage.torob.com/backend-api/base/images/Np/T-/NpT-mU7_pyaDS9BX.jpg_/216x216.jpg"></img>
                                </div>  
                            </div>
                            <div class="shops-spcfs">
                                <div class="product-spcfs">
                                    <div class="shops-spcfs-title">
                                        {this.state.item.name}    
                                    </div>
                                    <div class="prdocut-detail-block">
                                        مشخصات کلی    
                                    </div>
                                    <div class="prdocut-line">
                                    </div>
                                    <div class="spcfc">
                                        <div class="spcfc-detail">
                                            حافظه داخلی
                                        </div>
                                        <div class="home-detail">
                                            {this.state.item.internal_storage}    
                                        </div>
                                    </div>
                                    <div class="spcfc">
                                        <div class="spcfc-detail">
                                            رنگ    
                                        </div>
                                        <div class="home-detail">
                                            {this.state.item.color}        
                                        </div>
                                    </div>
                                    <div class="spcfc">
                                        <div class="spcfc-detail">
                                            گارانتی     
                                        </div>
                                        <div class="home-detail">
                                            {this.state.item.warranty}        
                                        </div>
                                    </div>
                                    <div class="spcfc">
                                        <div class="spcfc-detail">
                                            وزن     
                                        </div>
                                        <div class="home-detail">
                                            {this.state.item.weight}        
                                        </div>
                                    </div>
                                </div>
                                <div class="shops">
                                    <div class="shop-cart-head">
                                        <div class="shops-spcfs-title" >
                                            فروشگاه‌های اینترنتی     
                                        </div>
                                    </div>
                                    {shop_blocks}
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            )
        )        
    }          
}
const mapStateToProps = (state)=>{
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(Product)
