import React from "react"
import { Link } from "gatsby"

import GalleryStyle from "./Gallery.module.css"

const Figure = ({ index, src, title, subtitle }) => {
  const path = `/photos/${title}`

  return (
    <figure className={GalleryStyle.figure} key={index}>
      <Link to={path} style={{ display: `block`, lineHeight: 0.5 }}>
        <img alt={title} src={src} style={{ width: `100%` }} />
      </Link>
      <figcaption className={GalleryStyle.figcaption}>
        <h4 className={GalleryStyle.figureTitle}>{title}</h4>
        <h5 className={GalleryStyle.figureSubtitle}>{subtitle}</h5>
      </figcaption>
    </figure>
  )
}

const Gallery = ({ photos }) => {
  return (
    <div className={GalleryStyle.gallery}>
      {photos.map((photo, index) => (
        <Figure key={index} src={photo.src} title={photo.title}></Figure>
      ))}
    </div>
  )
}

export default Gallery
