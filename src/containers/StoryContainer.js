import React, { Component } from 'react';
import StoryList from '../components/StoryList';


class StoryContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      topStories: [],
      story: []
    };
  }

  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then(data => this.setState({ topStories: data }))
      .catch(console.error);

    fetch("https://hacker-news.firebaseio.com/v0/item/{storyId}.json")
    .then(res => res.json())
    .then(data => this.setState({ story: data }))
    .catch(console.error);
  }

  render () {
    return (
      <StoryList />
    )
  }

}


export default StoryContainer;
