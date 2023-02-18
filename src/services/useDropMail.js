import axios from 'axios';
import { DefaultEmail } from '../contexts/mailContext';

const CORS_API_URL = 'http://localhost:8080/'; //'https://cors-anywhere.herokuapp.com/';
const HASH = localStorage.getItem('hash')
  ? localStorage.getItem('hash')
  : generateRandomHash();

const SECRET_WORD = HASH;
const BASE_URL = `https://dropmail.me/api/graphql/${SECRET_WORD}`;
const NEW_SESSION_URL = `${BASE_URL}?query=mutation {introduceSession {id, expiresAt, addresses {address}}}`;
const GET_SESSIONS = `${BASE_URL}?query {sessions {id, expiresAt, mails {rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject}}}`;
const GET_EMAILS = `${BASE_URL}?query { session(id: "U2Vzc2lvbjrYLjqfbuxK2rTNEZ3S78fR") { mails{ rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject } } }`;

export async function createSession() {
  const URL = `${CORS_API_URL}${NEW_SESSION_URL}`;
  const response = await axios.get(URL);
  console.log(response.data);
  return response.data;
}

export async function verifySession(token) {
  const URL = `${CORS_API_URL}${BASE_URL}?query=query { session(id: "${token}") { mails{ rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject } } }`;
  const response = await axios.get(URL);
  if (response.data.errors) {
    return false;
  }
  return true;
}

export async function refreshMailList(token, setMail) {
  const URL = `${CORS_API_URL}${BASE_URL}?query=query { session(id: "${token}") { mails{ rawSize, fromAddr, toAddr, downloadUrl, text, headerSubject } } }`;
  const response = await axios.get(URL);
  const emails = response.data.data.session.mails;

  const fullEmailList = [];
  for (let i = 0; i < emails.length; i++) {
    fullEmailList.push(emails[i]);
  }
  fullEmailList.push(DefaultEmail);

  setMail(fullEmailList);
  //return response.data;
}

function generateRandomHash() {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 12) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  localStorage.setItem('hash', result);
  return result;
}
