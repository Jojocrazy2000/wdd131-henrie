
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.className="dark";

        logo.setAttribute("src","BYU-I_logo_dark.png");
        // code for changes to colors and logo
    } else {
        document.body.className="light";

        logo.setAttribute("src","BYU-I_logo.png");
        // code for changes to colors and logo
    }
}           
                    