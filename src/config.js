const dev = {
  URL: "http://localhost:3000"
}

const prod = {
  URL: "https://acebook-stars.herokuapp.com"
}

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev

export default {
  ...config
}
