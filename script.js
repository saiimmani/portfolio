document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const urlEncoded = new URLSearchParams(formData).toString();

    status.style.display = "block";
    status.textContent = "📤 Sending...";

    fetch("https://script.google.com/macros/s/AKfycbyjbvo7L0vonVx1DA14yFYVzJVl6TRnCAvks1r8Z9BaNi7fAm9jl3lqkGuR4iI7n8fD/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlEncoded,
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.result === "success") {
        status.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        status.textContent = "❌ Error sending message.";
      }
    })
    .catch((error) => {
      console.error("Fetch failed:", error);
      status.textContent = "❌ Submission failed.";
    });
  });
});
