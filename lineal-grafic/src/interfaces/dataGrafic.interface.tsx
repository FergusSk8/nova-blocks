/** Interface that contain data received as a prop in the line grafic block */
export interface DataGraficInterface {
    data:DataGrafic[],
    dropValue:string,
    titleGrafic?:string
    width?:number,
    height:number,
}
interface DataGrafic {
    year?:string,
    month:string,
    day?:string,
    balance:number
}