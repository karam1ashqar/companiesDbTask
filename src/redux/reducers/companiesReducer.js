const companiesReducer = (
  state = {
    companiesList: [],
    dynCompaniesList: [],
    index: 0,
    dynamicMode: false,
  },
  action,
) => {
  switch (action.type) {
    case 'SETCOMPANIES': {
      return (state = {
        ...state,
        companiesList: action.payload,
      });
    }
    case 'SETDYNCOMPANIES': {
      return (state = {
        ...state,
        dynCompaniesList: action.payload,
      });
    }
    case 'SETINDEX': {
      return (state = {
        ...state,
        index: action.payload,
      });
    }
    case 'SETDATAMODE': {
      return (state = {
        ...state,
        dynamicMode: action.payload,
      });
    }

    default:
      return state;
  }
};

export default companiesReducer;
