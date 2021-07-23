import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import Modal from './Modal';
import mangSanPham from '../../data/phoneData.json';


export default class BaiTapTruyenFunction extends Component {

    state ={
        sanPhamChiTiet: mangSanPham[0],
        sanPhamModal: {},
    }
    xemChiTiet = (sanPham) =>{
        this.setState({
            sanPhamChiTiet: sanPham,
        })
    }
    themVaoGio = (sanPham) =>{
        this.setState({
            sanPhamModal: [...sanPhamModal, sanPham],
        })
    }
    render() {
        return (
            <div ClassComponent="container">
                <h3 className="text-center text-success">BÀI TẬP TRUYỀN FUNCTION</h3>
                <DanhSachSanPham sanPhamChiTiet={this.state.sanPhamChiTiet} xemChiTiet={this.xemChiTiet} themVaoGio={this.themVaoGio} />
                <Modal sanPhamModal={this.state.sanPhamModal} />
            </div>
        )
    }
}
