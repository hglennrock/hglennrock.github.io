var serverRequest = new XMLHttpRequest();
        	
serverRequest.onreadystatechange = function() {
   if(serverRequest.readyState === 4) {
      console.log(serverRequest.responseText);
   }
}
serverRequest.open('GET', 'https://api.github.com/orgs/girldevelopit/events', true);
serverRequest.send();