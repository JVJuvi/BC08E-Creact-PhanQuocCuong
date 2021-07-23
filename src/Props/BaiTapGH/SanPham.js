import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
       let {sp,themSanPham,xemChiTiet} = this.props;
        return (
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={sp.hinhAnh} width={350} height={350} alt />
              <div className="card-body text-center ">
                <h4 className="card-title">{sp.tenSP}</h4>
                <button className="btn btn-success mr-2" onClick={()=>xemChiTiet(sp)}>Xem chi tiết</button>
                <button className="btn btn-danger" onClick={()=>themSanPham(sp)}>Thêm vào giỏ</button>
              </div>
            </div>
          </div>
        );
    }
}
