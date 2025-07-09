export default interface Station {
  id: number;
  subThai:string;
  subEng:string;
  // loadForcast:number;
  capacityMW: number;
  // totalMW:number;
  lat: number;
  lon: number;
  year: number; // เพิ่มปี
  updateDate:string;
  zone:string;
  cb:string;
  status:string;
}