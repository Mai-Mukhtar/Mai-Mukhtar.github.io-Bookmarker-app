var inputName =document.getElementById('inputName');
var inputSite = document.getElementById('inputSite');
var btn = document.getElementById('btn');
var tbody =document.getElementById('tbody');
var alertName1 = document.getElementById('alertName1');
var alertName2 = document.getElementById('alertName2');

if( localStorage.getItem('data') != null ){
    var listOfSites= localStorage.getItem('data');
    listOfSites = JSON.parse( localStorage.getItem('data')  );
    var index;

} else{
    var listOfSites=[];
}

displaySite();





function getWebSite(){

    if(validateInputName() && validateInputSite() ){

        var singleSite ={
            inputName : inputName.value ,
            inputSite : inputSite.value 
        }
    
        listOfSites.push(singleSite);
        localStorage.setItem('data' , JSON.stringify(listOfSites) );
        // console.log(listOfSites);
        displaySite();
        clearInputs();

        

    } else{
        alert('please try again');
    }



    
}

btn.addEventListener('click' , getWebSite);


function displaySite(){
    
    var divs='';
    for( var i=0 ; i<listOfSites.length ; i++){
        divs += ` <div class="bg-body-secondary m-3 p-3">
        <div class=" w-75">
            <h3 class="float-start">${listOfSites[i].inputName}</h3>
            <div class="float-end">
                <a href="#"  id="btnUrl" onclick="getUrl()" class="btn btn-primary">visit</a>
                <a href="#" id= "btnDelete" onclick="deleteSite(${i})" class="btn btn-danger">delete</a>
            </div>
        </div>
        <div class="clr"></div>
    </div> `

    }
    tbody.innerHTML = divs;
    
}


function deleteSite(i){

     index = i ;

    listOfSites.splice(i , 1);
    localStorage.setItem('data' , JSON.stringify(listOfSites) );
    displaySite();

    


}


function getUrl(){
   
 var url =  inputSite.value;
//  location.href =  `https://${url}/` ;
 window.location=  `https://${url}/` ;
 


}

function clearInputs(){
    inputName.value = '' ,
    inputSite.value = ''
}

function validateInputName(){
    var inputNameRegex = /^[A-Za-z]/;
    inputNameRegex.test( inputName.value );
    if (inputNameRegex.test( inputName.value ) == false )  {
        alertName1.style.display = 'block' ;
        return false

    } else{
        alertName1.style.display= 'none' ;
        return true;
    }
}
function validateInputSite(){
    var inputSiteRegex = /^[a-z]/;
    inputSiteRegex.test( inputSite.value );
    if (inputSiteRegex.test( inputSite.value ) == false )  {
        alertName2.style.display = 'block' ;
        return false

    } else{
        alertName2.style.display= 'none' ;
        return true;
    }
}




inputName.addEventListener('blur' , validateInputName)
inputSite.addEventListener('blur' , validateInputSite)