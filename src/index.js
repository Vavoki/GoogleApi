
import { createMainMap } from './createMap';
import { loadMultipleExternalResources } from './helper';
import { setMainStyle } from './setStyle';
import urls from './libs';

document.addEventListener('DOMContentLoaded', () => {
  const DOMElementStart = document.getElementById('map');
  if (DOMElementStart !== null) {
    DOMElementStart.setAttribute('style', 'width: 640px; height: 650px;');
    // create Iframe
    window.onload = () => {
      const innerDoc = window.document;
      setMainStyle(innerDoc);
     window.pluginSchoolMapStart = () => {
        innerDoc.body.setAttribute('style', 'margin:0;padding:0;');
      };

      const viewPortTag = document.createElement('meta');
      viewPortTag.id = 'viewport';
      viewPortTag.name = 'viewport';
      viewPortTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
      innerDoc.getElementsByTagName('head')[0].appendChild(viewPortTag);
      innerDoc.getElementsByTagName('head')[0].appendChild(viewPortTag);
      const metaIE = document.createElement('meta');
      metaIE.httpEquiv = 'X-UA-Compatible';
      metaIE.content = 'IE=EmulateIE11';
      innerDoc.getElementsByTagName('head')[0].appendChild(metaIE);

      loadMultipleExternalResources({
        urls: urls,
        body: innerDoc.getElementsByTagName('head')[0]
      })
        .then(() => {
          console.log(window.google);
          createMainMap(window.document, window.google, DOMElementStart);
        })
        .catch(error => {
          console.warn(error);
        });
    };
  }
});
