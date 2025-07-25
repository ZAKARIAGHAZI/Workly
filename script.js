


/* Header */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = mobileMenu.querySelectorAll("a");
  
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });

    //Flip Style 
    function setupHoverFlip(signupId, loginId) {
      const signup = document.getElementById(signupId);
      const login = document.getElementById(loginId);

      function flip() {
        signup.classList.toggle("bg-black");
        signup.classList.toggle("text-white");

        login.classList.toggle("bg-black");
        login.classList.toggle("text-white");
      }



      [signup, login].forEach((btn) => {
        btn.addEventListener("mouseenter", flip);
        btn.addEventListener("mouseleave", flip);
      });
    }

    // Apply for desktop
    setupHoverFlip("signupBtn", "loginBtn");

    // Apply for mobile
    setupHoverFlip("signupBtnMobile", "loginBtnMobile");
/* END Header */


/*POP OUT FORM*/

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.addEventListener("click",()=>{
  document.getElementById("module").style.display = "none"
  overlay.classList.remove("active", "opacity-100");
  
})


function openModal(modal) {
  if (modal == null) return;
  modal.classList.add(
    "active",
    "transform",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "scale-100"
  );
  document.getElementById("module").style.display = "block";
  overlay.classList.add("active", "opacity-100");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active"  ,
    "transform",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "scale-100");
  overlay.classList.remove("active", "opacity-100");
}

/* Email JS */
 emailjs.init("YGEo1Kf65bA_Bifij");

 document
   .getElementById("contact-form")
   .addEventListener("submit", function (e) {
     e.preventDefault();

     emailjs.sendForm("service_kmgrs4c", "template_nrkay2q", this).then(
       function () {
         alert("Message sent successfully!");
       },
       function (error) {
         alert("Failed to send message: " + JSON.stringify(error));
       }
     );
   });
/*END Email JS */
/*ENDPOP OUT FORM*/

/* LOCATIONS SECTION */
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    focus: "center",
  });
  splide.mount(); 
});
/* END LOCATIONS SECTION */


/* PRICING SECTION  */
const pricingPlans = [
  {
    name: "Basic Plan",
    description: "Perfect for freelancers and startups.",
    monthlyPrice: 19,
    annualPrice: 199,
    features: [
      "High-speed internet access",
      "24/7 access to space",
      "Community networking events",
    ],
  },
  {
    name: "Professional Plan",
    description: "Ideal for growing teams and small businesses.",
    monthlyPrice: 49,
    annualPrice: 499,
    features: [
      "Dedicated desk space",
      "Private meeting rooms",
      "Monthly workshops included",
      "Priority support services",
    ],
  },
  {
    name: "Enterprise Plan",
    description: "Designed for large teams and organizations.",
    monthlyPrice: 99,
    annualPrice: 999,
    features: [
      "Networking opportunities",
      "High-speed internet access",
      "24/7 access to space",
      "Community networking events",
      "Dedicated desk space",
    ],
  },
];

//const glowColors = ["#ff6b6b", "#6bc1ff", "#6bff95"];
let currentTab = "Monthly";
const container = document.getElementById("cards-container");

function renderCards() {
  container.innerHTML = "";

  pricingPlans.forEach((plan, index) => {
    const price =
      currentTab === "Monthly" ? plan.monthlyPrice : plan.annualPrice;
    const per = currentTab === "Monthly" ? "/month" : "/year";

    const card = document.createElement("div");
    card.className =
      "glow-card p-6 md:p-8 text-black flex flex-col border border-gray-200 bg-white";

    card.innerHTML = `
      <div class="glow-bg"}"></div>
      <div class="card-content flex flex-col h-full">
        <h2 class="text-2xl font-bold text-center">${plan.name}</h2>
        <p class="mt-2 text-center text-sm text-gray-500">${
          plan.description
        }</p>
        <div class="mt-6 flex items-center justify-center text-4xl font-bold text-black">
          $<span class="price">${price}</span><span class="text-base ml-2">${per}</span>
        </div>
        <ul class="mt-6 space-y-2 text-gray-700 text-sm">
          ${plan.features
            .map(
              (f) =>
                `<li><i class="fas fa-check text-black mr-1.5"></i>${f}</li>`
            )
            .join("")}
        </ul>
        <div class="mt-auto pt-6">
          <button class="bg-black text-white w-full py-3 transition hover:bg-gray-950">
            Subscribe Now
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentTab = btn.dataset.tab;

    // Remove border from all tab buttons
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("border", "border-black");
      b.classList.add("border", "border-transparent");
    });

    // Add border to the active button
    btn.classList.remove("border-transparent");
    btn.classList.add("border", "border-black");

    renderCards();
  });
});

// Initial render
renderCards();

/* END PRICING SECTION  */
