import { ZoomControl } from './zoom';
import { getSchoolsList } from './request';
const createMainMap = (window, google, mapContainer) => {
    const bodyMap = document.createElement('div');
    bodyMap.id = 'wrapperBodyMapID';
    bodyMap.setAttribute(
      'style',
      `width:inherit;height:inherit;-webkit-transition: -webkit-transform 500ms ease;transition: -webkit-transform 500ms ease;
      -o-transition: transform 500ms ease;transition: transform 500ms ease;transition: transform 500ms ease, -webkit-transform 500ms ease;
      z-index:2`
    );
    mapContainer.appendChild(bodyMap);
      const map = new google.maps.Map(bodyMap, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15,
        minZoom: 1,
        maxZoom: 20,
      });
    map.setOptions({
        disableDefaultUI: true,
        draggable: true,
        scrollwheel: false,
        disableDoubleClickZoom: false
      });
    let center = map.getCenter();
    let lat = {} = center.lat();
    let lng = {} = center.lng();
    console.log(lat, lng);
    const centerControlDiv = document.createElement('div');
    centerControlDiv.index = 3;
    centerControlDiv.style.marginTop = "5px";
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
    const searchIput = document.createElement('input');
    const searchButton = document.createElement('button');
    searchButton.innerHTML = 'SetCenter';
    centerControlDiv.appendChild(searchIput);
    centerControlDiv.appendChild(searchButton);
    const zoomControlDiv = document.createElement('div');
    const zoomControl = new ZoomControl(zoomControlDiv, map, google);
    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);
    window.map = map;
  };
  export {createMainMap}