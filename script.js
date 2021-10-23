// Fetching data from restcountries API
async function getcountries()
{
  const data = await fetch("https://restcountries.com/v3.1/all")
  const coutry = await data.json();
  return coutry;
}

//Get all the countries from Asia continent /region using Filter function

async function Asiacontinent(){
  const details =  await getcountries()
  const Asiacountry = await details.filter(country => country.region == "Asia").map(country => console.log(country.name.common))
  return Asiacountry;
}
Asiacontinent()

//Get all the countries with a population of less than 2 lakhs using Filter function

async function Countrywith2Lpopulation(){
  const details =  await getcountries()
  const population2L = await details.filter(country => country.population >= 20_00_00_000).map(country => console.log(country.name.common))
  return population2L;
}
Countrywith2Lpopulation()

// Print the following details name, capital, flag using forEach function
async function Countrydetails(){
  const details =  await getcountries()
  const allCountryDetails = await details.forEach(country=>(console.log("Name: "+country.name.common, "Capital: "+country.capital, "flag: " + country.flags.png)))
  return allCountryDetails;
}
Countrydetails()

//Print the total population of countries using reduce function
async function countryTotalpopulation(){
  const details =  await getcountries() 
  const countrytotalpopulation = details.reduce((previousValue, currentValue) => { console.log(previousValue.population+currentValue.population )});
  return countrytotalpopulation;
  }
countryTotalpopulation()

// Print the country which uses US Dollars as currency.
async function countryWithUSdollar(){ 
  const details =  await getcountries()
  const USDdata = ()=> {
  for(let i=0; i<details.length;i++){
      if(details[i].currencies["USD"]!= undefined)
      {
         console.log(details[i].name.common)
      }
    }  
  }  
return USDdata();

}
countryWithUSdollar()