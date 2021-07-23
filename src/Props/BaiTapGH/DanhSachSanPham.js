import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {

    renderSanPham = () =>{
        let {mangSanPham,themSanPham,xemChiTiet} = this.props;
        return mangSanPham.map((sp,index)=>{
            return (
                <SanPham key={index} sp={sp} themSanPham={themSanPham} xemChiTiet={xemChiTiet}/>
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
