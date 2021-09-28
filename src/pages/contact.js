import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import emailjs from "emailjs-com";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

import { init } from "emailjs-com";
init("user_p3ojVaJ2sI4XHCsG2wtSk");

// const isValidEmail = email => {
//   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return regex.test(String(email).toLowerCase());
// };

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_id";
      const templateId = "template_id";
      const userId = "user_id";
      const templateParams = {
        name,
        email,
        message
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
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
          <div id="contact-form">
            {/* Break */}
            <div className="row gtr-uniform">
              <div className="name-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              {/* Break */}
              <div className="email-form">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
              {/* Break */}
              <div className="col-12" class="button primary">
                <button onClick={submit}>Send Message</button>
                <span className={emailSent ? "visible" : null}></span>
              </div>
            </div>
          </div>
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
