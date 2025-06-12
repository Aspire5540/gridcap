import React, { useState } from "react";
import { stations as allStations } from "../data/station";
import { CapacityTable } from "../components/CapacityTable";
import { CapacityFilter } from "../components/CapacityFilter";
import MapComponent from "../components/Map";
import YearFilter from "../components/YearFilter";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const App: React.FC = () => {
  const [minCapacity, setMinCapacity] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedStationId, setSelectedStationId] = useState<number | undefined>(undefined);
  const availableYears = Array.from(new Set(allStations.map((s) => s.year))).sort();

  const filteredStations = allStations.filter(
    (s) =>
      s.capacityMW >= minCapacity &&
      (selectedYear === "all" || s.year === selectedYear)
  );

  return (
    <Box>

      <Grid container>
        <Grid size={{ xs: 12, sm: 5, md: 4 }}>
          <Grid container mt={5} ml={3}>
            <Stack direction="row" spacing={2} mb={2}>
              <CapacityFilter minCapacity={minCapacity} setMinCapacity={setMinCapacity} />
              <YearFilter
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                years={availableYears}
              />
            </Stack>
          </Grid>
          <Box mt={4} pl={3}>
            <CapacityTable
              stations={filteredStations}
              // selectedStationId={selectedStationId}
              setSelectedStationId={setSelectedStationId}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 7, md: 8 }} >
          <Box mt={3} padding={3}>
            <MapComponent
              stations={filteredStations}
              selectedStationId={selectedStationId}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;