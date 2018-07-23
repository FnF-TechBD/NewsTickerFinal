window.onload = function (e) {

    /**
     * Retrieving base path of files
     */

    var scripts = document.getElementsByTagName("script"),
    src = scripts[scripts.length-1].src;
    
    let basePath = src.substring(0, src.lastIndexOf("/")) + "/" ;

    console.log(basePath);



    /**
     * Dynamically loading script and style sheets. 
     * In future it should be done using loop.
     */


    /**
     *   Common files
     */
    let jqueryScript = document.createElement('script');
    let bootStrapScript = document.createElement('script');
    let poperScript = document.createElement('script');
    let bootStrapCss = document.createElement('link');


    /**
     *  Layout script & style
     */
    let defaultScript = document.createElement('script');
    let defaultCss = document.createElement('link');

    let layout1Script = document.createElement('script');
    let layout1Css = document.createElement('link');

    let layout2Script = document.createElement('script');
    let layout2Css = document.createElement('link');


    /**
     * Jquery CDN
     */
    jqueryScript.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
    jqueryScript.integrity = "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=";
    jqueryScript.crossOrigin = "anonymous";

    /**
     * Bootstrap CDN
     */
    bootStrapScript.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
    bootStrapScript.integrity = 'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl';
    bootStrapScript.crossOrigin = 'anonymous';

    bootStrapCss.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
    bootStrapCss.rel = 'stylesheet';
    bootStrapCss.integrity = 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm';
    bootStrapCss.crossOrigin = 'anonymous';


    /**
    * Poper CDN for bootstrap
    */
    poperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
    poperScript.integrity = 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q';
    poperScript.crossOrigin = 'anonymous';

    /** 
     * Default layout elements
     */
    defaultScript.src = basePath + 'layouts/default/script.js';
    defaultCss.href = basePath + 'layouts/default/style.css';
    defaultCss.rel = 'stylesheet';

    /** 
     * Layout1 layout elements
     */
    layout1Script.src = basePath + 'layouts/layout1/script.js';
    layout1Css.href = basePath + 'layouts/layout1/style.css';
    layout1Css.rel = 'stylesheet';


    /** 
     * Layout2 layout elements
     */
    layout2Script.src = basePath + 'layouts/layout2/script.js';
    layout2Css.href = basePath + 'layouts/layout2/style.css';
    layout2Css.rel = 'stylesheet';


    /**
     * Add stylesheet at bottom of head
     */
    document.head.appendChild(bootStrapCss);
    document.head.appendChild(defaultCss);
    document.head.appendChild(layout1Css);
    document.head.appendChild(layout2Css);


    /**
     * Add script at bottom of body
     */
    document.body.appendChild(jqueryScript);
    document.body.appendChild(poperScript);
    document.body.appendChild(bootStrapScript);
    document.body.appendChild(defaultScript);
    document.body.appendChild(layout1Script);
    document.body.appendChild(layout2Script);


    /**
     * Get the user set layout
     */
    let layout = getLayout();
    console.log(layout);
    let layoutUrl = basePath+'layouts/' + layout + '/markup.html' ;


    let fileRequest = new XMLHttpRequest();
    fileRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("fnfNewsTicker").innerHTML = this.responseText;
        }
      };
      fileRequest.open("GET", layoutUrl, true);
      fileRequest.send();



}

function getLayout(){
    return 'layout2';
}




