import React from "react";

const styles = {
  pageHeightStyles: {
    backgroundColor: "#D8D6AD"
  }
}

export default function container({renderPage}) {

  return (
    <div className="container-fluid" style={styles.pageHeightStyles}>
      {renderPage()}
    </div>
  );
}