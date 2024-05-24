import React from "react";

function TextGroupFallBack() {
  return (
    <div className="text-left" style={{ height: "120px", opacity: "50%" }}>
      Loading...
    </div>
  );
}

export default React.memo(TextGroupFallBack);
