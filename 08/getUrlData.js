function getUrlData(url, callback) {
    
    fetch(url).then(function(response) {
        response.json().then(function(data) {
            callback(data);
        });
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
    
}
      
