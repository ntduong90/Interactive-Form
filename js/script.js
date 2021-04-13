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
let activitySelect = document.getElementById('activities-box');
let activityError = document.getElementById('activities-hint');
let activityField = document.getElementById('activities');

function activityFieldset() {
    // let activityField = document.getElementById('activities');
    let priceTotal = document.getElementById('activities-cost');
    
    activityField.addEventListener('change', ()=> {
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
            if (total === 0) {             
                activityError.style.display = 'inherit';
            } else {
                activityError.style.display = 'none';
            }
                
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

let paymentSelect = document.getElementById('payment');
let creditCardBox = document.getElementById('credit-card');

function paymentMethod() {
    
    paymentSelect.options[1].defaultSelected = true;

    //payment method select listens for change to paypal or bitcoin to hide credit card box.
    paymentSelect.addEventListener('change', ()=> {
       
       if (paymentSelect.selectedIndex === 2 || paymentSelect.selectedIndex === 3) {
           creditCardBox.style.display = 'none';
       } else if (paymentSelect.selectedIndex === 1) {
           creditCardBox.style.display = 'inherit';
       }   
    });
}
paymentMethod();

//Input validation for name, email and activities. Referenced and used code for showOrHideTip and createListener from Team Treehouse regex workspace activity.
let form = document.querySelector('form');
let usernameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let ccNumBoxInput = document.getElementById('cc-num');
let zipBoxInput = document.getElementById('zip');
let cvvBoxInput = document.getElementById('cvv');
let validName = /^([a-zA-Z])+\s?([a-zA-Z]*)+\s?$/i;
let validEmail = /^([a-z0-9]*)+\@([a-z])+\.([a-z])+$/i;
let validccNumber = /^(\d{13})\d?\d?\d?$/;
let validZip = /^(\d{5})$/;
let validCvv = /^(\d{3})$/;

//Name validator
function nameValidator() {
    usernameInput.addEventListener('input', ()=> {

        if (usernameInput.value === "") {
            usernameInput.nextElementSibling.style.display = 'inherit';
        }
        if (validName.test(usernameInput.value)) {
            usernameInput.nextElementSibling.style.display = 'none';
            usernameInput.parentElement.className = 'valid';
        } else if (validName.test(usernameInput.value) === false) {
            usernameInput.parentElement.className = 'not-valid';
            usernameInput.nextElementSibling.textContent = 'Please enter a valid name';
            usernameInput.nextElementSibling.style.display = 'inherit';
        }
    })
}
nameValidator();

//Email validator
function emailValidator() {
    emailInput.addEventListener('input', ()=> {
        if (emailInput.value === "") {
            emailInput.nextElementSibling.style.display = 'inherit';
        }
        if (validEmail.test(emailInput.value)) {
            emailInput.nextElementSibling.style.display = 'none';
            emailInput.parentElement.className = 'valid';
        } else if (validEmail.test(emailInput.value) === false) {
            emailInput.parentElement.className = 'not-valid';
            emailInput.nextElementSibling.style.display = 'inherit';
        }
    })
}
emailValidator();

//Credit Card number validator

function ccValidator() {
    ccNumBoxInput.addEventListener('input', ()=> {
        if (ccNumBoxInput.value === "") {
            ccNumBoxInput.nextElementSibling.style.display = 'inherit';
        }
        if (validccNumber.test(ccNumBoxInput.value)) {
            ccNumBoxInput.nextElementSibling.style.display = 'none';
            ccNumBoxInput.parentElement.className = 'valid';
        } else if (validccNumber.test(ccNumBoxInput.value) === false) {
            ccNumBoxInput.parentElement.className = 'not-valid';
            ccNumBoxInput.nextElementSibling.style.display = 'inherit';
        }
    })
}
ccValidator();


//Zipcode validator
function zipValidator() {
    zipBoxInput.addEventListener('input', ()=> {
        if (zipBoxInput.value === "") {
            zipBoxInput.nextElementSibling.style.display = 'inherit';
        }
        if (validZip.test(zipBoxInput.value)) {
            zipBoxInput.nextElementSibling.style.display = 'none';
            zipBoxInput.parentElement.className = 'valid';
        } else if (validZip.test(zipBoxInput.value) === false) {
            zipBoxInput.parentElement.className = 'not-valid';
            zipBoxInput.nextElementSibling.style.display = 'inherit';
        }
    })
}
zipValidator();


//Cvv validator
function cvvValidator() {
    cvvBoxInput.addEventListener('input', ()=> {
        if (cvvBoxInput.value === "") {
            cvvBoxInput.nextElementSibling.style.display = 'inherit';
        }
        if (validCvv.test(cvvBoxInput.value)) {
            cvvBoxInput.nextElementSibling.style.display = 'none';
            cvvBoxInput.parentElement.className = 'valid';
        } else if (validCvv.test(cvvBoxInput.value) === false) {
            cvvBoxInput.parentElement.className = 'not-valid';
            cvvBoxInput.nextElementSibling.style.display = 'inherit';
        }
    })  
}
cvvValidator();


function activityValidator() {
    let activityTotal = document.getElementById('activities-cost');
    let activityErr = document.getElementById('activities-hint');
    if (activityTotal.textContent === 'Total: $0') {  
        activityErr.style.display = 'inherit';
        return false;
    } else {
        activityErr.style.display = 'none';
        return true;
    }  
}

//Accessability
function inputFocus () {
    let activityFocus = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < activityFocus.length; i++ ) {
        activityFocus[i].addEventListener('focus', ()=> {
            activityFocus[i].parentElement.className = 'focus';
        })
        activityFocus[i].addEventListener('blur', ()=> {
            activityFocus[i].parentElement.classList.remove('focus');
        })
    }
}
inputFocus();


form.addEventListener('submit', (e)=> {
    
    
    //username submit validation
    if (usernameInput.value === "") {
        usernameInput.nextElementSibling.style.display = 'inherit';
        e.preventDefault();
    }
    if (validName.test(usernameInput.value)) {
        usernameInput.nextElementSibling.style.display = 'none';
        usernameInput.parentElement.className = 'valid';
    } else if (validName.test(usernameInput.value) === false) {
        usernameInput.parentElement.className = 'not-valid';
        usernameInput.nextElementSibling.textContent = 'Please enter a valid name';
        usernameInput.nextElementSibling.style.display = 'inherit';
        e.preventDefault();
    }
    

    //email input submit validation
    if (emailInput.value === "") {
        emailInput.nextElementSibling.style.display = 'inherit';
        e.preventDefault();
    }
    if (validEmail.test(emailInput.value)) {
        emailInput.nextElementSibling.style.display = 'none';
        emailInput.parentElement.className = 'valid';
    } else if (validEmail.test(emailInput.value) === false) {
        emailInput.parentElement.className = 'not-valid';
        emailInput.nextElementSibling.style.display = 'inherit';
        e.preventDefault();
    }

    //credit card number submit validation if credit card was selected 
    if (paymentSelect.selectedIndex === 1) {
        //cc number
        if (ccNumBoxInput.value === "") {
            ccNumBoxInput.nextElementSibling.style.display = 'inherit';
            e.preventDefault();
        }
        if (validccNumber.test(ccNumBoxInput.value)) {
            ccNumBoxInput.nextElementSibling.style.display = 'none';
            ccNumBoxInput.parentElement.className = 'valid';
        } else if (validccNumber.test(ccNumBoxInput.value) === false) {
            ccNumBoxInput.parentElement.className = 'not-valid';
            ccNumBoxInput.nextElementSibling.style.display = 'inherit';
            e.preventDefault();
        }

        //zip
        if (zipBoxInput.value === "") {
            zipBoxInput.nextElementSibling.style.display = 'inherit';
            e.preventDefault();
        }
        if (validZip.test(zipBoxInput.value)) {
            zipBoxInput.nextElementSibling.style.display = 'none';
            zipBoxInput.parentElement.className = 'valid';
        } else if (validZip.test(zipBoxInput.value) === false) {
            zipBoxInput.parentElement.className = 'not-valid';
            zipBoxInput.nextElementSibling.style.display = 'inherit';
            e.preventDefault();
        }

        //cvv
        if (cvvBoxInput.value === "") {
            cvvBoxInput.nextElementSibling.style.display = 'inherit';
            e.preventDefault();
        }
        if (validCvv.test(cvvBoxInput.value)) {
            cvvBoxInput.nextElementSibling.style.display = 'none';
            cvvBoxInput.parentElement.className = 'valid';
        } else if (validCvv.test(cvvBoxInput.value) === false) {
            cvvBoxInput.parentElement.className = 'not-valid';
            cvvBoxInput.nextElementSibling.style.display = 'inherit';
            e.preventDefault();
        }
       
    }   

    if (activityValidator()) {
        activityField.className = 'valid';
    } else {
        activityField.className = 'not-valid';
        e.preventDefault();
    }
});
