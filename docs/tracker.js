async function trackingMap(ref) {
  let trackingFile = "https://livebustracker.transportforsomerset.co.uk/tracking-data.geojson";
  
  const trackingFileAllData = await fetch(trackingFile);
  const trackingData = await trackingFileAllData.json();

  console.log("Ref: " + ref);
}

function startTracking() {
  if (ref) {
    ref++;
  } else {
    let ref = 0;
  }
  setInterval(trackingMap(ref), 60000); // 1 minute.
}
