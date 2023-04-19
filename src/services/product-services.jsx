import axios from "axios";

function ProductServices(props) {


    async function getProduct() {
        const response = await axios.get(`https://uiexercise.onemindindia.com/api/Product`);
        console.log(response, "response")
        if (response.status == 200) {
            return response.data;
        } else {
            return { items: [] };
        }
    }


}

export default ProductServices;

// import axios from "axios";

// export class ProductServices {
//     constructor(urlPrefix = "/jobs") {
//         this.urlPrefix = urlPrefix;
//     }



//     async addJobs(jobsdata) {
//         const response = await axios.post(`${this.urlPrefix}?tenantId=93c782a4aa626175e5d11afa&bussinessId=83c782a4aa626175e5d11afa&clientId=93c782a4aa626175e5d11afa&businessUnitId=93c782a4aa626175e5d11afa`, jobsdata);
//         if (response.status == 200) {
//             return response.data;
//         } else {
//             return { items: [] };
//         }
//     }

//     async getClientName() {
//         const response = await axios.get(`${this.urlPrefix}?tenantId=93c782a4aa626175e5d11afa&bussinessId=83c782a4aa626175e5d11afa&clientId=93c782a4aa626175e5d11afa&businessUnitId=93c782a4aa626175e5d11afa`);
//         console.log(response,"response")
//         if (response.status == 200) {
//             return response.data;
//         } else {
//             return { items: [] };
//         }
//     }



// }