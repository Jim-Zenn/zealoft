import React from "react"
import PostLink from "../components/PostLink"
const headingStyle = {
  borderBottom: "#000 1.5px solid",
  fontFamily: "Source Han Serif CN, serif",
  fontWeight: 700,
  fontSize: 36,
}
const PostList = ({ edges, category, heading }) => (
  <section>
    <h3 style={headingStyle}>{heading}</h3>
    {edges
      .filter(
        edge =>
          !!edge.node.frontmatter.date &&
          edge.node.frontmatter.category === category
      )
      .map(edge => (
        <PostLink key={edge.node.id} post={edge.node} />
      ))}
  </section>
)

export default PostList
