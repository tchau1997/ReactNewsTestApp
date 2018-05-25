import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from "react-native";
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
  Right
} from "native-base";
import brands from "../brands";
import GridView from "react-native-super-grid";

export default class BrandScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      header: null,
    };
  };

  render() {
    return (
      <Container>
        <Header style={{ alignContent: "center", backgroundColor: "#FFFFFF" }}>
          <Left style={{ flex: 1.5 }} />
          <Body style={{ flex: 1 }}>
            <Image
              source={{
                uri: "https://imageog.flaticon.com/icons/png/512/21/21601.png"
              }}
              style={styles.headerItem}
            />
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <Text style={styles.textStyle}>Pick the one you like to read</Text>
          <GridView
            itemDimension={150}
            items={brands}
            style={styles.gridView}
            renderItem={item => (
              <TouchableOpacity
                style={[styles.itemContainer, { backgroundColor: item.code }]}
                onPress={() =>
                  this.props.navigation.navigate("Newslist", {
                    path: item.path
                  })
                }
              >
                <Image source={{ uri: item.uri }} style={{ flex: 1 }} />
              </TouchableOpacity>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  textStyle: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  },
  headerItem: {
    width: 70,
    height: 50,
    alignItems: "center"
  }
});
