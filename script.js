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
      "glow-card p-6 md:p-8 text-black flex flex-col justify-between border border-gray-200 bg-white";

    card.innerHTML = `
      <div class="glow-bg"}"></div>
      <div class="card-content">
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
              (f) => `<li><i class="fas fa-check text-black mr-1.5"></i>${f}</li>`
            )
            .join("")}
        </ul>
        <button class="bg-black text-white w-full py-3 mt-6 transition hover:bg-gray-950">
          Subscribe Now
        </button>
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
