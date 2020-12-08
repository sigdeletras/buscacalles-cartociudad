import fetchJsonp from "fetch-jsonp";

const CARTOCIUDADAPIURL = "http://www.cartociudad.es/geocoder/api/geocoder";

export async function getCandidates(address, noprocess = "") {
  return await fetchJsonp(
    `${CARTOCIUDADAPIURL}/candidatesJsonp?q=${address}&no_process=${noprocess}` // &limit=30
  )
    .then((res) => res.json())
    .then((response) => {
      if (Array.isArray(response)) {
        const apiGeocodersData = response;
        return apiGeocodersData;
      }
    });
}
