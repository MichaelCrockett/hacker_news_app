import React from 'react';

const StoryItem = ({story}) => {
  return (
    <div>
    <h3>{ story.title }</h3>
    <p>{ story.children }</p>
    </div>
  )
}


export default StoryItem;
