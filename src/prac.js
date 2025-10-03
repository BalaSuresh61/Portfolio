function timeout(){
    try {
    //   let getTime = await this.cacheManager.get("BUSINESS_PARAMS_JSON");
      let fromTime = '20:00'                        //getTime?.fromTime;    // 20:00
      let toTime = '05:00'                          //getTime?.toTime;        // 05:00
    //   let lastMessageTime = await this.cacheManager.get('lastMessageTime');
      let NumLastMessageTime = Date.now();                      //Number(lastMessageTime);

      if(NumLastMessageTime && fromTime && toTime){
        const res = validateTime(fromTime, toTime, NumLastMessageTime)
      }else{
        res.status(HttpStatus.OK);
        res.send('Success');
      }

      return;
    } catch (error) {
      Logger.error(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      res.send('Fail');
    }
}

function validateTime(fromTime, endTime, lastMessageTime) {
  const now = Date.now();

  // convert "HH:mm" → minutes since midnight
  const toMinutes = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const currentMinutes = new Date(now).getHours() * 60 + new Date(now).getMinutes();
  const start = toMinutes(fromTime);
  const end = toMinutes(endTime);

  // ✅ Case 1: current time is inside the allowed window
  if (currentMinutes >= start && currentMinutes <= end) {
    return 200;
  }

  // ❌ Case 2: outside → check how long since last message
  const diffMinutes = Math.floor((now - lastMessageTime) / 60000);

  return diffMinutes <= 30 ? 200 : 400;
}


timeout()