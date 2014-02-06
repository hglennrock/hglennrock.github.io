$(document).ready(function() {
   $.ajax({
     url: 'https://api.github.com/orgs/girldevelopit/events',
     success: function(data) {
        for(var i = 0; i < data.length; i++) {
           console.log(data[i].id);
        }
     }
   });
});