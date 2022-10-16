import React from 'react'
import {
  StoryContainer,
  TagContainer,
  HeadlineContainer,
  DateLink,
  StoryLink,
  StoryImg,
} from './StoryStyle'
import { convertDate } from '../utils/help'

const Story = ({ story }) => {
  const handleRedirect = (href) => {
    window.location.href = href
  }
  return (
    <>
      <StoryContainer className="story-container">
        <StoryImg
          onClick={() => handleRedirect(story.permalink)}
          src={story?.primary_image?.base_image_url || story?.social_image?.base_image_url}
          height={300}
          width={400}
        />
        <TagContainer>
          {story.topics?.map((topic) => (
            <div key={topic.id}>{topic.name}</div>
          ))}
        </TagContainer>
        <HeadlineContainer>{story.headline}</HeadlineContainer>
        <DateLink>
          <div>{convertDate(story.last_published)}</div>
          <StoryLink href={story.permalink}>Go Deeper &#8594;</StoryLink>
        </DateLink>
      </StoryContainer>
    </>
  )
}

export default Story
