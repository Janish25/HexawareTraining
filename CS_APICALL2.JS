const fetchData = async (callback, id) => {
    try {
        const response = await fetch('https://api.restful-api.dev/objects');
        const data = await response.json();

        const records = data.map(a => ({
            id: a.id,
            name: a.name,
            color: a.data?.color || "Not Available",
            price: a.data?.price || "Not Available"
        }));

        console.log(records);
        callback(records, id);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const findById = (records, id) => {
    const filteredRecords = records.filter(record => record.id === id);
    console.log(filteredRecords);
}

fetchData(findById, '5');

