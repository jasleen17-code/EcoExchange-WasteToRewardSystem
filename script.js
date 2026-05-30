// ========================= script.js =========================


// ================= OTP SYSTEM =================

let isVerified = false;

let generatedOTP = "";



// ================= SEND OTP FUNCTION =================

function sendOTP() {

  const phone =
    document.getElementById("phone").value;

  const email =
    document.getElementById("email").value;



  // ================= VALIDATION =================

  if (phone === "" || email === "") {

    alert("Please enter phone number and email first!");
    return;
  }



  if (phone.length !== 10) {

    alert("Phone number must be 10 digits!");
    return;
  }



  // ================= GENERATE RANDOM OTP =================

  generatedOTP =
    Math.floor(1000 + Math.random() * 9000);



  // ================= DEMO OTP =================

  alert(
    "📩 Demo Verification Code Sent!\n\nYour OTP is: " +
    generatedOTP
  );

}





// ================= VERIFY OTP =================

function verifyNumber() {

  const enteredOTP =
    document.getElementById("otp").value;



  if (enteredOTP == generatedOTP) {

    isVerified = true;

    alert("✅ Number & Gmail Verified Successfully!");

  }

  else {

    alert("❌ Invalid Verification Code!");
  }
}





// ================= SUBMIT FUNCTION =================

function submitWaste() {

  const name =
    document.getElementById("name").value;

  const phone =
    document.getElementById("phone").value;

  const email =
    document.getElementById("email").value;

  const wasteType =
    document.getElementById("wasteType").value;

  const weight =
    document.getElementById("weight").value;

  const location =
    document.getElementById("location").value;

  const date =
    document.getElementById("date").value;

  const details =
    document.getElementById("details").value;



  // ================= VALIDATION =================

  if (
    name === "" ||
    phone === "" ||
    email === "" ||
    wasteType === "" ||
    weight === "" ||
    location === "" ||
    date === ""
  ) {

    alert("Please fill all details!");
    return;
  }



  // ================= VERIFY CHECK =================

  if (!isVerified) {

    alert("Please verify your phone number first!");
    return;
  }



  // ================= ECOPOINTS =================

  let ecoPoints = weight * 12;



  // ================= AI TIPS =================

  let ecoTip = "";

  if (wasteType === "Plastic") {

    ecoTip =
      "Avoid single-use plastics and recycle responsibly.";
  }

  else if (wasteType === "Paper") {

    ecoTip =
      "Paper recycling helps save trees and water.";
  }

  else if (wasteType === "E-Waste") {

    ecoTip =
      "Dispose e-waste safely to avoid toxic pollution.";
  }

  else if (wasteType === "Religious Waste") {

    ecoTip =
      "Flowers can be converted into compost and incense sticks.";
  }

  else {

    ecoTip =
      "Segregating waste properly keeps the environment clean.";
  }



  // ================= NGO LIST =================

  const ngoList = [

    "Green Earth NGO",

    "Waste2Green Foundation",

    "Clean India Mission",

    "Eco Warriors Group",

    "Nature Care NGO"
  ];



  // ================= RANDOM NGO =================

  const randomNGO =
    ngoList[Math.floor(Math.random() * ngoList.length)];



  // ================= PICKUP DATE =================

  let pickupDate = new Date();

  pickupDate.setDate(pickupDate.getDate() + 2);

  const formattedDate =
    pickupDate.toDateString();




  // ================= AI RESULT =================

  document.getElementById("aiResult").innerHTML = `

    <h2>🤖 AI Waste Analysis</h2>

    <p>👤 Name: <b>${name}</b></p>

    <p>📞 Phone: <b>${phone}</b></p>

    <p>📧 Email: <b>${email}</b></p>

    <p>♻️ Waste Type: <b>${wasteType}</b></p>

    <p>🌱 Eco Tip: ${ecoTip}</p>

    <p>🏆 EcoPoints Earned: <b>${ecoPoints}</b></p>

    <br>

    <div class="note-box">

      <h3>📩 Contribution Note</h3>

      <p>
        Thank you <b>${name}</b> for contributing towards a cleaner and greener environment 🌍
      </p>

      <p>
        Your <b>${wasteType}</b> waste has been successfully registered.
      </p>

      <p>
        📦 Waste Collection Location:
        <b>${location}</b>
      </p>

      <p>
        📅 Collection Date:
        <b>${formattedDate}</b>
      </p>

      <p>
        🤝 Assigned NGO:
        <b>${randomNGO}</b>
      </p>

      <p>
        📞 Our team will contact you shortly for pickup confirmation.
      </p>

      <p>
        🌱 Your contribution supports SDG 11, SDG 12 and SDG 13.
      </p>

      <p>
        ♻️ Keep the environment clean and inspire others too.
      </p>

      <p>
        ✅ Thank You & Have a Great Day!
      </p>

    </div>
  `;




  // ================= SAVE USERS =================

  let users =
    JSON.parse(localStorage.getItem("ecoUsers")) || [];



  users.push({

    name: name,

    points: ecoPoints
  });



  // ================= SORT USERS =================

  users.sort((a, b) => b.points - a.points);



  // ================= SAVE TO LOCAL STORAGE =================

  localStorage.setItem(
    "ecoUsers",
    JSON.stringify(users)
  );



  // ================= UPDATE LEADERBOARD =================

  updateLeaderboard();
  updateRewards(ecoPoints);




  // ================= AUTO CLEAR AFTER 30 SEC =================

  setTimeout(() => {

    // Clear Inputs

    document.getElementById("name").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("email").value = "";

    document.getElementById("otp").value = "";

    document.getElementById("wasteType").value = "";

    document.getElementById("weight").value = "";

    document.getElementById("location").value = "";

    document.getElementById("date").value = "";

    document.getElementById("details").value = "";



    // Clear AI Result

    document.getElementById("aiResult").innerHTML = "";



    // Reset Verification

    isVerified = false;

  }, 30000);

}





// ================= LEADERBOARD FUNCTION =================

function updateLeaderboard() {

  let users =
    JSON.parse(localStorage.getItem("ecoUsers")) || [];



  const leaderboardBody =
    document.getElementById("leaderboardBody");



  leaderboardBody.innerHTML = "";



  users.forEach((user, index) => {

    leaderboardBody.innerHTML += `

      <tr>

        <td>${index + 1}</td>

        <td>${user.name}</td>

        <td>${user.points}</td>

      </tr>

    `;
  });

}





// ================= LOAD LEADERBOARD =================

window.onload = function () {

  updateLeaderboard();

};

// ================= REWARD SYSTEM =================

let totalPoints = 0;

function updateRewards(points) {

  totalPoints += Number(points);

  let rewardMoney =
    totalPoints / 10;



  document.getElementById("rewardPoints").innerText =

    "Your EcoPoints: " + totalPoints;



  document.getElementById("rewardMoney").innerText =

    "Reward Value: ₹" + rewardMoney;
}





// ================= REDEEM FUNCTION =================

function redeemPoints() {

  if (totalPoints < 100) {

    alert(
      "⚠️ Minimum 100 EcoPoints required for redeem!"
    );

    return;
  }



  alert(
    " Reward Redeem Request Submitted Successfully!"
  );
}