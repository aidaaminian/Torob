import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ShopNav from './ShopNav';

class Shop extends Component{

    constructor(props) {
        super(props);
   
        this.state = {

        };

    }

    componentDidMount() {
        
        this.setState({
            shops: [{
                name: 'تکنولایف',
                price: '۵۱٫۸۹۹٫۰۰۰ تومان',
                link: 'https://banekala.ir/ProductDetail/11586/Apple-iPhone-13-Pro-Max-JA-Tak-SIM-256GB-NotActive/?utm_medium=PPC&utm_source=Torob'
            }]
            }
        );
        
            
    }
    
    render(){
        let shop_blocks = this.state.shops ? (
            this.state.shops.map((item) => {
                return(
                    <div class="shop-container">
                        <div class="shop-title" >
                            {item.name}     
                        </div>
                        <div class="add-product-shop-button-block">
                            <Link to="/addproduct" class="add-product-shop-button">
                                افزودن محصول
                            </Link>
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
                <div class="shop-page">
                    <ShopNav/>
                    <div class="shop-left-panel">                   
                        <div class="shop-left-panel-head">
                            <Link to="/addshop" class="add-shop-button">
                                افزودن فروشگاه
                            </Link>
                            <div class="shop-head-title" >
                                فروشگاه‌ها       
                            </div>
                        </div>
                        {shop_blocks}
                    </div> 
                </div>
            )
        )        
    }          
}
const mapStateToProps = (state) =>{
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(Shop)
