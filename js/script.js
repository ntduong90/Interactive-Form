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
    
    
    activityField.addEventListener('change', ()=> {
        let activitySelect = document.getElementById('activities-box');
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
            if (jsWorkshop.firstElementChild.checked === false) {
                sumTotal = sumTotal - nodeWorkshopPrice;
            }


            
            console.log(total);
            return total;
        }
        runningTotal();

        
        
        
        
        
        
    });
}
activityFieldset();

