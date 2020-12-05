import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList"

var gridStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  width: "100%",
  boxSizing: "border-box",
}

var leftColumnStyle = {
  display: "flex",
  flexFlow: "column nowrap",
  width: "36%",
  padding: "0 10px",
}

var midColumnStyle = {
  display: "flex",
  flexFlow: "column nowrap",
  padding: "0 10px",
  width: "60%",
  boxSizing: "border-box",
}

var rightColumnStyle = {
  display: "flex",
  flexFlow: "column nowrap",
  padding: "0 10px",
  width: "40%",
  boxSizing: "border-box",
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout title="home">
    <SEO title="Home" />
    <div style={gridStyle}>
      <div style={leftColumnStyle}>
        <PostList edges={edges} category="journal" heading="日志" />
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          width: `calc(100% - ${leftColumnStyle.width})`,
        }}
      >
        <p>
          我是曾庆伟，谷歌工程师
          <br />
          我在这里随便写写东西
          <br />
          联系我
        </p>
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
          }}
        >
          <div style={midColumnStyle}>
            <PostList edges={edges} category="review" heading="札记" />
          </div>
          <div style={rightColumnStyle}>
            <PostList edges={edges} category="opinions" heading="观点" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            category
            path
            title
          }
        }
      }
    }
  }
`
