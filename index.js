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
  let x = retrieveEmployeeInformation();

  let li = document.createElement('li');

  li.innerHTML = x;

return  $(".employee-list").append($li);

}
