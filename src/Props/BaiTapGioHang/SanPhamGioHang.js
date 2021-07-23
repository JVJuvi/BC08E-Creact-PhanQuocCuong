import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        let {sp,xemChiTiet} = this.props;
        return (
          <div className="col-4">
              <div className="card">
                <img className="card-img-top" src={sp.hinhAnh} alt width={350} height={350}/>
                <div className="card-body bg-dark text-white text-center">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <button className="btn btn-success mr-2" onClick={()=>xemChiTiet(sp)}>Xem chi tiết</button>
                    <button className="btn btn-danger"><span class="fas fa-shopping-cart"></span></button>
                </div>
            </div>
          </div>
        );
    }
}
