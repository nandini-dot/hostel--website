// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page refresh

        // Get form values
        const name = form.querySelector('input[placeholder="Student Name"]').value;
        const college = form.querySelector('input[placeholder="College Name"]').value;
        const phone = form.querySelector('input[placeholder="Phone Number"]').value;
        const message = form.querySelector("textarea").value;

        // Basic validation
        if (!name || !college || !phone) {
            alert("❌ Please fill all required fields");
            return;
        }

        // For now, just show success message
        alert("✅ Enquiry submitted successfully!\nWe will contact you soon.");

        // Clear form
        form.reset();

        /*
        🔗 BACKEND INTEGRATION (later)
        fetch("http://127.0.0.1:5000/enquiry", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                college: college,
                phone: phone,
                message: message
            })
        });
        */
    });

});
