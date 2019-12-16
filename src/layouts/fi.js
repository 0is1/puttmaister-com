import React from "react";
import { addLocaleData } from "react-intl";
import fi from "react-intl/locale-data/fi";
import messages from "data/messages/fi";
import Layout from "./index";
import "intl/locale-data/jsonp/fi";

addLocaleData(fi);

export default props => <Layout {...props} i18nMessages={messages} />;
