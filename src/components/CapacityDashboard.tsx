import { Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material"
import RemainCap from "../models/Response/RemainCapResponse"
import GridCapServices from "../services/GridCapService"
import { CapacitySummary } from "../models/Response/CapacitySummary"
import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface Props {
    remainCap: RemainCap[]
}

export const CapacityDashboard: React.FC<Props> = ({ remainCap }) => {
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#AA46BE'];
    const [capSummary, setCapSummary] = useState<CapacitySummary[]>([]);
    const [loading, setLoading] = useState(true);
    const zoneColors: Record<string, string> = {
        C1: "#FFE5B4", // ส้มอ่อน
        C2: "#C2F0C2", // เขียวอ่อน
        C3: "#B4D9FF", // ฟ้าอ่อน
        default: "#F5F5F5" // เทาอ่อน fallback
    };

    useEffect(() => {
        GridCapServices.GridCapServices.getCapSummary().then((res) => {
            setCapSummary(res.data);
            setLoading(false);
        })
    }, [])

    const groupedData = capSummary.reduce<Record<string, CapacitySummary[]>>((acc, row) => {
        if (!acc[row.zone]) acc[row.zone] = [];
        acc[row.zone].push(row);
        return acc;
    }, {});
    return (
        <Box>

            {loading ? (
                <CircularProgress />
            ) : (
                <Grid container spacing={2}>
                    {Object.entries(groupedData).map(([zone, items]) => (
                        <Grid size={{ xs: 12, md: 4 }} key={zone}>
                            <Card
                sx={{
                            height: "100%",
                            // backgroundColor: "#f8f9fa",
                            borderLeft: `5px solid ${zoneColors[zone] || zoneColors.default}`,
                            borderRadius: 3,
                            boxShadow: 1,
                            minWidth: 200,
                        }}>
                                <CardContent>
                                    <Typography variant="h6">{`เขต: ${zone}`}</Typography>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={items}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="capacityMW" fill="#1976d2" name="Capacity (MW)">
                                                <LabelList dataKey="capacityMW" position="top" />
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
            {/* <Grid container spacing={3} mb={4} mt={4} ml={4}>
            {remainCap.map((item, index) => (
                <Grid size={{ xs: 12, sm: 4, md: 4 }} key={item.region}>
                    <Card
                        sx={{
                            height: "100%",
                            backgroundColor: "#f8f9fa",
                            borderLeft: `5px solid ${COLORS[index % COLORS.length]}`,
                            borderRadius: 3,
                            boxShadow: 1,
                            minWidth: 200,
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
        </Grid> */}
        </Box>)
}
