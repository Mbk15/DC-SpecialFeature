import React, { useEffect, useMemo, useState } from "react";
import { TagInput } from "evergreen-ui";

const AutocompleteInput = () => {
  const [values, setValues] = React.useState(["Ramadan", "Hajj"]);

  const allValues = ["Ramadan", "Hajj", "Zakat", "Halqah", "Nikkah", "Talaq"];
  const autocompleteItems = React.useMemo(
    () => allValues.filter((i) => !values.includes(i)),
    [allValues, values]
  );

  return (
    <TagInput
      inputProps={{ placeholder: "Enter Keyword..." }}
      values={values}
      onChange={setValues}
      autocompleteItems={autocompleteItems}
    />
  );
};

export default AutocompleteInput;
