(function() {

    console.log( "bookmark fun time!" );

    let paragraphs = document.getElementsByTagName( 'p' );

    for ( let i = 0; i < paragraphs.length; i++ ) {

        paragraphs[i].innerHTML = 'Eat Lunch, go';
        
    }

})();

// (function() {
//
//     let scriptElement = document.createElement('script');
//     scriptElement.src = 'bookmarklet01.js';
//     document.body.appendChild(scriptElement);
//
// })();
