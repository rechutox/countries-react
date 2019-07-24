import React from "react";

/**
 * Sort of cute notification that you can drop anywhere
 * to notify something... like an error... oh no!
 * @todo make it dissmissable
 * @todo I kind of want icons...
 * @todo delete silly comments
 * @param {string} type - One of info, error or success
 * @param {string} message - The content
 */
function Notification({ type = "info", message = "" }) {
  const className = "Notification " + type;
  return <div className={className}>{message}</div>;
}

export default Notification;
