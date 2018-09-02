

/**
 * The ZoomControl adds +/- button for the map
 *
 */

function ZoomControl(controlDiv, map, google) {
    
  // Creating divs & styles for custom zoom control
  controlDiv.style.padding = '5px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
/*   controlWrapper.style.backgroundColor = 'white';
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderColor = 'gray'; */
  controlWrapper.style.borderWidth = '1px';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '32px'; 
  controlWrapper.style.height = '64px';
  controlDiv.appendChild(controlWrapper);
  
  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('button');

//  zoomInButton.innerHTML = '<i class="fas fa-plus zoomIcon"></i>';
  zoomInButton.innerHTML = '+';

  zoomInButton.classList.add('plus');
  /* Change this to be the .png image you want to use */
  controlWrapper.appendChild(zoomInButton);
    
  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('button');

  // zoomOutButton.innerHTML = '<i class="fas fa-minus zoomIcon"></i>';
  zoomOutButton.innerHTML = '-';

  zoomOutButton.classList.add('minus');
  /* Change this to be the .png image you want to use */
  controlWrapper.appendChild(zoomOutButton);

  zoomOutButton.addEventListener('click', function() {
   var currentZoomLevel = map.getZoom();
   console.log(currentZoomLevel);
   
    if(currentZoomLevel != 0){
      map.setZoom(currentZoomLevel - 1);
      zoomInButton.disabled = false;
      zoomOutButton.disabled = false;
      zoomInButton.style.color = 'black';
      zoomOutButton.style.color = 'black';
      }
   });
  
 
   zoomInButton.addEventListener('click', function() {
    var currentZoomLevel = map.getZoom();
   
      if(currentZoomLevel != 21){
        map.setZoom(currentZoomLevel + 1);
        zoomInButton.disabled = false;
        zoomOutButton.disabled = false;
        zoomInButton.style.color = 'black';
        zoomOutButton.style.color = 'black';
      }
  });  
}

export {ZoomControl}