function OpenForm(){
  document.getElementById("inputform").style.height = "300px";
  document.getElementById("inputform").scrollIntoView();
  document.getElementById("formbutton").style.height = "0";
  document.getElementById("formbutton").style.display = "none"; 
}
function validate(){
  if(document.forms["signup"]["name"].value == "")
  {
  	alert("Missing name");
  	return false;
  }
  else if(document.forms["signup"]["email"].value == "")
  {
  	alert("Missing email");
  	return false;
  }
  else if(document.forms["signup"]["date"].value == "")
  {
  	alert("Missing birth date");
  	return false;
  }
  return true;	  		
}