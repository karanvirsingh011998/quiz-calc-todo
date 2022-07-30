
document.querySelector("#calculator").addEventListener("click", function () {
    let inputdate = new Date(document.getElementById("birth_date").value);
  
    let birthdetails = {
      date: inputdate.getDate(),
      month: inputdate.getMonth() + 1,
      year: inputdate.getFullYear(),
    };
  
    let today = new Date();
    month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    let currentyear = today.getFullYear();
    let currentmonth = today.getMonth() + 1;
    let currentdate = today.getDate();
    if (
      birthdetails.year > currentyear ||
      (birthdetails.month > currentmonth && birthdetails.year > currentyear) ||
      (birthdetails.date > currentdate &&
        birthdetails.month == currentmonth &&
        birthdetails.year == currentyear)
    ) {
      alert("Please enter valid DOB");
      return;
    }
  
    let birthyear = currentyear - birthdetails.year;
  
    if (currentmonth >= birthdetails.month) {
      birthmonth = currentmonth - birthdetails.month;
      console.log(birthmonth + "if");
    } else {
      birthyear--;
      birthmonth = 12 + currentmonth - birthdetails.month;
      console.log("inside else month");
      console.log(birthyear, birthmonth);
    }
    if (currentdate >= birthdetails.date) {
      birthdate = currentdate - birthdetails.date;
  
      console.log(birthdate);
    } else {
      birthmonth--;
      days = month[currentmonth] - 2;
  
      birthdate = days + currentdate - birthdetails.date;
      // if (birthmonth < 0) {
      //   birthmonth = 11;
      //   birthyear--;
      //   console.log("days nested if");
      // }
    }
  
    displayresult(birthyear, birthmonth, birthdate);
  
    function displayresult() {
      document.getElementById("years").innerText =
        birthyear + " years ";
        document.getElementById("months").innerText =
        birthmonth + " months ";
        document.getElementById("days").innerText =
        birthdate + " days";
    }

  
    function leapyear(year) {
      if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        month[1] = 29;
      } else {
        month[1] = 28;
      }
    }
  
    leapyear(currentyear);
  });






  const ages = [20, 21, 55,88,14,15,12,18,56,96,56,52,23,85];

  const age = ages.filter((age) => age>=20)
  console.log(age)

  const objs =  [
    {name: "Google", category: "product based"},
    {name: "Flipkart", category: "service based"},
    {name: "amazon", category: "service based"},
    {name: "mindtree", category: "service based"},
   ];

  //  const sb = objs.filter(function(objs){
  //   if(objs.category == "service based"){
  //     return true;
  //   }
  //  })
  //  console.log(sb);

   const sb = objs.filter(objs => objs.category === "service based");

   console.log(sb);
