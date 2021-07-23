import React, { Component } from 'react';
import {connect} from 'react-redux'

class HienThiBurger extends Component {

    renderBurger = () => {
        let {burger} = this.props;
        // let content=[];
        // for(let key in burger){
        //     let breakMid = [];
        //     for(let i = 0; i < burger[key]; i++){
        //         breakMid.push(<div key={i} className={key}></div>)
        //     }
        //     content.push(breakMid);
        // }
        // return content;

        return Object.entries(burger).map(([name,value],index)=>{
            let breakMid= [];
            for(let i = 0; i < value; i++){
                breakMid.push(<div key={index} className={name}></div>)
            }
            return breakMid;
        })
    }

    render() {
        return (
            <div>
                <div className="breadTop"></div>
                {this.renderBurger()}
                <div className="breadBottom"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        burger: state.BurgerReducer.burger
    }
}

export default connect(mapStateToProps,null)(HienThiBurger)
