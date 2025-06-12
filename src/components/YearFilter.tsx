import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  selectedYear: number | "all";
  setSelectedYear: (year: number | "all") => void;
  years: number[];
}

const YearFilter: React.FC<Props> = ({ selectedYear, setSelectedYear, years }) => {
  return (
    <FormControl size="small">
      <InputLabel id="year-label">ปี</InputLabel>
      <Select
        labelId="year-label"
        value={selectedYear}
        label="ปี"
        onChange={(e) => {
          const value = e.target.value;
          setSelectedYear(value === "all" ? "all" : Number(value));
        }}
        style={{ minWidth: 120 }}
      >
        <MenuItem value="all">ทั้งหมด</MenuItem>
        {years.map((y) => (
          <MenuItem key={y} value={y}>
            {y}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default YearFilter;