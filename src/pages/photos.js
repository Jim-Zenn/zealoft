import React from "react"

import Layout from "../components/layout"
import photosJson from "../data/photos"

import Gallery from "../components/Gallery/Gallery"

const PhotosPage = () => {
  return (
    <Layout title="photos">
      <Gallery photos={photosJson} />
    </Layout>
  )
}
export default PhotosPage
