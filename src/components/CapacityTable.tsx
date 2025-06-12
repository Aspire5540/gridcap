import React from "react";
import { Station } from "../data/station";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface Props {
    stations: Station[];
    setSelectedStationId: (value: number | undefined) => void
    // selectedStationId: string | undefined;


}

export const CapacityTable: React.FC<Props> = ({ stations,setSelectedStationId }) => {
    const columns = [
        { field: "subThai", headerName: "ชื่อสถานี", width: 200 },
        { field: "subEng", headerName: "ชื่อย่อสถานี", width: 200 },
        { field: "capacityMW", headerName: "กำลังผลิต (MW)", width: 150 },
        { field: "year", headerName: "ปี", width: 100 },
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
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};