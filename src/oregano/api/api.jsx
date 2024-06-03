import axios from 'axios';

export const getStats = async () => {
  try {
    const res = await axios.get('/EstimatedSixMonthsIncome');
    const data = res.data;
    return {
      estimatedCounts: data['추정 수'],
      averageSalaries: data['3개월 평균 임금'],
    };
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error;
  }
};

export const getFilteredDisabledPeople = async () => {
  try {
    const res = await axios.get('/filtered-disabled-people');
    return res.data;
  } catch (error) {
    console.error("Error fetching filtered disabled people:", error);
    throw error;
  }
};

export const getFetchJobListings = async (region, empType) => {
  try {
      const res = await axios.get(`/fetchJobListings?region=${region}&empType=${empType}`);
      return res.data.item;
  } catch (error) {
      console.error("Error fetching job listings:", error);
      throw error;
  }
};
