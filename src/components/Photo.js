import React, { useState, useEffect } from "react"

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
}

const Photo = ({ photo, margin, direction, top, left, selected }) => {
  const [isSelected, setIsSelected] = useState(selected)

  if (direction === "column") {
    cont.position = "absolute"
    cont.left = left
    cont.top = top
  }

  const handleOnClick = e => {
    setIsSelected(!isSelected)
  }

  useEffect(() => {
    setIsSelected(selected)
  }, [selected])

  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={!isSelected ? "not-selected" : ""}
    >
      <img alt={photo.title} {...photo} onClick={handleOnClick} />
    </div>
  )
}

export default Photo
