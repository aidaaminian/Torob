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
        "padding-right": "10px",
        height: "32px",
        width:"310px",
        direction:"rtl"
    }
};

class AddProduct extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            category: 'موبایل',
            subCategory: 'سامسونگ',
            categorydd: -1,
            subcategorydd: -1,
            namedd: -1
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

    showCategoryDropdown(){
        this.setState({categorydd: ~this.state.categorydd})
    }

    showSubCategoryDropdown(){
        this.setState({subcategorydd: ~this.state.subcategorydd})
    }

    changeNameFocusStyle(){
        document.getElementById("name").style.boxShadow = "0px 0px 0px 3px #e8f1ff";
        this.setState({namedd: ~this.state.namedd})
    }

    changeNameBlurStyle(){
        document.getElementById("name").style.boxShadow = "unset";
        this.setState({namedd: ~this.state.namedd}) 
    }

    changePriceFocusStyle(){
        document.getElementById("price").style.boxShadow = "0px 0px 0px 3px #e8f1ff";
    }

    changePriceBlurStyle(){
        document.getElementById("price").style.boxShadow = "unset";
    }

    setCategoryMobile(){
        this.setState({categorydd: ~this.state.categorydd})
        this.setState({category: 'موبایل'})
        
    }

    setCategoryTablet(){
        this.setState({categorydd: ~this.state.categorydd})
        this.setState({category: 'تبلت'}) 
    }

    setCategoryLaptop(){
        this.setState({categorydd: ~this.state.categorydd})
        this.setState({
            category: 'لپ‌تاپ',
            subCategory: 'لنوو'
        }) 
    }

    setSubCategorySamsung(){
        this.setState({subcategorydd: ~this.state.subcategorydd})
        this.setState({subCategory: 'سامسونگ'}) 
    }

    setSubCategoryXiaomi(){
        this.setState({subcategorydd: ~this.state.subcategorydd})
        this.setState({subCategory: 'شیائومی'}) 
    }

    setSubCategoryApple(){
        this.setState({subcategorydd: ~this.state.subcategorydd})
        this.setState({subCategory: 'اپل'}) 
    }

    setSubCategoryLenovo(){
        this.setState({subcategorydd: ~this.state.subcategorydd})
        this.setState({subCategory: 'لنوو'}) 
    }

    setSubCategoryAsus(){
        this.setState({subcategorydd: ~this.state.subcategorydd})
        this.setState({subCategory: 'ایسوس'}) 
    }

    removeClick(){
    }

    render(){
        let names
        let subCategories
        switch(this.state.category){
            case 'موبایل' || 'تبلت':
                subCategories = (
                    <div>
                        <div onClick={this.setSubCategorySamsung.bind(this)} class="resgister-category-dropdown-item">
                            سامسونگ
                        </div>
                        <div onClick={this.setSubCategoryXiaomi.bind(this)} class="resgister-category-dropdown-item">
                            شیائومی
                        </div>
                        <div onClick={this.setSubCategoryApple.bind(this)} class="resgister-category-dropdown-item">
                            اپل
                        </div>
                    </div>
                )
                break;
            case 'لپ‌تاپ':
                subCategories = (
                    <div>
                        <div onClick={this.setSubCategoryLenovo.bind(this)} class="resgister-category-dropdown-item">
                            لنوو
                        </div>
                        <div onClick={this.setSubCategoryAsus.bind(this)} class="resgister-category-dropdown-item">
                            ایسوس
                        </div>
                        <div onClick={this.setSubCategoryApple.bind(this)} class="resgister-category-dropdown-item">
                            اپل
                        </div>
                    </div>
                )
                break;
        }
        return(
            (
                <div onFocus={this.removeClick.bind(this)} class="resgister-page">
                    <Link to="/shop" class="register-return">
                        <div class="register-return-text">
                            بازگشت
                        </div>
                        ×
                    </Link>
                    <div class="resgister-container">
                        <div class="resgister-title" >
                            اطلاعات محصول      
                        </div>
                        <div class="login-register-input-div">
                            <div class="resgister-input-label">
                                دسته بندی 
                            </div>
                            <button class="resgister-category-block" onClick={this.showCategoryDropdown.bind(this)}>{this.state.category}</button>
                            <div id="categorydd" class={this.state.categorydd === 0 ? "resgister-category-dropdown" : "displaynone"}>
                                <div onClick={this.setCategoryMobile.bind(this)} class="resgister-category-dropdown-item">
                                    موبایل
                                </div>
                                <div onClick={this.setCategoryTablet.bind(this)} class="resgister-category-dropdown-item">
                                    تبلت
                                </div>
                                <div onClick={this.setCategoryLaptop.bind(this)} class="resgister-category-dropdown-item">
                                    لپ‌تاپ
                                </div>
                            </div>
                        </div>
                        <div class="login-register-input-div">
                            <div class="resgister-input-label">
                                برند 
                            </div>
                            <button onClick={this.showSubCategoryDropdown.bind(this)} class="resgister-category-block">{this.state.subCategory}</button>
                            <div id="subcategorydd" class={this.state.subcategorydd === 0 ? "resgister-category-dropdown" : "displaynone"}>
                                {subCategories}
                            </div>
                        </div>
                        <div class="login-register-input-div">
                            <div class="resgister-input-label">
                                نام 
                            </div>
                            <input autoComplete='off' id="name" onFocus={this.changeNameFocusStyle.bind(this)} onBlur={this.changeNameBlurStyle.bind(this)} style={inputStyle.input} /> 
                            <div id='namedropdown' class={this.state.namedd === 0 ? "resgister-category-dropdown" : "displaynone"}>
                                {names}
                            </div>
                        </div>
                        <div class="login-register-input-div">
                            <div class="resgister-input-label">
                                قیمت
                            </div>
                            <input autoComplete='off' id="price" onFocus={this.changePriceFocusStyle.bind(this)} onBlur={this.changePriceBlurStyle.bind(this)} style={inputStyle.input}  /> 
                        </div>
                        <button onClick={this.buttonClick.bind(this)} class="register-button">ثبت</button>
                    </div>
                </div>
            )
        )        
    }          
}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps)(AddProduct)
