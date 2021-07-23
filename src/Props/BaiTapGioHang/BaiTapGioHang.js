import React, { Component } from 'react';
import DanhSachGioHang from './DanhSachGioHang';
import ModalGioHang from './ModalGioHang';
import phoneData from '../../data/phoneData.json';
import SanPhamChiTiet from './SanPhamChiTiet';



export default class BaiTapGioHang extends Component {

    state={
        gioHang: [],
        sanPhamChiTiet: phoneData[0],
    }

    xemChiTiet = (sanPham) => {

        this.setState({
            sanPhamChiTiet: sanPham
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-success">DANH SÁCH SẢN PHẨM</h3>

                <ModalGioHang />

                <DanhSachGioHang mangSanPham={phoneData} xemChiTiet={this.xemChiTiet}/>

                <SanPhamChiTiet sanPhamChiTiet={this.state.sanPhamChiTiet}  />
            </div>
        )
    }
}
