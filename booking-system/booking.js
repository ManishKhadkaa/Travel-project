document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const travelDate = document.getElementById('travelDate').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (destination && travelDate && name && email && phone) {
        document.getElementById('confirmation').style.display = 'block';
        document.getElementById('confirmation').innerHTML = `
            <h2>Booking Confirmed!</h2>
            <p>Thank you, <strong>${name}</strong>!</p>
            <p>Your trip to <strong>${destination}</strong> on <strong>${travelDate}</strong> has been booked successfully.</p>
            <p>We will contact you at <strong>${email}</strong> or <strong>${phone}</strong> for further details.</p>
        `;
    } else {
        alert('Please fill in all fields.');
    }
});
