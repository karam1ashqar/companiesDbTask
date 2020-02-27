export const setCompanies = arr => {
  return {
    type: 'SETCOMPANIES',
    payload: arr,
  };
};

export const setDynCompanies = arr => {
  return {
    type: 'SETDYNCOMPANIES',
    payload: arr,
  };
};

export const setIndex = num => {
  return {
    type: 'SETINDEX',
    payload: num,
  };
};

export const setDataMode = bool => {
  return {
    type: 'SETDATAMODE',
    payload: bool,
  };
};
