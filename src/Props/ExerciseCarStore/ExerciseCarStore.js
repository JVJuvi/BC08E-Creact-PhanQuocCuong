import React, { Component } from 'react'
import Modal from './Modal';
import ProductList from './ProductList';

export default class ExerciseCarStore extends Component {
    state= {
        xemChiTietProduct: [],
    }
    product =[
        {id: 1, name: 'Black car', price: 1000, img: './img/CarBasic/products/black-car.jpg'},
        {id: 2, name: 'Red car', price: 2000, img: './img/CarBasic/products/red-car.jpg'},
        {id: 3, name: 'Silver car', price: 3000, img: './img/CarBasic/products/silver-car.jpg'},
        {id: 4, name: 'Steel car', price: 4000, img: './img/CarBasic/products/steel-car.jpg'},
    ]
    xemChiTiet = (pd) => {
        this.setState({
            xemChiTietProduct: pd
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-success">Danh sách sản phẩm</h3>
                <ProductList product={this.product} xemChiTiet = {this.xemChiTiet}/>
                <Modal xemChiTietProduct ={this.state.xemChiTietProduct}/>
            </div>
        )
    }
}
