import React, { Component } from 'react'

export default class sanPham extends Component {
    render() {
        let {dt,xemChiTiet,themVaoGio} = this.props;
        return (
          <div className="col-4">
            <div className="card text-center">
              <img className="card-img-top" src={dt.hinhAnh} alt width={250} height={350} />
              <div className="card-body">
                <h4 className="card-title">{dt.tenSP}</h4>
                <button className="btn btn-success mr-1" onClick ={()=>xemChiTiet(dt)}>Xem chi tiết</button>
                <button className="btn btn-danger" data-toggle="modal" data-target="#modelId" onClick ={()=>themVaoGio(dt)}>Thêm vào giỏ</button>
              </div>
            </div>
          </div>
        );
    }
}
