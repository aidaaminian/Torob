import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

const priceInputStyle = {
    input: {
        color: "black",
        backgroundColor: "white",
        "padding-left": "10px",
        border: 0,
        height: "35px",
        width:"90px",
        fontFamily: "iranyekan",
        "font-size": "14px",
        "padding-bottom": "2px"
    }
};

const searchInputStyle = {
    input: {
        color: "black",
        backgroundColor: "white",
        border: 0,
        height: "41px",
        width:"305px",
        fontFamily: "iranyekan",
        "font-size": "14px",
        "padding-bottom": "2px",
        direction: "rtl"
    }
};

class Browse extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            mtdisp: 'displaynone',
            laptopdisp: 'displaynone',
            sortbuttonClicked: null,
            categoryDropdownClicked: null,
            priceDropdownClicked: null,
            showPriceButtonClicked: null,
            minValues: null,
            maxValues : null,
            favoriteClickColor: "#999",
            favorites: []
        };
    }

    componentDidMount() {
        
        this.setState({
            mtdisp: 'displaynone',
            laptopdisp: 'displaynone',
            head: this.props.match.params.headid,
            category: this.props.match.params.categoryid,
            subcategory: this.props.match.params.subcategoryid,
        })

        let followPath = null
        this.props.match.params.categoryid ? followPath += '/' + this.props.match.params.categoryid : followPath = followPath
        this.props.match.params.subcategoryid ? followPath += '/' + this.props.match.params.subcategoryid : followPath = followPath

        fetch("http://localhost:3000/api/" + this.state.head + followPath
            ).then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json
                }
            );
        })
           this.setState({
                    items: [{
                        img_src: "https://storage.torob.com/backend-api/base/images/Np/T-/NpT-mU7_pyaDS9BX.jpg_/0x145.jpg",
                        name: "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 GB",
                        price: "از ۴۶٫۲۹۹٫۰۰۰ تومان"
                    }
                    ]
                } )
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

    showSubCategoryDropdown(){}

    saveSortButtonClick(){
        document.getElementById("sortbuttonicon").style.backgroundColor = "unset";
        this.setState({sortbuttonClicked: ~this.state.sortbuttonClicked})
    }

    priceButtonClick(minprice, maxprice){
        const filteredItems = [].concat(this.state.items)
        /*filteredItems.filter((a) => (a.price <= maxprice && a.price >= minprice) ? 1 : -1)
        this.setState({
            showPriceButtonClicked: ~this.state.showPriceButtonClicked,
            items: filteredItems
        })*/
    }

    changeUsernameBlurStyle(){
        document.getElementById("username").style.border = "1px solid #ccc"; 
    }

    userButtonClick(){
        document.getElementById("usernamebutton").style.backgroundColor = "unset"; 
        let dimv = this.state.dim === 'dim' ? '': 'dim'
        let loginregisterdialoguev = this.state.loginregisterdialogue === 'login-register-dialogue' ? 'displaynone': 'login-register-dialogue'
        this.setState({
            dim: dimv,
            loginregisterdialogue: loginregisterdialoguev
        })
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

    removeClick(){
        this.setState({showPriceButtonClicked: ~this.state.showPriceButtonClicked})
    }

    sortByDate(){
        const sortedItems = [].concat(this.state.items)
        sortedItems.sort((a, b) => (a.date < b.date) ? 1 : -1)
        this.setState({items: sortedItems})
    }

    sortByMaxPrice(){
        const sortedItems = [].concat(this.state.items)
        sortedItems.sort((a, b) => (a.price < b.price) ? 1 : -1)
        this.setState({items: sortedItems})
    }

    sortByMinPrice(){
        const sortedItems = [].concat(this.state.items)
        sortedItems.sort((a, b) => (a.price > b.price) ? 1 : -1)
        this.setState({items: sortedItems})
    }


    render(){
        let head = this.props.match.params.headid
        let category = this.props.match.params.categoryid
        let subCategory = this.props.match.params.subcategoryid
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
        let categorySlashShow = category ? '\\' : 'displaynone'
        let subCategorySlashShow = subCategory ? '\\' : 'displaynone'
        let title = category ? category : head
        subCategory ? title = subCategory : title = title
        head === 'موبایل و تبلت' && category === undefined ? title = 'محصولات ' + title : title = title
        category === 'موبایل' ? title = 'گوشی ' + title : title = title
        category === 'تبلت' && subCategory !== undefined ? title = 'تبلت ' + title : title = title
        head === 'لپ‌تاپ' && subCategory !== undefined ? title = 'لپ‌تاپ ' + title : title = title
        let maxValue, minValue
        head === 'موبایل و تبلت' && category === undefined ? maxValue = '۱٫۷۱۵٫۹۸۵٫۰۰۰' : maxValue = maxValue
        category === 'موبایل' && subCategory === undefined ? maxValue = '۳۵۶٫۶۷۹٫۴۰۰' : maxValue = maxValue
        category === 'تبلت' && subCategory === undefined ? maxValue = '۱۱۰٫۶۵۳٫۷۰۰' : maxValue = maxValue
        subCategory === 'سامسونگ (Samsung)' && category === 'موبایل' ? maxValue = '۴۸٫۹۵۰٫۰۰۰' : maxValue = maxValue
        subCategory === 'شیائومی (Xiaomi)' && category === 'موبایل' ? maxValue = '۳۳٫۹۹۹٫۰۰۰' : maxValue = maxValue
        subCategory === 'اپل (Apple)' && category === 'موبایل' ? maxValue = '۶۶٫۰۰۰٫۰۰۰' : maxValue = maxValue
        subCategory === 'سامسونگ (Samsung)' && category === 'تبلت' ? maxValue = '۹۶٫۵۰۰٫۰۰۰' : maxValue = maxValue
        subCategory === 'شیائومی (Xiaomi)' && category === 'تبلت' ? maxValue = '۹۶٫۵۰۰٫۰۰۰' : maxValue = maxValue
        subCategory === 'اپل (Apple)' && category === 'تبلت' ? maxValue = '۵۱٫۵۰۰٫۰۰۰' : maxValue = maxValue
        subCategory === 'لنوو (Lenovo)' && category === 'لپ‌تاپ' ? maxValue = '۲۷۰٫۵۹۳٫۶۰۰' : maxValue = maxValue
        subCategory === 'ایسوس (Asus)' && category === 'لپ‌تاپ' ? maxValue = '۲۰۳٫۸۰۰٫۰۰۰' : maxValue = maxValue
        subCategory === 'اپل (Apple)' && category === 'لپ‌تاپ' ? maxValue = '۲۷۸٫۰۹۰٫۱۰۰' : maxValue = maxValue
        maxValue = this.state.maxValues ?  this.state.maxValues : maxValue
        minValue = this.state.minValues ?  this.state.minValues : '۰'
        let leftPanelTitle = category ? 'انتخاب برند' : 'دسته‌بندی دقیق‌تر'
        let addedItems = this.state.items ?
            (  
                this.state.items.map((item) => {
                    return(
                        <Link key = {item.id} to="/products/0" class="product-card"> 
                            <div class="product-img-block">
                                <img src={item.img_src}></img>
                            </div>
                            <div class="product-detail">
                                {item.name}
                            </div>
                            <div class="product-price">
                                {item.price}   
                            </div>
                            <Link to={window.location.pathname} class="favorite">
                                <svg id="favoritesvg" class="favoritesvg" onClick={this.setFavoriteClick(item.id)} fill={this.state.favoriteClickColor} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="علاقه‌مندی"><g><path d="M21.233 3.881C20.077 2.693 18.535 2 16.898 2a6.268 6.268 0 0 0-4.433 1.881l-.385.396-.385-.396a6.104 6.104 0 0 0-8.768 0C1.674 5.07 1 6.752 1 8.436c0 1.683.674 3.366 1.83 4.554l8.48 8.713c.192.198.385.297.674.297.289 0 .481-.099.674-.297l8.479-8.713c1.156-1.188 1.83-2.871 1.83-4.554.193-1.684-.481-3.367-1.734-4.555zm-1.349 7.723l-7.804 8.02-7.804-8.02c-.867-.891-1.253-1.98-1.253-3.168 0-1.188.482-2.278 1.253-3.169.77-.89 1.927-1.287 2.987-1.287 1.156 0 2.216.396 3.083 1.287l1.06 1.09a.914.914 0 0 0 1.349 0l.963-1.09c.867-.792 1.927-1.287 3.18-1.287 1.156 0 2.216.495 3.083 1.287.77.891 1.252 1.98 1.252 3.169 0 1.188-.482 2.277-1.349 3.168z"></path></g></svg>
                            </Link> 
                        </Link>
                    )
                })
            ):
            (
                <p></p>
            ) 
        return(
            <body>
                <Navbar/>
                <div class="mobile-tablet-page">
                    <div class="category-left-panel">
                        <div class="category-left-panel-head">
                            <div>
                                <button id="sortbuttonicon" class="sortbutton-icon" onClick={this.saveSortButtonClick.bind(this)}>
                                    <svg class="svg-arrow" fill="#333333" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="chevron-down" ><g><path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path></g></svg>  
                                    <div class="sortbutton">
                                        جدیدترین
                                    </div>
                                </button>
                                <div class={ this.state.sortbuttonClicked ? 'sortdropdown' : 'displaynone'}>
                                    <div onClick={this.sortByDate.bind(this)} class="sortdropdown-item">
                                        جدیدترین
                                    </div>
                                    <div onClick={this.sortByMinPrice.bind(this)} class="sortdropdown-item">
                                        ارزان‌ترین
                                    </div>
                                    <div onClick={this.sortByMaxPrice.bind(this)} class="sortdropdown-item">
                                        گران‌ترین
                                    </div>
                                </div>
                            </div>
                            <div class="category-route">
                                <div class="category-route-item"> 
                                    {subCategory}
                                </div>
                                <div class={subCategorySlashShow}>
                                    / 
                                </div>
                                <div class="category-route-item"> 
                                    {category}
                                </div>
                                <div class={categorySlashShow}>
                                    / 
                                </div>
                                <div class="category-route-item"> 
                                    {head}
                                </div>
                                <div>
                                    / 
                                </div>
                                <div class="category-route-item"> 
                                    همه دسته‌ها   
                                </div>
                            </div>
                        </div>
                        <div class="category-line-left">  
                        </div>
                        <div class="category-list-title"> 
                            قیمت انواع {title}  
                        </div>
                        <button id="usernamebutton" onClick={this.userButtonClick.bind(this)} class={ this.state.showPriceButtonClicked ? 'price-button-showed' : 'displaynone'}>
                            <div onClick={this.removeClick.bind(this)} class="price-showed-close">
                                ×
                            </div>
                            از {minValue} تا {maxValue}
                        </button>
                        <div class="products">
                            {addedItems}
                        </div>
                    </div>
                    <div class="category-right-panel">
                        <button id="categorydropdown" onClick={this.showCategoryDropdown.bind(this)} class="category-detail-block">
                            <div class="category-detail">
                                {leftPanelTitle}
                            </div>
                            <svg class="svg-arrow"  fill="#333333" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="chevron-up" ><g><path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path></g></svg>  
                        </button>
                        <div class={ ~this.state.categoryDropdownClicked && category ? 'input-search-brand' : 'displaynone'}>
                            <input autocomplete="off" id="maxvalue" placeholder='جستجوی برند' onInput={this.maxValueInput.bind(this)} style={searchInputStyle.input} type="text" /> 
                            <svg fill="#808080" class="search-svg" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg" title="search"> <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path> <path d="M0 0h24v24H0z" fill="none"></path> </svg>    
                        </div>
                        <div class = {~this.state.categoryDropdownClicked ? "" : "displaynone"}>
                            <div class = {category === 'موبایل' ? "" : "displaynone"}>
                                <Link to="/browse/mobiletablet/mobile/samsung" class = {subCategory === 'سامسونگ (Samsung)' ? "block-brand-active" : "block-brand"}>
                                    <div >
                                        سامسونگ
                                    </div>
                                    <div>
                                        Samsung
                                    </div>  
                                </Link>
                                <Link to="/browse/mobiletablet/mobile/xiaomi" class = {subCategory === 'شیائومی (Xiaomi)' ? "block-brand-active" : "block-brand"}>
                                    <div>
                                        شیائومی
                                    </div>
                                    <div>
                                        Xiaomi
                                    </div>
                                </Link>
                                <Link to="/browse/mobiletablet/mobile/apple" class = {subCategory === 'اپل (Apple)' ? "block-brand-active" : "block-brand"}>
                                    <div>
                                        اپل
                                    </div>
                                    <div>
                                        Apple
                                    </div>
                                </Link>  
                            </div>
                            <div class = {category === 'تبلت' ? "" : "displaynone"}>
                                <Link to="/browse/mobiletablet/tablet/samsung" class = {subCategory === 'سامسونگ (Samsung)' ? "block-brand-active" : "block-brand"}>
                                    <div >
                                        سامسونگ
                                    </div>
                                    <div>
                                        Samsung
                                    </div>  
                                </Link>
                                <Link to="/browse/mobiletablet/tablet/xiaomi" class = {subCategory === 'شیائومی (Xiaomi)' ? "block-brand-active" : "block-brand"}>
                                    <div>
                                        شیائومی
                                    </div>
                                    <div>
                                        Xiaomi
                                    </div>
                                </Link>
                                <Link to="/browse/mobiletablet/tablet/apple" class = {subCategory === 'اپل (Apple)' ? "block-brand-active" : "block-brand"}>
                                    <div>
                                        اپل
                                    </div>
                                    <div>
                                        Apple
                                    </div>
                                </Link>  
                            </div>
                            <div class = {category === 'لپ‌تاپ' ? "" : "displaynone"}>
                                <Link to="/browse/laptop/laptop/lenovo" class = {subCategory === 'لنوو (Lenovo)' ? "block-brand-active" : "block-brand"}>
                                    <div >
                                        لنوو
                                    </div>
                                    <div>
                                        Lenovo
                                    </div>  
                                </Link>
                                <Link to="/browse/laptop/laptop/asus" class = {subCategory === 'ایسوس (Asus)' ? "block-brand-active" : "block-brand"}>
                                    <div>
                                        ایسوس
                                    </div>
                                    <div>
                                        Asus
                                    </div>
                                </Link>
                                <Link to="/browse/laptop/laptop/apple" class = {subCategory === 'اپل (Apple)' ? "block-brand-active" : "block-brand"}>
                                    <div>
                                        اپل
                                    </div>
                                    <div>
                                        Apple
                                    </div>
                                </Link>  
                            </div>
                            <Link to="/browse/mobiletablet" id="subcategorydropdown" onClick={this.showSubCategoryDropdown.bind(this)} class={ ~this.state.categoryDropdownClicked && category === undefined ? 'subcategory-detail-block' : 'displaynone'} >
                                <div class="subcategory-detail">
                                    موبایل و تبلت 
                                </div>
                                <svg class="svg-arrow-left"  fill="#333333" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="chevron-up" ><g><path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path></g></svg>  
                            </Link>
                            <Link to="/browse/mobiletablet/mobile" id="subcategorydropdown" class={ ~this.state.categoryDropdownClicked && category === undefined ? 'subcategory-detail-block' : 'displaynone'} >
                                <div class="subsubcategory-detail">
                                    گوشی موبایل 
                                </div>
                            </Link>
                            <Link to="/browse/mobiletablet/tablet" id="subcategorydropdown" class={ ~this.state.categoryDropdownClicked && category === undefined ? 'subcategory-detail-block' : 'displaynone'} >
                                <div class="subsubcategory-detail">
                                    تبلت 
                                </div>
                            </Link>
                        </div>
                        <div class="category-line-right">
                        </div> 
                        <button id="pricedropdown" onClick={this.showPriceDropdown.bind(this)} class="category-detail-block">
                            <div class="category-detail">
                                قیمت (تومان)
                            </div>
                            <svg class="svg-arrow"  fill="#333333" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="chevron-down" ><g><path d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"></path></g></svg>  
                        </button>
                        <div class={ this.state.priceDropdownClicked ? 'displaynone' : '' }>
                            <div class="price-input-block">
                                <div class="input-block-price">
                                    <input autocomplete="off" id="maxvalue" value={maxValue} onInput={this.maxValueInput.bind(this)} style={priceInputStyle.input} type="text" /> 
                                    <div class="input-block-text">
                                        تا
                                    </div>
                                </div>
                                <div class="input-block-price">
                                    <input autocomplete="off" id="minvalue" value={minValue} onInput={this.minValueInput.bind(this)} style={priceInputStyle.input} type="text" /> 
                                    <div class="input-block-text">
                                        از
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.priceButtonClick({minValue}, {maxValue})} class="price-button">اعمال فیلتر قیمت</button>   
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        items: state.items
    }
}


export default connect(mapStateToProps)(Browse)