import React, { Component } from 'react'
import {connect} from 'react-redux';

class SanPhamRecode extends Component {
    render() {
        let {sp} = this.props;
        return (
          <div className="card">
            <img className="card-img-top" src={sp.hinhAnh} width={350} height={350} alt />
            <div className="card-body">
              <h4 className="card-title">{sp.tenSP}</h4>
              <button className="btn btn-success" onClick={()=>this.props.themSanPham(sp)}>Thêm vào giỏ</button>
            </div>
          </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        themSanPham: (sp) => {
            const spGioHang = {
                maSP: sp.maSP,
                tenSP: sp.tenSP,
                hinhAnh: sp.hinhAnh,
                soLuong: 1,
                giaBan: sp.giaBan,
            }
            const action = {
                type: 'THEM_SAN_PHAM',
                spGioHang,
            }
            console.log(action)
            dispatch(action)
        }
    }
}

export default connect(null,mapDispatchToProps)(SanPhamRecode)