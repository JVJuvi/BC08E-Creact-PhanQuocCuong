import React, { Component } from 'react'
import SanPham from './SanPham';
import dataPhone from '../../data/phoneData.json';
export default class DanhSachSanPham extends Component {

    rendarSanPham = () =>{
        let {xemChiTiet,themVaoGio} = this.props;
        return dataPhone.map((dt, index)=>{
           return (
                <SanPham key={index} dt={dt} xemChiTiet={xemChiTiet} themVaoGio={themVaoGio}></SanPham>
           )
        })
    }

    render() {
        let {sanPhamChiTiet} = this.props;
        console.log(sanPhamChiTiet);
        return (
          <div className="container">
              <div className="row">
                {this.rendarSanPham()}
              </div>
              <hr />
              <div className="row">
                  <div className="col-6">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} width={330} height={350} />
                  </div>
                  <div className="col-6">
                      <table className="table">
                          <tr>
                              <th>Màn hình</th>
                              <th>{sanPhamChiTiet.manHinh}</th>
                          </tr>
                          <tr>
                              <th>Hệ điều hành</th>
                              <th>{sanPhamChiTiet.heDieuHanh}</th>
                          </tr>
                          <tr>
                              <th>Cameta trước</th>
                              <th>{sanPhamChiTiet.cameraTruoc}</th>
                          </tr>
                          <tr>
                              <th>Camera sau</th>
                              <th>{sanPhamChiTiet.cameraSau}</th>
                          </tr>
                          <tr>
                              <th>RAM</th>
                              <th>{sanPhamChiTiet.ram}</th>
                          </tr>
                          <tr>
                              <th>ROM</th>
                              <th>{sanPhamChiTiet.rom}</th>
                          </tr>
                      </table>
                  </div>
              </div>
          </div>
        )
    }
}
