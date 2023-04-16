function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    var cookieString = name + "=" + encodeURIComponent(value) + expires + "; path=/; secure; SameSite=Strict";
    document.cookie = cookieString;
  }