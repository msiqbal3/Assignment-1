/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Muhammad Shahman Iqbal Student ID: 136212230 Date: 20/01/2024
*
********************************************************************************/ 

const studentName = "Muhammad Shahman Iqbal";
const studentEmail = "msiqbal3@myseneca.ca";


const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  `This assignment was prepared by ${studentName}`,
  `Student Name: ${studentName} Student Email: ${studentEmail}`,
  "User Logged In",
  "Main Panel",
  "Logout Complete",
];


/*function webServerSimulator(verb, path) {

  const index = serverVerbs.findIndex(
    (v, i) => v === verb && serverPaths[i] === path
  );


  if (index !== -1) {
    return serverResponses[index];
  } else {

    return "404 Not Found";
  }
}


console.log(webServerSimulator("GET", "/")); 
*/


function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  
  function httpRequest(httpVerb, path) {
    
    for (let i = 0; i < serverPaths.length; i++) {
      if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
        
        return `200: ${serverResponses[i]}`;
      }
    }
  
    
    return `404: Unable to process ${httpVerb} request for ${path}`;
  }
  
  
  function automateTests() {
    
    const testVerbs = ["GET", "POST"];
    const testPaths = [
      "/",
      "/about",
      "/contact",
      "/login",
      "/panel",
      "/logout",
      "/randomPath1",
      "/randomPath2",
    ];
  
    
    function randomRequest() {
      
      const randVerb = testVerbs[getRandomInt(testVerbs.length - 1)];
      const randPath = testPaths[getRandomInt(testPaths.length - 1)];
  
      
      console.log(httpRequest(randVerb, randPath));
    }
  
  
    setInterval(randomRequest, 500);
  }
  
  
  automateTests();