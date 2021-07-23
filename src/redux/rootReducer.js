import {combineReducers } from "redux";
import { GioHangReducer } from './GioHangReducer';
import {GioReducer} from './GioReducer';
import {BurgerReducer} from './BurgerReducer';
import {QuanLySinhVienReducer} from './QuanLySinhVienReducer';

//store tổng ứng dụng
export const rootReducer = combineReducers({
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    GioHangReducer: GioHangReducer,
    GioReducer: GioReducer, 
    BurgerReducer: BurgerReducer,  
    QuanLySinhVienReducer: QuanLySinhVienReducer,
})