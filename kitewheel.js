var script = document.createElement('script');
script.src = "https://cdn.kitewheel.com/webTrack.v1.js";

var _kw = {};
_kw.options = {
  "listenerId": "797fc841f176f085d0ca8013f40b7e3c",
  "listenerHost": "https://api.kitewheel.com/api/v1/listener/",
  "specifyCookieDomain": {"enabled": false}
}
_kw.events = {
  "trackViews": {"track": true},
  "trackClicks": {"track": true,"noConflict": false},
  "trackForms": {"track": true,"noConflict": false},
  "trackButtons": {"track": true},
  "trackBlurs": {"track": true},
  "trackDivs": {"track": true},
  "trackGeo": {"track": true},
  "trackFingerprint": {"track": true}
};
_kw.success = function(data) {
  // Handle returned data here
};
