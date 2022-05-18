/* eslint-disable no-shadow */
const phoneState = {
  results: [],
  phone: null,
  isLoading: false,
  isError: false,
  errMessage: null,
};

export const phoneList = (state = phoneState, action) => {
  switch (action.type) {
    case 'GET_PHONELIST_PENDING': {
      state.isError = false;
      state.results = [];
      state.isLoading = true;
      return { ...state };
    }
    case 'GET_PHONELIST_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isError = false;
      if (data.results.length > 0) {
        const filt = data.results.filter((data) => data.isPrimary === 1);
        state.phone = filt[0].number;
      }
      state.results = data.results;
      return { ...state };
    }
    case 'GET_PHONELIST_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.results = [];
      state.isError = true;
      state.errMessage = message;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

const addPhoneState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errMessage: '',
};

export const addPhone = (state = addPhoneState, action) => {
  switch (action.type) {
    case 'ADD_PHONE_PENDING': {
      state.isError = false;
      state.isSuccess = false;
      state.errMessage = '';
      state.isLoading = true;
      return { ...state };
    }
    case 'ADD_PHONE_FULFILLED': {
      state.isError = false;
      state.isSuccess = true;
      state.errMessage = '';
      state.isLoading = false;
      return { ...state };
    }
    case 'ADD_PHONE_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errMessage = message;
      return { ...state };
    }
    case 'ADD_PHONE_CLEAR': {
      return { ...addPhoneState };
    }
    default: {
      return { ...state };
    }
  }
};

const balanceState = {
  results: null,
  isLoading: false,
  isError: false,
  errMessage: null,
};

export const balance = (state = balanceState, action) => {
  switch (action.type) {
    case 'GET_BALANCE_PENDING': {
      state.isError = false;
      state.errMessage = null;
      state.results = null;
      state.isLoading = true;
      return { ...state };
    }
    case 'GET_BALANCE_FULFILLED': {
      const { data } = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.results = data.results;
      return { ...state };
    }
    case 'GET_BALANCE_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.results = null;
      state.isError = true;
      state.errMessage = message;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

const allState = {
  results: [],
  isLoading: false,
  isError: false,
  errMessage: null,
};

export const allUser = (state = allState, action) => {
  switch (action.type) {
    case 'GET_ALL_USER_PENDING': {
      state.isError = false;
      state.results = [];
      state.errMessage = null;
      state.isLoading = true;
      return { ...state };
    }
    case 'GET_ALL_USER_FULFILLED': {
      const { data } = action.payload;
      state.isError = false;
      state.isError = false;
      state.errMessage = null;
      state.results = data.results;
      return { ...state };
    }
    case 'GET_ALL_USER_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.results = [];
      state.isError = true;
      state.errMessage = message;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
