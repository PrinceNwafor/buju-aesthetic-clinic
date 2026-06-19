/* ==========================================================================
   NONY AESTHETIC CLINIC — page interactions
   --------------------------------------------------------------------------
   ⚙️  EDIT THESE TWO LINES with the clinic's real details, then you're live.
   ========================================================================== */
(function () {
  'use strict';

  /* ===== 1. CLINIC CONFIG (edit me) ===================================== */
  var CONFIG = {
    // WhatsApp number in FULL international format, digits only (234 = Nigeria).
    whatsapp: '2349000000000',
    // Friendly default message used by the "Chat on WhatsApp" buttons.
    defaultMessage: "Hello Nony Aesthetic Clinic 👋 I'd like to book a skin consultation."
  };

  /* ===== 2. Helpers ===================================================== */
  function waLink(message) {
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(message);
  }

  // Point every "Chat on WhatsApp" CTA straight at WhatsApp (opens the app on mobile).
  ['nav-wa', 'hero-wa', 'float-wa', 'footer-wa', 'product-wa'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var msg = CONFIG.defaultMessage;
    if (id === 'product-wa') {
      msg = "Hello Nony Aesthetic Clinic 👋 I'd like to ask about skincare products for my skin.";
    }
    el.setAttribute('href', waLink(msg));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  /* ===== 3. Booking form -> WhatsApp =================================== */
  var form = document.getElementById('consult-form');

  // Don't allow choosing a past date.
  var dateInput = document.getElementById('cf-date');
  if (dateInput) {
    var t = new Date();
    var iso = t.getFullYear() + '-' +
      String(t.getMonth() + 1).padStart(2, '0') + '-' +
      String(t.getDate()).padStart(2, '0');
    dateInput.setAttribute('min', iso);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('cf-name').value || '').trim();
      var phone = (document.getElementById('cf-phone').value || '').trim();
      var treatment = document.getElementById('cf-treatment').value || '';
      var date = document.getElementById('cf-date').value || '';
      var time = document.getElementById('cf-time').value || '';
      var notes = (document.getElementById('cf-notes').value || '').trim();

      if (!name || !phone || !treatment) {
        if (window.showToast) window.showToast('Please add your name, phone and treatment.', 'error');
        else alert('Please add your name, phone and treatment.');
        return;
      }

      var lines = [
        "Hello Nony Aesthetic Clinic 👋 I'd like to book a consultation.",
        '',
        '• Name: ' + name,
        '• Phone: ' + phone,
        '• Treatment: ' + treatment
      ];
      if (date) lines.push('• Preferred date: ' + date);
      if (time) lines.push('• Preferred time: ' + time);
      if (notes) lines.push('• Skin concern: ' + notes);
      lines.push('', 'Please confirm an available slot. Thank you!');

      var url = waLink(lines.join('\n'));
      var win = window.open(url, '_blank');
      if (!win) window.location.href = url; // popup blocked -> same tab
      if (window.showToast) window.showToast('Opening WhatsApp with your details…', 'success');
    });
  }

  /* ===== 4. Tap-to-play video reels =================================== */
  document.querySelectorAll('[data-reel]').forEach(function (reel) {
    var video = reel.querySelector('video');
    if (!video) return;
    reel.addEventListener('click', function () {
      // pause any other playing reel
      document.querySelectorAll('[data-reel].is-playing').forEach(function (other) {
        if (other !== reel) {
          var v = other.querySelector('video');
          if (v) v.pause();
          other.classList.remove('is-playing');
        }
      });
      if (video.paused) {
        var p = video.play();
        if (p && p.then) p.then(function () { reel.classList.add('is-playing'); }).catch(function () {});
        else reel.classList.add('is-playing');
      } else {
        video.pause();
        reel.classList.remove('is-playing');
      }
    });
  });

  /* ===== 5. Footer year =============================================== */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

})();
