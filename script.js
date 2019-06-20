let profileList = [];

let fillProfileList = function() {

  let fields = document.body.getElementsByTagName("input");
  for (let i=0; i < fields.length; i++) {
    profileList.push(fields[i].value);
  }

}


let validatePasswords = function() {

  let passwordClass = document.querySelector(".password");
  let password = passwordClass.getElementsByTagName("input")[0].value;
  let confirmation = passwordClass.getElementsByTagName("input")[1].value;

  if (password.length() > 0 && password == confirmation) {
    fillProfileList();
    console.log(profileList);
    alert("Details Saved successfully!")
  } else {
    alert("Passwords do not match");
  }

}
