const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title').replace(/%/g, " ");
const description = urlParams.get('description').replace(/%/g, " ");
$(document).ready(function() {
    $('head').append( '<meta property="og:title" content="'+title+'" />' );
    $('head').append( '<meta property="og:description" content="'+description+'" />' );
    $('head').append( '<meta property="og:image" content="/img/'+urlParams.get('image')+'" />' );
    $('body').append( '<img src="/img/'+urlParams.get('image')+'" />' );
});