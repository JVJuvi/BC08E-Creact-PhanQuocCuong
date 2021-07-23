import React, { Component } from 'react'
// Kết nối redux (connect là hàm kết nối)
import {connect} from 'react-redux';



class ModalGioHangRedux extends Component {

    renderGioHang = () => {
        // this.props.gioHang là thuộc tính nhận vè từ redux
        console.log(this.props.gioHang)
        return this.props.gioHang.map((spGH,index) =>{
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td><img src={spGH.hinhAnh} width={50} height={50} /></td>
                    <td>{spGH.tenSP}</td>
                    <td>{spGH.soLuong}</td>
                    <td>{(spGH.giaBan).toLocaleString()}</td>
                    <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                    <td><button onClick={()=>this.props.xoaGioHangIndex(index)} className="btn btn-danger">Xoá</button></td>
                    <td><button onClick={()=>this.props.xoaGioHangmaSP(spGH.maSP)} className="btn btn-danger">Xoá maSP</button></td>
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
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá bán</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => { // state là store tổng => truy suất tới GioHangReducer => biến state trên GioHangReducer
    return {
        gioHang: state.GioHangReducer.gioHang // tạo ra 1 props cho component ModalGioHangRedux
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHangIndex: (index) => {
            const action = {
                type: 'XOA GIO HANG',
                index
            }

            // đưa lên reducer
            dispatch(action);
        },
        xoaGioHangmaSP: (maSP) => {
            const action = {
                type: 'XOA GIO HANG MANGSP',
                maSP
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalGioHangRedux)
