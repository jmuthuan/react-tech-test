import React from "react"
import ContentLoader from "react-content-loader"

const StoryLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={60}
    viewBox="0 0 400 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="16" rx="10" ry="10" width="225" height="25" /> 
    <rect x="239" y="20" rx="10" ry="10" width="148" height="15" /> 
    <rect x="10" y="50" rx="10" ry="10" width="110" height="10" /> 
    <rect x="142" y="50" rx="10" ry="10" width="110" height="10" /> 
    <rect x="269" y="50" rx="10" ry="10" width="110" height="10" />
  </ContentLoader>
)

export default StoryLoader;