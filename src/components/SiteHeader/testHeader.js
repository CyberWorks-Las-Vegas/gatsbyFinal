import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cyberworksLogo from "../../images/wpgraphql-logo.png"
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <div
            className="logo"
            style={{
              minWidth: `120px`,
              minHeight: `31px`,
              lineHeight: `31px`,
              margin: `16px 24px 16px 0`,
              float: `left`,
            }}
          >
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <img
                src={wpgraphqlLogo}
                alt="WPGraphQL Logo"
                style={{ height: `30px`, width: `30px` }}
              />
            </Link>
          </div>
        </div>
        CyberWorks
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Remote</Button>
      </div>
    </div>
  </header>
);

export default Header;
