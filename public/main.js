var isClicked = false;
window.onload = createButton;

function ChangeInputType() {
  var chosen = document.getElementById("select").value;
  var enteredValues = document.getElementById(chosen).value;

  if (chosen === "email") {
    validateEmail(enteredValues);
  } else if (chosen === "telephone") {
    validateTel(enteredValues);
  }
}
function validateEmail(emailField) {
  console.log(typeof emailField);
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(emailField) == false) {
    alert("please enter a valid email address ");
    return false;
  }
  return true;
}
function validateTel(phone) {
  console.log("p", phone);

  {
    var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phoneNo)) {
      return true;
    } else {
      alert("Not a valid Phone Number");
      return false;
    }
  }
}
function openModal() {
  if (isClicked === false) {
    var styling = `position:absolute;top:80px;left:40px;z-index:1; background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); `;
    var formStyling = ` display:grid;
  grid-template-rows:repeat( 6, 1fr);
  grid-template-columns: repeat(2,1fr);
background-color:blue;
`;

isClicked = true;
    var newBtn = document.createElement("div");
    newBtn.setAttribute("id", "form-div");
    var newContent = document.createTextNode("Contact me");
    newBtn.appendChild(newContent);
    var currentDiv = document.getElementById("form");
    document.body.insertBefore(newBtn, currentDiv);
    var showForm = document.getElementById("form-div");
    showForm.innerHTML = `<div style=' display:grid;
  grid-template-rows:repeat( 6, 1fr);
  grid-template-columns: repeat(2,1fr);
background-color:blue;' ><form style=${styling} method="post" action="http://localhost:3003/data" target=blank>
                              <div>
                              <lable>Name :</lable>
                              <input type="text" name="name" id="form-name" align="right" />
                              </div>
                              <div> <lable>Last name:</lable>

                              <input type="text" name="last-name" id="form-last-name"  />
                              </div>
                              <div>
                               <lable>Email:</lable>

                              <input type="email" name="email" id="form-email">
                              </div>

                              <div> 
                              <lable>Telephone:</lable>
                              <input type="tel" name="tel" id="form-telephone">
                              </div>

                              <div>
                              <select name="contact-preference" id="form-select" onclick="ChangeInputType()">
                                  <option value="select">contact preference</option>
                                  <option value="email">Email</option>
                                  <option value="telephone">Telephone</option>
                              </select>
                              </div>
                              <div id="form-selected"></div>
                          <button  type="submit" value="submit">Submit</button>
                          </form></div>
  `;
  }
}

function createButton() {
  let style = `background-color: rgba(235, 193, 159, 0.137);
color:black;
position:absolute;
top:40px;
left:40px;
z-index:1;

`;

  if (isClicked === false) {
    var newBtn = document.createElement("div");
    newBtn.setAttribute("form", "dv");
    var newBtn = document.createElement("button");
    newBtn.setAttribute("id", "btn");
    newBtn.setAttribute("style", style);
    newBtn.setAttribute("onclick", "openModal()");
    var newContent = document.createTextNode("Contact me");
    newBtn.appendChild(newContent);
    var currentDiv = document.getElementById("form");
    document.body.insertBefore(newBtn, currentDiv);
  }
}
function onFormSubmit() {
  console.log("should work");
  document.getElementById("dv").innerHTML = "";
}
