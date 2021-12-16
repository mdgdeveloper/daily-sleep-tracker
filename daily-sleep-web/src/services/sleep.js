import axios from "axios";

export const getLast = async () => {
  const url = `${import.meta.env.VITE_API_SERVER}/last`;

  try {
    const result = await axios.get(url);
    if (result.data.endDate && result.data.startDate) {
      const endDate = new Date(result.data.endDate);
      const startDate = new Date(result.data.startDate);
      const totalms = endDate - startDate;
      const total = totalms / 60000 / 60;
      return Math.round((total + Number.EPSILON) * 10) / 10;
    } else {
      return 0;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getLastPending = async () => {
  const url = `${import.meta.env.VITE_API_SERVER}/pending`;
  try {
    const last = await axios.get(url);
    return last;
  } catch (error) {
    throw new Error(error.message);
  }

}

export const getLastWeek = async () => {
    try {
        const dates = await getLastWeekArray();
        const totalResult = dates.reduce((prev,curr)=>{
          return prev + curr;
      })
      
      return(Math.round((totalResult/3600000/7 + Number.EPSILON) * 10) / 10);
   
  } catch (error) {
    throw new Error(error.message);
  }
};

const getLastWeekArray = async () => {
    const url = `${import.meta.env.VITE_API_SERVER}/lastWeek`;
    try {
        const result = await axios.get(url);
        if (result.data.length > 6) {
            const dates = [];
          result.data.map((current) => {
            const startDate = new Date(current.startDate);
            const endDate = new Date(current.endDate);
            const total = endDate - startDate;
            dates.push(total);
          });
         return dates;

        } else {
          return 0;
        }
      } catch (error) {
        throw new Error(error.message);
      }

}


export const getLastWeekChart = async () => {
    const days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const url = `${import.meta.env.VITE_API_SERVER}/lastWeek`;
    try {
        const info = await axios.get(url);
        const result = info.data.reverse();

        if (result.length > 6) {
            const dates = [];
          result.map((current) => {
            const startDate = new Date(current.startDate);
            const endDate = new Date(current.endDate);
            const total = Math.round(((endDate - startDate)/3600000 + Number.EPSILON) * 10) / 10
            dates.push({
                value: total,
                day: days[endDate.getDay()]
            });
          });
         return dates;

        } else {
          return 0;
        }
      } catch (error) {
        throw new Error(error.message);
      }

}


export const getLastWeekEntries = async () => {
    const days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const url = `${import.meta.env.VITE_API_SERVER}/lastWeek`;
    try {
        const info = await axios.get(url);
        const result = info.data.reverse();
        return result;
    }catch(error){
        throw new Error(error.message);
    }

}


export const getLastWeekRatings = async () => {
    const days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const url = `${import.meta.env.VITE_API_SERVER}/lastWeek`;
    try {
        const info = await axios.get(url);
        const result = info.data.reverse();
        const data = result.map( element => {
            if(element.completed){
                const sleepRating = element.sleepRating;
                const dayRating = element.dayRating;
                const endDate = new Date(element.endDate);
                return {sleepRating,dayRating, day: days[endDate.getDay()]}
            }   
        })
        return data;
    }catch(error){
        throw new Error(error.message);
    }

}


export const setNewEntry = async (date) => {
  const url = `${import.meta.env.VITE_API_SERVER}/entry`;
  try {
    const newDate = new Date(date);
    const json = { startDate: newDate, completed: false }; 
    const result = await axios.post(url, json);
    return result;
    
  } catch (error) {
    throw new Error(error.message);
  }
}

export const updateEntry = async (entry) => {
  const url = `${import.meta.env.VITE_API_SERVER}/update`;
  try {
    const newEntry = {...entry}
    delete newEntry.id;
    console.log(`${url}/${entry.id}`);
    const result = await axios.put(`${url}/${entry.id}`, newEntry)
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}


export default { 
  getLast,
  getLastPending, 
  getLastWeek, 
  getLastWeekChart, 
  getLastWeekEntries, 
  getLastWeekRatings,
  setNewEntry,
  updateEntry };
