import React, { useState, useCallback } from "react"
import Layout from "../components/layout"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import photosJson from "../data/Photos"

import Photo from "../components/Photo"

const PhotosPage = () => {
  const [selectAll, setSelectAll] = useState(false)

  const direction = "column"

  const imageRenderer = useCallback(
    ({ left, top, key, photo }) => (
      <Photo
        key={key}
        margin={"2px"}
        photo={photo}
        direction={direction}
        left={left}
        top={top}
      />
    ),
    [selectAll]
  )

  return (
    <Layout>
      <Gallery
        photos={photosJson}
        direction={direction}
        renderImage={imageRenderer}
      />
    </Layout>
  )
}
export default PhotosPage
