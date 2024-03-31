async function trackingMap(counter) {
  let trackingFile = "https://livebustracker.transportforsomerset.co.uk/tracking-data.geojson";
  
  const trackingFileAllData = await fetch(trackingFile);
  const trackingData = await trackingFileAllData.json();

  console.log("Counter: " + counter);
}

function startTracking(counter) {
  if (counter) {
    counter++;
  } else {
    let counter = 0;
  }
  setInterval(trackingMap(counter), 10000); // 10 seconds.
}
