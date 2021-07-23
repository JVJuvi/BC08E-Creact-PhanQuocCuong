import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import ModalGioHang from './ModalGioHang';
import ChiTietSanPham from './ChiTietSanPham';
import phoneData from '../../data/phoneData.json';

export default class BaiTapGH extends Component {
    
    state={
        gioHang: [],
        sanPhamChiTiet:phoneData[0],
    }
    themSanPham = (sanPham) =>{
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex((sp)=>sp.maSP === sanPham.maSP);
        if(index !== -1){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            gioHangCapNhat.push(sanPham)
        }
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }
    xoaSanPham = (maSP) =>{
        let gioHangCapNhat = this.state.gioHang.filter((sp)=>sp.maSP !== maSP);
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }
    tangGiamSoLuong = (maSP,tangGiam) =>{
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex((sp)=>sp.maSP === maSP);
        if(tangGiam){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            if(gioHangCapNhat[index].soLuong > 1){
                gioHangCapNhat[index].soLuong -= 1;
            }
        }
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }
    xemChiTiet = (sanPham) =>{
        this.setState({
            sanPhamChiTiet: sanPham,
        })
    }
    render() {
       let tongsp = this.state.gioHang.reduce((tsp,sanPham,index)=>{
            return tsp += sanPham.soLuong;
       },0)
        return (
            <div className="container">
                <h3 className="text-center text-success">Bài tập</h3>

                <div className="text-right"><span style={{cursor:'pointer'}} className="text-danger" data-toggle="modal" data-target="#modelId">Giỏ hàng ({tongsp})</span></div>
               <DanhSachSanPham mangSanPham={phoneData} themSanPham={this.themSanPham} xemChiTiet={this.xemChiTiet}/>

               <ModalGioHang gioHang={this.state.gioHang} xoaSanPham={this.xoaSanPham} tangGiamSoLuong={this.tangGiamSoLuong}/>

               <ChiTietSanPham sanPhamChiTiet={this.state.sanPhamChiTiet}/>
            </div>
        )
    }
}
