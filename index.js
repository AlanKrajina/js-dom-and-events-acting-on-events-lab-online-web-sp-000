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
  let ul = document.querySelector("ul");
  let li = document.createElement('li');

  li.innerHTML = x;

  return ul.append(li);
  // creates "li" with input content
}

function addNewLiOnClick(){
//  let x = retrieveEmployeeInformation();
  let li = document.querySelector('ul.employee-list li');

//  li.addEventListener('onclick', function() {

//  };

}
