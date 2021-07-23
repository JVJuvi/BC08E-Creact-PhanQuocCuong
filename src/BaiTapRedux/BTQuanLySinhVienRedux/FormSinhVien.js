import React, { Component } from 'react';
import {connect} from 'react-redux';

class FormSinhVien extends Component {

    state = {
        maSV: '',
        tenSV: '',
        sdt: '',
        email: '',
    }
    handelChange = (event) => {
        let inputTaget = event.target
        console.log(inputTaget)
        let {name,value} = inputTaget;
        this.setState({
            [name]: value
        })
    }
    handelSubmit = (event) => {
        event.preventDefault();
        this.props.themNhanVien(this.state);
    }
    render() {
        return (
            <form onSubmit = {this.handelSubmit}>
                <div className="bg-dark text-white">
                    <h1>Thông tin sinh viên</h1>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <p>Mã sinh viên</p>
                            <input className="form-control" name="maSV" value={this.state.maSV} onChange = {this.handelChange}  />
                        </div>   
                        <div className="form-group">
                            <p>Số điện thoại</p>
                            <input className="form-control" name="sdt" value={this.state.sdt} onChange = {this.handelChange}/>
                        </div>       
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <p>Họ và tên</p>
                            <input className="form-control" name="tenSV" value={this.state.tenSV} onChange = {this.handelChange}/>
                        </div>   
                        <div className="form-group">
                            <p>Email</p>
                            <input className="form-control" name="email" value={this.state.email} onChange = {this.handelChange}/>                           
                        </div>       
                    </div>
                </div>
                <button type="submit" className="btn btn-success mb-3">Thêm sinh viên</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themNhanVien: (nhanVien) => {
            const action = {
                type: 'THEM_NHAN_VIEN',
                nhanVien
            }
            dispatch(action)
        }
    }
}

export default connect (null,mapDispatchToProps)(FormSinhVien)
