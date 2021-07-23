import React, { Component } from 'react'

export default class ProductList extends Component {
    renderProduct = () => {
        let {product,xemChiTiet} = this.props;
        return product.map((pd,index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <img className="card-img-top" src={pd.img} alt />
                  <div className="card-body">
                    <h4 className="card-title">{pd.name}</h4>
                    <p className="card-text">{pd.price}</p>
                    <button onClick={()=>xemChiTiet(pd)} className="btn btn-success" data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
                  </div>
                </div>
              </div>
            );
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        )
    }
}
