import _ from "lodash";
import './style.css'
import image from './deadpool.png';
// import printMe from "./print";

function logger(){
    console.log('function logger()');
}

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join([
        'Hello', 'webpack'
    ], ' ');

    btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    btn.onclick = logger;

    element.appendChild(btn);

    element
        .classList
        .add('hello');

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = image;

    element.appendChild(myIcon);

    return element;
}

document
    .body
    .appendChild(component());

// if (module.hot) {
//     module
//         .hot
//         .accept('./print.js', function () {
//             console.log('Accepting the updated printMe module!');
//             // printMe();
//         })
// }