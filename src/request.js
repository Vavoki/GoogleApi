const getSchoolsList = (body) => {
    console.log('BODY', body.map.getBounds());
    const bounds = body.map.getBounds();
    const center = bounds.getCenter();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
  
    const LB = {
      lat: ne.lat(), // широта
      lng: ne.lng() // долгота
    };
    const LT = {
      lat: sw.lat(),
      lng: ne.lng()
    };
    const RT = {
      lat: sw.lat(),
      lng: sw.lng()
    };
    const RB = {
      lat: ne.lat(),
      lng: sw.lng()
    };
  
    const poligonCoords = [LB, LT, RT, RB];
  
    const poligon = new body.google.maps.Polygon({ paths: poligonCoords });
  
    // r = radius of the earth in statute miles
    const mapParams = {};
    const newCenterParams = body.map.getCenter();
    mapParams.lat = newCenterParams.lat();
    mapParams.lng = newCenterParams.lng();
    const centerCoords = new body.google.maps.LatLng(mapParams.lat, mapParams.lng);
    const extremeCoords = new body.google.maps.LatLng(LB.lat, LB.lng);
    const lengthKilometers = body.google.maps.geometry.spherical.computeDistanceBetween(centerCoords, extremeCoords) / 1000;
    return getSchoolsArray({
      radius: lengthKilometers.toFixed(1),
      lat: mapParams.lat,
      lng: mapParams.lng,
      type: body.type
    }).then(res => {
      return res.schools.filter(schoolItem => {
        const curPosition = new body.google.maps.LatLng(
          schoolItem.coordinates.lat,
          schoolItem.coordinates.lon
        );
        return body.google.maps.geometry.poly.containsLocation(curPosition, poligon) && schoolItem;
      });
    });
  };