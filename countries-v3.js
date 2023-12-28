var Webflow = Webflow || [];
Webflow.push(function () {
  window.countries = [
    { popular: 0, name: "Afghanistan", iso2: "af", currency: "AFN" },
    { popular: 0, name: "Albania", iso2: "al", currency: "ALL" },
    { popular: 0, name: "Algeria", iso2: "dz", currency: "DZD" },
    { popular: 0, name: "American Samoa", iso2: "as", currency: "USD" },
    { popular: 0, name: "Andorra", iso2: "ad", currency: "EUR" },
    { popular: 0, name: "Angola", iso2: "ao", currency: "AOA" },
    { popular: 0, name: "Anguilla", iso2: "ai", currency: "XCD" },
    { popular: 0, name: "Antigua & Barbuda", iso2: "ag", currency: "XCD" },
    { popular: 0, name: "Argentina", iso2: "ar", currency: "ARS" },
    { popular: 0, name: "Armenia", iso2: "am", currency: "AMD" },
    { popular: 0, name: "Aruba", iso2: "aw", currency: "AWG" },
    { popular: 0, name: "Australia", iso2: "au", currency: "AUD" },
    { popular: 0, name: "Austria", iso2: "at", currency: "EUR" },
    { popular: 0, name: "Azerbaijan", iso2: "az", currency: "AZN" },
    { popular: 0, name: "Bahamas", iso2: "bs", currency: "BSD" },
    { popular: 0, name: "Bahrain", iso2: "bh", currency: "BHD" },
    { popular: 0, name: "Bangladesh", iso2: "bd", currency: "BDT" },
    { popular: 0, name: "Barbados", iso2: "bb", currency: "BBD" },
    { popular: 0, name: "Belarus", iso2: "by", currency: "BYN" },
    { popular: 0, name: "Belgium", iso2: "be", currency: "EUR" },
    { popular: 0, name: "Belize", iso2: "bz", currency: "BZD" },
    { popular: 0, name: "Benin", iso2: "bj", currency: "XOF" },
    { popular: 0, name: "Bermuda", iso2: "bm", currency: "BMD" },
    { popular: 0, name: "Bhutan", iso2: "bt", currency: "BTN" },
    { popular: 0, name: "Bolivia", iso2: "bo", currency: "BOB" },
    { popular: 0, name: "Bosnia Herzegovina", iso2: "ba", currency: "BAM" },
    { popular: 0, name: "Botswana", iso2: "bw", currency: "BWP" },
    { popular: 0, name: "Brazil", iso2: "br", currency: "BRL" },
    { popular: 0, name: "British Virgin Islands", iso2: "bv", currency: "USD" },
    { popular: 0, name: "Brunei", iso2: "bn", currency: "BND" },
    { popular: 0, name: "Bulgaria", iso2: "bg", currency: "BGN" },
    { popular: 0, name: "Burkina Faso", iso2: "bf", currency: "XOF" },
    { popular: 0, name: "Burundi", iso2: "bi", currency: "BIF" },
    { popular: 0, name: "Cabo Verde", iso2: "cv", currency: "CVE" },
    { popular: 0, name: "Cambodia", iso2: "kh", currency: "KHR" },
    { popular: 0, name: "Cameroon", iso2: "cm", currency: "XAF" },
    { popular: 0, name: "Canada", iso2: "ca", currency: "CAD" },
    { popular: 0, name: "Cayman Islands", iso2: "ky", currency: "KYD" },
    {
      popular: 0,
      name: "Central African Republic",
      iso2: "cf",
      currency: "XAF",
    },
    { popular: 0, name: "Chad", iso2: "td", currency: "XAF" },
    { popular: 0, name: "Chile", iso2: "cl", currency: "CLP" },
    { popular: 0, name: "China", iso2: "cn", currency: "CNY" },
    { popular: 0, name: "Colombia", iso2: "co", currency: "COP" },
    { popular: 0, name: "Comoros", iso2: "km", currency: "KMF" },
    { popular: 0, name: "DR Congo", iso2: "cd", currency: "CDF" },
    { popular: 0, name: "Congo", iso2: "cg", currency: "XAF" },
    { popular: 0, name: "Cook Islands", iso2: "ck", currency: "NZD" },
    { popular: 0, name: "Costa Rica", iso2: "cr", currency: "CRC" },
    { popular: 0, name: "Croatia", iso2: "hr", currency: "HRK" },
    { popular: 0, name: "Cuba", iso2: "cu", currency: "CUP" },
    { popular: 0, name: "Curacao", iso2: "cw", currency: "ANG" },
    { popular: 0, name: "Cyprus", iso2: "cy", currency: "EUR" },
    { popular: 0, name: "Czech Republic", iso2: "cz", currency: "CZK" },
    { popular: 0, name: "Denmark", iso2: "dk", currency: "DKK" },
    { popular: 0, name: "Djibouti", iso2: "dj", currency: "DJF" },
    { popular: 0, name: "Dominica", iso2: "dm", currency: "XCD" },
    { popular: 0, name: "Dominican Rep.", iso2: "do", currency: "DOP" },
    { popular: 0, name: "East Timor", iso2: "tl", currency: "USD" },
    { popular: 0, name: "Ecuador", iso2: "ec", currency: "USD" },
    { popular: 0, name: "Egypt", iso2: "eg", currency: "EGP" },
    { popular: 0, name: "El Salvador", iso2: "sv", currency: "USD" },
    { popular: 0, name: "Equatorial Guinea", iso2: "gq", currency: "XAF" },
    { popular: 0, name: "Eritrea", iso2: "er", currency: "ERN" },
    { popular: 0, name: "Estonia", iso2: "ee", currency: "EUR" },
    { popular: 0, name: "Ethiopia", iso2: "et", currency: "ETB" },
    { popular: 0, name: "Faroe Islands", iso2: "fo", currency: "DKK" },
    { popular: 0, name: "Fiji", iso2: "fj", currency: "FJD" },
    { popular: 0, name: "Finland", iso2: "fi", currency: "EUR" },
    { popular: 0, name: "France", iso2: "fr", currency: "EUR" },
    { popular: 0, name: "French Guiana", iso2: "gf", currency: "EUR" },
    { popular: 0, name: "French Polynesia", iso2: "pf", currency: "XPF" },
    { popular: 0, name: "Gabon", iso2: "ga", currency: "XAF" },
    { popular: 0, name: "Gambia", iso2: "gm", currency: "GMD" },
    { popular: 0, name: "Georgia", iso2: "ge", currency: "GEL" },
    { popular: 0, name: "Germany", iso2: "de", currency: "EUR" },
    { popular: 0, name: "Ghana", iso2: "gh", currency: "GHS" },
    { popular: 0, name: "Gibraltar", iso2: "gi", currency: "GIP" },
    { popular: 0, name: "Greece", iso2: "gr", currency: "EUR" },
    { popular: 0, name: "Greenland", iso2: "gl", currency: "DKK" },
    { popular: 0, name: "Grenada", iso2: "gd", currency: "XCD" },
    { popular: 0, name: "Guadeloupe", iso2: "gp", currency: "EUR" },
    { popular: 0, name: "Guam", iso2: "gu", currency: "USD" },
    { popular: 0, name: "Guatemala", iso2: "gt", currency: "GTQ" },
    { popular: 0, name: "Guinea", iso2: "gn", currency: "GNF" },
    { popular: 0, name: "Guinea-Bissau", iso2: "gw", currency: "XOF" },
    { popular: 0, name: "Guyana", iso2: "gy", currency: "GYD" },
    { popular: 0, name: "Haiti", iso2: "ht", currency: "HTG" },
    { popular: 0, name: "Honduras", iso2: "hn", currency: "HNL" },

    { popular: 0, name: "Hong Kong", iso2: "hk", currency: "HKD" },
    { popular: 0, name: "Hungary", iso2: "hu", currency: "HUF" },
    { popular: 0, name: "Iceland", iso2: "is", currency: "ISK" },
    { popular: 0, name: "India", iso2: "in", currency: "INR" },
    { popular: 0, name: "Indonesia", iso2: "id", currency: "IDR" },
    { popular: 0, name: "Iran", iso2: "ir", currency: "IRR" },
    { popular: 0, name: "Iraq", iso2: "iq", currency: "IQD" },
    { popular: 0, name: "Ireland", iso2: "ie", currency: "EUR" },
    { popular: 0, name: "Israel", iso2: "il", currency: "ILS" },
    { popular: 0, name: "Italy", iso2: "it", currency: "EUR" },
    { popular: 0, name: "Ivory Coast", iso2: "ci", currency: "XOF" },
    { popular: 0, name: "Jamaica", iso2: "jm", currency: "JMD" },
    { popular: 0, name: "Japan", iso2: "jp", currency: "JPY" },
    { popular: 0, name: "Jordan", iso2: "jo", currency: "JOD" },
    { popular: 0, name: "Kazakhstan", iso2: "kz", currency: "KZT" },
    { popular: 0, name: "Kenya", iso2: "ke", currency: "KES" },
    { popular: 0, name: "Kiribati", iso2: "ki", currency: "AUD" },
    { popular: 0, name: "Kosovo", iso2: "xk", currency: "EUR" },
    { popular: 0, name: "Kuwait", iso2: "kw", currency: "KWD" },
    { popular: 0, name: "Kyrgyzstan", iso2: "kg", currency: "KGS" },
    { popular: 0, name: "Laos", iso2: "la", currency: "LAK" },
    { popular: 0, name: "Latvia", iso2: "lv", currency: "EUR" },
    { popular: 0, name: "Lebanon", iso2: "lb", currency: "LBP" },
    { popular: 0, name: "Lesotho", iso2: "ls", currency: "LSL" },
    { popular: 0, name: "Liberia", iso2: "lr", currency: "LRD" },
    { popular: 0, name: "Libya", iso2: "ly", currency: "LYD" },
    { popular: 0, name: "Liechtenstein", iso2: "li", currency: "CHF" },
    { popular: 0, name: "Lithuania", iso2: "lt", currency: "EUR" },
    { popular: 0, name: "Luxembourg", iso2: "lu", currency: "EUR" },
    { popular: 0, name: "Macau", iso2: "mo", currency: "MOP" },
    { popular: 0, name: "Macedonia", iso2: "mk", currency: "MKD" },
    { popular: 0, name: "Madagascar", iso2: "mg", currency: "MGA" },
    { popular: 0, name: "Malawi", iso2: "mw", currency: "MWK" },
    { popular: 0, name: "Malaysia", iso2: "my", currency: "MYR" },
    { popular: 0, name: "Maldives", iso2: "mv", currency: "MVR" },
    { popular: 0, name: "Mali", iso2: "ml", currency: "XOF" },
    { popular: 0, name: "Malta", iso2: "mt", currency: "EUR" },
    { popular: 0, name: "Martinique", iso2: "mq", currency: "EUR" },
    { popular: 0, name: "Mauritania", iso2: "mr", currency: "MRU" },
    { popular: 0, name: "Mauritius", iso2: "mu", currency: "MUR" },
    { popular: 0, name: "Mexico", iso2: "mx", currency: "MXN" },
    { popular: 0, name: "Micronesia", iso2: "fm", currency: "USD" },
    { popular: 0, name: "Moldova", iso2: "md", currency: "MDL" },
    { popular: 0, name: "Monaco", iso2: "mc", currency: "EUR" },
    { popular: 0, name: "Mongolia", iso2: "mn", currency: "MNT" },
    { popular: 0, name: "Montenegro", iso2: "me", currency: "EUR" },
    { popular: 0, name: "Montserrat", iso2: "ms", currency: "XCD" },
    { popular: 0, name: "Morocco", iso2: "ma", currency: "MAD" },
    { popular: 0, name: "Mozambique", iso2: "mz", currency: "MZN" },
    { popular: 0, name: "Myanmar", iso2: "mm", currency: "MMK" },
    { popular: 0, name: "Namibia", iso2: "na", currency: "NAD" },
    { popular: 0, name: "Nauru", iso2: "nr", currency: "AUD" },
    { popular: 0, name: "Nepal", iso2: "np", currency: "NPR" },
    { popular: 0, name: "Netherlands", iso2: "nl", currency: "EUR" },
    { popular: 0, name: "New Caledonia", iso2: "nc", currency: "XPF" },
    { popular: 0, name: "New Zealand", iso2: "nz", currency: "NZD" },
    { popular: 0, name: "Nicaragua", iso2: "ni", currency: "NIO" },
    { popular: 0, name: "Niger", iso2: "ne", currency: "XOF" },
    { popular: 0, name: "Nigeria", iso2: "ng", currency: "NGN" },
    { popular: 0, name: "North Korea", iso2: "kp", currency: "KPW" },
    { popular: 0, name: "Norway", iso2: "no", currency: "NOK" },
    { popular: 0, name: "Oman", iso2: "om", currency: "OMR" },
    { popular: 0, name: "Pakistan", iso2: "pk", currency: "PKR" },
    { popular: 0, name: "Palau", iso2: "pw", currency: "USD" },
    { popular: 0, name: "Palestine", iso2: "ps", currency: "ILS" },
    { popular: 0, name: "Panama", iso2: "pa", currency: "PAB" },
    { popular: 0, name: "Papua New Guinea", iso2: "pg", currency: "PGK" },
    { popular: 0, name: "Paraguay", iso2: "py", currency: "PYG" },
    { popular: 0, name: "Peru", iso2: "pe", currency: "PEN" },
    { popular: 0, name: "Philippines", iso2: "ph", currency: "PHP" },
    { popular: 0, name: "Poland", iso2: "pl", currency: "PLN" },
    { popular: 0, name: "Portugal", iso2: "pt", currency: "EUR" },
    { popular: 0, name: "Puerto Rico", iso2: "pr", currency: "USD" },
    { popular: 0, name: "Qatar", iso2: "qa", currency: "QAR" },
    { popular: 0, name: "Reunion", iso2: "re", currency: "EUR" },
    { popular: 0, name: "Romania", iso2: "ro", currency: "RON" },
    { popular: 0, name: "Russian Federation", iso2: "ru", currency: "RUB" },
    { popular: 0, name: "Rwanda", iso2: "rw", currency: "RWF" },
    { popular: 0, name: "Saint Kitts and Nevis", iso2: "kn", currency: "XCD" },
    { popular: 0, name: "Saint Lucia", iso2: "lc", currency: "XCD" },
    {
      popular: 0,
      name: "Saint Pierre and Miquelon",
      iso2: "pm",
      currency: "EUR",
    },
    { popular: 0, name: "Samoa", iso2: "ws", currency: "WST" },
    { popular: 0, name: "San Marino", iso2: "sm", currency: "EUR" },
    { popular: 0, name: "Sao Tome and Principe", iso2: "st", currency: "STN" },
    { popular: 0, name: "Saudi Arabia", iso2: "sa", currency: "SAR" },
    { popular: 0, name: "Senegal", iso2: "sn", currency: "XOF" },
    { popular: 0, name: "Senegal", iso2: "sn", currency: "XOF" },
    { popular: 0, name: "Serbia", iso2: "rs", currency: "RSD" },
    { popular: 0, name: "Seychelles", iso2: "sc", currency: "SCR" },
    { popular: 0, name: "Sierra Leone", iso2: "sl", currency: "SLL" },
    { popular: 0, name: "Singapore", iso2: "sg", currency: "SGD" },
    { popular: 0, name: "Slovakia", iso2: "sk", currency: "EUR" },
    { popular: 0, name: "Slovenia", iso2: "si", currency: "EUR" },
    { popular: 0, name: "Solomon Islands", iso2: "sb", currency: "SBD" },
    { popular: 0, name: "Somalia", iso2: "so", currency: "SOS" },
    { popular: 0, name: "South Africa", iso2: "za", currency: "ZAR" },
    { popular: 0, name: "South Korea", iso2: "kr", currency: "KRW" },
    { popular: 0, name: "South Sudan", iso2: "ss", currency: "SSP" },
    { popular: 0, name: "Spain", iso2: "es", currency: "EUR" },
    { popular: 0, name: "Sri Lanka", iso2: "lk", currency: "LKR" },
    {
      popular: 0,
      name: "St. Vincent & the Grenadines",
      iso2: "vc",
      currency: "XCD",
    },
    { popular: 0, name: "Sudan", iso2: "sd", currency: "SDG" },
    { popular: 0, name: "Suriname", iso2: "sr", currency: "SRD" },
    { popular: 0, name: "Swaziland", iso2: "sz", currency: "SZL" },
    { popular: 0, name: "Sweden", iso2: "se", currency: "SEK" },
    { popular: 0, name: "Switzerland", iso2: "ch", currency: "CHF" },
    { popular: 0, name: "Syria", iso2: "sy", currency: "SYP" },
    { popular: 0, name: "Taiwan", iso2: "tw", currency: "TWD" },
    { popular: 0, name: "Tajikistan", iso2: "tj", currency: "TJS" },
    { popular: 0, name: "Tanzania", iso2: "tz", currency: "TZS" },
    { popular: 0, name: "Thailand", iso2: "th", currency: "THB" },
    { popular: 0, name: "Togo", iso2: "tg", currency: "XOF" },
    { popular: 0, name: "Tonga", iso2: "to", currency: "TOP" },
    { popular: 0, name: "Trinidad and Tobago", iso2: "tt", currency: "TTD" },
    { popular: 0, name: "Tunisia", iso2: "tn", currency: "TND" },
    { popular: 0, name: "Turkey", iso2: "tr", currency: "TRY" },
    { popular: 0, name: "Turkmenistan", iso2: "tm", currency: "TMT" },
    {
      popular: 0,
      name: "Turks and Caicos Islands",
      iso2: "tc",
      currency: "USD",
    },
    { popular: 0, name: "Tuvalu", iso2: "tv", currency: "AUD" },
    { popular: 0, name: "US Virgin Islands", iso2: "vi", currency: "USD" },
    { popular: 0, name: "Uganda", iso2: "ug", currency: "UGX" },
    { popular: 0, name: "Ukraine", iso2: "ua", currency: "UAH" },
    { popular: 0, name: "UAE", iso2: "ae", currency: "AED" },
    { popular: 0, name: "UK", iso2: "gb", currency: "GBP" },
    { popular: 0, name: "USA", iso2: "us", currency: "USD" },
    { popular: 0, name: "Uruguay", iso2: "uy", currency: "UYU" },
    { popular: 0, name: "Uzbekistan", iso2: "uz", currency: "UZS" },
    { popular: 0, name: "Vanuatu", iso2: "vu", currency: "VUV" },
    { popular: 0, name: "Venezuela", iso2: "ve", currency: "VES" },
    { popular: 0, name: "Vietnam", iso2: "vn", currency: "VND" },
    { popular: 0, name: "Yemen", iso2: "ye", currency: "YER" },
    { popular: 0, name: "Zambia", iso2: "zm", currency: "ZMW" },
    { popular: 0, name: "Zimbabwe", iso2: "zw", currency: "ZWL" },
  ];

  window.current_country = "ph";
  window.last_imei = "356488017511806";

  let imei = $("#imei"),
    hidden_imei = $("#hidden_imei"),
    submitForm = $("#submitForm"),
    hidden_make = $("#hidden_make"),
    hidden_model = $("#hidden_model"),
    hidden_brand = $("#hidden_brand"),
    brand_apple = $("#brand_apple"),
    brand_samsung = $("#brand_samsung"),
    brand_motorola = $("#brand_motorola"),
    brand_alcatel = $("#brand_alcatel"),
    brand_lg = $("#brand_lg"),
    brand_huawei = $("#brand_huawei"),
    brand_oneplus = $("#brand_oneplus"),
    brand_nokia = $("#brand_nokia"),
    brand_zte = $("#brand_zte"),
    brand_oppo = $("#brand_oppo"),
    brand_sony = $("#brand_sony"),
    brand_xiaomi = $("#brand_xiaomi"),
    brand_google = $("#brand_google"),
    hidden_email = $("#hidden_email"),
    hero_image_holder = $("#hero_image_holder"),
    hero_network_holder = $("#hero_network_holder"),
    phoneholder = $("#phoneholder"),
    hero_model_text = $("#hero_model_text"),
    additional_links = $("#additional_links"),
    additional_links_apple = $("#additional_links_apple"),
    set_device_id,
    device_image_set = false,
    network_image = $("#network_image"),
    network_image_replace = $("#network_image_replace"),
    carrier_scr = null;
  request_imei = "";

  var set_model = 0;

  var xhr;
  var select_state, $select_state;
  var select_city, $select_city;
  var select_model, $select_model;
  var select_make, $select_make;

  let typingTimer,
    doneTypingInterval = 100;

  if (request_imei.length > 1) {
    request_imei = request_imei.replace(/\s/g, "");
    request_imei = request_imei.replace(/\D/g, "");
    imei.val(request_imei);
    hidden_imei.show();
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  }

  imei.on("keyup", function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

  imei.on({
    keydown: function (e) {
      clearTimeout(typingTimer);
      if (e.which === 32 || e.which === 189) return false;
    },
    change: function () {
      this.value = this.value.replace(/\s/g, "");
      this.value = this.value.replace(/\D/g, "");
    },
  });

  function getDevice(imei) {
    return axios
      .get(
        "/api/get-device?imei=" +
          imei +
          "&token=" +
          $("meta[name=csrf-token]").attr("content")
      )
      .then((response) => {
        return response.data;
      })
      .catch((response) => {
        hidden_make.show();
        // hidden_model.show();
        hidden_email.show();
        submitForm.html(
          '<span class="fad fa-lock mr-2"></span> Awaiting Device Selection'
        );
        return false;
      });
  }

  $(document).on("paste", "#imei", function (e) {
    e.preventDefault();
    // prevent copying action
    //alert(e.originalEvent.clipboardData.getData('Text'));
    var withoutSpaces = e.originalEvent.clipboardData.getData("Text");
    withoutSpaces = withoutSpaces.replace(/\s+/g, "");
    withoutSpaces = withoutSpaces.replace(/\D/g, "");
    $(this).val(withoutSpaces);
    // you need to use val() not text()
    imei.keyup();
  });

  function removeWhiteSpaces(s) {
    this.value = s.replace(/\s/g, "");
    this.value = s.replace(/\D/g, "");
  }

  let make_options = [
    { name: "Apple", slug: "apple" },
    { name: "Samsung", slug: "samsung" },
    { name: "Huawei", slug: "huawei" },
    { name: "Lg", slug: "lg" },
    { name: "Lanix", slug: "lanix" },
    { name: "Sony-ericsson", slug: "sony-ericsson" },
    { name: "Blackberry", slug: "blackberry" },
    { name: "Htc", slug: "htc" },
    { name: "Motorola", slug: "motorola" },
    { name: "Zte", slug: "zte" },
    { name: "Nokia", slug: "nokia" },
    { name: "Sony", slug: "sony" },
    { name: "Lenovo", slug: "lenovo" },
    { name: "Toshiba", slug: "toshiba" },
    { name: "Vodafone", slug: "vodafone-phone" },
    { name: "Pantech", slug: "pantech" },
    { name: "Alcatel", slug: "alcatel" },
    { name: "Motorola", slug: "motorola" },
    { name: "Google", slug: "google" },
  ];

  function getMakes() {
    select_make.disable();
    select_make.load(function (callback) {
      xhr && xhr.abort();
      xhr = $.ajax({
        url: "/api/get-makes/",
        success: function (results) {
          let data = results.data;
          make_options = data;
          select_make.enable();
          callback(data);
        },
        error: function () {
          callback();
        },
      });
    });
  }

  cleanIMEINumber = function (e) {
    e.preventDefault();
    var pastedText = "";

    if (e.clipboardData && e.clipboardData.getData) {
      // Standards Compliant FIRST!
      pastedText = e.clipboardData.getData("text/plain");
    } else if (window.clipboardData && window.clipboardData.getData) {
      // IE
      pastedText = window.clipboardData.getData("Text");
    }

    this.value = pastedText.replace(/\s/g, "");
  };

  imei.onpaste = cleanIMEINumber;

  function isIMEI(s) {
    var etal = /^[0-9]{15}$/;
    if (!etal.test(s)) return false;
    sum = 0;
    mul = 2;
    l = 14;
    for (i = 0; i < l; i++) {
      digit = s.substring(l - i - 1, l - i);
      tp = parseInt(digit, 10) * mul;
      if (tp >= 10) sum += (tp % 10) + 1;
      else sum += tp;
      if (mul == 1) mul++;
      else mul--;
    }
    chk = (10 - (sum % 10)) % 10;
    if (chk != parseInt(s.substring(14, 15), 10)) return false;
    return true;
  }

  function clearImages() {
    brand_apple.hide();
    $("#brand_apple").hide();

    brand_samsung.hide();
    $("#brand_samsung").hide();

    brand_oneplus.hide();
    $("#brand_oneplus").hide();
    brand_motorola.hide();
    $("#brand_motorola").hide();
    brand_alcatel.hide();
    $("#brand_alcatel").hide();
    brand_lg.hide();
    $("#brand_lg").hide();
    brand_huawei.hide();
    $("#brand_huawei").hide();
    brand_nokia.hide();
    $("#brand_nokia").hide();
    brand_zte.hide();
    $("#brand_zte").hide();
    brand_oppo.hide();
    $("#brand_oppo").hide();
    brand_sony.hide();
    $("#brand_sony").hide();
    brand_xiaomi.hide();
    $("#brand_xiaomi").hide();
    brand_google.hide();
    $("#brand_google").hide();
  }

  function updateCarrier() {
    if (typeof current_carrier != "undefined" && current_carrier !== null) {
      $select_city[0].selectize.setValue(current_carrier);
    }
  }

  $select_state = $("#hero_country_id").selectize({
    sortField: "text",
    create: false,
    valueField: "name",
    labelField: "name",
    placeholder: "Select Country",
    preload: true,
    searchField: ["name"],
    options: countries,
    render: {
      item: function (item, escape) {
        return (
          '<div class="px-2">' +
          (item.iso2
            ? '<span class="iso2 mr-2"><span class="flag-icon flag-icon-' +
              escape(item.iso2) +
              '" data-currency="' +
              item.currency +
              '"></span></span>'
            : "") +
          (item.name
            ? '<span class="name">' + escape(item.name) + "</span>"
            : "") +
          "</div>"
        );
      },
      option: function (item, escape) {
        var label = item.name || item.iso2;
        var iso2 = item.name ? item.iso2 : null;
        return (
          '<div class="px-2 pb-1">' +
          (iso2
            ? '<span class="iso2 mr-2"><span class="flag-icon flag-icon-' +
              escape(item.iso2) +
              '" data-currency="' +
              item.currency +
              '"></span></span>'
            : "") +
          '<span class="label">' +
          escape(label) +
          "</span>" +
          "</div>"
        );
      },
    },
    onChange: function (value) {
      if (!value.length) return;
      $("#hidden_carrier").show();
      select_city.disable();
      select_city.clearOptions();
      $select_city[0].selectize.setValue();
      select_city.load(function (callback) {
        xhr && xhr.abort();
        xhr = $.ajax({
          url: "https://us-central1-weunlockanyphone.cloudfunctions.net/unlock?action=GetNetworks",
          success: function (results) {
            let data = results["API"];
            select_city.enable();

            const getCountry = data["Country"].find(
              (country) => country["Name"] === value
            );
            console.log(getCountry["Network"]);
            callback(getCountry["Network"]);
            updateCarrier();
          },
          error: function () {
            callback();
          },
        });
      });
    },
  });

  $select_city = $("#hero_carrier_id").selectize({
    valueField: "Name",
    create: false,
    labelField: "Name",
    placeholder: "Select network...",
    searchField: ["Name"],
    render: {
      item: function (item, escape) {
        var label = item["Name"] || item["Image"];
        var image_path = item["Name"] ? item["Image"] : null;
        return (
          '<div class="px-1 pb-1">' +
          (image_path
            ? '<span class="iso2 mr-2" style="position: relative; top: 0;"><img width="24" src="' +
              escape(item["Image"]) +
              '" alt=""></span>'
            : "") +
          '<span class="label" style="position: absolute; left: 47px; top: 7px;">' +
          escape(label) +
          "</span>" +
          "</div>"
        );
      },
      option: function (item, escape) {
        var label = item["Name"] || item["Image"];
        var image_path = item["Name"] ? item["Image"] : null;
        return (
          '<div class="px-2 pb-1">' +
          (image_path
            ? '<span class="iso2 mr-2"><img width="32" src="' +
              escape(item["Image"]) +
              '" alt=""></span>'
            : "") +
          '<span class="label">' +
          escape(label) +
          "</span>" +
          "</div>"
        );
      },
    },

    onChange: function (value) {
      if (!value.length) return;

      $("#net-img").val(value);
      hidden_imei.show();

      //getCarrierLogo(value);

      if (imei.val().length > 0) {
        submitForm.prop("disabled", false).removeClass("disabled");
      }

      $(".imei-input-wrapper").show();
    },
  });

  // async function getCarrierLogo(id) {
  //   axios
  //     .get("/api/tools/carrier/", {
  //       params: {
  //         country_iso2: $select_state[0].selectize.getValue(),
  //         carrier_id: id,
  //       },
  //     })
  //     .then(function (response) {
  //       let data = response.data;

  //       carrier_scr = data.image;

  //       if (network_image.length) {
  //         network_image.attr("src", carrier_scr);
  //       } else if (network_image_replace.length) {
  //         set_network_image(carrier_scr);
  //       }
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // }

  function set_network_image() {
    if (hero_network_holder.length) {
      hero_network_holder
        .fadeOut(function () {
          hero_network_holder.empty();
          hero_network_holder.append(
            '<img id="network_image_replace" width="100" height="100" src="' +
              carrier_scr +
              '" alt="Network Image" class="lazy img-fluid img-center rounded wow fadeInUp">'
          );
        })
        .fadeIn();
    }

    network_image.attr("src", carrier_scr).fadeIn();
  }

  function check_tac(imei_string) {
    axios
      .get("/api/tools/check-tac", {
        params: {
          imei: imei_string,
        },
      })
      .then(function (response) {
        let data = response.data;

        if (data) {
          check_imei(imei_string);
        } else {
          hide_model();

          $("#hidden_make_form").show();
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  function hide_model() {
    $("#model_name").text();
    $("#detected").val(1);

    $("#hidden_model").parent().fadeOut();
    $("#hero_model_id").parent().fadeOut();
    $("#hero_model_id").parent().parent().fadeOut();
  }

  function check_imei(string) {
    additional_links.fadeOut();
    additional_links_apple.fadeOut();

    if (isIMEI(string)) {
      $("#imeiValidBadge")
        .show()
        .html('<i class="fas fa-check mr-1"></i> VALID')
        .addClass("bg-success")
        .removeClass("bg-danger");

      getDevice(string).then((data) => {
        set_model = data.device_id;

        if (!set_model) {
          hide_model();
        }

        if (data.device_slug) {
          $("#hidden_make_form").fadeOut();

          set_device_id = data.device_id;

          if (data.device_make) {
            $("#hidden_model")
              .parent()
              .fadeIn(function () {
                $("#hidden_model").fadeIn(function () {
                  if (data.device_make === "apple") {
                    clearImages();
                    brand_apple.show();
                    $("#brand_apple").show();
                    additional_links_apple.fadeIn("slow");
                  }

                  if (data.device_make === "samsung") {
                    clearImages();
                    brand_samsung.show();
                    $("#brand_samsung").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "oneplus") {
                    clearImages();
                    brand_oneplus.show();
                    $("#brand_oneplus").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "motorola") {
                    clearImages();
                    brand_motorola.show();
                    $("#brand_motorola").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "alcatel") {
                    clearImages();
                    brand_alcatel.show();
                    $("#brand_alcatel").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "lg") {
                    clearImages();
                    brand_lg.show();
                    $("#brand_lg").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "huawei") {
                    clearImages();
                    brand_huawei.show();
                    $("#brand_huawei").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "nokia") {
                    clearImages();
                    brand_nokia.show();
                    $("#brand_nokia").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "zte") {
                    clearImages();
                    brand_zte.show();
                    $("#brand_zte").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "oppo") {
                    clearImages();
                    brand_oppo.show();
                    $("#brand_oppo").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "sony") {
                    clearImages();
                    brand_sony.show();
                    $("#brand_sony").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "xiaomi") {
                    clearImages();
                    brand_xiaomi.show();
                    $("#brand_xiaomi").show();
                    additional_links.fadeIn("slow");
                  }
                  if (data.device_make === "google") {
                    clearImages();
                    brand_google.show();
                    $("#brand_google").show();
                    additional_links.fadeIn("slow");
                  }
                });
              });
          }
          $select_model[0].selectize.setValue(data.device_id);
          $("#model_name").text(data.device_name);
          $("#manu_name").text(data.device_make.toUpperCase());
          enable_submit(true);
        } else {
          enable_submit(false);
        }

        set_network_image();
      });
    } else {
    }
  }

  function enable_submit(enable) {
    if (
      (isIMEI(imei.val()) &&
        ($("#model_name").text().length > 0 ||
          $("#hero_make_id").val().length > 0)) ||
      enable
    ) {
      enable = true;
    } else if (!enable) {
      enable = false;
    } else {
      enable = false;
    }

    if (enable) {
      submitForm.prop("disabled", false).removeClass("disabled");
    } else {
      if (imei.val().length === 15 && !isIMEI(imei.val())) {
        $("#imeiValidBadge").fadeIn("slow", function () {
          $("#imeiValidBadge")
            .html('<i class="fas fa-times mr-1 "></i> INVALID')
            .addClass("bg-danger")
            .removeClass("bg-success");
        });
      } else {
        $("#imeiValidBadge").fadeOut();
      }

      submitForm.prop("disabled", true).addClass("disabled");
    }
  }

  function doneTyping() {
    let string = imei.val();

    hide_model();
    enable_submit(false);

    if (isIMEI(imei.val())) {
      check_tac(string);
    } else if (string.length < 8) {
      $("#hidden_make_form").fadeOut();
      enable_submit(false);
    }
  }
  $select_model = $("#hero_model_id").selectize({
    valueField: "id",
    labelField: "name",
    placeholder: "Select Device Model",
    searchField: ["name"],
    options: [],
    optgroups: [],
    render: {
      optgroup_header: function (data, escape) {
        return '<div class="optgroup-header">' + escape(data.name) + "</div>";
      },
      item: function (item, escape) {
        return (
          '<div class="px-1">' +
          (item.name
            ? '<span class="name">' + escape(item.name) + "</span>"
            : "") +
          "</div>"
        );
      },
      option: function (item, escape) {
        var label = item.name || item.image_path;
        var image_path = item.name ? item.image_path : null;
        return (
          '<div class="px-2 pb-1">' +
          "" +
          '<span class="label">' +
          escape(label) +
          "</span>" +
          "</div>"
        );
      },
    },
    onChange: function (value) {
      if (isIMEI(imei.val())) {
        //  submitForm.html('<span class="fad fa-unlock-alt mr-2"></span> Unlock for any Sim Card')
        enable_submit();
      } else {
        submitForm.prop("disabled", true).addClass("disabled");
      }
    },
  });

  //
  select_city = $select_city[0].selectize;
  select_state = $select_state[0].selectize;

  try {
    select_model = $select_model[0].selectize;
    select_make = $select_make[0].selectize;
  } catch (err) {}

  $(function () {
    function getCountry() {
      var countries = {
        AD: "Andorra",
        AE: "UAE",
        AF: "Afghanistan",
        AG: "Antigua and Barbuda",
        AI: "Anguilla",
        AL: "Albania",
        AM: "Armenia",
        AO: "Angola",
        AQ: "Antarctica",
        AR: "Argentina",
        AS: "American Samoa",
        AT: "Austria",
        AU: "Australia",
        AW: "Aruba",
        AX: "Ã…land Islands",
        AZ: "Azerbaijan",
        BA: "Bosnia and Herzegovina",
        BB: "Barbados",
        BD: "Bangladesh",
        BE: "Belgium",
        BF: "Burkina Faso",
        BG: "Bulgaria",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BL: "Saint BarthÃ©lemy",
        BM: "Bermuda",
        BN: "Brunei",
        BO: "Bolivia",
        BQ: "Caribbean Netherlands",
        BR: "Brazil",
        BS: "Bahamas",
        BT: "Bhutan",
        BV: "Bouvet Island",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Canada",
        CC: "Cocos Islands",
        CD: "Democratic Republic of the Congo",
        CF: "Central African Republic",
        CG: "Republic of the Congo",
        CH: "Switzerland",
        CI: "Ivory Coast",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon",
        CN: "China",
        CO: "Colombia",
        CR: "Costa Rica",
        CU: "Cuba",
        CV: "Cabo Verde",
        CW: "CuraÃ§ao",
        CX: "Christmas Island",
        CY: "Cyprus",
        CZ: "Czechia",
        DE: "Germany",
        DJ: "Djibouti",
        DK: "Denmark",
        DM: "Dominica",
        DO: "Dominican Republic",
        DZ: "Algeria",
        EC: "Ecuador",
        EE: "Estonia",
        EG: "Egypt",
        EH: "Western Sahara",
        ER: "Eritrea",
        ES: "Spain",
        ET: "Ethiopia",
        FI: "Finland",
        FJ: "Fiji",
        FK: "Falkland Islands",
        FM: "Micronesia",
        FO: "Faroe Islands",
        FR: "France",
        GA: "Gabon",
        GB: "UK",
        GD: "Grenada",
        GE: "Georgia",
        GF: "French Guiana",
        GG: "Guernsey",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "Greenland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Greece",
        GS: "South Georgia and the South Sandwich Islands",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HK: "Hong Kong",
        HM: "Heard Island and McDonald Islands",
        HN: "Honduras",
        HR: "Croatia",
        HT: "Haiti",
        HU: "Hungary",
        ID: "Indonesia",
        IE: "Ireland",
        IL: "Israel",
        IM: "Isle of Man",
        IN: "India",
        IO: "British Indian Ocean Territory",
        IQ: "Iraq",
        IR: "Iran",
        IS: "Iceland",
        IT: "Italy",
        JE: "Jersey",
        JM: "Jamaica",
        JO: "Jordan",
        JP: "Japan",
        KE: "Kenya",
        KG: "Kyrgyzstan",
        KH: "Cambodia",
        KI: "Kiribati",
        KM: "Comoros",
        KN: "Saint Kitts and Nevis",
        KP: "North Korea",
        KR: "South Korea",
        KW: "Kuwait",
        KY: "Cayman Islands",
        KZ: "Kazakhstan",
        LA: "Laos",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        LY: "Libya",
        MA: "Morocco",
        MC: "Monaco",
        MD: "Moldova",
        ME: "Montenegro",
        MF: "Saint Martin",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MK: "North Macedonia",
        ML: "Mali",
        MM: "Myanmar",
        MN: "Mongolia",
        MO: "Macao",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Netherlands",
        NO: "Norway",
        NP: "Nepal",
        NR: "Nauru",
        NU: "Niue",
        NZ: "New Zealand",
        OM: "Oman",
        PA: "Panama",
        PE: "Peru",
        PF: "French Polynesia",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Poland",
        PM: "Saint Pierre and Miquelon",
        PN: "Pitcairn",
        PR: "Puerto Rico",
        PS: "Palestine",
        PT: "Portugal",
        PW: "Palau",
        PY: "Paraguay",
        QA: "Qatar",
        RE: "RÃ©union",
        RO: "Romania",
        RS: "Serbia",
        RU: "Russian Federation",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SD: "Sudan",
        SE: "Sweden",
        SG: "Singapore",
        SH: "Saint Helena, Ascension and Tristan da Cunha",
        SI: "Slovenia",
        SJ: "Svalbard and Jan Mayen",
        SK: "Slovakia",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SR: "Suriname",
        SS: "South Sudan",
        ST: "Sao Tome and Principe",
        SV: "El Salvador",
        SX: "Sint Maarten",
        SY: "Syria",
        SZ: "Eswatini",
        TC: "Turks and Caicos Islands",
        TD: "Chad",
        TF: "French Southern Territories",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TL: "Timor-Leste",
        TM: "Turkmenistan",
        TN: "Tunisia",
        TO: "Tonga",
        TR: "Turkey",
        TT: "Trinidad and Tobago",
        TV: "Tuvalu",
        TW: "Taiwan",
        TZ: "Tanzania",
        UA: "Ukraine",
        UG: "Uganda",
        UM: "US Virgin Islands",
        US: "USA",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VA: "Holy See",
        VC: "Saint Vincent and the Grenadines",
        VE: "Venezuela",
        VG: "Virgin Islands (UK)",
        VI: "Virgin Islands (US)",
        VN: "Vietnam",
        VU: "Vanuatu",
        WF: "Wallis and Futuna",
        WS: "Samoa",
        YE: "Yemen",
        YT: "Mayotte",
        ZA: "South Africa",
        ZM: "Zambia",
        ZW: "Zimbabwe",
      };
      var timezones = {
        "Africa/Abidjan": {
          u: 0,
          c: ["CI", "BF", "GH", "GM", "GN", "ML", "MR", "SH", "SL", "SN", "TG"],
        },
        "Africa/Accra": {
          a: "Africa/Abidjan",
          c: ["GH"],
          r: 1,
        },
        "Africa/Addis_Ababa": {
          a: "Africa/Nairobi",
          c: ["ET"],
          r: 1,
        },
        "Africa/Algiers": {
          u: 60,
          c: ["DZ"],
        },
        "Africa/Asmara": {
          a: "Africa/Nairobi",
          c: ["ER"],
          r: 1,
        },
        "Africa/Asmera": {
          a: "Africa/Nairobi",
          c: ["ER"],
          r: 1,
        },
        "Africa/Bamako": {
          a: "Africa/Abidjan",
          c: ["ML"],
          r: 1,
        },
        "Africa/Bangui": {
          a: "Africa/Lagos",
          c: ["CF"],
          r: 1,
        },
        "Africa/Banjul": {
          a: "Africa/Abidjan",
          c: ["GM"],
          r: 1,
        },
        "Africa/Bissau": {
          u: 0,
          c: ["GW"],
        },
        "Africa/Blantyre": {
          a: "Africa/Maputo",
          c: ["MW"],
          r: 1,
        },
        "Africa/Brazzaville": {
          a: "Africa/Lagos",
          c: ["CG"],
          r: 1,
        },
        "Africa/Bujumbura": {
          a: "Africa/Maputo",
          c: ["BI"],
          r: 1,
        },
        "Africa/Cairo": {
          u: 120,
          c: ["EG"],
        },
        "Africa/Casablanca": {
          u: 60,
          d: 0,
          c: ["MA"],
        },
        "Africa/Ceuta": {
          u: 60,
          d: 120,
          c: ["ES"],
        },
        "Africa/Conakry": {
          a: "Africa/Abidjan",
          c: ["GN"],
          r: 1,
        },
        "Africa/Dakar": {
          a: "Africa/Abidjan",
          c: ["SN"],
          r: 1,
        },
        "Africa/Dar_es_Salaam": {
          a: "Africa/Nairobi",
          c: ["TZ"],
          r: 1,
        },
        "Africa/Djibouti": {
          a: "Africa/Nairobi",
          c: ["DJ"],
          r: 1,
        },
        "Africa/Douala": {
          a: "Africa/Lagos",
          c: ["CM"],
          r: 1,
        },
        "Africa/El_Aaiun": {
          u: 60,
          d: 0,
          c: ["EH"],
        },
        "Africa/Freetown": {
          a: "Africa/Abidjan",
          c: ["SL"],
          r: 1,
        },
        "Africa/Gaborone": {
          a: "Africa/Maputo",
          c: ["BW"],
          r: 1,
        },
        "Africa/Harare": {
          a: "Africa/Maputo",
          c: ["ZW"],
          r: 1,
        },
        "Africa/Johannesburg": {
          u: 120,
          c: ["ZA", "LS", "SZ"],
        },
        "Africa/Juba": {
          u: 120,
          c: ["SS"],
        },
        "Africa/Kampala": {
          a: "Africa/Nairobi",
          c: ["UG"],
          r: 1,
        },
        "Africa/Khartoum": {
          u: 120,
          c: ["SD"],
        },
        "Africa/Kigali": {
          a: "Africa/Maputo",
          c: ["RW"],
          r: 1,
        },
        "Africa/Kinshasa": {
          a: "Africa/Lagos",
          c: ["CD"],
          r: 1,
        },
        "Africa/Lagos": {
          u: 60,
          c: ["NG", "AO", "BJ", "CD", "CF", "CG", "CM", "GA", "GQ", "NE"],
        },
        "Africa/Libreville": {
          a: "Africa/Lagos",
          c: ["GA"],
          r: 1,
        },
        "Africa/Lome": {
          a: "Africa/Abidjan",
          c: ["TG"],
          r: 1,
        },
        "Africa/Luanda": {
          a: "Africa/Lagos",
          c: ["AO"],
          r: 1,
        },
        "Africa/Lubumbashi": {
          a: "Africa/Maputo",
          c: ["CD"],
          r: 1,
        },
        "Africa/Lusaka": {
          a: "Africa/Maputo",
          c: ["ZM"],
          r: 1,
        },
        "Africa/Malabo": {
          a: "Africa/Lagos",
          c: ["GQ"],
          r: 1,
        },
        "Africa/Maputo": {
          u: 120,
          c: ["MZ", "BI", "BW", "CD", "MW", "RW", "ZM", "ZW"],
        },
        "Africa/Maseru": {
          a: "Africa/Johannesburg",
          c: ["LS"],
          r: 1,
        },
        "Africa/Mbabane": {
          a: "Africa/Johannesburg",
          c: ["SZ"],
          r: 1,
        },
        "Africa/Mogadishu": {
          a: "Africa/Nairobi",
          c: ["SO"],
          r: 1,
        },
        "Africa/Monrovia": {
          u: 0,
          c: ["LR"],
        },
        "Africa/Nairobi": {
          u: 180,
          c: ["KE", "DJ", "ER", "ET", "KM", "MG", "SO", "TZ", "UG", "YT"],
        },
        "Africa/Ndjamena": {
          u: 60,
          c: ["TD"],
        },
        "Africa/Niamey": {
          a: "Africa/Lagos",
          c: ["NE"],
          r: 1,
        },
        "Africa/Nouakchott": {
          a: "Africa/Abidjan",
          c: ["MR"],
          r: 1,
        },
        "Africa/Ouagadougou": {
          a: "Africa/Abidjan",
          c: ["BF"],
          r: 1,
        },
        "Africa/Porto-Novo": {
          a: "Africa/Lagos",
          c: ["BJ"],
          r: 1,
        },
        "Africa/Sao_Tome": {
          u: 0,
          c: ["ST"],
        },
        "Africa/Timbuktu": {
          a: "Africa/Abidjan",
          c: ["ML"],
          r: 1,
        },
        "Africa/Tripoli": {
          u: 120,
          c: ["LY"],
        },
        "Africa/Tunis": {
          u: 60,
          c: ["TN"],
        },
        "Africa/Windhoek": {
          u: 120,
          c: ["NA"],
        },
        "America/Adak": {
          u: -600,
          d: -540,
          c: ["US"],
        },
        "America/Anchorage": {
          u: -540,
          d: -480,
          c: ["US"],
        },
        "America/Anguilla": {
          a: "America/Puerto_Rico",
          c: ["AI"],
          r: 1,
        },
        "America/Antigua": {
          a: "America/Puerto_Rico",
          c: ["AG"],
          r: 1,
        },
        "America/Araguaina": {
          u: -180,
          c: ["BR"],
        },
        "America/Argentina/Buenos_Aires": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/Catamarca": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/ComodRivadavia": {
          a: "America/Argentina/Catamarca",
          r: 1,
        },
        "America/Argentina/Cordoba": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/Jujuy": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/La_Rioja": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/Mendoza": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/Rio_Gallegos": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/Salta": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/San_Juan": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/San_Luis": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/Tucuman": {
          u: -180,
          c: ["AR"],
        },
        "America/Argentina/Ushuaia": {
          u: -180,
          c: ["AR"],
        },
        "America/Aruba": {
          a: "America/Puerto_Rico",
          c: ["AW"],
          r: 1,
        },
        "America/Asuncion": {
          u: -240,
          d: -180,
          c: ["PY"],
        },
        "America/Atikokan": {
          a: "America/Panama",
          c: ["CA"],
          r: 1,
        },
        "America/Atka": {
          a: "America/Adak",
          r: 1,
        },
        "America/Bahia": {
          u: -180,
          c: ["BR"],
        },
        "America/Bahia_Banderas": {
          u: -360,
          d: -300,
          c: ["MX"],
        },
        "America/Barbados": {
          u: -240,
          c: ["BB"],
        },
        "America/Belem": {
          u: -180,
          c: ["BR"],
        },
        "America/Belize": {
          u: -360,
          c: ["BZ"],
        },
        "America/Blanc-Sablon": {
          a: "America/Puerto_Rico",
          c: ["CA"],
          r: 1,
        },
        "America/Boa_Vista": {
          u: -240,
          c: ["BR"],
        },
        "America/Bogota": {
          u: -300,
          c: ["CO"],
        },
        "America/Boise": {
          u: -420,
          d: -360,
          c: ["US"],
        },
        "America/Buenos_Aires": {
          a: "America/Argentina/Buenos_Aires",
          r: 1,
        },
        "America/Cambridge_Bay": {
          u: -420,
          d: -360,
          c: ["CA"],
        },
        "America/Campo_Grande": {
          u: -240,
          c: ["BR"],
        },
        "America/Cancun": {
          u: -300,
          c: ["MX"],
        },
        "America/Caracas": {
          u: -240,
          c: ["VE"],
        },
        "America/Catamarca": {
          a: "America/Argentina/Catamarca",
          r: 1,
        },
        "America/Cayenne": {
          u: -180,
          c: ["GF"],
        },
        "America/Cayman": {
          a: "America/Panama",
          c: ["KY"],
          r: 1,
        },
        "America/Chicago": {
          u: -360,
          d: -300,
          c: ["US"],
        },
        "America/Chihuahua": {
          u: -420,
          d: -360,
          c: ["MX"],
        },
        "America/Coral_Harbour": {
          a: "America/Panama",
          c: ["CA"],
          r: 1,
        },
        "America/Cordoba": {
          a: "America/Argentina/Cordoba",
          r: 1,
        },
        "America/Costa_Rica": {
          u: -360,
          c: ["CR"],
        },
        "America/Creston": {
          a: "America/Phoenix",
          c: ["CA"],
          r: 1,
        },
        "America/Cuiaba": {
          u: -240,
          c: ["BR"],
        },
        "America/Curacao": {
          a: "America/Puerto_Rico",
          c: ["CW"],
          r: 1,
        },
        "America/Danmarkshavn": {
          u: 0,
          c: ["GL"],
        },
        "America/Dawson": {
          u: -420,
          c: ["CA"],
        },
        "America/Dawson_Creek": {
          u: -420,
          c: ["CA"],
        },
        "America/Denver": {
          u: -420,
          d: -360,
          c: ["US"],
        },
        "America/Detroit": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Dominica": {
          a: "America/Puerto_Rico",
          c: ["DM"],
          r: 1,
        },
        "America/Edmonton": {
          u: -420,
          d: -360,
          c: ["CA"],
        },
        "America/Eirunepe": {
          u: -300,
          c: ["BR"],
        },
        "America/El_Salvador": {
          u: -360,
          c: ["SV"],
        },
        "America/Ensenada": {
          a: "America/Tijuana",
          r: 1,
        },
        "America/Fort_Nelson": {
          u: -420,
          c: ["CA"],
        },
        "America/Fort_Wayne": {
          a: "America/Indiana/Indianapolis",
          r: 1,
        },
        "America/Fortaleza": {
          u: -180,
          c: ["BR"],
        },
        "America/Glace_Bay": {
          u: -240,
          d: -180,
          c: ["CA"],
        },
        "America/Godthab": {
          a: "America/Nuuk",
          r: 1,
        },
        "America/Goose_Bay": {
          u: -240,
          d: -180,
          c: ["CA"],
        },
        "America/Grand_Turk": {
          u: -300,
          d: -240,
          c: ["TC"],
        },
        "America/Grenada": {
          a: "America/Puerto_Rico",
          c: ["GD"],
          r: 1,
        },
        "America/Guadeloupe": {
          a: "America/Puerto_Rico",
          c: ["GP"],
          r: 1,
        },
        "America/Guatemala": {
          u: -360,
          c: ["GT"],
        },
        "America/Guayaquil": {
          u: -300,
          c: ["EC"],
        },
        "America/Guyana": {
          u: -240,
          c: ["GY"],
        },
        "America/Halifax": {
          u: -240,
          d: -180,
          c: ["CA"],
        },
        "America/Havana": {
          u: -300,
          d: -240,
          c: ["CU"],
        },
        "America/Hermosillo": {
          u: -420,
          c: ["MX"],
        },
        "America/Indiana/Indianapolis": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Indiana/Knox": {
          u: -360,
          d: -300,
          c: ["US"],
        },
        "America/Indiana/Marengo": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Indiana/Petersburg": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Indiana/Tell_City": {
          u: -360,
          d: -300,
          c: ["US"],
        },
        "America/Indiana/Vevay": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Indiana/Vincennes": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Indiana/Winamac": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Indianapolis": {
          a: "America/Indiana/Indianapolis",
          r: 1,
        },
        "America/Inuvik": {
          u: -420,
          d: -360,
          c: ["CA"],
        },
        "America/Iqaluit": {
          u: -300,
          d: -240,
          c: ["CA"],
        },
        "America/Jamaica": {
          u: -300,
          c: ["JM"],
        },
        "America/Jujuy": {
          a: "America/Argentina/Jujuy",
          r: 1,
        },
        "America/Juneau": {
          u: -540,
          d: -480,
          c: ["US"],
        },
        "America/Kentucky/Louisville": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Kentucky/Monticello": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Knox_IN": {
          a: "America/Indiana/Knox",
          r: 1,
        },
        "America/Kralendijk": {
          a: "America/Puerto_Rico",
          c: ["BQ"],
          r: 1,
        },
        "America/La_Paz": {
          u: -240,
          c: ["BO"],
        },
        "America/Lima": {
          u: -300,
          c: ["PE"],
        },
        "America/Los_Angeles": {
          u: -480,
          d: -420,
          c: ["US"],
        },
        "America/Louisville": {
          a: "America/Kentucky/Louisville",
          r: 1,
        },
        "America/Lower_Princes": {
          a: "America/Puerto_Rico",
          c: ["SX"],
          r: 1,
        },
        "America/Maceio": {
          u: -180,
          c: ["BR"],
        },
        "America/Managua": {
          u: -360,
          c: ["NI"],
        },
        "America/Manaus": {
          u: -240,
          c: ["BR"],
        },
        "America/Marigot": {
          a: "America/Puerto_Rico",
          c: ["MF"],
          r: 1,
        },
        "America/Martinique": {
          u: -240,
          c: ["MQ"],
        },
        "America/Matamoros": {
          u: -360,
          d: -300,
          c: ["MX"],
        },
        "America/Mazatlan": {
          u: -420,
          d: -360,
          c: ["MX"],
        },
        "America/Mendoza": {
          a: "America/Argentina/Mendoza",
          r: 1,
        },
        "America/Menominee": {
          u: -360,
          d: -300,
          c: ["US"],
        },
        "America/Merida": {
          u: -360,
          d: -300,
          c: ["MX"],
        },
        "America/Metlakatla": {
          u: -540,
          d: -480,
          c: ["US"],
        },
        "America/Mexico_City": {
          u: -360,
          d: -300,
          c: ["MX"],
        },
        "America/Miquelon": {
          u: -180,
          d: -120,
          c: ["PM"],
        },
        "America/Moncton": {
          u: -240,
          d: -180,
          c: ["CA"],
        },
        "America/Monterrey": {
          u: -360,
          d: -300,
          c: ["MX"],
        },
        "America/Montevideo": {
          u: -180,
          c: ["UY"],
        },
        "America/Montreal": {
          a: "America/Toronto",
          c: ["CA"],
          r: 1,
        },
        "America/Montserrat": {
          a: "America/Puerto_Rico",
          c: ["MS"],
          r: 1,
        },
        "America/Nassau": {
          a: "America/Toronto",
          c: ["BS"],
          r: 1,
        },
        "America/New_York": {
          u: -300,
          d: -240,
          c: ["US"],
        },
        "America/Nipigon": {
          u: -300,
          d: -240,
          c: ["CA"],
        },
        "America/Nome": {
          u: -540,
          d: -480,
          c: ["US"],
        },
        "America/Noronha": {
          u: -120,
          c: ["BR"],
        },
        "America/North_Dakota/Beulah": {
          u: -360,
          d: -300,
          c: ["US"],
        },
        "America/North_Dakota/Center": {
          u: -360,
          d: -300,
          c: ["US"],
        },
        "America/North_Dakota/New_Salem": {
          u: -360,
          d: -300,
          c: ["US"],
        },
        "America/Nuuk": {
          u: -180,
          d: -120,
          c: ["GL"],
        },
        "America/Ojinaga": {
          u: -420,
          d: -360,
          c: ["MX"],
        },
        "America/Panama": {
          u: -300,
          c: ["PA", "CA", "KY"],
        },
        "America/Pangnirtung": {
          u: -300,
          d: -240,
          c: ["CA"],
        },
        "America/Paramaribo": {
          u: -180,
          c: ["SR"],
        },
        "America/Phoenix": {
          u: -420,
          c: ["US", "CA"],
        },
        "America/Port-au-Prince": {
          u: -300,
          d: -240,
          c: ["HT"],
        },
        "America/Port_of_Spain": {
          a: "America/Puerto_Rico",
          c: ["TT"],
          r: 1,
        },
        "America/Porto_Acre": {
          a: "America/Rio_Branco",
          r: 1,
        },
        "America/Porto_Velho": {
          u: -240,
          c: ["BR"],
        },
        "America/Puerto_Rico": {
          u: -240,
          c: [
            "PR",
            "AG",
            "CA",
            "AI",
            "AW",
            "BL",
            "BQ",
            "CW",
            "DM",
            "GD",
            "GP",
            "KN",
            "LC",
            "MF",
            "MS",
            "SX",
            "TT",
            "VC",
            "VG",
            "VI",
          ],
        },
        "America/Punta_Arenas": {
          u: -180,
          c: ["CL"],
        },
        "America/Rainy_River": {
          u: -360,
          d: -300,
          c: ["CA"],
        },
        "America/Rankin_Inlet": {
          u: -360,
          d: -300,
          c: ["CA"],
        },
        "America/Recife": {
          u: -180,
          c: ["BR"],
        },
        "America/Regina": {
          u: -360,
          c: ["CA"],
        },
        "America/Resolute": {
          u: -360,
          d: -300,
          c: ["CA"],
        },
        "America/Rio_Branco": {
          u: -300,
          c: ["BR"],
        },
        "America/Rosario": {
          a: "America/Argentina/Cordoba",
          r: 1,
        },
        "America/Santa_Isabel": {
          a: "America/Tijuana",
          r: 1,
        },
        "America/Santarem": {
          u: -180,
          c: ["BR"],
        },
        "America/Santiago": {
          u: -240,
          d: -180,
          c: ["CL"],
        },
        "America/Santo_Domingo": {
          u: -240,
          c: ["DO"],
        },
        "America/Sao_Paulo": {
          u: -180,
          c: ["BR"],
        },
        "America/Scoresbysund": {
          u: -60,
          d: 0,
          c: ["GL"],
        },
        "America/Shiprock": {
          a: "America/Denver",
          r: 1,
        },
        "America/Sitka": {
          u: -540,
          d: -480,
          c: ["US"],
        },
        "America/St_Barthelemy": {
          a: "America/Puerto_Rico",
          c: ["BL"],
          r: 1,
        },
        "America/St_Johns": {
          u: -150,
          d: -90,
          c: ["CA"],
        },
        "America/St_Kitts": {
          a: "America/Puerto_Rico",
          c: ["KN"],
          r: 1,
        },
        "America/St_Lucia": {
          a: "America/Puerto_Rico",
          c: ["LC"],
          r: 1,
        },
        "America/St_Thomas": {
          a: "America/Puerto_Rico",
          c: ["VI"],
          r: 1,
        },
        "America/St_Vincent": {
          a: "America/Puerto_Rico",
          c: ["VC"],
          r: 1,
        },
        "America/Swift_Current": {
          u: -360,
          c: ["CA"],
        },
        "America/Tegucigalpa": {
          u: -360,
          c: ["HN"],
        },
        "America/Thule": {
          u: -240,
          d: -180,
          c: ["GL"],
        },
        "America/Thunder_Bay": {
          u: -300,
          d: -240,
          c: ["CA"],
        },
        "America/Tijuana": {
          u: -480,
          d: -420,
          c: ["MX"],
        },
        "America/Toronto": {
          u: -300,
          d: -240,
          c: ["CA", "BS"],
        },
        "America/Tortola": {
          a: "America/Puerto_Rico",
          c: ["VG"],
          r: 1,
        },
        "America/Vancouver": {
          u: -480,
          d: -420,
          c: ["CA"],
        },
        "America/Virgin": {
          a: "America/Puerto_Rico",
          c: ["VI"],
          r: 1,
        },
        "America/Whitehorse": {
          u: -420,
          c: ["CA"],
        },
        "America/Winnipeg": {
          u: -360,
          d: -300,
          c: ["CA"],
        },
        "America/Yakutat": {
          u: -540,
          d: -480,
          c: ["US"],
        },
        "America/Yellowknife": {
          u: -420,
          d: -360,
          c: ["CA"],
        },
        "Antarctica/Casey": {
          u: 660,
          c: ["AQ"],
        },
        "Antarctica/Davis": {
          u: 420,
          c: ["AQ"],
        },
        "Antarctica/DumontDUrville": {
          a: "Pacific/Port_Moresby",
          c: ["AQ"],
          r: 1,
        },
        "Antarctica/Macquarie": {
          u: 600,
          d: 660,
          c: ["AU"],
        },
        "Antarctica/Mawson": {
          u: 300,
          c: ["AQ"],
        },
        "Antarctica/McMurdo": {
          a: "Pacific/Auckland",
          c: ["AQ"],
          r: 1,
        },
        "Antarctica/Palmer": {
          u: -180,
          c: ["AQ"],
        },
        "Antarctica/Rothera": {
          u: -180,
          c: ["AQ"],
        },
        "Antarctica/South_Pole": {
          a: "Pacific/Auckland",
          c: ["AQ"],
          r: 1,
        },
        "Antarctica/Syowa": {
          a: "Asia/Riyadh",
          c: ["AQ"],
          r: 1,
        },
        "Antarctica/Troll": {
          u: 0,
          d: 120,
          c: ["AQ"],
        },
        "Antarctica/Vostok": {
          u: 360,
          c: ["AQ"],
        },
        "Arctic/Longyearbyen": {
          a: "Europe/Oslo",
          c: ["SJ"],
          r: 1,
        },
        "Asia/Aden": {
          a: "Asia/Riyadh",
          c: ["YE"],
          r: 1,
        },
        "Asia/Almaty": {
          u: 360,
          c: ["KZ"],
        },
        "Asia/Amman": {
          u: 120,
          d: 180,
          c: ["JO"],
        },
        "Asia/Anadyr": {
          u: 720,
          c: ["RU"],
        },
        "Asia/Aqtau": {
          u: 300,
          c: ["KZ"],
        },
        "Asia/Aqtobe": {
          u: 300,
          c: ["KZ"],
        },
        "Asia/Ashgabat": {
          u: 300,
          c: ["TM"],
        },
        "Asia/Ashkhabad": {
          a: "Asia/Ashgabat",
          r: 1,
        },
        "Asia/Atyrau": {
          u: 300,
          c: ["KZ"],
        },
        "Asia/Baghdad": {
          u: 180,
          c: ["IQ"],
        },
        "Asia/Bahrain": {
          a: "Asia/Qatar",
          c: ["BH"],
          r: 1,
        },
        "Asia/Baku": {
          u: 240,
          c: ["AZ"],
        },
        "Asia/Bangkok": {
          u: 420,
          c: ["TH", "KH", "LA", "VN"],
        },
        "Asia/Barnaul": {
          u: 420,
          c: ["RU"],
        },
        "Asia/Beirut": {
          u: 120,
          d: 180,
          c: ["LB"],
        },
        "Asia/Bishkek": {
          u: 360,
          c: ["KG"],
        },
        "Asia/Brunei": {
          u: 480,
          c: ["BN"],
        },
        "Asia/Calcutta": {
          a: "Asia/Kolkata",
          r: 1,
        },
        "Asia/Chita": {
          u: 540,
          c: ["RU"],
        },
        "Asia/Choibalsan": {
          u: 480,
          c: ["MN"],
        },
        "Asia/Chongqing": {
          a: "Asia/Shanghai",
          r: 1,
        },
        "Asia/Chungking": {
          a: "Asia/Shanghai",
          r: 1,
        },
        "Asia/Colombo": {
          u: 330,
          c: ["LK"],
        },
        "Asia/Dacca": {
          a: "Asia/Dhaka",
          r: 1,
        },
        "Asia/Damascus": {
          u: 120,
          d: 180,
          c: ["SY"],
        },
        "Asia/Dhaka": {
          u: 360,
          c: ["BD"],
        },
        "Asia/Dili": {
          u: 540,
          c: ["TL"],
        },
        "Asia/Dubai": {
          u: 240,
          c: ["AE", "OM"],
        },
        "Asia/Dushanbe": {
          u: 300,
          c: ["TJ"],
        },
        "Asia/Famagusta": {
          u: 120,
          d: 180,
          c: ["CY"],
        },
        "Asia/Gaza": {
          u: 120,
          d: 180,
          c: ["PS"],
        },
        "Asia/Harbin": {
          a: "Asia/Shanghai",
          r: 1,
        },
        "Asia/Hebron": {
          u: 120,
          d: 180,
          c: ["PS"],
        },
        "Asia/Ho_Chi_Minh": {
          u: 420,
          c: ["VN"],
        },
        "Asia/Hong_Kong": {
          u: 480,
          c: ["HK"],
        },
        "Asia/Hovd": {
          u: 420,
          c: ["MN"],
        },
        "Asia/Irkutsk": {
          u: 480,
          c: ["RU"],
        },
        "Asia/Istanbul": {
          a: "Europe/Istanbul",
          r: 1,
        },
        "Asia/Jakarta": {
          u: 420,
          c: ["ID"],
        },
        "Asia/Jayapura": {
          u: 540,
          c: ["ID"],
        },
        "Asia/Jerusalem": {
          u: 120,
          d: 180,
          c: ["IL"],
        },
        "Asia/Kabul": {
          u: 270,
          c: ["AF"],
        },
        "Asia/Kamchatka": {
          u: 720,
          c: ["RU"],
        },
        "Asia/Karachi": {
          u: 300,
          c: ["PK"],
        },
        "Asia/Kashgar": {
          a: "Asia/Urumqi",
          r: 1,
        },
        "Asia/Kathmandu": {
          u: 345,
          c: ["NP"],
        },
        "Asia/Katmandu": {
          a: "Asia/Kathmandu",
          r: 1,
        },
        "Asia/Khandyga": {
          u: 540,
          c: ["RU"],
        },
        "Asia/Kolkata": {
          u: 330,
          c: ["IN"],
        },
        "Asia/Krasnoyarsk": {
          u: 420,
          c: ["RU"],
        },
        "Asia/Kuala_Lumpur": {
          u: 480,
          c: ["MY"],
        },
        "Asia/Kuching": {
          u: 480,
          c: ["MY"],
        },
        "Asia/Kuwait": {
          a: "Asia/Riyadh",
          c: ["KW"],
          r: 1,
        },
        "Asia/Macao": {
          a: "Asia/Macau",
          r: 1,
        },
        "Asia/Macau": {
          u: 480,
          c: ["MO"],
        },
        "Asia/Magadan": {
          u: 660,
          c: ["RU"],
        },
        "Asia/Makassar": {
          u: 480,
          c: ["ID"],
        },
        "Asia/Manila": {
          u: 480,
          c: ["PH"],
        },
        "Asia/Muscat": {
          a: "Asia/Dubai",
          c: ["OM"],
          r: 1,
        },
        "Asia/Nicosia": {
          u: 120,
          d: 180,
          c: ["CY"],
        },
        "Asia/Novokuznetsk": {
          u: 420,
          c: ["RU"],
        },
        "Asia/Novosibirsk": {
          u: 420,
          c: ["RU"],
        },
        "Asia/Omsk": {
          u: 360,
          c: ["RU"],
        },
        "Asia/Oral": {
          u: 300,
          c: ["KZ"],
        },
        "Asia/Phnom_Penh": {
          a: "Asia/Bangkok",
          c: ["KH"],
          r: 1,
        },
        "Asia/Pontianak": {
          u: 420,
          c: ["ID"],
        },
        "Asia/Pyongyang": {
          u: 540,
          c: ["KP"],
        },
        "Asia/Qatar": {
          u: 180,
          c: ["QA", "BH"],
        },
        "Asia/Qostanay": {
          u: 360,
          c: ["KZ"],
        },
        "Asia/Qyzylorda": {
          u: 300,
          c: ["KZ"],
        },
        "Asia/Rangoon": {
          a: "Asia/Yangon",
          r: 1,
        },
        "Asia/Riyadh": {
          u: 180,
          c: ["SA", "AQ", "KW", "YE"],
        },
        "Asia/Saigon": {
          a: "Asia/Ho_Chi_Minh",
          r: 1,
        },
        "Asia/Sakhalin": {
          u: 660,
          c: ["RU"],
        },
        "Asia/Samarkand": {
          u: 300,
          c: ["UZ"],
        },
        "Asia/Seoul": {
          u: 540,
          c: ["KR"],
        },
        "Asia/Shanghai": {
          u: 480,
          c: ["CN"],
        },
        "Asia/Singapore": {
          u: 480,
          c: ["SG", "MY"],
        },
        "Asia/Srednekolymsk": {
          u: 660,
          c: ["RU"],
        },
        "Asia/Taipei": {
          u: 480,
          c: ["TW"],
        },
        "Asia/Tashkent": {
          u: 300,
          c: ["UZ"],
        },
        "Asia/Tbilisi": {
          u: 240,
          c: ["GE"],
        },
        "Asia/Tehran": {
          u: 210,
          d: 270,
          c: ["IR"],
        },
        "Asia/Tel_Aviv": {
          a: "Asia/Jerusalem",
          r: 1,
        },
        "Asia/Thimbu": {
          a: "Asia/Thimphu",
          r: 1,
        },
        "Asia/Thimphu": {
          u: 360,
          c: ["BT"],
        },
        "Asia/Tokyo": {
          u: 540,
          c: ["JP"],
        },
        "Asia/Tomsk": {
          u: 420,
          c: ["RU"],
        },
        "Asia/Ujung_Pandang": {
          a: "Asia/Makassar",
          r: 1,
        },
        "Asia/Ulaanbaatar": {
          u: 480,
          c: ["MN"],
        },
        "Asia/Ulan_Bator": {
          a: "Asia/Ulaanbaatar",
          r: 1,
        },
        "Asia/Urumqi": {
          u: 360,
          c: ["CN"],
        },
        "Asia/Ust-Nera": {
          u: 600,
          c: ["RU"],
        },
        "Asia/Vientiane": {
          a: "Asia/Bangkok",
          c: ["LA"],
          r: 1,
        },
        "Asia/Vladivostok": {
          u: 600,
          c: ["RU"],
        },
        "Asia/Yakutsk": {
          u: 540,
          c: ["RU"],
        },
        "Asia/Yangon": {
          u: 390,
          c: ["MM"],
        },
        "Asia/Yekaterinburg": {
          u: 300,
          c: ["RU"],
        },
        "Asia/Yerevan": {
          u: 240,
          c: ["AM"],
        },
        "Atlantic/Azores": {
          u: -60,
          d: 0,
          c: ["PT"],
        },
        "Atlantic/Bermuda": {
          u: -240,
          d: -180,
          c: ["BM"],
        },
        "Atlantic/Canary": {
          u: 0,
          d: 60,
          c: ["ES"],
        },
        "Atlantic/Cape_Verde": {
          u: -60,
          c: ["CV"],
        },
        "Atlantic/Faeroe": {
          a: "Atlantic/Faroe",
          r: 1,
        },
        "Atlantic/Faroe": {
          u: 0,
          d: 60,
          c: ["FO"],
        },
        "Atlantic/Jan_Mayen": {
          a: "Europe/Oslo",
          c: ["SJ"],
          r: 1,
        },
        "Atlantic/Madeira": {
          u: 0,
          d: 60,
          c: ["PT"],
        },
        "Atlantic/Reykjavik": {
          u: 0,
          c: ["IS"],
        },
        "Atlantic/South_Georgia": {
          u: -120,
          c: ["GS"],
        },
        "Atlantic/St_Helena": {
          a: "Africa/Abidjan",
          c: ["SH"],
          r: 1,
        },
        "Atlantic/Stanley": {
          u: -180,
          c: ["FK"],
        },
        "Australia/ACT": {
          a: "Australia/Sydney",
          r: 1,
        },
        "Australia/Adelaide": {
          u: 570,
          d: 630,
          c: ["AU"],
        },
        "Australia/Brisbane": {
          u: 600,
          c: ["AU"],
        },
        "Australia/Broken_Hill": {
          u: 570,
          d: 630,
          c: ["AU"],
        },
        "Australia/Canberra": {
          a: "Australia/Sydney",
          r: 1,
        },
        "Australia/Currie": {
          a: "Australia/Hobart",
          r: 1,
        },
        "Australia/Darwin": {
          u: 570,
          c: ["AU"],
        },
        "Australia/Eucla": {
          u: 525,
          c: ["AU"],
        },
        "Australia/Hobart": {
          u: 600,
          d: 660,
          c: ["AU"],
        },
        "Australia/LHI": {
          a: "Australia/Lord_Howe",
          r: 1,
        },
        "Australia/Lindeman": {
          u: 600,
          c: ["AU"],
        },
        "Australia/Lord_Howe": {
          u: 630,
          d: 660,
          c: ["AU"],
        },
        "Australia/Melbourne": {
          u: 600,
          d: 660,
          c: ["AU"],
        },
        "Australia/NSW": {
          a: "Australia/Sydney",
          r: 1,
        },
        "Australia/North": {
          a: "Australia/Darwin",
          r: 1,
        },
        "Australia/Perth": {
          u: 480,
          c: ["AU"],
        },
        "Australia/Queensland": {
          a: "Australia/Brisbane",
          r: 1,
        },
        "Australia/South": {
          a: "Australia/Adelaide",
          r: 1,
        },
        "Australia/Sydney": {
          u: 600,
          d: 660,
          c: ["AU"],
        },
        "Australia/Tasmania": {
          a: "Australia/Hobart",
          r: 1,
        },
        "Australia/Victoria": {
          a: "Australia/Melbourne",
          r: 1,
        },
        "Australia/West": {
          a: "Australia/Perth",
          r: 1,
        },
        "Australia/Yancowinna": {
          a: "Australia/Broken_Hill",
          r: 1,
        },
        "Brazil/Acre": {
          a: "America/Rio_Branco",
          r: 1,
        },
        "Brazil/DeNoronha": {
          a: "America/Noronha",
          r: 1,
        },
        "Brazil/East": {
          a: "America/Sao_Paulo",
          r: 1,
        },
        "Brazil/West": {
          a: "America/Manaus",
          r: 1,
        },
        CET: {
          u: 60,
          d: 120,
        },
        CST6CDT: {
          u: -360,
          d: -300,
        },
        "Canada/Atlantic": {
          a: "America/Halifax",
          r: 1,
        },
        "Canada/Central": {
          a: "America/Winnipeg",
          r: 1,
        },
        "Canada/Eastern": {
          a: "America/Toronto",
          c: ["CA"],
          r: 1,
        },
        "Canada/Mountain": {
          a: "America/Edmonton",
          r: 1,
        },
        "Canada/Newfoundland": {
          a: "America/St_Johns",
          r: 1,
        },
        "Canada/Pacific": {
          a: "America/Vancouver",
          r: 1,
        },
        "Canada/Saskatchewan": {
          a: "America/Regina",
          r: 1,
        },
        "Canada/Yukon": {
          a: "America/Whitehorse",
          r: 1,
        },
        "Chile/Continental": {
          a: "America/Santiago",
          r: 1,
        },
        "Chile/EasterIsland": {
          a: "Pacific/Easter",
          r: 1,
        },
        Cuba: {
          a: "America/Havana",
          r: 1,
        },
        EET: {
          u: 120,
          d: 180,
        },
        EST: {
          u: -300,
        },
        EST5EDT: {
          u: -300,
          d: -240,
        },
        Egypt: {
          a: "Africa/Cairo",
          r: 1,
        },
        Eire: {
          a: "Europe/Dublin",
          r: 1,
        },
        "Etc/GMT": {
          u: 0,
        },
        "Etc/GMT+0": {
          a: "Etc/GMT",
          r: 1,
        },
        "Etc/GMT+1": {
          u: -60,
        },
        "Etc/GMT+10": {
          u: -600,
        },
        "Etc/GMT+11": {
          u: -660,
        },
        "Etc/GMT+12": {
          u: -720,
        },
        "Etc/GMT+2": {
          u: -120,
        },
        "Etc/GMT+3": {
          u: -180,
        },
        "Etc/GMT+4": {
          u: -240,
        },
        "Etc/GMT+5": {
          u: -300,
        },
        "Etc/GMT+6": {
          u: -360,
        },
        "Etc/GMT+7": {
          u: -420,
        },
        "Etc/GMT+8": {
          u: -480,
        },
        "Etc/GMT+9": {
          u: -540,
        },
        "Etc/GMT-0": {
          a: "Etc/GMT",
          r: 1,
        },
        "Etc/GMT-1": {
          u: 60,
        },
        "Etc/GMT-10": {
          u: 600,
        },
        "Etc/GMT-11": {
          u: 660,
        },
        "Etc/GMT-12": {
          u: 720,
        },
        "Etc/GMT-13": {
          u: 780,
        },
        "Etc/GMT-14": {
          u: 840,
        },
        "Etc/GMT-2": {
          u: 120,
        },
        "Etc/GMT-3": {
          u: 180,
        },
        "Etc/GMT-4": {
          u: 240,
        },
        "Etc/GMT-5": {
          u: 300,
        },
        "Etc/GMT-6": {
          u: 360,
        },
        "Etc/GMT-7": {
          u: 420,
        },
        "Etc/GMT-8": {
          u: 480,
        },
        "Etc/GMT-9": {
          u: 540,
        },
        "Etc/GMT0": {
          a: "Etc/GMT",
          r: 1,
        },
        "Etc/Greenwich": {
          a: "Etc/GMT",
          r: 1,
        },
        "Etc/UCT": {
          a: "Etc/UTC",
          r: 1,
        },
        "Etc/UTC": {
          u: 0,
        },
        "Etc/Universal": {
          a: "Etc/UTC",
          r: 1,
        },
        "Etc/Zulu": {
          a: "Etc/UTC",
          r: 1,
        },
        "Europe/Amsterdam": {
          u: 60,
          d: 120,
          c: ["NL"],
        },
        "Europe/Andorra": {
          u: 60,
          d: 120,
          c: ["AD"],
        },
        "Europe/Astrakhan": {
          u: 240,
          c: ["RU"],
        },
        "Europe/Athens": {
          u: 120,
          d: 180,
          c: ["GR"],
        },
        "Europe/Belfast": {
          a: "Europe/London",
          c: ["GB"],
          r: 1,
        },
        "Europe/Belgrade": {
          u: 60,
          d: 120,
          c: ["RS", "BA", "HR", "ME", "MK", "SI"],
        },
        "Europe/Berlin": {
          u: 60,
          d: 120,
          c: ["DE"],
        },
        "Europe/Bratislava": {
          a: "Europe/Prague",
          c: ["SK"],
          r: 1,
        },
        "Europe/Brussels": {
          u: 60,
          d: 120,
          c: ["BE"],
        },
        "Europe/Bucharest": {
          u: 120,
          d: 180,
          c: ["RO"],
        },
        "Europe/Budapest": {
          u: 60,
          d: 120,
          c: ["HU"],
        },
        "Europe/Busingen": {
          a: "Europe/Zurich",
          c: ["DE"],
          r: 1,
        },
        "Europe/Chisinau": {
          u: 120,
          d: 180,
          c: ["MD"],
        },
        "Europe/Copenhagen": {
          u: 60,
          d: 120,
          c: ["DK"],
        },
        "Europe/Dublin": {
          u: 60,
          d: 0,
          c: ["IE"],
        },
        "Europe/Gibraltar": {
          u: 60,
          d: 120,
          c: ["GI"],
        },
        "Europe/Guernsey": {
          a: "Europe/London",
          c: ["GG"],
          r: 1,
        },
        "Europe/Helsinki": {
          u: 120,
          d: 180,
          c: ["FI", "AX"],
        },
        "Europe/Isle_of_Man": {
          a: "Europe/London",
          c: ["IM"],
          r: 1,
        },
        "Europe/Istanbul": {
          u: 180,
          c: ["TR"],
        },
        "Europe/Jersey": {
          a: "Europe/London",
          c: ["JE"],
          r: 1,
        },
        "Europe/Kaliningrad": {
          u: 120,
          c: ["RU"],
        },
        "Europe/Kiev": {
          u: 120,
          d: 180,
          c: ["UA"],
        },
        "Europe/Kirov": {
          u: 180,
          c: ["RU"],
        },
        "Europe/Lisbon": {
          u: 0,
          d: 60,
          c: ["PT"],
        },
        "Europe/Ljubljana": {
          a: "Europe/Belgrade",
          c: ["SI"],
          r: 1,
        },
        "Europe/London": {
          u: 0,
          d: 60,
          c: ["GB", "GG", "IM", "JE"],
        },
        "Europe/Luxembourg": {
          u: 60,
          d: 120,
          c: ["LU"],
        },
        "Europe/Madrid": {
          u: 60,
          d: 120,
          c: ["ES"],
        },
        "Europe/Malta": {
          u: 60,
          d: 120,
          c: ["MT"],
        },
        "Europe/Mariehamn": {
          a: "Europe/Helsinki",
          c: ["AX"],
          r: 1,
        },
        "Europe/Minsk": {
          u: 180,
          c: ["BY"],
        },
        "Europe/Monaco": {
          u: 60,
          d: 120,
          c: ["MC"],
        },
        "Europe/Moscow": {
          u: 180,
          c: ["RU"],
        },
        "Europe/Nicosia": {
          a: "Asia/Nicosia",
          r: 1,
        },
        "Europe/Oslo": {
          u: 60,
          d: 120,
          c: ["NO", "SJ", "BV"],
        },
        "Europe/Paris": {
          u: 60,
          d: 120,
          c: ["FR"],
        },
        "Europe/Podgorica": {
          a: "Europe/Belgrade",
          c: ["ME"],
          r: 1,
        },
        "Europe/Prague": {
          u: 60,
          d: 120,
          c: ["CZ", "SK"],
        },
        "Europe/Riga": {
          u: 120,
          d: 180,
          c: ["LV"],
        },
        "Europe/Rome": {
          u: 60,
          d: 120,
          c: ["IT", "SM", "VA"],
        },
        "Europe/Samara": {
          u: 240,
          c: ["RU"],
        },
        "Europe/San_Marino": {
          a: "Europe/Rome",
          c: ["SM"],
          r: 1,
        },
        "Europe/Sarajevo": {
          a: "Europe/Belgrade",
          c: ["BA"],
          r: 1,
        },
        "Europe/Saratov": {
          u: 240,
          c: ["RU"],
        },
        "Europe/Simferopol": {
          u: 180,
          c: ["RU", "UA"],
        },
        "Europe/Skopje": {
          a: "Europe/Belgrade",
          c: ["MK"],
          r: 1,
        },
        "Europe/Sofia": {
          u: 120,
          d: 180,
          c: ["BG"],
        },
        "Europe/Stockholm": {
          u: 60,
          d: 120,
          c: ["SE"],
        },
        "Europe/Tallinn": {
          u: 120,
          d: 180,
          c: ["EE"],
        },
        "Europe/Tirane": {
          u: 60,
          d: 120,
          c: ["AL"],
        },
        "Europe/Tiraspol": {
          a: "Europe/Chisinau",
          r: 1,
        },
        "Europe/Ulyanovsk": {
          u: 240,
          c: ["RU"],
        },
        "Europe/Uzhgorod": {
          u: 120,
          d: 180,
          c: ["UA"],
        },
        "Europe/Vaduz": {
          a: "Europe/Zurich",
          c: ["LI"],
          r: 1,
        },
        "Europe/Vatican": {
          a: "Europe/Rome",
          c: ["VA"],
          r: 1,
        },
        "Europe/Vienna": {
          u: 60,
          d: 120,
          c: ["AT"],
        },
        "Europe/Vilnius": {
          u: 120,
          d: 180,
          c: ["LT"],
        },
        "Europe/Volgograd": {
          u: 180,
          c: ["RU"],
        },
        "Europe/Warsaw": {
          u: 60,
          d: 120,
          c: ["PL"],
        },
        "Europe/Zagreb": {
          a: "Europe/Belgrade",
          c: ["HR"],
          r: 1,
        },
        "Europe/Zaporozhye": {
          u: 120,
          d: 180,
          c: ["UA"],
        },
        "Europe/Zurich": {
          u: 60,
          d: 120,
          c: ["CH", "DE", "LI"],
        },
        Factory: {
          u: 0,
        },
        GB: {
          a: "Europe/London",
          c: ["GB"],
          r: 1,
        },
        "GB-Eire": {
          a: "Europe/London",
          c: ["GB"],
          r: 1,
        },
        GMT: {
          a: "Etc/GMT",
          r: 1,
        },
        "GMT+0": {
          a: "Etc/GMT",
          r: 1,
        },
        "GMT-0": {
          a: "Etc/GMT",
          r: 1,
        },
        GMT0: {
          a: "Etc/GMT",
          r: 1,
        },
        Greenwich: {
          a: "Etc/GMT",
          r: 1,
        },
        HST: {
          u: -600,
        },
        Hongkong: {
          a: "Asia/Hong_Kong",
          r: 1,
        },
        Iceland: {
          a: "Atlantic/Reykjavik",
          r: 1,
        },
        "Indian/Antananarivo": {
          a: "Africa/Nairobi",
          c: ["MG"],
          r: 1,
        },
        "Indian/Chagos": {
          u: 360,
          c: ["IO"],
        },
        "Indian/Christmas": {
          u: 420,
          c: ["CX"],
        },
        "Indian/Cocos": {
          u: 390,
          c: ["CC"],
        },
        "Indian/Comoro": {
          a: "Africa/Nairobi",
          c: ["KM"],
          r: 1,
        },
        "Indian/Kerguelen": {
          u: 300,
          c: ["TF", "HM"],
        },
        "Indian/Mahe": {
          u: 240,
          c: ["SC"],
        },
        "Indian/Maldives": {
          u: 300,
          c: ["MV"],
        },
        "Indian/Mauritius": {
          u: 240,
          c: ["MU"],
        },
        "Indian/Mayotte": {
          a: "Africa/Nairobi",
          c: ["YT"],
          r: 1,
        },
        "Indian/Reunion": {
          u: 240,
          c: ["RE", "TF"],
        },
        Iran: {
          a: "Asia/Tehran",
          r: 1,
        },
        Israel: {
          a: "Asia/Jerusalem",
          r: 1,
        },
        Jamaica: {
          a: "America/Jamaica",
          r: 1,
        },
        Japan: {
          a: "Asia/Tokyo",
          r: 1,
        },
        Kwajalein: {
          a: "Pacific/Kwajalein",
          r: 1,
        },
        Libya: {
          a: "Africa/Tripoli",
          r: 1,
        },
        MET: {
          u: 60,
          d: 120,
        },
        MST: {
          u: -420,
        },
        MST7MDT: {
          u: -420,
          d: -360,
        },
        "Mexico/BajaNorte": {
          a: "America/Tijuana",
          r: 1,
        },
        "Mexico/BajaSur": {
          a: "America/Mazatlan",
          r: 1,
        },
        "Mexico/General": {
          a: "America/Mexico_City",
          r: 1,
        },
        NZ: {
          a: "Pacific/Auckland",
          c: ["NZ"],
          r: 1,
        },
        "NZ-CHAT": {
          a: "Pacific/Chatham",
          r: 1,
        },
        Navajo: {
          a: "America/Denver",
          r: 1,
        },
        PRC: {
          a: "Asia/Shanghai",
          r: 1,
        },
        PST8PDT: {
          u: -480,
          d: -420,
        },
        "Pacific/Apia": {
          u: 780,
          c: ["WS"],
        },
        "Pacific/Auckland": {
          u: 720,
          d: 780,
          c: ["NZ", "AQ"],
        },
        "Pacific/Bougainville": {
          u: 660,
          c: ["PG"],
        },
        "Pacific/Chatham": {
          u: 765,
          d: 825,
          c: ["NZ"],
        },
        "Pacific/Chuuk": {
          u: 600,
          c: ["FM"],
        },
        "Pacific/Easter": {
          u: -360,
          d: -300,
          c: ["CL"],
        },
        "Pacific/Efate": {
          u: 660,
          c: ["VU"],
        },
        "Pacific/Enderbury": {
          a: "Pacific/Kanton",
          r: 1,
        },
        "Pacific/Fakaofo": {
          u: 780,
          c: ["TK"],
        },
        "Pacific/Fiji": {
          u: 720,
          d: 780,
          c: ["FJ"],
        },
        "Pacific/Funafuti": {
          u: 720,
          c: ["TV"],
        },
        "Pacific/Galapagos": {
          u: -360,
          c: ["EC"],
        },
        "Pacific/Gambier": {
          u: -540,
          c: ["PF"],
        },
        "Pacific/Guadalcanal": {
          u: 660,
          c: ["SB"],
        },
        "Pacific/Guam": {
          u: 600,
          c: ["GU", "MP"],
        },
        "Pacific/Honolulu": {
          u: -600,
          c: ["US", "UM"],
        },
        "Pacific/Johnston": {
          a: "Pacific/Honolulu",
          c: ["UM"],
          r: 1,
        },
        "Pacific/Kanton": {
          u: 780,
          c: ["KI"],
        },
        "Pacific/Kiritimati": {
          u: 840,
          c: ["KI"],
        },
        "Pacific/Kosrae": {
          u: 660,
          c: ["FM"],
        },
        "Pacific/Kwajalein": {
          u: 720,
          c: ["MH"],
        },
        "Pacific/Majuro": {
          u: 720,
          c: ["MH"],
        },
        "Pacific/Marquesas": {
          u: -510,
          c: ["PF"],
        },
        "Pacific/Midway": {
          a: "Pacific/Pago_Pago",
          c: ["UM"],
          r: 1,
        },
        "Pacific/Nauru": {
          u: 720,
          c: ["NR"],
        },
        "Pacific/Niue": {
          u: -660,
          c: ["NU"],
        },
        "Pacific/Norfolk": {
          u: 660,
          d: 720,
          c: ["NF"],
        },
        "Pacific/Noumea": {
          u: 660,
          c: ["NC"],
        },
        "Pacific/Pago_Pago": {
          u: -660,
          c: ["AS", "UM"],
        },
        "Pacific/Palau": {
          u: 540,
          c: ["PW"],
        },
        "Pacific/Pitcairn": {
          u: -480,
          c: ["PN"],
        },
        "Pacific/Pohnpei": {
          u: 660,
          c: ["FM"],
        },
        "Pacific/Ponape": {
          a: "Pacific/Pohnpei",
          r: 1,
        },
        "Pacific/Port_Moresby": {
          u: 600,
          c: ["PG", "AQ"],
        },
        "Pacific/Rarotonga": {
          u: -600,
          c: ["CK"],
        },
        "Pacific/Saipan": {
          a: "Pacific/Guam",
          c: ["MP"],
          r: 1,
        },
        "Pacific/Samoa": {
          a: "Pacific/Pago_Pago",
          c: ["WS"],
          r: 1,
        },
        "Pacific/Tahiti": {
          u: -600,
          c: ["PF"],
        },
        "Pacific/Tarawa": {
          u: 720,
          c: ["KI"],
        },
        "Pacific/Tongatapu": {
          u: 780,
          c: ["TO"],
        },
        "Pacific/Truk": {
          a: "Pacific/Chuuk",
          r: 1,
        },
        "Pacific/Wake": {
          u: 720,
          c: ["UM"],
        },
        "Pacific/Wallis": {
          u: 720,
          c: ["WF"],
        },
        "Pacific/Yap": {
          a: "Pacific/Chuuk",
          r: 1,
        },
        Poland: {
          a: "Europe/Warsaw",
          r: 1,
        },
        Portugal: {
          a: "Europe/Lisbon",
          r: 1,
        },
        ROC: {
          a: "Asia/Taipei",
          r: 1,
        },
        ROK: {
          a: "Asia/Seoul",
          r: 1,
        },
        Singapore: {
          a: "Asia/Singapore",
          c: ["SG"],
          r: 1,
        },
        Turkey: {
          a: "Europe/Istanbul",
          r: 1,
        },
        UCT: {
          a: "Etc/UTC",
          r: 1,
        },
        "US/Alaska": {
          a: "America/Anchorage",
          r: 1,
        },
        "US/Aleutian": {
          a: "America/Adak",
          r: 1,
        },
        "US/Arizona": {
          a: "America/Phoenix",
          c: ["US"],
          r: 1,
        },
        "US/Central": {
          a: "America/Chicago",
          r: 1,
        },
        "US/East-Indiana": {
          a: "America/Indiana/Indianapolis",
          r: 1,
        },
        "US/Eastern": {
          a: "America/New_York",
          r: 1,
        },
        "US/Hawaii": {
          a: "Pacific/Honolulu",
          c: ["US"],
          r: 1,
        },
        "US/Indiana-Starke": {
          a: "America/Indiana/Knox",
          r: 1,
        },
        "US/Michigan": {
          a: "America/Detroit",
          r: 1,
        },
        "US/Mountain": {
          a: "America/Denver",
          r: 1,
        },
        "US/Pacific": {
          a: "America/Los_Angeles",
          r: 1,
        },
        "US/Samoa": {
          a: "Pacific/Pago_Pago",
          c: ["WS"],
          r: 1,
        },
        UTC: {
          a: "Etc/UTC",
          r: 1,
        },
        Universal: {
          a: "Etc/UTC",
          r: 1,
        },
        "W-SU": {
          a: "Europe/Moscow",
          r: 1,
        },
        WET: {
          u: 0,
          d: 60,
        },
        Zulu: {
          a: "Etc/UTC",
          r: 1,
        },
      };

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      if (timezone === "" || !timezone) {
        return null;
      }

      const _country = timezones[timezone].c[0];
      const country = countries[_country];
      return country;
    }

    function getState() {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      if (timezone === "" || !timezone) {
        return null;
      }

      const state = timezone.split("/")[1].replace("_", " ");

      return state;
    }

    const $country = document.querySelector(`#country`);
    const $state = document.querySelector(`#state`);

    console.log(getCountry());

    $select_state[0].selectize.setValue(getCountry());

    select_city.on("focus", function () {
      jQuery(".readonly").find("input").attr("readonly", true);
    });

    select_city.on("change", function () {
      select_city.blur();
    });

    select_city.on("blur", function () {
      jQuery(".readonly").find("input").attr("readonly", false);
    });

    updateCarrier();

    select_city.lock();

    $("#hero_carrier_id-selectized").prop("readonly", true);
  });
});
