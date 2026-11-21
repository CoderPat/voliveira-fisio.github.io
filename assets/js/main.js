/* Menu toggle, header state and cookie consent. No dependencies. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- Mobile menu ---------- */

  var toggle = document.querySelector('[data-nav-toggle]');
  var menu = document.getElementById('menu');

  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(!root.classList.contains('menu-open'));
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && root.classList.contains('menu-open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    // The panel only exists below the desktop breakpoint (80rem in main.css).
    window.matchMedia('(min-width: 80rem)').addEventListener('change', function (query) {
      if (query.matches) setMenu(false);
    });
  }

  /* ---------- Header hairline once the page is scrolled ---------- */

  var header = document.querySelector('[data-header]');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  if (header) {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Cookie consent ----------
     Nothing optional loads before the visitor says yes. The banner markup is
     only present when Analytics or the reviews widget is configured, and the
     choice is kept in localStorage (no cookie is set to remember it). */

  var STORAGE_KEY = 'vo-consent';
  var banner = document.querySelector('[data-cookie-banner]');
  var gaId = document.body.getAttribute('data-ga-id') || '';
  var widgetTemplate = document.getElementById('reviews-widget-template');
  var widgetSlot = document.querySelector('[data-reviews-slot]');
  var analyticsLoaded = false;
  var widgetMounted = false;

  function readConsent() {
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return null;
    }
  }

  function writeConsent(consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch (error) {
      /* Private mode: the choice simply lasts for this page only. */
    }
  }

  function loadAnalytics() {
    if (!gaId || analyticsLoaded) return;
    analyticsLoaded = true;
    window['ga-disable-' + gaId] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', gaId);
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
    document.head.appendChild(script);
  }

  function stopAnalytics() {
    if (!gaId) return;
    window['ga-disable-' + gaId] = true;
    document.cookie.split(';').forEach(function (cookie) {
      var name = cookie.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0) return;
      var expired = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      document.cookie = expired;
      document.cookie = expired + '; domain=' + window.location.hostname;
      document.cookie = expired + '; domain=.' + window.location.hostname.split('.').slice(-2).join('.');
    });
  }

  function mountWidget() {
    if (!widgetTemplate || !widgetSlot || widgetMounted) return;
    widgetMounted = true;
    var fragment = widgetTemplate.content.cloneNode(true);
    // Scripts copied out of a <template> must be rebuilt to be executed.
    fragment.querySelectorAll('script').forEach(function (inert) {
      var script = document.createElement('script');
      Array.prototype.forEach.call(inert.attributes, function (attribute) {
        script.setAttribute(attribute.name, attribute.value);
      });
      script.text = inert.text;
      inert.parentNode.replaceChild(script, inert);
    });
    widgetSlot.innerHTML = '';
    widgetSlot.appendChild(fragment);
  }

  function applyConsent(consent) {
    if (consent.analytics) loadAnalytics();
    else stopAnalytics();
    if (consent.external) mountWidget();
  }

  function showBanner(show) {
    if (!banner) return;
    banner.hidden = !show;
    root.classList.toggle('consent-open', show);
  }

  function decide(consent) {
    writeConsent(consent);
    applyConsent(consent);
    showBanner(false);
  }

  if (banner) {
    var saved = readConsent();
    if (saved) applyConsent(saved);
    else showBanner(true);

    banner.addEventListener('click', function (event) {
      var button = event.target.closest('[data-consent]');
      if (!button) return;
      var accepted = button.getAttribute('data-consent') === 'accept';
      decide({ analytics: accepted, external: accepted });
    });
  }

  document.addEventListener('click', function (event) {
    if (event.target.closest('[data-cookie-settings]')) {
      showBanner(true);
      return;
    }
    // "Show reviews" grants external content only, leaving analytics as it was.
    if (event.target.closest('[data-consent-external]')) {
      var current = readConsent() || { analytics: false, external: false };
      decide({ analytics: !!current.analytics, external: true });
    }
  });
})();
