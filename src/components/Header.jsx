import { Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';
import styles from './Header.module.scss';

const Header = ({ brand, className, ...props }) => (
  <header className={`${styles.root} ${className}`} {...props}>
    <Container>
      <div className={styles.contentContainer}>
        <div className={styles.brandContainer}>
          <Link to="/">{brand}</Link>
        </div>

        <nav className={styles.menuContainer}>
          <ul className={styles.menuItemsList}>
            <StaticQuery
              query={graphql`
                query HeaderQuery {
                  allHeaderMenuItemsYaml {
                    edges {
                      node {
                        label
                        url
                      }
                    }
                  }
                }
              `}
              render={staticData =>
                staticData.allHeaderMenuItemsYaml.edges.map(({ node }) => (
                  <li key={node.url} className={styles.menuItem}>
                    <Link to={node.url} className={styles.menuItemLink}>
                      {node.label}
                    </Link>
                  </li>
                ))
              }
            />
          </ul>
        </nav>
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  brand: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
