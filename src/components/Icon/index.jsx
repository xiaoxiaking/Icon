import React, { Component } from "react";
import { Text } from "@tarojs/components";
import "../../downloadfonts/iconfont.css";
import classnames from "classnames";

/* class DIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: "iconfont",
      styleFontSize: "font-size:" + this.props.size,
    };
    this.handleLoading = this.handleLoading.bind(this);
    this.handleSettimeout = this.handleSettimeout.bind(this);
    this.handlePro(this.props);
    this.oldState = this.state;
  }
  handlePro(pr) {
    for (var i in pr) {
      if (pr[i] === "add") {
        this.state.classNames = this.state.classNames + " icon-jia";
        continue;
      }
      if (pr[i] === "jian") {
        this.state.classNames = this.state.classNames + " icon-jian";
        continue;
      }
    }
  }
  handleLoading() {
    console.log("this.props.loading", this.props.loading);
    if (this.props.loading === "true") {
      this.setState({
        classNames: " showload",
        styleFontSize: this.state.styleFontSize,
      });
      setTimeout(this.handleSettimeout, 4500);
    }
  }

  handleSettimeout() {
    this.setState(this.oldState);
  }
  render() {
    return (
      <Text
        class={this.state.classNames}
        style={this.state.styleFontSize}
        onClick={this.handleLoading}
      ></Text>
    );
  }
} */

class DIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icontype: true,
      iconload: false,
    };
    this.handleLoading = this.handleLoading.bind(this);
    this.handleSettimeout = this.handleSettimeout.bind(this);
    //this.oldState = this.state;
    this.timeout = null;
  }
  handleLoading() {
    //console.log("this.props.loading", this.props.loading);
    if (this.props.loading && this.timeout === null) {
      /* console.log("this.props.loadingaa");
      this.props.loading = false;
      this.setState({
        loading: this.props.loading,
      });
      console.log("this.state", this.state, "this.oldstate", this.oldState);
      this.timeout = setTimeout(this.handleSettimeout, 4500); */
      this.setState({
        icontype: false,
        iconload: true,
      });
      this.timeout = setTimeout(this.handleSettimeout, 4500);
      //console.log("this.timeout", this.timeout);
    }
  }
  handleSettimeout() {
    /* console.log(
      " this.setState(this.oldState);",
      "this.oldState",
      this.oldState
    ); */
    /* this.props.loading = true;
    this.setState({ loading: this.props.loading }); */
    this.setState({
      icontype: true,
      iconload: false,
    });
  }

  render() {
    //console.log("this.timeout render", this.timeout);
    clearTimeout(this.timeout);
    //console.log("this.timeout render clearTimeout", this.timeout);
    this.timeout = null;
    const { type, size, color, style } = this.props;
    // console.log("style", style);
    const iconstyle = {
      fontSize: size,
      color: color,
      ...style,
    };
    //console.log(type, size, style, loading, !loading);

    let iconClass = classnames({
      iconfont: true,
      /* [`icon-${type}`]: loading,
      showload: !loading, */
      [`icon-${type}`]: this.state.icontype,
      showload: this.state.iconload,
    });

    // console.log("iconClass", iconClass);
    return (
      <Text
        class={iconClass}
        style={iconstyle}
        onClick={this.handleLoading}
      ></Text>
    );
  }
}

DIcon.defaultProps = {
  type: "add",
  size: "16px",
  loading: false,
  color: "black",
};

export default DIcon;
