import React from 'react';
import StoryItem from './StoryItem';

const StoryList = (props) => {
  const storyNodes = props.topStories.map((topStory, index) => {
    return (
      <StoryItem key={index}
      topStory={topStory}/>
    )
  })
  return (
    <h2>{ storyNodes }</h2>
  )

}

export default StoryList;
