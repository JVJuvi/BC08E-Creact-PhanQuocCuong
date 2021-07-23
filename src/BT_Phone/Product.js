import React, { Component } from 'react'

export default class Product extends Component {
    render() {

        // let {sanPham} = this.props;
        let {sanPham, xemChiTiet} = this.props;
        return (
          <div>
            {/* <div className="card">
              <img className="card-img-top" src={sanPham.hinhAnh} alt style={{maxWidth: '100%'}}/>
              <div className="card-body text-center">
                <h4 className="card-title">{sanPham.tenSP}</h4>
                <p className="card-text">{sanPham.gia}</p>
                <a href="#" className="btn btn-primary mr-2">Detail</a>
                <a href="#" className="btn btn-danger">Cart</a>
              </div>
            </div> */}
                <div className="card">
                  <img className="card-img-top" src={sanPham.hinhAnh} alt />
                  <div className="card-body text-center">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                    <a href="#" className=" btn btn-primary mr-1" data-toggle="modal" data-target="#modelId" onClick={()=>xemChiTiet(sanPham)}>Detail</a>
                    <a href="#" className="btn btn-danger">Cart</a>
                  </div>
                </div>

          </div>
        );
    }
}
