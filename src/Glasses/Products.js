import React, { Component } from 'react'
import data from "../data/dataGlasses.json";

export default class Products extends Component {

    state = {
        src: './img/glassesImage/v1.png',
        mangKinh: data[0]
    }
    changeGlass = (number) => {
        this.setState({
            src: `./img/glassesImage/${number}.png`
        })
    }
    chiTiet = (sanPham) =>{
        this.setState({

        })
    }
    render() {
        let {chiTietSanPham} = this.state;
        return (
            <div className="product">
                   <div className="product__list">
                   <div className="product__models">
                        <div className="row">
                            <div className="col-6">
                                <div className="product__models__left">
                                    <div className="model__background text-center">
                                        <img className="models__background w-100" src='./img/glassesImage/model.jpg'/>     
                                    </div>
                                    <img className="models__glasses" src={this.state.src} width={80} height={80} />   
                                    <div className="model__detail">
                                        <h3>GUCCI G8850U</h3>
                                        <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                    </div>   
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="product__models__right text-center">
                                    <img className="w-100" src='./img/glassesImage/model.jpg'/>
                                </div>
                            </div>
                    </div>
                   </div>
                    <div className="product__glasses">
                        <button><img src='./img/glassesImage/g1.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v1')
                        }}/></button>
                        <button><img src='./img/glassesImage/g2.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v2')
                        }}/></button>
                        <button><img src='./img/glassesImage/g3.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v3')
                        }}/></button>
                        <button><img src='./img/glassesImage/g4.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v4')
                        }}/></button>
                        <button><img src='./img/glassesImage/g5.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v5')
                        }}/></button>
                        <button><img src='./img/glassesImage/g6.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v6')
                        }}/></button>
                        <button><img src='./img/glassesImage/g7.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v7')
                        }}/></button>
                        <button><img src='./img/glassesImage/g8.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v8')
                        }}/></button>
                        <button><img src='./img/glassesImage/g9.jpg' width={80} height={80} onClick ={()=>{
                            this.changeGlass('v9')
                        }}/></button>
                        
                    </div>
                   </div>
            </div>
        )
    }
}
