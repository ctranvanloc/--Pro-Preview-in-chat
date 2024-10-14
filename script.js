const urlParams = new URLSearchParams(window.location.search);

$(document).ready(function() {
    $('head').append( '<meta property="og:title" content="'+urlParams.get('title')+'">' );
    $('head').append( '<meta property="og:description" content="'+urlParams.get('description')+'">' );
    $('head').append( '<meta property="og:image" content="'+urlParams.get('image')+'">' );
});