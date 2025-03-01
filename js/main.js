AOS.init({ duration: 1000 });
<script>
  function trackEvent(eventCategory, eventAction, eventLabel) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'custom_event',
      'eventCategory': eventCategory,
      'eventAction': eventAction,
      'eventLabel': eventLabel
    });
    console.log('Event pushed:', eventCategory, eventAction, eventLabel);
  }
</script>
