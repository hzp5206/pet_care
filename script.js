const bookingForm = document.querySelector("#bookingForm");
const formNote = document.querySelector("#formNote");

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "预约信息已收到，我们会尽快与您确认时段和报价。";
  bookingForm.reset();
});
