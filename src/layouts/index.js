// @flow
import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { StaticQuery, graphql } from "gatsby";
import { IntlProvider } from "react-intl";
import "intl";
import Footer from "components/Footer";
import Header from "components/Header";

type Props = {
  children: Function,
  location: { pathname: string },
  i18nMessages: any
};

const Layout = ({ children, location, i18nMessages }: Props) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              menuLinks {
                name
                link
              }
              languages {
                defaultLangKey
                langs
              }
              siteUrl
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname;
        const { languages, menuLinks, siteUrl } = data.site.siteMetadata;
        const { langs, defaultLangKey } = languages;
        const { siteMainTitle } = i18nMessages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, "/");
        const langsMenu = getLangs(
          langs,
          langKey,
          getUrlForLang(homeLink, url)
        ).map(item => ({
          ...item,
          link: item.link.replace(`/${defaultLangKey}/`, "/")
        }));
        const localizedMenuLinks = menuLinks
          .map(item => ({ ...item, link: `/${langKey}/${item.link}` }))
          .map(item => ({
            ...item,
            link: item.link.replace(`/${defaultLangKey}/`, "")
          }));
        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <Fragment>
              <Helmet
                title={siteMainTitle}
                meta={[
                  { name: "description", content: "Putt Maister" },
                  { name: "keywords", content: "Putt Maister, frisbeegolf" },
                  { name: "og:url", content: siteUrl },
                  { name: "og:type", content: "website" },
                  { name: "og:locale", content: langKey },
                  { name: "og:site_name", content: siteMainTitle },
                  { name: "og:image", content: `${siteUrl}/og-image.png` },
                  { name: "og:image:width", content: "1024" },
                  { name: "og:image:height", content: "500" }
                ]}
              />
              <Header langs={langsMenu} menuLinks={localizedMenuLinks} />
              {children}
              <Footer />
            </Fragment>
          </IntlProvider>
        );
      }}
    />
  );
};

export default Layout;
