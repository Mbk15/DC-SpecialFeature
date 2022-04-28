import React from "react";
import { Combobox } from "evergreen-ui";

const SpecialFeatureDropdoown = () => {
  return (
    <Combobox
      openOnFocus
      items={["Iitikaf", "Laylatul Qoodir", "Iftar", "Zakatul-Fitir"]}
      onChange={(selected) => console.log(selected)}
      placeholder="Special Feature Lists"
    />
  );
};

export default SpecialFeatureDropdoown;
