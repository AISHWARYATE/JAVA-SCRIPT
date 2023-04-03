

    var firstname =document.getElementById("fname");
    var middlename =document.getElementById("mname");
    var lastname =document.getElementById("lname");
    var add =document.getElementById("address");
    var phonenumber =document.getElementById("phone");
    var emailid =document.getElementById("email");
    var password =document.getElementById("pwd");
    var confirm_password =document.getElementById("cpwd");
    
    
    var format = /^[a-zA-Z0-9- ,_]*$/;
    var regPhone =/^\d{10}$/;
    var regEmail =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
    
    function validate()
    {
        if (firstname.value == "") {
            document.getElementById('fnames').innerHTML = "enter your first name"
            return false;
          }else if(!format.test(firstname.value)){
            document.getElementById('fnames').innerHTML="not use special character";
            return  false;
          }
    
        else { document.getElementById('fnames').innerHTML = "" }
    
    
        if (middlename.value == "") {
            document.getElementById('mnames').innerHTML = "enter your middle name"
            return false;
          }else if(!format.test(middlename.value)){
            document.getElementById('mnames').innerHTML="not use special character";
            return  false;
          }
    
        else { document.getElementById('mnames').innerHTML = "" }
    
    
        if (lastname.value == "") {
            document.getElementById('lnames').innerHTML = "enter your last name"
            return false;
          }else if(!format.test(lastname.value)){
            document.getElementById('lnames').innerHTML="not use special character";
            return  false;
          }
    
        else { document.getElementById('lnames').innerHTML = "" }
    
    
        
        if(add.value == "")
        {document.getElementById("addresses").innerHTML="Please enter address";
           return false;
        }
        else{document.getElementById("addresses").innerHTML=" ";}
    
    
      
      
        if(phonenumber.value ==""){
       document.getElementById("phones").innerHTML= "Field should not be empty";
        return false;
      }
      else if(!regPhone.test(phonenumber.value))
      {document.getElementById("phones").innerHTML= "Please enter phone number in correct format";
       return false;
      }
      else{document.getElementById('phones').innerHTML = ""};
    
    
    
    
      if(emailid.value =="")
        {document.getElementById("emails").innerHTML="Please enter email";
            return false;
        }
        else if(!regEmail.test(emailid.value))
        {document.getElementById("emails").innerHTML= "Please enter email in correct format";
            return false;}
        else{document.getElementById('emails').innerHTML = ""};
    
    
    
    
    
    
        if (password.value == "") {
          document.getElementById('pwds').innerHTML = "enter your password"
          return false;
        } else { document.getElementById('pwds').innerHTML = "" }
        if ((password.value.length <= 8) || (password.value.length >= 12)) {
          document.getElementById('pwds').innerHTML = "maximum 12"
          return false;
        } if (confirm_password.value == "") {
          document.getElementById('cpwds').innerHTML = "enter conform password"
          return false;
        } else { document.getElementById('cpwds').innerHTML = "" }
        if ((confirm_password.value.length <= 8) || (confirm_password.value.length >= 12)) {
          document.getElementById('cpwds').innerHTML = "maximum 12"
          return false;
        }
        if(confirm_password.value!=password.value){
          document.getElementById('cpwds').innerHTML="not matched"
          return false;
        }
        else{
         document.getElementById('cpwds').innerHTML=""
        
        }
    
    
    
        
        var genderss=document.getElementsByName('gender');
         
        if (!(genderss[0].checked || genderss[1].checked || genderss[2].checked)) 
        {
            document.getElementById("genders").innerHTML ="Choose gender";
            return false;
        }
        else
        {
            document.getElementById("genders").innerHTML ="";
        }
    
        
    
    
    
        if(document.register.course.selectedIndex=="")
        {
            document.getElementById("courses").innerHTML ="Select the courses";
            return false;
        }
        else
        {
            var sel = document.getElementById("course");
            var selectedText = sel.options[sel.selectedIndex].text;
            document.getElementById("courses").innerHTML= " ";
        }
    
      }
    
   