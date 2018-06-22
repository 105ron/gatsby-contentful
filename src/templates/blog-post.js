import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image";

const BlogPost = (props) => {
  const { title, published, bannerImage, content } = props.data.contentfulBlog
  return (
    <div>
      <h2 style={{
        borderBottom: '2px solid #efefef',
        paddingBottom: '8px',
        textAlign: 'center'
      }}>
        {title}
      </h2>
      <p style={{
        borderBottom: '1px solid #efefef',
        paddingBottom: '8px',
        textAlign: 'center'
      }}>
        {published}
      </p>
      <div>
        <Img sizes={bannerImage.sizes} />
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
    </div>
  )
};

BlogPost.PropTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlog(slug: {eq: $slug}) {
            title
            published(formatString: "MMMM DD, YYYY")
            bannerImage {
                sizes(maxWidth: 400) {
                    ...GatsbyContentfulSizes
                }
            }
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`