import React, { Component } from 'react'


export default class Demo extends Component {



    name = 'Cường';

    rendarName = () => {
        return <span>
            {this.name} đẹp trai
        </span>
    }



    render() {

        let product = {
            name: "IphoneX",
            price: 5000
        }


        return (
            <div>
                <div className="container">
                    <h3>sản phẩm của : {this.rendarName()}</h3>
                    <div className="card w-25 bg-dark text-white">
                        <img src="http://picsum.photos/200/200" />
                        <div className="card-body bg-dark text-white">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <button className="btn btn-success">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
