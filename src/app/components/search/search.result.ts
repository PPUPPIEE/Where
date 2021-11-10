export interface getSearchResult {

    name: string;
    sector: string;
    province: string;
    district: string;
    type: string;
    imageurl: string[];
    opentime: string;
    closetime: string;
    facility: {toilet:boolean, parking:boolean}[];
    parking: boolean;
    detail: string;
    contact: string;
    security: string;
    location: string;

}