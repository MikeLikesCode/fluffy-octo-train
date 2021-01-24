export const getLocation = async (term) => {
  var value;
  await fetch(
    `https://data.cityofnewyork.us/resource/ci93-uc8s.json/?$where=experience1 like '%25${term}%25'`,
    {
      method: "GET" // The method
    }
  )
    .then((response) => {
      value = response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  var data = [];
  for (var i = 0; i < 10; i++) {
    var values = await value;
    data.push(await values[i]);
  }

  console.log(await data);
  return await data;
};

export const getLocationSecond = async (term, location) => {
  var value;
  await fetch(
    `https://data.cityofnewyork.us/resource/ci93-uc8s.json/?$where=experience1 like '%25${term}%25'`,
    {
      method: "GET" // The method
    }
  )
    .then((response) => {
      value = response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  var data = [];
  for (var i = 0; i < 10; i++) {
    var values = await value;
    if (values[i].city === location) {
      data.push(await values[i]);
      console.log("sorting");
    }
  }

  console.log(await data);
  return await data;
};
