import { generateNextId } from "../helpers/idGenerator.js";
import { getData, insertData } from "../requests/requestSender.js";
import * as ENDPOINTS from "../urlHelper.js";

const btnSubmit = document.querySelector(".contact button");
const formSubmit = document.querySelector("#contactForm");

const txtName = document.querySelector("#name");
const txtEmail = document.querySelector("#email");
const txtSubject = document.querySelector("#subject");
const txtMessage = document.querySelector("#comment");

export const addRequestEventListeners = () => {
  formSubmit.addEventListener("submit", sendRequest);
};

const sendRequest = async (e) => {
  const data = await getData(ENDPOINTS.REQUESTS_ENDPOINT);
  const row = {
    id: generateNextId(data),
    name: txtName.value,
    email: txtEmail.value,
    subject: txtSubject.value,
    txtMessage: txtMessage.value,
  };
  await insertData(ENDPOINTS.REQUESTS_ENDPOINT, row);
};
