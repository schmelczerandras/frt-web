import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

export default class CarTemplate extends React.Component {
	render(){
		const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
		return(
			<div>
				<Helmet>
		          <title>{`${post.title} | ${config.siteTitle}`}</title>
		        </Helmet>
		        <SEO postPath={slug} postNode={postNode} postSEO />
	        <div>
          <h1>
            {post.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </div>
	 </div>
	);
	}
}

export const memberQuery = graphql`
  query memberBySlugQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          relativePath
        }
      }
      fields {
        slug
      }
    }
  }
`;
