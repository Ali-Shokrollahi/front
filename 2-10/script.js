document
  .querySelector('input[type="number"]')
  .addEventListener("input", (e) => {
    var el = e.target;
    var {
      valueMissing,
      rangeUnderflow,
      rangeOverflow,
      stepMismatch,
    } = el.validity;

    if (!el.checkValidity()) {
      if (valueMissing) {
        el.setCustomValidity("حتما بايد پر شود");
      } else if (rangeUnderflow) {
        el.setCustomValidity("مقدار کمتر از مقدار مجاز است است");
      } else if (rangeOverflow) {
        el.setCustomValidity("مقدار بیشتر از مقدار مجاز است");
      } else if (stepMismatch) {
        el.setCustomValidity("بر اساس الگو مقدار نيست");
      }

      el.reportValidity();
    }
  });
