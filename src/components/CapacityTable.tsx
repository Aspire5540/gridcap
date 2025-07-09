import React from "react";
import Station from "../models/Stations";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import '../App.css'
interface Props {
    stations: Station[] | undefined;
    setSelectedStationId: (value: number | undefined) => void
    // selectedStationId: string | undefined;


}

export const CapacityTable: React.FC<Props> = ({ stations, setSelectedStationId }) => {
    const columns = [
        { field: "subThai", headerName: "ชื่อสถานี", width: 120 },
        { field: "subEng", headerName: "ชื่อย่อสถานี", width: 90 },
        { field: "capacityMW", headerName: "Capicty(MW)", width: 90 },
        { field: "year", headerName: "ปี", width: 80},
        { field: "status", headerName: "หมายเหตุ", width: 100 },
    ];
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={stations}
                onRowClick={(params) => setSelectedStationId(params.row.id)}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                getRowClassName={(params) =>
                    params.row.lat === 0 ? 'highlight-zero' : ''
                }
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};