import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="120" r="120" />
    <rect x="0" y="263" rx="15" ry="15" width="280" height="60" />
    <rect x="5" y="339" rx="15" ry="15" width="270" height="75" />
    <rect x="14" y="432" rx="10" ry="10" width="77" height="36" />
    <rect x="153" y="427" rx="20" ry="20" width="122" height="46" />
  </ContentLoader>
);

export default Skeleton;
