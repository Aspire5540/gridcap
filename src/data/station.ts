export interface Station {
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
}

// export const stations: Station[] = [
//   { id: "1", name: "สถานีไฟฟ้าอยุธยา", capacityMW: 120, lat: 14.35, lon: 100.57, year: 2023 },
//   { id: "2", name: "สถานีไฟฟ้าเชียงใหม่", capacityMW: 85, lat: 18.79, lon: 98.98, year: 2024 },
//   { id: "3", name: "สถานีไฟฟ้าภูเก็ต", capacityMW: 150, lat: 7.88, lon: 98.39, year: 2023 },
//   { id: "4", name: "สถานีไฟฟ้าสมุทรปราการ", capacityMW: 95, lat: 13.6, lon: 100.6, year: 2025 },
// ];

// export const stations: Station[] = [
//   { id: 1, subThai: "สฟ.บ้านบึง", subEng: "BBG", year: 2569, loadForcast: 381.5, capacityMW: 50, totalMW: 431.5, updateDate: "", zone: "C2", lat: 13.21922507, lon: 101.2222271 },
//   { id: 2, subThai: "สฟ.บ้านบึง", subEng: "BBG", year: 2570, loadForcast: 364.7, capacityMW: 50, totalMW: 414.7, updateDate: "", zone: "C2", lat: 13.21922507, lon: 101.2222271 },
//   { id: 3, subThai: "สฟ.บ้านบึง", subEng: "BBG", year: 2571, loadForcast: 371, capacityMW: 200, totalMW: 371, updateDate: "", zone: "C2", lat: 13.21922507, lon: 101.2222271 },
//   { id: 4, subThai: "สฟ.บ้านบึง", subEng: "BBG", year: 2572, loadForcast: 375.3, capacityMW: 200, totalMW: 375.3, updateDate: "", zone: "C2", lat: 13.21922507, lon: 101.2222271 },
//   { id: 5, subThai: "สฟ.บ้านบึง", subEng: "BBG", year: 2573, loadForcast: 381.6, capacityMW: 200, totalMW: 381.6, updateDate: "", zone: "C2", lat: 13.21922507, lon: 101.2222271 },
//   { id: 6, subThai: "สฟ.บ่อวิน", subEng: "BWN", year: 2569, loadForcast: 393.1, capacityMW: 0, totalMW: 393.1, updateDate: "", zone: "C2", lat: 13.07534667, lon: 101.0740504 },
//   { id: 7, subThai: "สฟ.บ่อวิน", subEng: "BWN", year: 2570, loadForcast: 389.7, capacityMW: 0, totalMW: 389.7, updateDate: "", zone: "C2", lat: 13.07534667, lon: 101.0740504 },
//   { id: 8, subThai: "สฟ.บ่อวิน", subEng: "BWN", year: 2571, loadForcast: 392.4, capacityMW: 0, totalMW: 392.4, updateDate: "", zone: "C2", lat: 13.07534667, lon: 101.0740504 },
//   { id: 9, subThai: "สฟ.บ่อวิน", subEng: "BWN", year: 2572, loadForcast: 391, capacityMW: 0, totalMW: 391, updateDate: "", zone: "C2", lat: 13.07534667, lon: 101.0740504 },
//   { id: 10, subThai: "สฟ.บ่อวิน", subEng: "BWN", year: 2573, loadForcast: 394.2, capacityMW: 0, totalMW: 394.2, updateDate: "", zone: "C2", lat: 13.07534667, lon: 101.0740504 },
//   { id: 11, subThai: "สฟ.ปลวกแดง", subEng: "PDG-A", year: 2569, loadForcast: 0, capacityMW: 0, totalMW: 0, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 12, subThai: "สฟ.ปลวกแดง", subEng: "PDG-A", year: 2570, loadForcast: 0, capacityMW: 0, totalMW: 0, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 13, subThai: "สฟ.ปลวกแดง", subEng: "PDG-A", year: 2571, loadForcast: 0, capacityMW: 0, totalMW: 0, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 14, subThai: "สฟ.ปลวกแดง", subEng: "PDG-A", year: 2572, loadForcast: 0, capacityMW: 0, totalMW: 0, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 15, subThai: "สฟ.ปลวกแดง", subEng: "PDG-A", year: 2573, loadForcast: 0, capacityMW: 0, totalMW: 0, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 16, subThai: "สฟ.ปลวกแดง", subEng: "PDG-B", year: 2569, loadForcast: 139.1, capacityMW: 100, totalMW: 239.1, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 17, subThai: "สฟ.ปลวกแดง", subEng: "PDG-B", year: 2570, loadForcast: 165.1, capacityMW: 100, totalMW: 265.1, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 18, subThai: "สฟ.ปลวกแดง", subEng: "PDG-B", year: 2571, loadForcast: 278.9, capacityMW: 150, totalMW: 428.9, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 19, subThai: "สฟ.ปลวกแดง", subEng: "PDG-B", year: 2572, loadForcast: 284.1, capacityMW: 150, totalMW: 434.1, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 },
//   { id: 20, subThai: "สฟ.ปลวกแดง", subEng: "PDG-B", year: 2573, loadForcast: 291.2, capacityMW: 300, totalMW: 591.2, updateDate: "", zone: "C2", lat: 12.984957, lon: 101.193841 }
// ]