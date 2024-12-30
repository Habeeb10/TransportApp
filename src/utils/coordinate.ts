import axios from "axios";

export const getCoordinates = async (address: string) => {
  const API_KEY = "AIzaSyAwLGFp-PSEB6lfZ3vHPI0eqMDibKiA-vc";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const result = response.data.results[0];
    return {
      latitude: result.geometry.location.lat,
      longitude: result.geometry.location.lng,
    };
  } catch (error) {
    console.error("Error fetching geocoding data: ", error);
    return null;
  }
};
