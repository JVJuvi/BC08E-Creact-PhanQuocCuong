import React, { Component } from 'react'
import CardProduct from './CardProduct';


export default class ProductDemo extends Component {

    renderProduct = () => {
      let {arrProduct} = this.props;
      return arrProduct.map((product, index)=>{
        return (
          <div className="col-4" key={index}>
            <CardProduct product={product}></CardProduct>
          </div>
        )
      })
    }

    render() {

        //this.props: Là thuộc tính của rcc
        /*
            Phân biệt state và props
            +Giống nhau đều là thuộc tính có sẳn của react class component để bingding dữ liệu hiển thị lên giao diện
            +Khác nhau : 
                this.state : dùng để chưá các gía trị thay đổi trên giao diện và có thể gán lại thông qua phương thức setState
                this.props: dùng để nhận giá trị cha truyền vào . Lưu ý không thể gán lại giá trị của nó như this.state có setState
        */
       return(
        <div>  
        <h3 className="text-center">Shoe Shop</h3>
        <div className="row">
           {this.renderProduct()}
        </div>
      </div>
       )
    }
}
