import CompaniesDB from '../../CompaniesDB.json';

export const getDynamicData = (skip = 0) => {
  let response = CompaniesDB.results.slice(skip * 10, 10 * (skip + 1));
  return response;
};
