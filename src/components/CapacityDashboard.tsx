import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import RemainCap from "../models/Response/RemainCapResponse"

interface Props {
    remainCap: RemainCap[]
}

export const CapacityDashboard: React.FC<Props> = ({ remainCap }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#AA46BE'];
    return (<Box display="flex" justifyContent="center" width={'100%'}>
        <Grid container spacing={3} mb={4} mt={4} ml={4}>
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
        </Grid>
    </Box>)
}
