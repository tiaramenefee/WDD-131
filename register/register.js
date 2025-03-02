document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addButton = document.getElementById("addParticipant");
    const participantFieldset = document.getElementById("participants");

    addButton.addEventListener("click", () => {
        participantCount++;
        let newParticipant = participantTemplate(participantCount);
        addButton.insertAdjacentHTML("beforebegin", newParticipant);
    });
});

function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <label for="name${count}">Participant ${count} Name:</label>
        <input type="text" id="name${count}" name="name${count}" required>

        <label for="fee${count}">Fee:</label>
        <input type="number" id="fee${count}" name="fee${count}" min="0" required>
    </section>
    `;
}
