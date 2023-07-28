import React from "react"
import ContentLoader from "react-content-loader"

const CommentLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={80}
    viewBox="0 0 400 80"
    backgroundColor="#f1e5e7"
    foregroundColor="#ecebeb"
  >
    <rect x="40" y="5" rx="10" ry="10" width="350" height="20" /> 
    <circle cx="18" cy="15" r="10" /> 
    <rect x="40" y="32" rx="10" ry="10" width="350" height="20" /> 
    <rect x="40" y="59" rx="10" ry="10" width="350" height="20" />
  </ContentLoader>
)

export default CommentLoader

