import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface Props {
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  regions: string[];
}

const RegionFilter: React.FC<Props> = ({ selectedRegion, setSelectedRegion, regions }) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel>Region</InputLabel>
      <Select
        value={selectedRegion}
        label="Region"
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <MenuItem value="all">ทั้งหมด</MenuItem>
        {regions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RegionFilter;