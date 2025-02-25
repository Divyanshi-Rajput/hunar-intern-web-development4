function calculateBMI() {
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  
  if (age === "" || weight === "" || height === "" || (!male && !female)) {
      document.getElementById("result").textContent = "Please fill all fields.";
      return;
  }
  
  height = height / 100; // Convert height from cm to meters
  let bmi = (weight / (height * height)).toFixed(2);
  
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi >= 18.5 && bmi <= 24.9) category = "Normal weight";
  else if (bmi >= 25 && bmi <= 29.9) category = "Overweight";
  else category = "Obese";
  
  document.getElementById("result").textContent = `Your BMI is ${bmi} (${category}).`;}