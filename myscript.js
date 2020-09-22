  
  function onlyletters(input){
      var regex = /[^a-z]/gi;
      input.value = input.value.replace(regex, "");

  }


  function onlynumbers(input){
      var regex = /[^0-9]/g;
      input.value = input.value.replace(regex, "");
  }


  function passvalues()
    {
        var firstname= document.getElementById("fname").value;
        localStorage.setItem("f", firstname);
        

        var middle= document.getElementById("midname").value;
        localStorage.setItem("m", middle);

        var last= document.getElementById("lname").value;
        localStorage.setItem("l", last);

        var phone= document.getElementById("pnumber").value;
        localStorage.setItem("p", phone);

        var email= document.getElementById("email").value;
        localStorage.setItem("e", email);
        
        var address= document.getElementById("address").value;
        localStorage.setItem("a", address);
        return false;

    }



