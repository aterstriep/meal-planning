import * as React from "react"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"
import Container from "../components/Container"
import Layout from "../components/Layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>404 | Page Not Found</title>
      </Helmet>
      <Container className="recipe-grid-wrap">
        <h1 style={{marginTop: 0}}>Page Not found</h1>
        <div style={{ maxWidth: "250px", width: "100%" }}><div style={{ width: "100%", height: 0, paddingBottom: "100%", position: "relative" }}><iframe src="https://giphy.com/embed/ZFFVNwIbjsKtP3lHYK" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div></div>
        <p>The page you're looking for doesn't exist. Here's a gif of a cute puppy instead.</p>
        <Link to="index">Back to Recipes</Link>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
