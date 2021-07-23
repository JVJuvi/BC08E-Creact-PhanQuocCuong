import React, { Component } from 'react'
// kết nối với reduxGioHang
import {connect} from 'react-redux';

class SanPhamRedux extends Component {
    render() {

        let {sanPham} = this.props;

        return (
          <div className="card text-white bg-primary">
            <img className="card-img-top" src={sanPham.hinhAnh} width={350} height={350} alt />
            <div className="card-body">
              <h4 className="card-title">{sanPham.tenSP}</h4>
              <button className="btn btn-danger" onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm sản phẩm</button>
            </div>
          </div>
        );
    }
}

// xây dựng hàm tạo props là hàm sử lý sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) =>{
    return {
        // tạo ra props components(là function => đưa dữ liệu lên store);
        themGioHang: (sanPham)=>{
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                giaBan: sanPham.giaBan,
                soLuong: 1,
                hinhAnh: sanPham.hinhAnh,
            }
            // tạo action đưa dữ liệu lên reducer
            const action = {
                type: 'THEM_GIO_HANG', //bắt buộc đặt type
                spGioHang: spGioHang, //nội dung gửi lên reducer
            }
            console.log(action)
            // dùng hàm dispatch đưa dưc liệu action lên reducer
            dispatch(action);
        }

    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)
