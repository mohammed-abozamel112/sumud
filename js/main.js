document.addEventListener("DOMContentLoaded", function() {
  AOS.init({ duration: 1000 });

  function trackEvent(eventCategory, eventAction, eventLabel) {
    window.dataLayer = window.dataLayer || [];
    try {
      window.dataLayer.push({
        event: "custom_event",
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
      });
      console.log("Event pushed:", eventCategory, eventAction, eventLabel);
    } catch (error) {
      console.error("Error pushing to dataLayer:", error);
    }
  }
});
