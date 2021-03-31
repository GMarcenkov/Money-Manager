import axios from "axios";
import { Transaction, TransactionReducer } from "../../../models/Transaction";

let config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwt"),
  },
};

export const createTransactionRequest = async (data: any) => {
  const url = `http://localhost:5000/transaction/create`;

  const request: any = {
    method: "POST",
    data,
    headers: config.headers,
    url,
  };

  try {
    const response = await axios(request);
    return response;
  } catch (e) {
    return { error: e };
  }
};

export const getSpecificDatePeriod = async (from: Date, to: Date) => {
  const url = `http://localhost:5000/transaction/specificDatePeriod/${from}/${to}`;

  const request: any = {
    method: "GET",
    headers: config.headers,
    url,
  };
  try {
    const response = await axios(request);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getYearlyOrWeekly = async (data: any) => {
  const url = `http://localhost:5000/transaction/getYearlyOrWeekly`;

  const request: any = {
    method: "POST",
    data,
    headers: config.headers,
    url,
  };
  try {
    const response = await axios(request);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export const editTransaction = async (
  selectedDayId: string,
  transactionId: string,
  data: any
) => {
  const url = `http://localhost:5000/transaction/event/edit/${selectedDayId}/${transactionId}`;

  const request: any = {
    method: "PUT",
    data,
    headers: config.headers,
    url,
  };

  try {
    const response = await axios(request);
    return response;
  } catch (e) {
    return { error: e };
  }
};
export const deleteTransaction = async (
  selectedDayId: string,
  transactionId: string
) => {
  const url = `http://localhost:5000/transaction/event/delete/${selectedDayId}/${transactionId}`;

  const request: any = {
    method: "PUT",
    data: {},
    headers: config.headers,
    url,
  };

  try {
    const response = await axios(request);
    return response;
  } catch (e) {
    return { error: e };
  }
};
export const getUserByJWToken = async () => {
  const url = `http://localhost:5000/user/logged`;

  const request: any = {
    method: "GET",
    headers: config.headers,
    url,
  };
  try {
    const response = await axios(request);

    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
