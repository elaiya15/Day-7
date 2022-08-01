   // DAY 7

   //Get all the countries from the Asia continent /region using the Filter function
   // a)Get all the countries with a population of less than 2 lakhs using Filter function
   // b)Print the following details name, capital, flag using forEach function
   // c)Print the total population of countries using reduce function
   // d) Print the country which uses US Dollars as currency.




   var request = new XMLHttpRequest();
   request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
   request.send();
   request.onload = function() {
       var result = JSON.parse(request.response);
       console.log(result);
       // a) Get all the countries from the Asia continent /region using the Filter function
       var res = result.filter((ele) => ele.region == "Asia");
       console.log(res)


       // b) Get all the countries with a population of less than 2 lakhs using Filter function

       var res = result.filter((ele) => ele.population < 200000).map((ele) => ele.name);
       console.log(res);

       // c)  Print the following details name, capital, flag using forEach function
       var res = result.filter((ele) => ele.capital).map((ele) => ele.flag);
       console.log(res);



       //d) print the total population of countries using reduce function
       var res = result.filter((ele) => ele.population).map((ele) => ele.name)
       console.log(res);







   }