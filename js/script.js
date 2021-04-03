//global variables
let form = document.querySelector('form');


//Name field default focus
function defaultFocus() {
    let nameFocus = document.getElementById('name');
    nameFocus.focus();

}
defaultFocus();


//Job select and text field visibility
function selectJob() {
    let jobRole = document.getElementById('title');
    let otherJobRoleText = document.getElementById('other-job-role');
    otherJobRoleText.style.display = 'none';
    jobRole.addEventListener('change', ()=> {
        let jobIndex = jobRole.selectedIndex;
        if (jobIndex === 6) {
            otherJobRoleText.style.display = '';
        } else {
            otherJobRoleText.style.display = 'none';
        }
    });
}
selectJob();

//Color selection is locked until design is chosen. Chosen design will dictate available colors.
function shirtDesign() {
    let designSelect = document.getElementById('design');
    let colorSelect = document.getElementById('color');
    colorSelect.disabled = true;
    designSelect.addEventListener('change', ()=> {
        let designIndex = designSelect.selectedIndex;
        colorSelect.disabled = false;
        if (designIndex === 1) {
            colorSelect.options[1].style.display = '';
            colorSelect.options[2].style.display = '';
            colorSelect.options[3].style.display = '';
            colorSelect.options[4].style.display = 'none';
            colorSelect.options[5].style.display = 'none';
            colorSelect.options[6].style.display = 'none';
        } else if (designIndex === 2) {
            colorSelect.options[1].style.display = 'none';
            colorSelect.options[2].style.display = 'none';
            colorSelect.options[3].style.display = 'none';
            colorSelect.options[4].style.display = '';
            colorSelect.options[5].style.display = '';
            colorSelect.options[6].style.display = '';
        }
    });
}
shirtDesign();

//Activity's cost will be added at the bottom when each checkbox is checked. Cost will be deducted when checkbox 
//is unchecked.
function activityFieldset() {
    let activityField = document.getElementById('activities');
    let priceTotal = document.getElementById('activities-cost');
    let activitySelect = document.getElementById('activities-box');
    let activityError = document.getElementById('activities-hint');
    
    
    activityField.addEventListener('change', ()=> {
        //let activitySelect = document.getElementById('activities-box');
        let mainCon = activitySelect.firstElementChild;
        let jsWorkshop = mainCon.nextElementSibling;
        let nodeWorkshop = jsWorkshop.nextElementSibling;
        let jsFrameWorkshop = nodeWorkshop.nextElementSibling;
        let buildWorkshop = jsFrameWorkshop.nextElementSibling;
        let npmWorkshop = buildWorkshop.nextElementSibling;
        let expressWorkshop = npmWorkshop.nextElementSibling;
        let mainConPrice = mainCon.firstElementChild.getAttribute('data-cost');
        let jsWorkshopPrice = jsWorkshop.firstElementChild.getAttribute('data-cost');
        let nodeWorkshopPrice = nodeWorkshop.firstElementChild.getAttribute('data-cost');
        let jsFrameWorkshopPrice = jsFrameWorkshop.firstElementChild.getAttribute('data-cost');
        let buildWorkshopPrice = buildWorkshop.firstElementChild.getAttribute('data-cost');
        let npmWorkshopPrice = npmWorkshop.firstElementChild.getAttribute('data-cost');
        let expressWorkshopPrice = expressWorkshop.firstElementChild.getAttribute('data-cost');

        
       
        
        function runningTotal() {
            let total = 0;
            let sumTotal = "";
            //main conference 
            if (mainCon.firstElementChild.checked) {
                total = total + parseInt(mainConPrice);
                sumTotal = total;
            } 
            if (mainCon.firstElementChild.checked === false) {
                sumTotal = sumTotal - mainConPrice;
            }

            //js libraries workshop
            if (jsWorkshop.firstElementChild.checked) {
                total = total + parseInt(jsWorkshopPrice);
                sumTotal = total;
            }
            if (jsWorkshop.firstElementChild.checked === false) {
                sumTotal = sumTotal - jsWorkshopPrice;
            }

            //node js workshop
            if (nodeWorkshop.firstElementChild.checked) {
                total = total + parseInt(nodeWorkshopPrice);
                sumTotal = total;
            }
            if (nodeWorkshop.firstElementChild.checked === false) {
                sumTotal = sumTotal - nodeWorkshopPrice;
            }

            //js frameworks workshop
            if (jsFrameWorkshop.firstElementChild.checked) {
                total = total + parseInt(jsFrameWorkshopPrice);
                sumTotal = total;
            }
            if (jsFrameWorkshop.firstElementChild.checked === false) {
                sumTotal = sumTotal - jsFrameWorkshopPrice;
            }

            //build tools workshop
            if (buildWorkshop.firstElementChild.checked) {
                total = total + parseInt(buildWorkshopPrice);
                sumTotal = total;
            }
            if (buildWorkshop.firstElementChild.checked === false) {
                sumTotal = sumTotal - buildWorkshopPrice;
            }

            //npm workshop
            if (npmWorkshop.firstElementChild.checked) {
                total = total + parseInt(npmWorkshopPrice);
                sumTotal = total;
            }
            if (npmWorkshop.firstElementChild.checked === false) {
                sumTotal = sumTotal - npmWorkshopPrice;
            }

            //express workshop
            if (expressWorkshop.firstElementChild.checked) {
                total = total + parseInt(expressWorkshopPrice);
                sumTotal = total;
            }
            if (expressWorkshop.firstElementChild.checked === false) {
                sumTotal = sumTotal - expressWorkshopPrice;
            }
            
            //validates if at least one activity is checked
            function activityValidator() {
    
                if (total === 0) {
                            
                    activityError.style.display = 'inherit';
                } else {
                    activityError.style.display = 'none';
                }
                
            }
            activityValidator();
            
            
            priceTotal.textContent = `Total: $${total}`;
            return total;
        }
        runningTotal();       
    });
}
activityFieldset();

//Payment section. Default payment needs to be credit card
//Searched google for .defaultSelected. Source: 
//https://stackoverflow.com/questions/4134070/how-to-set-the-default-option-for-select-tag-and-how-to-get-the-index-of-the-sel
function paymentMethod() {
    let paymentSelect = document.getElementById('payment');
    let creditCardBox = document.getElementById('credit-card');
    paymentSelect.options[1].defaultSelected = true;

    //payment method select listens for change to paypal or bitcoin to hide credit card box.
    paymentSelect.addEventListener('change', ()=> {
       
       if (paymentSelect.selectedIndex === 2 || paymentSelect.selectedIndex === 3) {
           creditCardBox.style.display = 'none';
       } else if (paymentSelect.selectedIndex === 1) {
           creditCardBox.style.display = '';
       }       
    });
}
paymentMethod();

//Input validation for name, email and activities. Referenced and used code for showOrHideTip and createListener from Team Treehouse regex workspace activity.
let usernameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
//let allActivities = document.querySelectorAll('input[type="checkbox"]');


function nameValidator(username) {  
    return /^([a-zA-Z]*)+\s?([a-zA-Z]*)+\s?$/.test(username);
}

function emailValidator(email) {
    return /^[a-z0-9]+\@[a-z]+\.[a-z]+$/i.test(email);
}



function showOrHideTip (show, element) {
    if (show) {
        element.style.display = "inherit";
    } else {
        element.style.display = "none";
    }
}

function createListener(validator) {
    return e => {
        let text = e.target.value;
        let valid = validator(text);
        let showTip = text !== "" && !valid;
        let toolTip = e.target.nextElementSibling;
        showOrHideTip(showTip, toolTip);
    };
}
createListener();

usernameInput.addEventListener('input', createListener(nameValidator));
emailInput.addEventListener('input', createListener(emailValidator));
