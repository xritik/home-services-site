// NestCare Home Services — shared front-end behaviour
// Vanilla JS only — no build step required for hosting.

(function () {
  // Booking form submit (client-side demo).
  // Replace the fetch() call inside with your real booking API endpoint.
  var forms = document.querySelectorAll('[data-booking-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#C0392B';
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) return;

      // ---- Hook up your backend here ----
      // fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(Object.fromEntries(new FormData(form)))
      // });

      var body = form.querySelector('.booking-body');
      var success = form.querySelector('.form-success');
      if (body && success) {
        body.style.display = 'none';
        success.classList.add('visible');
      }
    });
  });

  // FAQ items use native <details>/<summary> — no JS required,
  // but we close siblings for a tidier accordion feel.
  var faqGroups = document.querySelectorAll('[data-faq-group]');
  faqGroups.forEach(function (group) {
    var items = group.querySelectorAll('details');
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  });

  // Mobile nav toggle
  var menuBtn = document.querySelector('.mobile-menu-btn');
  var search = document.querySelector('.header-search');
  if (menuBtn && search) {
    menuBtn.addEventListener('click', function () {
      search.classList.toggle('is-open');
    });
  }
})();
