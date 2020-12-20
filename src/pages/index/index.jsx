import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import DIcon from "../../components/Icon/index";

// import "../../downloadfonts/iconfont.css";
import "./index.css";

export default class Index extends Component {
  render() {
    return (
      <View className="index">
        <DIcon
          type="jia"
          size="68px"
          color="green"
          loading={true}
          style={{ fontSize: "90px", color: "blue" }}
        ></DIcon>
        <DIcon
          type="jian"
          size="28px"
          color="green"
          style={{ fontSize: "100px", color: "blue" }}
        ></DIcon>
      </View>
    );
  }
}
