import SalesResponse from "../models/Response/SalesResponse";
import SaleClient from "../clients/SaleClient"
import StaffSummary from "../models/Response/TopSaleResponse"
import SaleSummary from "../models/Response/SaleSummaryResponse";
const SalesService={
    insertSales:(dataform:SalesResponse)=>{
        return SaleClient.post('/sales',dataform)
    },

    getTopQuantity:()=>{
      return SaleClient.get<StaffSummary[]>(`/sales/topQuantity`)
    },

    getTopRevenue:()=>{
      return SaleClient.get<StaffSummary[]>(`/sales/topRevenue`)
    },

    getSaleSummary:()=>{
      return SaleClient.get<SaleSummary[]>('/sales/summary')
    },
    getSaleByEmployee:(employeeID:string)=>{
      return SaleClient.get<SalesResponse[]>(`/sales/byEmployee?employeeID=${employeeID}`)
    },
    deleteSaleData:(requstNumber:string | undefined)=>{
      return SaleClient.get(`/sales/deleteBySale?requstNumber=${requstNumber}`)
    },

    getMonthlySale:()=>{
      return SaleClient.get('/sales/summaryByMont')
    }

    }

const SalesServices = {
  SalesServices: SalesService,
};

export default SalesServices;