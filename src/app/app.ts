export interface insurance {
    _id:string;
    name:string;
    imageUrl:string;
    createdAt:string;
}

export interface insuranceOnLocation {
    _id:string;
    zipCode:string;
    insurance:any
    createdAt:string;
}