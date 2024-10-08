import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; 

const api = axios.create({
  baseURL: baseURL,
});

export const getTimelineExpenses=({ startDate, endDate })=>{
   startDate=startDate.toISOString().split('T')[0];
   endDate=endDate.toISOString().split('T')[0] ;

    return api.get(`/transaction/timelinexpenses`,{startDate,endDate});
}
