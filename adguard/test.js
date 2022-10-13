function() {
    var ads = document.querySelectorAll('.moj-content,.app-desktop-banner,.sub-header')
        for (var i = 0; i < ads.length; i++) {
            var ad = ads[i];
            ad.style.display = "none";
        }
}
