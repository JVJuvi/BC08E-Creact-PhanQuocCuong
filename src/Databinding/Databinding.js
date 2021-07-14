import React, { Component } from 'react'

export default class Databinding extends Component {

    // thuộc tính
    img = "http://picsum.photos/200/200";

    //phương thức

    rendarCard (){
        let product = {
            id:1,
            name:"Iphone",
            price: 1000,
            img: "http://picsum.photos/200/200",
        }
        return <div className = "card w-25" >
            <img src = {product.img} />
            <div className = "card-body">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className = "btn btn-success">Mua</button>
            </div>
            
        </div>
    }


    render() {
        let tenHocVien = 'Khải';
        //khai báo biến hàm
        return (
            <div className = "container">
                <div id = "content">{tenHocVien}</div>
                <div className = "card w-25">
                    <img src = {this.img} alt = "..." />
                </div>
                {this.rendarCard()}
            </div>
        )
    }
}
