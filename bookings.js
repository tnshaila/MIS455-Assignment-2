// const bookingForm = document.getElementById("booking-form");
// const confirmationPopup = document.getElementById("confirmation-popup");
// const closePopupButton = document.getElementById("close-popup");
// const confirmationMessage = document.getElementById("confirmation-message");

// bookingForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const customerName = document.getElementById("customerName").value;
//     const destination = document.getElementById("destination").value;
//     const day = document.getElementById("day").value;
//     const time = document.getElementById("time").value;

//     const message = `Dear ${customerName}, your booking for ${destination} on ${day} at ${time} is confirmed!`;

//     confirmationMessage.textContent = message;
//     confirmationPopup.style.display = "block";
// });

// closePopupButton.addEventListener("click", function () {
//     confirmationPopup.style.display = "none";
// });


function submitForm() {
    const customerName = document.getElementById("customerName").value;
    const destination = document.getElementById("destination").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

    const message = `Dear ${customerName}, your booking for ${destination} on ${day} at ${time} is confirmed!`;

    confirmationMessage.textContent = message;
    confirmationPopup.style.display = "block";

    document.getElementById("content").innerHTML= `
      
      <h4>Hello ${customerName}, you will get scholarship this time</h4>`;

    return true; // Prevent the form from submitting
}

function closePopup() {
    confirmationPopup.style.display = "none";
}

