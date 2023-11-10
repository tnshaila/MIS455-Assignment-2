function submitForm() {
    const customerName = document.getElementById("customerName").value;
    const destination = document.getElementById("destination").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

    const message = `Dear ${customerName}, your booking for ${destination} on ${day} at ${time} is confirmed!`;

    confirmationMessage.textContent = message;
    confirmationPopup.style.display = "block";

    document.getElementById("container").innerHTML= `
      
      <h4>Hello ${customerName}, your booking is confirmed</h4>`;

    return true; 
}

function closePopup() {
    confirmationPopup.style.display = "none";
}

