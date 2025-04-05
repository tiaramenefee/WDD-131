document.addEventListener("DOMContentLoaded", () => {
    const goalInput = document.getElementById("goal-input");
    const addGoalBtn = document.getElementById("add-goal");
    const goalList = document.getElementById("goal-list");

    addGoalBtn.addEventListener("click", () => {
        const goalText = goalInput.value.trim();
        if (goalText === "") return;

        const li = document.createElement("li");
        li.textContent = goalText;
        
        const doneButton = document.createElement("button");
        doneButton.textContent = "✓";
        doneButton.addEventListener("click", () => {
            li.classList.toggle("goal-done");
        });
        
        li.appendChild(doneButton);
        goalList.appendChild(li);
        goalInput.value = "";
    });
});