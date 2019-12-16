// @flow
import React from "react";
import { Link } from "gatsby";
import type { Langs } from "./types";
import { Section, UL, LI } from "./styles";

type Props = {
  langs: Langs,
};

const SelectLanguage = (props: Props) => {
  const links = props.langs.map(lang => (
    <LI selected={lang.selected} key={lang.langKey}>
      <Link
        to={lang.link}
        style={{
          color: "white",
        }}
      >
        {lang.langKey}
      </Link>
    </LI>
  ));

  return (
    <Section>
      <UL>{links}</UL>
    </Section>
  );
};

export default SelectLanguage;
