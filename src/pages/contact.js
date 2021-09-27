import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value
    };
    let response = await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(details)
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template">
        <div className="post-content-body">
          {/* Header Content */}
          <h1 class="post-condensed-header">Like my work? </h1>
          <h2>
            See below and shoot me a message! <br />
            I’m located in the Tampa Bay Area, Florida <br />
            United States of America
          </h2>
          {/* Header Image */}
          <div>
            <figure className="kg-card kg-image-card kg-width-full">
              <Img
                fluid={data.largePic.childImageSharp.fluid}
                className="kg-image"
              />{" "}
              <h7 class="post-header-inside-image">Hello!</h7>
              {/* <figcaption>Full bleed image</figcaption> */}
            </figure>
          </div>
          {/* Form Content */}
          <h2 id="forms">Reach Out!</h2>
          <form onSubmit={handleSubmit}>
            <div className="row gtr-uniform">
              <div className="name-form">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" required />
              </div>
              <div className="email-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              {/* Break */}
              <div className="col-12">
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
              </div>
              {/* Break */}
              <div className="col-12" class="button primary">
                <button type="submit">{status}</button>
              </div>
            </div>
          </form>
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(relativePath: { eq: "home_artist_contact2.jpg" }) {
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
);
