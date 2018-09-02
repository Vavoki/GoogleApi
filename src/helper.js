const loadMultipleExternalResources = body => {
    const promises = body.urls.map(url => {
      if (url.type === 'CSS') {
        return loadLink(url, body.body);
      } else {
        return loadScript(url, body.body);
      }
    });
    return Promise.all(promises);
  };
  const loadLink = (params, body) => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `${params.url}`;
      if (params.integrity) {
        link.integrity = `${params.integrity}`;
      }
      if (params.crossorigin) {
        link.setAttribute('crossorigin', params.crossorigin);
      }
      link.onload = val => {
        resolve(params);
      };
      link.onerror = () => {
        reject(params);
      };
      body.appendChild(link);
    });
  };
  const loadScript = (params, body) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      if (params.integrity) {
        script.integrity = `${params.integrity}`;
      }
      if (params.crossorigin) {
        script.setAttribute('crossorigin', 'anonymous');
      }
      script.src = `${params.url}`;
      script.onload = () => {
        resolve(params);
      };
      script.onerror = () => {
        reject(params);
      };
      body.appendChild(script);
    });
  };
  export {
      loadMultipleExternalResources
  }