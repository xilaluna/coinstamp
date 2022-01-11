import axios from "axios"

export function requestPostStamp() {
  return axios.request({
    method: "post",
    url: "http://localhost:8000/stamp/create",
  })
}
