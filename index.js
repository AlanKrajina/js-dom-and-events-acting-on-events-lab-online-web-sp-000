function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.getElementById("myForm").elements[0].value
}


function addNewElementAsLi(){
  let x = preventRefreshOnSubmit();

  let element = document.createElement('li');

  document.getElementsByClassName(".employee-list").innerHTML = x;

}
