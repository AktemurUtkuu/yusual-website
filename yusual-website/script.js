const kickUrl = "https://kick.com/yusual";

if (document.body.hasAttribute("data-kick-redirect")) {
  window.setTimeout(() => {
    window.location.replace(kickUrl);
  }, 250);
}
