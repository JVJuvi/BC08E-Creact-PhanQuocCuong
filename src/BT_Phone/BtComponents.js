import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import ProductList from './ProductList';
import Footer from './Footer';
import Model from './Model';

export default class BtComponents extends Component {

    state = {
        sanPhamModal:{maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/Phone/sp_blackberry.png', gia: 1000},
    }

    mangSanPham = [
        {maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/Phone/sp_blackberry.png', gia: 1000},
        {maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/Phone/sp_iphoneX.png', gia: 2000},
        {maSP: 3, tenSP: 'Note 7', hinhAnh: './img/Phone/sp_note7.png', gia: 3000},  
        {maSP: 4, tenSP: 'Vivo 850', hinhAnh: './img/Phone/sp_vivo850.png', gia: 4000},    
    ]

    xemChiTiet = (sanPhamChiTiet) =>{
        this.setState({
            sanPhamModal: sanPhamChiTiet,
        })
    }

    render() {
        return (
            <div>
               <Header></Header>
               <Slider></Slider>
               <ProductList mangSanPham={this.mangSanPham} xemChiTiet={this.xemChiTiet}></ProductList>
               <Footer></Footer>
               <Model sanPhamModal={this.state.sanPhamModal}></Model>
            </div>
        )
    }
}
