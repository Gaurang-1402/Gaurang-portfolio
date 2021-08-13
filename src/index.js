import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <title>Gaurang Ruparelia</title>
        <meta
          name='description'
          content='Get to know Gaurang Ruparelia better: resume, projects, research and his contact information'
        ></meta>
        <meta
          name='keywords'
          content='Gaurang, Gaurang Ruparelia, gaurang, gaurang ruparelia, gaurang ruparelia website, gaurang website, gaurang ruparelia portfolio, gaurang portfolio, Guarang, guarang, gorang, Gorang, who is Gaurang Ruparelia, who is Gaurang'
        />
      </Helmet>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
