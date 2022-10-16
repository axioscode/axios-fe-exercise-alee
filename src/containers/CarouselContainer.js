// eslint-disable-next-line import/no-unassigned-import
import 'react-multi-carousel/lib/styles.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
import Story from '../components/Story'
import { getContent } from '../utils/helper'

const CarouselContainer = () => {
  const [stories, setStories] = useState([])

  useEffect(async () => {
    const results = await getContent()
    const content = []
    results.forEach((story) => {
      axios
        .get(`https://api.axios.com/api/render/content/${story}`)
        .then((response) => {
          content.push(response.data)
          setStories([...content])
        })
        .catch((error) => {
          console.log(error.message)
        })
    })
  }, [])

  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        itemClass={''}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 1280,
              min: 720,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 980,
              min: 375,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselContainer
