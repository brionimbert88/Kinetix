import axios from "axios";

const timeout = 10000;

export const emailMessage = (emailBody) =>
  axios({
    method: "post",
    url: "/config/contact",
    timeout,
    data: emailBody,
    responseType: "json",
  }).then((res) => res.data);