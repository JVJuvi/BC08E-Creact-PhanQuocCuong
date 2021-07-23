import React, { Component } from 'react'
import {connect} from 'react-redux';

class ModalSanPhamRecode extends Component {

    
    renderTable = () => {
        return this.props.gioHang.map((sp,index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td><img src={sp.hinhAnh} width={50} height={50}/></td>
                    <td>{sp.tenSP}</td>
                    <td>
                        <button className="btn btn-primary" onClick={()=>this.props.tangGiam(index,true)}>+</button>
                        {sp.soLuong}
                        <button className="btn btn-primary" onClick={()=>this.props.tangGiam(index,false)}>-</button>
                    </td>
                    <td>{(sp.giaBan).toLocaleString()}</td>
                    <td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={()=>this.props.xoaSanPham(index)}>Xoá</button></td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Hình ảnh</th>
                            <th>Tên SP</th>
                            <th>Số lượng</th>
                            <th>Giá bán</th>
                            <th>Thành giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>{this.props.gioHang.reduce((tongTien,sp,index) => {
                                return tongTien += sp.giaBan * sp.soLuong
                            },0).toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gioHang: state.GioReducer.gioHang
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xoaSanPham: (index) => {
            const action = {
                type: 'XOA_SAN_PHAM',
                index
            }
            dispatch(action)
        },
        tangGiam: (index, tangGiam) => {
            const action = {
                type: 'TANG_GIAM',
                index,
                tangGiam
            }
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ModalSanPhamRecode)