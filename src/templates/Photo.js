import React from "react"

import Layout from "../components/layout"

export default function Template({ pageContext }) {
  const photoMeta = pageContext.photoMeta
  return (
    <Layout>
      <img src={photoMeta.src} alt={photoMeta.title} />
      <h4>{photoMeta.title}</h4>
      <p>{photoMeta.description}</p>
    </Layout>
  )
}
