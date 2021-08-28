import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            <strong>Hello!</strong> Welcome to the design & development
            portfolio of <strong>Ruben Matamoros</strong>. I am a highly
            motivated Graphic & Web Design professional with 10 plus years
            experience, now a Full-Stack Software Engineer with a focus on Front
            End Web Development.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Ruben Matamoros of Valiant Creative</figcaption>
          </figure>
          <blockquote>
            "Absorb what is useful, discard what is useless and add what is
            specifically your own." – Bruce Lee
          </blockquote>
          <h3 id="dynamic-styles">A Little About Me</h3>
          <p>
            Originally, I hail from the tropical land of Costa Rica, although, I
            grew up mostly here in the USA and now reside in the Tampa Bay Area,
            Florida.
          </p>
          <p>
            I graduated at the top of my class in 2013 from Full Sail
            University. I gave a speech as the representative of my class and
            was awarded with the Advanced Achiever Award. Since then I have
            designed on a global scale with companies such as Ashley Furniture
            and Carillon Tower Advisors of Raymond James. With 10 plus years
            experience in design, now turned a Full-Stack Software Engineer with
            a focus on Front End Web Development. An innovative problem-solver
            who is passionate about developing websites and apps, with a focus
            on mobile-first design and development. Strengths are in creativity,
            teamwork, and building projects from concept to execution. When I’m
            not developing, sketching and just crushing pixels I enjoy being
            active as well after sitting all day. My favorite sports are soccer,
            martial arts, and bike riding. What I enjoy most of all is traveling
            and spending time with my beautiful wife and three daughters.
          </p>
          <p>
            My clients come to me with a business problem they are struggling
            with, and I partner with them to develop exciting and flexible
            marketing collaterals that build brand awareness, promote product
            benefits, enhance the product's professional appearance; and in turn
            contribute to sustained values for their business.
          </p>
          <p>
            Cognizant of the importance of balancing the client's needs and
            vision with practical and cost-efficient design formats, I strive to
            develop and design solutions that are inviting and interesting but
            also mirror the client's core values and mission.
          </p>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "about-page-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
