/*  1. Recreate the 'description' variable from the last assignment, this time 
       using the template literal syntax 

    2. Based on the variables you created, create a new variable 'description'
       which contains a string with this format: 'Pakistan is in Asia, and its 150 million 
       people speak urdu' */

    
    let country = 'Pakistan';
    let continent = 'Asia';
    let population = 150;
    let language = 'urdu';

    let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
    console.log(description);
