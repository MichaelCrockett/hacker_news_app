import React from 'react';
import StoryItem from './StoryItem';

const StoryList = ({stories}) => {
  const storyNodes = stories.map((story, index) => {
    return (
      <StoryItem
      story={story}
      key={index}>
      </StoryItem>
    )
  })

  return (
    <h2>{ storyNodes }</h2>
  )
}

export default StoryList;
