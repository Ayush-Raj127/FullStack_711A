let jobCount = 0;

function updateJobCount() {
    document.getElementById("jobCount").innerText = jobCount;
}

function addJob() {
    const title = document.getElementById("jobTitle").value.trim();
    const company = document.getElementById("jobCompany").value.trim();
    const location = document.getElementById("jobLocation").value.trim();

    if (!title || !company || !location) {
        alert("Please fill all fields");
        return;
    }

    const jobCard = document.createElement("div");
    jobCard.className = "job-card";

    jobCard.innerHTML = `
        <h3>${title}</h3>
        <p>${company}</p>
        <span>${location}</span>
        <button class="apply-btn">Apply</button>
        <button class="delete-btn">Delete</button>
    `;

    const applyBtn = jobCard.querySelector(".apply-btn");
    applyBtn.addEventListener("click", () => {
        applyBtn.innerText = "Applied";
        applyBtn.classList.add("applied");
        applyBtn.disabled = true;
    });

    const deleteBtn = jobCard.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        jobCard.remove();
        jobCount--;
        updateJobCount();
    });

    document.getElementById("jobGrid").appendChild(jobCard);

    jobCount++;
    updateJobCount();

    document.getElementById("jobTitle").value = "";
    document.getElementById("jobCompany").value = "";
    document.getElementById("jobLocation").value = "";
}