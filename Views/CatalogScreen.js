import React, { Component } from "react";
import { Platform, StyleSheet, View, WebView } from "react-native";
import {
  List,
  ListItem,
  Text,
  Thumbnail,
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Spinner,
  Card,
  CardItem,
  Button,
  Icon
} from "native-base";

export default class FullDetailView extends Component {
  render() {
    const url = this.props.navigation.getParam("fullUrl", "www.google.com");
    console.log(url);
    return <WebView source={{ uri: url }} />;
  }
}
