// third party import 
import axios from "axios";

//file import
import { getPath } from "./utiles";

async function getProfile() {
  const path = getPath("profile");
  const response = await getInfo(path);
  console.log(response);
  return response.data;
}

async function getHighline() {
    const path = getPath("highline");
    const response = await getInfo(path);
    console.log(response);
    return response.data;
}

async function getCards() {

  const path = getPath("cards");
  const response = await getInfo(path);
  console.log(response);
  return response.data;
}
async function getInfo(path) {
    try {
      return await axios.get(path);
    } catch (error) {
      console.error(error);
    }
  }


  export const highline = await getHighline();
  export const profile = await getProfile();
  export const cards = await getCards();