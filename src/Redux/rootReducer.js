import BaiTapGioHangReducer from "./BaiTapGiohangReducer";
import { combineReducers } from "redux";

// store tổng của ứng dụng
const rootReducer = combineReducers({
  stateGioHang: BaiTapGioHangReducer, // state giỏ hàng
});

export default rootReducer;
