// setup State giỏ hành trên store

const stateGioHang = {
  gioHang: [],
};

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.gioHang.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );

      if (index !== -1) {
        state.gioHang[index].soLuong += 1;
      } else {
        state.gioHang.push(action.spGioHang);
      }

      // setState
      state.gioHang = [...state.gioHang];

      return { ...state };
    }
    default:
      break;
  }

  return state;
};

export default BaiTapGioHangReducer;
