export interface car {
    _id:string;
    name:string;
    createdAt:string;
}

export interface carmodels {
    _id:string;
    name:string;
    car:any
    createdAt:string;
}