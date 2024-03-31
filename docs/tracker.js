function trackingMap(counter) {
  console.log("1: trackingMap() called ...");
  
  let trackingFile = "https://livebustracker.transportforsomerset.co.uk/tracking-data.geojson";
  console.log("2: trackingFile assigned ...");
  
  const trackingFileAllData = await fetch(trackingFile);
  console.log("3: trackingFile called ...");
  
  const trackingData = await trackingFileAllData.json();
  console.log("4: trackingFile recieved ...");

  console.log("5: Counter: " + counter);
  return counter;
}

function startTracking(counter) {
  if (counter) {
    counter++;
  } else {
    let counter = 0;
  }
  setInterval(trackingMap(counter), 10000); // 10 seconds.
}
