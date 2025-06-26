//accept policy
function cl(){
  const policies = document.querySelectorAll(".policy-content");
  policies.forEach(policy => {
    policy.classList.add("hidden");
    });

}
//policies
document.querySelectorAll(".footer-policy-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const policies = document.querySelectorAll(".policy-content");
    
    // Hide all policy sections first
    policies.forEach(policy => {
      policy.classList.add("hidden");
    });

    // Show the one that matches the clicked button
    if (policies[index]) {
      policies[index].classList.remove("hidden");
    }
  });
});
//year
document.getElementById("year").textContent = new Date().getFullYear();


