async function trackingMap(counter) {
  let trackingFile = "https://livebustracker.transportforsomerset.co.uk/tracking-data.geojson";
  
  const trackingFileAllData = await fetch(trackingFile);
  const trackingData = await trackingFileAllData.json();

  console.log("Counter: " + counter);
}

function startTracking() {
  if (typeof counter) {
    counter++;
  } else {
    let counter = 0;
  }
  setInterval(trackingMap(counter), 60000); // 1 minute.
}
