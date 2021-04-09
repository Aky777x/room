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

  /*ToDo:ポジションごとに設定するのではなくループさせたい*/
  const rooms = document.getElementsByClassName("balloon");
  console.log(rooms);

  //   rooms.forEach((room,index) => {
  //     const div = room.id;
  //     const temp = room.id + "-temp";
  //     temp = document.getElementById(temp);
  //     temp.innerHTML = temperatureList[index];
  //     colorChange(div, temp);
  //   });

  // トイレ
  const toilet = document.getElementById("toilet");
  const toiletTemp = document.getElementById("toilet-temp");
  toiletTemp.innerHTML = temperatureList[0];
  colorChange(toilet, toiletTemp);

  // 左の洋室
  const leftRoom = document.getElementById("leftRoom");
  const leftRoomTemp = document.getElementById("leftRoom-temp");
  leftRoomTemp.innerHTML = temperatureList[1];
  colorChange(leftRoom, leftRoomTemp);
};
