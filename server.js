// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/


function getDay(){
  const today=new Date()
  const day=today.day()
  switch (day){
    case 0:"Have a wonderful day!"
    case 1:"Happy Monday! Start your week with energy!"
    case 2:"Have a wonderful day!"
    case 3:"Have a wonderful day!"
    case 4:"Have a wonderful day!"
    case 5:"It's Friday! The weekend is near!"
    case 6:"Have a wonderful day!"
  }
}

app.get('/assistant/greet',(req,res)=>{
  const name=req.query.name

  if(!name){
    return res.status(400).json({error: 'Please enter name'})
  }
  const welcomeMessage=`Hello, ${name}! Welcome to our assistant app!`
  const day=getDay()
  res.json({
    welcomeMessage: welcomeMessage,
    daymessage: day
  })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
