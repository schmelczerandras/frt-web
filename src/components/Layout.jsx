import 'modern-normalize/modern-normalize.css';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import FRTLogoSrc from '../assets/frt-logo.svg';
import Header from './Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={staticData => (
        <React.Fragment>
          <Helmet
            titleTemplate={`%s | ${staticData.site.siteMetadata.title}`}
            defaultTitle={staticData.site.siteMetadata.title}
          >
            <html lang={staticData.site.siteMetadata.language} />

            <link
              href="https://fonts.googleapis.com/css?family=Rajdhani|Raleway"
              rel="stylesheet"
            />
          </Helmet>

          <Header
            brand={
              <img
                src={FRTLogoSrc}
                alt={staticData.site.siteMetadata.title}
                className={styles.headerBrandLogo}
              />
            }
          />
        </React.Fragment>
      )}
    />

    <main className={styles.main}>{children}</main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
