async function trackingMap(counter) {
  console.log("trackingMap() called ...");
  
  let trackingFile = "https://livebustracker.transportforsomerset.co.uk/tracking-data.geojson";
  console.log("trackingFile assigned ...");
  
  const trackingFileAllData = await fetch(trackingFile);
  console.log("trackingFile called ...");
  
  const trackingData = await trackingFileAllData.json();
    console.log("trackingFile recieved ...");

  console.log("Counter: " + counter);
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
