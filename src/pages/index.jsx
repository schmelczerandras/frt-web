import { graphql, Link as GatsbyLink, StaticQuery } from 'gatsby';
import React from 'react';
import { BackgroundImage, BlockLink, Container } from 'rebass';
import Card from '../components/Card';
import CardContent from '../components/CardContent';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import Subhead from '../components/Subhead';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading textAlign="center">Hírek</Heading>

      <StaticQuery
        query={graphql`
          {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/news/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    date
                    dateString: date(formatString: "LL", locale: "hu")
                    image
                    imageDescription
                    abstract
                  }
                  fields {
                    slug
                  }
                  excerpt
                }
              }
            }
          }
        `}
        render={data =>
          data.allMarkdownRemark.edges.map(({ node }) => (
            <BlockLink key={node.id} is={GatsbyLink} to={node.fields.slug}>
              <Card is="article">
                <BackgroundImage ratio={9 / 16} src={node.frontmatter.image} />

                <CardContent>
                  <Subhead>{node.frontmatter.title}</Subhead>

                  <Paragraph>
                    {node.frontmatter.abstract || node.excerpt}
                  </Paragraph>

                  <Paragraph textAlign="right" css={{ fontStyle: 'italic' }}>
                    <time dateTime={node.frontmatter.date}>
                      {node.frontmatter.dateString}
                    </time>
                  </Paragraph>
                </CardContent>
              </Card>
            </BlockLink>
          ))
        }
      />
    </Container>
  </Layout>
);

export default IndexPage;
