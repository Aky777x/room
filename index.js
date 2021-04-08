const myFunc = (msg) => {
  debugger;
  alert(msg);
};

window.onload = () => {
  const colorChange = (div, temperature) => {
    debugger;
    if (temperature.innerHTML >= 30) {
      div.classList.add("hot");
    } else if (temperature.innerHTML < 20) {
      div.classList.add("cold");
    } else {
      div.classList.add("comfortable");
    }
  };

  const temperatureList = [];
  temperatureList.push(Math.floor(Math.random() * 41));
  temperatureList.push(Math.floor(Math.random() * 41));

  console.log(temperatureList);

  const toilet = document.getElementById("toilet");
  const toiletTemp = document.getElementById("toilet-temp");
  toiletTemp.innerHTML = temperatureList[0];
  colorChange(toilet, toiletTemp);

  const leftRoom = document.getElementById("leftRoom");
  const leftRoomTemp = document.getElementById("leftRoom-temp");
  leftRoomTemp.innerHTML = temperatureList[0];
  colorChange(leftRoom, leftRoomTemp);
};
