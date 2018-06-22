import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>{props.data.allContentfulBlog.edges.map( (data) => (
      <li>
        <Link to={ data.node.slug }>{ data.node.title }</Link>
        <p>{ data.node.content.childMarkdownRemark.excerpt }</p>
      </li>
      ) )}
      <li><Link to="/page-2/">Go to page 2</Link></li>
    </ul>
  </div>
)

export default IndexPage



export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlog(
            filter: {
                node_locale: {eq: "en-US"}
            },
            sort: {
                fields: [createdAt], order: ASC
            }
        ) {
            edges {
                node {
                    title
                    slug
                    content {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
            }
        }
    }
`

