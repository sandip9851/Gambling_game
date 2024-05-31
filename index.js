const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const image4 = document.querySelector("#image4");
const images = document.querySelectorAll(".images");
let clickCount = 0;

image1.addEventListener("click", () => {
  clickCount++;
  if (clickCount >= 1) {
    
    image1.style.pointerEvents = 'none';
  }

  // Check if the form already exists
  if (!document.querySelector("#signup_form")) {
    const form = document.createElement("form");
    form.id = "signup_form";
    form.innerHTML = `
      <label for="userName">User Name</label><br>
      <input type="text" name="userName" id="userName" placeholder="Enter your name"><br><br>
      <label for="email">Email</label><br>
      <input type="email" name="email" id="email" placeholder="Example@email.com"><br><br>
      <label for="password">Password</label><br>
      <input type="password" name="password" id="password" placeholder="Your Password"><br><br>
      <button id="submit" type="submit">Submit</button>
    `;

    images[0].append(form);

    const btn = document.getElementById("submit");

    btn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default form submission

      const userName = document.getElementById("userName").value;
      const email = document.getElementById("email").value;

      const details = document.createElement("div");
      details.id = "userDetails"
      details.style.display = "none";
      
      details.innerHTML = `
        <h3>User Details</h3>
        <p>Name: ${userName}</p>
        <p>Email: ${email}</p>
      `;

      images[1].append(details);

      // Clear form fields
      document.getElementById("userName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    });
  }
  image2.addEventListener("click",()=>{
    const userDetails = document.getElementById("userDetails");
    userDetails.style.display = "block"
  })


});

let diceCount = 0;
let sum = 0;
let chnace = 0;


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

image3.addEventListener("click", () => {
  diceCount++;
  document.getElementById("clicked").innerText = `click Chance 3/${diceCount}`
  if (diceCount >= 3) {
    image3.style.pointerEvents = 'none'; 
  }
  
  if (diceCount <= 3) {
    let num = rollDice();
    sum += num;

    if (diceCount == 3) {
      console.log(diceCount);
      console.log(sum)
      

      if (sum <= 10 && chnace < 1) {
        //console.log("try again");
        
        diceCount = 0;
        image3.style.pointerEvents = 'auto';
      
       chnace++;
       
       alert(`Try Again Score: ${sum}`)
       sum = 0;
       
       
        
      } else if (sum <= 10) {
        alert("Bad Luck, Game Over!")
        image4.style.pointerEvents = 'none'; 
        
      } else if (sum > 10) {

        alert("Congratulation! you win,collect your Rewards")
       

        
      }
    }
  }
  
  

  image4.addEventListener("click",()=>{
   
   if(sum <= 10 && chnace < 1){
    alert("try once! you have one more chance")
   }else if(sum <= 10){
    image4.style.pointerEvents = 'none';
   }else if(sum > 10){
    alert(`Your Cupon Code : 258725515`)
   }
  });

})



