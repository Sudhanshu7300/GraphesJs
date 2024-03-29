import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";

// Material UI components
import Box from "components/Box";

function PageLayout({ background, children }) {
  // const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  return (
    <Box
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </Box>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
