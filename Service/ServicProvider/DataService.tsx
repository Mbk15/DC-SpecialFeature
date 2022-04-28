import axios from "axios";

export default class DataService {
  private static serverURL: string = "https://jsonplaceholder.typicode.com";

  public static getUserData() {
    let dataUrl: string = `${this.serverURL}/users`;
    return axios.get(dataUrl);
  }
}
