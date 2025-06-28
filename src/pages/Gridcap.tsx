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

const App: React.FC = () => {
  const [minCapacity, setMinCapacity] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedStationId, setSelectedStationId] = useState<number | undefined>(undefined);
  const [filteredStations, setFilteredStations] = useState<Station[]>([]);
  const [availableYears, SetAvailableYears] = useState<number[]>([]);
  const remainCap = [
    { region: 'C1', cap: 1460 },
    { region: 'C2', cap: 640 },
    { region: 'C3', cap: 0 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#AA46BE'];
  // const availableYears = Array.from(new Set(allStations.map((s) => s.year))).sort();

  // let filteredStations: Station[] = []
  // let availableYears: any = []
  const getGridCap = () => {
    GridCapServices.GridCapServices.getCap().then((res) => {
      let allStations = res.data;
      SetAvailableYears(Array.from(new Set(allStations.map((s) => s.year))).sort());
      setFilteredStations(allStations.filter(
        (s) =>
          s.capacityMW >= minCapacity &&
          (selectedYear === "all" || s.year === selectedYear)
      ));
    })
  };

  // useEffect(()=>{

  // },[selectedStationId,])
  useEffect(() => {

    getGridCap();
  }, [selectedYear, minCapacity])
  return (
    <Box>
      <Container maxWidth={'xl'}>
        <Grid container spacing={3} mb={4} mt={4} ml={4}>
          {remainCap.map((item, index) => (
            <Grid size={{ xs: 12, sm: 2, md: 2 }} key={item.region}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#f8f9fa",
                  borderLeft: `5px solid ${COLORS[index % COLORS.length]}`,
                  borderRadius: 3,
                  boxShadow: 1
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom color="textSecondary">
                    Capicity เขต {item.region} ปี 69 คงเหลือ 
                  </Typography>
                  <Typography variant="h5" fontWeight="medium" color="primary">
                    {item.cap.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    MW
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, sm: 5, md: 4 }}>
            <Grid container mt={5} ml={3}>
              <Stack direction="row" spacing={2} mb={2}>
                <CapacityFilter
                  minCapacity={minCapacity}
                  setMinCapacity={setMinCapacity}
                />
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