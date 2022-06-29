import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from './Navbar';

class Product extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            item: {},
            shops : []
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
    
    render(){
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
                <body>
                    <Navbar/>
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
                
                </body>
            )
        )        
    }          
}
const mapStateToProps = (state)=>{
    return {
        items: state.items,
        curItemInd: state.curItemInd,
        thm: state.thm
    }
}
export default connect(mapStateToProps)(Product)
