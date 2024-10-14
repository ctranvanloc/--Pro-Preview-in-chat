const queryString = window.location.search;
console.log(queryString);
const newUser = urlParams.get('PID')
console.log(newUser);

$(document).ready(function() {
    // Just replacing the value of the 'content' attribute will not work.
    $('head').append( '<meta name="description" content="'+urlParams.get('PID')+'">' );
});