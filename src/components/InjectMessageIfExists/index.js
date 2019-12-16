import React from "react";
import { injectIntl } from "react-intl";

export default injectIntl(({ intl, ...props }) => {
  const { children } = props;
  if (!children) return null;
  return !intl.messages[props.id] || intl.messages[props.id] === "" ? null : (
    <>{children}</>
  );
});
