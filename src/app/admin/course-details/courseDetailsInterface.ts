

export interface ICourseDetails {
  id: string,
  name: string,
  startDate: string,
  endDate: string,
  description:string,
  address:string,
  capacity:string,
  price:string,
  createdAt:string,
  updatedAt:string,
  deletedAt:string,
  "instructedBy": {
    "createdAt": string,
    "deletedAt": string,
    "updatedAt": string,
    "id": string,
    "cv": string,
    "startDate": string,
    "endDate": string,
    "user": {
      "createdAt": string,
      "deletedAt": string,
      "updatedAt": string,
      "id": string,
      "firstName": string,
      "lastName": string,
      "cin": string,
      "email": string,
      "phoneNumber": string,
      "role": string,
    }
  },
  "plannedBy": {
    "Id": string,
    "userName": string
  }

}
