import React, { useCallback, useState } from "react";

export const useFormField = (initialState: string) => {
  const [value, setValue] = useState(initialState);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
  return { value, onChange };
};