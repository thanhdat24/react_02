import React, { Component } from "react";

import DanhSachSanPham from "./DanhSachSanPham";
import Parent from "./Parent";

export default class DemoProps extends Component {
  render() {
    return (
      <div>
        <Parent>
            <DanhSachSanPham/>
        </Parent>
      </div>
    );
  }
}
