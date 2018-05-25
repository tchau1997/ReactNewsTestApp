import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  WebView
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
  Right,
  Spinner,
  Card,
  CardItem
} from "native-base";
import GridView from "react-native-super-grid";

class CardListItem extends Component {
  _showFullDetail = () => {
    this.props.navigation.navigate("DetailModal", {
      fullUrl: this.props.item.url
    });
  };

  render() {
    const item = this.props.item;
    return (
      <TouchableOpacity onPress={this._showFullDetail}>
        <Card>
          <CardItem cardBody>
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Text>{item.title}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default class MainScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.path : "News",
      /* These values are used instead of the shared configuration! */
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  _handleCardClick = item => {};

  componentDidMount() {
    const { navigation } = this.props;
    var path =
      "https://newsapi.org/v2/top-headlines?sources=" +
      navigation.getParam("path", "bloomberg") +
      "&apiKey=ee50cab9847346febed14a2fe1333a45";
    console.log(path);
    fetch(path)
      .then(result => result.json())
      .then(resultJSON => {

        this.setState({
          isLoading: false,
          news: resultJSON
        });
      })
      .catch(err => console.log(err));
  }

  _renderItem = item => {
    return (
      <ListItem>
        <CardListItem item={item} navigation={this.props.navigation} />
      </ListItem>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <Content>
            <Spinner color="red" />
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <Content>
          <List
            dataArray={this.state.news.articles}
            renderRow={this._renderItem}
          />
        </Content>
      </Container>
    );
  }
}
