import React from 'react'
import { Text } from 'react-native'
import { Container } from 'native-base'
import {  Header, Content , List , ListItem , Left, Body, Right, Button, Icon, Title} from 'native-base';
import { Font, AppLoading } from "expo";
export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      value:"Edit me!" ,
      isloading : false ,
      loading : true
    }
   // this.handleChamgeTest = this.handleChamgeTest.bind(this)
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  _login(){
    this.setState({
      isloading:true 
    })
    axios.get("https://735c569c.ngrok.io/api/networkproviders").then(response => {
      console.log(response.data.data)
      this.setState({
        networkproviders: response.data.data,
        isloading:false
      })
    }).catch(errors => {
     
      this.setState({
        isloading:false
      })
      console.log(errors.response.data)
    })
  }

  render() {
      if (this.state.loading) {
        return (
          
            <AppLoading />
          
        )
      }
      return (
        
        <Container>
                <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>First Element</Text>
            </ListItem>
            <ListItem>
              <Text>Second Element</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
         {
            this.state.isloading ? <Spinner /> : <Button onPress={() => this._login()}>
            <Text>click</Text>
            </Button>
        }
         
        </Content>
         
        </Container>
      )
    }
}

