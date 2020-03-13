import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

import {fetchMeetups} from './constants/api';

export default class App extends React.Component {
  
  static defaultProps = {
    fetchMeetups
  }

  state = {
    loading: false,
    meetups: []
  }

  // async componentDidMount(fetchMeetups) {
  //   console.log('ssssssssssssssss')
  //   this.setState({loading: true});
  //   console.log('ppppppppppppppp')
  //   const data = this.props.fetchMeetups();
  //   console.log('mmmmmmmmmm')
  //   console.log(data.meetups)
  //   //meetups = [{'title': "Title1"}]
  //   //: data.meetups
  //   setTimeout(() => this.setState({loading: false, meetups: data.meetups}),2000 ) 
  //   console.log(meetups)
  //   console.log('rrrrrrrrrr')
  // }

  async componentDidMount() {
    console.log('mmmmmmmmmmmivneivns')
    axios.get('http://192.168.43.133:3000/api/meetups')
    .then(res => {
      console.log('ssssssssssssssss')
      this.setState({loading: true});
      console.log('ppppppppppppppp')
      const data = res.data;
      console.log(data);
      //
      //this.setState({loading: false, meetups: data.meetups})
      setTimeout(()=> this.setState({loading: false, meetups: data.meetups}), 2000)
      console.log('mmmmmmmmmm')
    }).catch =(e) => {
      console.log(e,'errrrrrr');
    }
    console.log('dididid')
    console.log('maaaaaan',this.state)
    console.log(this.state.meetups)
  }

  render() {
    if(this.state.loading){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>MeetupMe</Text>
        {this.state.meetups.map((meetup, i) => (
          <Text key={i} >{meetup.title}</Text>
        ))}
        <Text>************</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
