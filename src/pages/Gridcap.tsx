import React, { useState, useEffect } from "react";
// import { stations as allStations } from "../data/station";
import { CapacityTable } from "../components/CapacityTable";
import { CapacityFilter } from "../components/CapacityFilter";
import MapComponent from "../components/Map";
import YearFilter from "../components/YearFilter";
import GridCapServices from "../services/GridCapService";
import { Box, CardContent, Container, Grid, Stack, Typography, Card } from "@mui/material";
// import { Station } from "../data/station";
import Station from "../models/Stations";
import RegionFilter from "../components/RegionFilter";
import RemainCap from "../models/Response/RemainCapResponse";
import { CapacityDashboard } from "../components/CapacityDashboard";

const App: React.FC = () => {
  const [minCapacity, setMinCapacity] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedStationId, setSelectedStationId] = useState<number | undefined>(undefined);
  const [filteredStations, setFilteredStations] = useState<Station[]>([]);
  const [availableYears, SetAvailableYears] = useState<number[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);

  const remainCap: RemainCap[] = [
    { region: 'C1', cap: 1460 },
    { region: 'C2', cap: 640 },
    { region: 'C3', cap: 0 }
  ];

  const getGridCap = () => {
    GridCapServices.GridCapServices.getCap().then((res) => {
      let allStations = res.data;
      SetAvailableYears(Array.from(new Set(allStations.map((s) => s.year))).sort());
      setAvailableRegions(Array.from(new Set(allStations.map((s) => s.zone))).sort());

      setFilteredStations(allStations.filter(
        (s) =>
          s.capacityMW >= minCapacity &&
          (selectedYear === "all" || s.year === selectedYear) &&
          (selectedRegion === "all" || s.zone === selectedRegion)
      ));
    })
  };

  // useEffect(()=>{

  // },[selectedStationId,])
  useEffect(() => {

    getGridCap();
  }, [selectedYear, minCapacity, selectedRegion])
  return (
    <Box>
      <Container maxWidth={'xl'}>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <CapacityDashboard remainCap={remainCap}></CapacityDashboard>
        </Grid>

        <Grid container>
          <Grid size={{ xs: 12, sm: 5, md: 4 }}>
            <Grid size={{ xs: 12, sm: 12, md: 12 }} mt={5} ml={3} mr={3}>
              <Stack direction="row" spacing={2} mb={2}>
                <Box width={140}>
                  <CapacityFilter
                    minCapacity={minCapacity}
                    setMinCapacity={setMinCapacity}
                  />
                </Box>

                <Box width={140}>
                  <YearFilter
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                    years={availableYears}
                  />
                </Box>

                <Box width={140}>
                  <RegionFilter
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                    regions={availableRegions}
                  />
                </Box>
              </Stack>
            </Grid>
            <Box mt={4} pl={3}>
              <CapacityTable
                stations={filteredStations}
                setSelectedStationId={setSelectedStationId}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 7, md: 8 }} >
            <Box mt={3} padding={3}>
              <MapComponent
                stations={filteredStations}
                selectedStationId={selectedStationId}
                setSelectionID={setSelectedStationId}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;