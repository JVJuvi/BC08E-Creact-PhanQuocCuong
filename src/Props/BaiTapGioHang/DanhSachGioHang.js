import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';


export default class DanhSachGioHang extends Component {
    renderSanPham = () => {
        let {mangSanPham,xemChiTiet} = this.props;
        return mangSanPham.map((sp,index) => {
            return (
                <SanPhamGioHang key={index} xemChiTiet={xemChiTiet} sp={sp} />
            )  
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
