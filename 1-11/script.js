document.querySelector('input[type="email"]').addEventListener("input", (e) => {
    var el = e.target;
    console.log(el);
    var { valid, valueMissing, patternMismatch } = el.validity;
    
    if (!valid) {
      el.setCustomValidity("");
      if (valueMissing) el.setCustomValidity("حتما بايد پر شود");
      else if (patternMismatch) el.setCustomValidity("ایمیل نا معتبر است");
  
      el.reportValidity();
    }
  });
  