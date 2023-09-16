// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

const loc = [
    {
      location_key: [32, 22, 11],
      autoassign: 1,
    },
    {
      location_key: [41, 42],
      autoassign: 2,
    },
  ];
  
  const bulkConfig = [
    {
      dataValues: {
        config_key: 100,
      },
    },
    {
      dataValues: {
        config_key: 200,
      },
    },
  ];
  
  // [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]
  
  // Map the data to the frontend format
const mappedData = [];
 loc.forEach((item, index) => {
    item.location_key.forEach((key) => {
      mappedData.push({
        config_key: bulkConfig[index].dataValues.config_key,
        location_key: key,
        autoassign: item.autoassign,
      });
    });
  });

//   Complete sort

mappedData.sort((a, b) => {
    // First, compare by config_key
    if (a.config_key !== b.config_key) {
      return a.config_key - b.config_key;
    }
    // If config_key is the same, compare by location_key
    if (a.location_key !== b.location_key) {
        return a.location_key - b.location_key;
    }

    return a.autoassign - b.autoassign;
  });
  
  console.log(JSON.stringify(mappedData));