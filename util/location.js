export function googleMapPreview(lat, lng) {
  const imageUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${lat},${lng},3,20/400x200?access_token=pk.eyJ1Ijoic293bmR6IiwiYSI6ImNsZGdjNDhqcTBxcGgzb3Q1ZzdpOXphOWsifQ._-hZE5IK4ioHiXZg-G0NIw`;
  return imageUrl;
}