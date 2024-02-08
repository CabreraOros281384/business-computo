const search = async (business) => {   
    const url = `https://local-business-data.p.rapidapi.com/search?query=$(business)&limit=50&language=en&`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cc874775a6msh734ea2de4f53d02p1c7091jsn2cdc732c1949',
            'X-RapidAPI-HOST': 'local-business-data.p.rapidapi.com'
        }
    };
   
    try {
       // const url = '../api/business.json'
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('@@@ result search =>', result)
        return result.data
    } catch (error) {
        console.error(error);
    }
}