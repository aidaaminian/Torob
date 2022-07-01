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
            items : []
        };
    }

    componentDidMount() {
        
        this.setState({
        })
        
        this.setState({
            items : [{
                name: "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 GB",
                report1 : "sddd"
            },
            {
                name: "گوشی اپل iPhone 13 Pro max (Not Active) | حافظه 256 گیگابایت ا Apple iPhone 13 Pro max (Not Active) 256 GB",
                report1 : "sddd"  
            }
        ]
        })
    }
    

    buttonClick(){
        this.setState({
        })
    }

    
    removeClick(){
    }

    render(){
        let report_blocks = this.state.items ? 
        (
            this.state.items.map((item) => {
                return(
                    <div class="report-cart">
                        <div class="prdocut-detail-block">
                            {item.name}    
                        </div>
                        <div class="report-detail-block">
                            {item.report1}    
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
                <div onFocus={this.removeClick.bind(this)} class="resgister-page">
                    <Link to="/shop" class="report-return">
                        <div class="register-return-text">
                            بازگشت
                        </div>
                        ×
                    </Link>
                    <div class="report-container">
                        <div class="resgister-title" >
                            گزارش‌ها      
                        </div>
                    </div>
                    {report_blocks}    
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
