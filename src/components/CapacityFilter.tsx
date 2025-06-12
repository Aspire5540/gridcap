import React from "react";
import { TextField } from "@mui/material";

interface Props {
  minCapacity: number;
  setMinCapacity: (value: number) => void;
}

export const CapacityFilter: React.FC<Props> = ({ minCapacity, setMinCapacity }) => {
  return (
    <TextField
      label="Avail Cap ที่ต้องการ (MW)"
      type="number"
      value={minCapacity}
      onChange={(e) => setMinCapacity(Number(e.target.value))}
      variant="outlined"
      size="small"
    />
  );
};