import axios from "axios";
import qs from 'qs';

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

export const GET_CONTRACTORS = "GET_CONTRACTORS";
export const ADD_CONTRACTOR = "ADD_CONTRACTOR";

export const GET_ORGANIZATION = "GET_ORGANIZATION";
export const UPDATE_ORGANIZATION = "UPDATE_ORGANIZATION";
export const ORGANIZATION_STRIPE = "ORGANIZATION_STRIPE";

const ROOT_URL = "http://localhost:57469/api";
//const ROOT_URL = "http://privateer.azurewebsites.net/api";

export function register(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/user/register`, values)
    .then(() => callback());

    return {
      type: REGISTER,
      payload: request
    };
}

export function login(values, callback) {
  values.grant_type = "password";
  const request = axios
    .post(`${ROOT_URL}/user/auth`, qs.stringify(values))
    .then(response => callback(response));

    return {
      type: LOGIN,
      payload: request
    };
}

function getAuthorizationHeader() {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      token_type: "bearer"
    }
  };
}

export function getContractors() {
  const request = axios
    .get(`${ROOT_URL}/organization/contractors`, getAuthorizationHeader());

  return {
    type: GET_CONTRACTORS,
    payload: request
  };
}

export function addContractor(values, callback){
  const request = axios
    .post(`${ROOT_URL}/organization/contractors/invite`, qs.stringify(values), getAuthorizationHeader())
    .then(response => callback(response));

  return {
    type: ADD_CONTRACTOR,
    payload: request
  };
}

export function getOrganization() {
  const request = axios 
    .get(`${ROOT_URL}/organization`, getAuthorizationHeader());

  return {
    type: GET_ORGANIZATION,
    payload: request
  };
}

export function updateOrganization(values, callback) {
  const request = axios
    .put(`${ROOT_URL}/organization`, qs.stringify(values), getAuthorizationHeader())
    .then(response => callback(response));

  return {
    type: UPDATE_ORGANIZATION,
    payload: request
  };
}

export function registerOrganizationWithStripe(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/organization/stripe`, qs.stringify(values), getAuthorizationHeader())
    .then(response => callback(response));

  return {
    type: ORGANIZATION_STRIPE,
    payload: request
  };
}
