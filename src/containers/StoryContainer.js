import React, { Component } from 'react';
import StoryList from '../components/StoryList';


class StoryContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json())
      .then(storyIds => {
        const topTen = storyIds.slice(0,10);

        const promiseArray = topTen.map(storyId => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(res => res.json());
        });

        Promise.all(promiseArray)
          .then(stories => this.setState({ stories: stories }));
      })
      .catch(console.error);

    // fetch("https://hacker-news.firebaseio.com/v0/item/{storyId}.json")
    // .then(res => res.json())
    // .then(data => this.setState({ story: data }))
    // .catch(console.error);
  }

  render () {
    return (
      <StoryList stories={this.state.stories}></StoryList>
    )
  }

}


export default StoryContainer;
