const form = document. querySelector('form');

const name = document.querySelector('#name');

const email = document.querySelector('#mail');

//job Role variables 
const jobRole = document.querySelector('#title');
const otherJobOption = document.querySelector('#title option[value="other"]');
const otherJobInput = document.querySelector('#other-title');

//design and color variables
const designTheme = document.querySelector('#design option');
const designSelect = document.querySelector('#design');

const colorTheme = document.createElement('option');
const colorSelect = document.querySelector('#color');

const jsPuns = document.querySelector('#design option[value="js puns"]');
const jsPunsColor1 = document.querySelector('#color option[value="cornflowerblue"]');
const jsPunsColor2 = document.querySelector('#color option[value="darkslategrey"]');
const jsPunsColor3 = document.querySelector('#color option[value="gold"]');

const loveJs = document.querySelector('#design option[value="heart js"]');
const loveJsColor1 = document.querySelector('#color option[value="tomato"]');
const loveJsColor2 = document.querySelector('#color option[value="steelblue"]');
const loveJsColor3 = document.querySelector('#color option[value="dimgrey"]');

//activities variables 
const activities = document.querySelector('.activities');
const costMsg = document.createElement('element');
activities.appendChild(costMsg);
let totalCost = 0;

//payment variables
const payment = document.querySelector('#payment');
const paymentMethod = document.querySelector('#payment option[value="select method"]');

const creditcard = document.querySelector('#credit-card');
const creditcardOption = document.querySelector('#payment option[value="credit card"]');
const creditcardValue = document.querySelector('#payment option[value="credit card"]').getAttribute('value');

const paypal = document.querySelector('#paypal');
const paypalOption = document.querySelector('#payment option[value="paypal"]');
const paypalValue = document.querySelector('#payment option[value="paypal"]').getAttribute('value');

const bitcoin = document.querySelector('#bitcoin');
const bitcoinOption = document.querySelector('#payment option[value="bitcoin"]');
const bitcoinValue = document.querySelector('#payment option[value="bitcoin"]').getAttribute('value');

//focus on the name input field by default
name.focus();
//'Your Job Role' input field only appears when 'other' job option is selected
otherJobInput.hidden = true;

jobRole.addEventListener('change', ()=>{

    if( otherJobOption.selected ){
        otherJobInput.hidden = false;
    } else {
        otherJobInput.hidden = true;
    }

});
/*only show color options when a design is selected. After a design is
selected, the 'color'  field says 'please select a theme*/


designTheme.hidden = true;
colorTheme.textContent = 'Please Select a t-shirt Theme';
colorSelect.appendChild(colorTheme);

const colors = document.querySelectorAll('#color option');
for ( let i = 0; i < colors.length; i ++ ){

    colors[i].hidden = true;

}

//When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated

designSelect.addEventListener('change', () => {

    if( jsPuns.selected === true ){
        jsPunsColor1.selected = true;
        jsPunsColor1.hidden = false;
        jsPunsColor2.hidden = false;
        jsPunsColor3.hidden = false;
        loveJsColor1.hidden = true;
        loveJsColor2.hidden = true;
        loveJsColor3.hidden = true;
    }
    if( loveJs.selected === true ){
        loveJsColor1.selected = true;
        loveJsColor1.hidden = false;
        loveJsColor2.hidden = false;
        loveJsColor3.hidden = false;
        jsPunsColor1.hidden = true;
        jsPunsColor2.hidden = true;
        jsPunsColor3.hidden = true;
    }  

});