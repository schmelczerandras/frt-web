import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../components/Card';
import Container from '../components/Container';
import Layout from '../components/Layout';
import styles from './contact.module.scss';

const KnowledgeBasePage = ({ data }) => (
  <Layout verticallyCentered>
    <Container className={styles.mainContainer}>
      <article>
        <Card gradient>
          <Container fluid>
            <h1>Műhely</h1>
            <p>
              <a
                href={data.site.siteMetadata.siteAddressURL}
                className={styles.link}
              >
                {data.site.siteMetadata.siteAddressPretty}
              </a>
            </p>

            <h1>E-mail</h1>
            <p>
              <a
                href={`mailto:${data.site.siteMetadata.siteEmail}`}
                className={styles.link}
              >
                {data.site.siteMetadata.siteEmail}
              </a>
            </p>
          </Container>
        </Card>
      </article>
    </Container>
  </Layout>
);

KnowledgeBasePage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default KnowledgeBasePage;

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        siteAddressURL
        siteAddressPretty
        siteEmail
      }
    }
  }
`;
