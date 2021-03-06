import axios from "axios";
import jsSHA from "jssha";


const getApi ={
    getStation(){
        return new Promise((resolve, reject) => {
            let url=`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Taipei?$format=JSON`
            axios.get(
                url,
                {
                    headers: getAuthorizationHeader()
                }
                )
            .then(function (response) {
                resolve(response.data) 
            })
            .catch(function (error) {
                reject(error)
            }); 
        });
    },
    getAvailability(){
        return new Promise((resolve, reject) => {
            let url=`https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/Taipei?$format=JSON`
            axios.get(
                url,
                {
                    headers: getAuthorizationHeader()
                }
                )
            .then(function (response) {
                resolve(response.data) 
            })
            .catch(function (error) {
                reject(error)
            }); 
        });
    },
    getShape(){
        return new Promise((resolve, reject) => {
            let url=`https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/Taipei?$top=30&$format=JSON`
            axios.get(
                url,
                {
                    headers: getAuthorizationHeader()
                }
                )
            .then(function (response) {
                resolve(response.data) 
            })
            .catch(function (error) {
                reject(error)
            }); 
        });
    },
    getSpot(){
        return new Promise((resolve, reject) => {
            let url=`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON`
            axios.get(
                url,
                {
                    headers: getAuthorizationHeader()
                }
                )
            .then(function (response) {
                resolve(response.data) 
            })
            .catch(function (error) {
                reject(error)
            }); 
        });
    },
    getRestaurant(){
        return new Promise((resolve, reject) => {
            let url=`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taipei?$top=30&$format=JSON`
            axios.get(
                url,
                {
                    headers: getAuthorizationHeader()
                }
                )
            .then(function (response) {
                resolve(response.data) 
            })
            .catch(function (error) {
                reject(error)
            }); 
        });
    },

}

export default getApi

function getAuthorizationHeader() {
 //  ???????????? ID???KEY ??????
        let AppID = process.env.VUE_APP_ID;
        let AppKey = process.env.VUE_APP_KEY;
    //  ???????????? ID???KEY ??????
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}
