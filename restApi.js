
var url="https://restcountries.com/v2/all";

country(url);

//using array functions on rest countries data.


async function country(url){
try{
    var response=await fetch(url);
var responseJSON= await response.json();
console.log(responseJSON)
responseJSON.filter((x)=>{
    if(x.region==="Asia"){
    console.log(x.name);
    }
});
responseJSON.filter((pop)=>{
   if(pop.population<200000){
       console.log(`${pop.name}-${pop.population}`);
   }
})

responseJSON.forEach((y)=>{
console.log(`COUNTRY:${y.name} CAPITAL:${y.capital} FLAG:${y.flag}`);

})

const totalPopulation=responseJSON.reduce((acc,cur)=> {return acc+cur.population},0);
console.log(`TOTAL POPULATION :${totalPopulation}`);

   var obj=responseJSON.filter((x)=>{
  for(let i in x.currencies){
       if(x.currencies[i].code=="USD"){
           
            return true;
    
          }
        }         }).map((x)=>{
  console.log(`${x.name}`);
});


}
 catch(error){
    console.log("error");
 }
}
/*RESULTS:
Get all the countries from Asia continent /region using Filter function
Afghanistan
script.js:17 Armenia
script.js:17 Azerbaijan
script.js:17 Bahrain
script.js:17 Bangladesh
script.js:17 Bhutan
script.js:17 Brunei Darussalam
script.js:17 Cambodia
script.js:17 China
script.js:17 Georgia
script.js:17 Hong Kong
script.js:17 India
script.js:17 Indonesia
script.js:17 Iran (Islamic Republic of)
script.js:17 Iraq
script.js:17 Israel
script.js:17 Japan
script.js:17 Jordan
script.js:17 Kazakhstan
script.js:17 Kuwait
script.js:17 Kyrgyzstan
script.js:17 Lao People's Democratic Republic
script.js:17 Lebanon
script.js:17 Macao
script.js:17 Malaysia
script.js:17 Maldives
script.js:17 Mongolia
script.js:17 Myanmar
script.js:17 Nepal
script.js:17 Korea (Democratic People's Republic of)
script.js:17 Oman
script.js:17 Pakistan
script.js:17 Palestine, State of
script.js:17 Philippines
script.js:17 Qatar
script.js:17 Saudi Arabia
script.js:17 Singapore
script.js:17 Korea (Republic of)
script.js:17 Sri Lanka
script.js:17 Syrian Arab Republic
script.js:17 Taiwan
script.js:17 Tajikistan
script.js:17 Thailand
script.js:17 Timor-Leste
script.js:17 Turkey
script.js:17 Turkmenistan
script.js:17 United Arab Emirates
script.js:17 Uzbekistan
script.js:17 Vietnam
script.js:17 Yemen
Get all the countries with a population of less than 2 lakhs using Filter function
Åland Islands-28875
script.js:23 American Samoa-55197
script.js:23 Andorra-77265
script.js:23 Anguilla-13452
script.js:23 Antarctica-1000
script.js:23 Antigua and Barbuda-97928
script.js:23 Aruba-106766
script.js:23 Bermuda-63903
script.js:23 Bonaire, Sint Eustatius and Saba-17408
script.js:23 Bouvet Island-0
script.js:23 British Indian Ocean Territory-3000
script.js:23 United States Minor Outlying Islands-300
script.js:23 Virgin Islands (British)-30237
script.js:23 Virgin Islands (U.S.)-106290
script.js:23 Cayman Islands-65720
script.js:23 Christmas Island-2072
script.js:23 Cocos (Keeling) Islands-550
script.js:23 Cook Islands-18100
script.js:23 Curaçao-155014
script.js:23 Dominica-71991
script.js:23 Falkland Islands (Malvinas)-2563
script.js:23 Faroe Islands-48865
script.js:23 French Southern Territories-140
script.js:23 Gibraltar-33691
script.js:23 Greenland-56367
script.js:23 Grenada-112519
script.js:23 Guam-168783
script.js:23 Guernsey-62999
script.js:23 Heard Island and McDonald Islands-0
script.js:23 Vatican City-451
script.js:23 Isle of Man-85032
script.js:23 Jersey-100800
script.js:23 Kiribati-119446
script.js:23 Liechtenstein-38137
script.js:23 Marshall Islands-59194
script.js:23 Micronesia (Federated States of)-115021
script.js:23 Monaco-39244
script.js:23 Montserrat-4922
script.js:23 Nauru-10834
script.js:23 Niue-1470
script.js:23 Norfolk Island-2302
script.js:23 Northern Mariana Islands-57557
script.js:23 Palau-18092
script.js:23 Pitcairn-56
script.js:23 Saint Barthélemy-9417
script.js:23 Saint Helena, Ascension and Tristan da Cunha-4255
script.js:23 Saint Kitts and Nevis-53192
script.js:23 Saint Lucia-183629
script.js:23 Saint Martin (French part)-38659
script.js:23 Saint Pierre and Miquelon-6069
script.js:23 Saint Vincent and the Grenadines-110947
script.js:23 Samoa-198410
script.js:23 San Marino-33938
script.js:23 Seychelles-98462
script.js:23 Sint Maarten (Dutch part)-40812
script.js:23 South Georgia and the South Sandwich Islands-30
script.js:23 Svalbard and Jan Mayen-2562
script.js:23 Tokelau-1411
script.js:23 Tonga-105697
script.js:23 Turks and Caicos Islands-38718
script.js:23 Tuvalu-11792
script.js:23 Wallis and Futuna-11750
Print the following details name, capital, flag using forEach function
COUNTRY:Afghanistan CAPITAL:Kabul FLAG:https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
script.js:25 COUNTRY:Åland Islands CAPITAL:Mariehamn FLAG:https://flagcdn.com/ax.svg
script.js:25 COUNTRY:Albania CAPITAL:Tirana FLAG:https://flagcdn.com/al.svg
script.js:25 COUNTRY:Algeria CAPITAL:Algiers FLAG:https://flagcdn.com/dz.svg
script.js:25 COUNTRY:American Samoa CAPITAL:Pago Pago FLAG:https://flagcdn.com/as.svg
script.js:25 COUNTRY:Andorra CAPITAL:Andorra la Vella FLAG:https://flagcdn.com/ad.svg
script.js:25 COUNTRY:Angola CAPITAL:Luanda FLAG:https://flagcdn.com/ao.svg
script.js:25 COUNTRY:Anguilla CAPITAL:The Valley FLAG:https://flagcdn.com/ai.svg
script.js:25 COUNTRY:Antarctica CAPITAL:undefined FLAG:https://flagcdn.com/aq.svg
script.js:25 COUNTRY:Antigua and Barbuda CAPITAL:Saint John's FLAG:https://flagcdn.com/ag.svg
script.js:25 COUNTRY:Argentina CAPITAL:Buenos Aires FLAG:https://flagcdn.com/ar.svg
script.js:25 COUNTRY:Armenia CAPITAL:Yerevan FLAG:https://flagcdn.com/am.svg
script.js:25 COUNTRY:Aruba CAPITAL:Oranjestad FLAG:https://flagcdn.com/aw.svg
script.js:25 COUNTRY:Australia CAPITAL:Canberra FLAG:https://flagcdn.com/au.svg
script.js:25 COUNTRY:Austria CAPITAL:Vienna FLAG:https://flagcdn.com/at.svg
script.js:25 COUNTRY:Azerbaijan CAPITAL:Baku FLAG:https://flagcdn.com/az.svg
script.js:25 COUNTRY:Bahamas CAPITAL:Nassau FLAG:https://flagcdn.com/bs.svg
script.js:25 COUNTRY:Bahrain CAPITAL:Manama FLAG:https://flagcdn.com/bh.svg
script.js:25 COUNTRY:Bangladesh CAPITAL:Dhaka FLAG:https://flagcdn.com/bd.svg
script.js:25 COUNTRY:Barbados CAPITAL:Bridgetown FLAG:https://flagcdn.com/bb.svg
script.js:25 COUNTRY:Belarus CAPITAL:Minsk FLAG:https://flagcdn.com/by.svg
script.js:25 COUNTRY:Belgium CAPITAL:Brussels FLAG:https://flagcdn.com/be.svg
script.js:25 COUNTRY:Belize CAPITAL:Belmopan FLAG:https://flagcdn.com/bz.svg
script.js:25 COUNTRY:Benin CAPITAL:Porto-Novo FLAG:https://flagcdn.com/bj.svg
script.js:25 COUNTRY:Bermuda CAPITAL:Hamilton FLAG:https://flagcdn.com/bm.svg
script.js:25 COUNTRY:Bhutan CAPITAL:Thimphu FLAG:https://flagcdn.com/bt.svg
script.js:25 COUNTRY:Bolivia (Plurinational State of) CAPITAL:Sucre FLAG:https://flagcdn.com/bo.svg
script.js:25 COUNTRY:Bonaire, Sint Eustatius and Saba CAPITAL:Kralendijk FLAG:https://flagcdn.com/bq.svg
script.js:25 COUNTRY:Bosnia and Herzegovina CAPITAL:Sarajevo FLAG:https://flagcdn.com/ba.svg
script.js:25 COUNTRY:Botswana CAPITAL:Gaborone FLAG:https://flagcdn.com/bw.svg
script.js:25 COUNTRY:Bouvet Island CAPITAL:undefined FLAG:https://flagcdn.com/bv.svg
script.js:25 COUNTRY:Brazil CAPITAL:Brasília FLAG:https://flagcdn.com/br.svg
Print the total population of countries using reduce function
TOTAL POPULATION :7759438109
Print the country which uses US Dollars as currency.
American Samoa
*/


