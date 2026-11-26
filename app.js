/* Filters, sorting and rendering. Offer text comes only from data.js. */
(function () {
  var STATUS_ORDER = { Live: 0, Upcoming: 1, Unconfirmed: 2 };

  function filterOffers(offers, state) {
    var needle = state.q.trim().toLowerCase();
    var filtered = offers.filter(function (o) {
      if (state.cat !== "All" && o.cat !== state.cat) return false;
      if (state.status !== "All" && o.status !== state.status) return false;
      if (state.retailer !== "All" && o.retailer !== state.retailer) return false;
      if (state.storeOnly && !o.store) return false;
      if (needle && (o.brand + " " + o.retailer + " " + o.offer + " " + o.bank).toLowerCase().indexOf(needle) === -1) return false;
      return true;
    });
    var sorted = filtered.slice();
    if (state.sort === "retailer") {
      sorted.sort(function (a, b) {
        return a.retailer.localeCompare(b.retailer) || a.brand.localeCompare(b.brand);
      });
    } else if (state.sort === "status") {
      sorted.sort(function (a, b) {
        return STATUS_ORDER[a.status] - STATUS_ORDER[b.status] || a.brand.localeCompare(b.brand);
      });
    } else {
      sorted.sort(function (a, b) {
        return a.brand.localeCompare(b.brand);
      });
    }
    return sorted;
  }

  function hostOf(url) {
    return url.replace("https://", "").split("/")[0];
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function sourceLinks(keys) {
    var span = document.createElement("span");
    keys.forEach(function (key, index) {
      if (index > 0) span.appendChild(document.createTextNode(" · "));
      var src = SOURCES[key];
      var link = document.createElement("a");
      link.href = src.u;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = src.l;
      span.appendChild(link);
    });
    return span;
  }

  var SOURCE_ART = {
    AD: "images/src/AD.jpg", AJ: "images/src/AJ.jpg", AZ: "images/src/AZ.jpg", BM: "images/src/BM.jpg",
    CW: "images/src/CW.jpg", DG: "images/src/DG.jpg", DJ: "images/src/DJ.jpg", FB: "images/src/FB.jpg",
    FE: "images/src/FE.jpg", GR: "images/src/GR.jpg", GZ: "images/src/GZ.jpg", H7: "images/src/H7.jpg",
    HB: "images/src/HB.jpg", HM: "images/src/HM.jpg", HZ: "images/src/HZ.jpg", IT: "images/src/IT.jpg",
    LN: "images/src/LN.jpg", LS: "images/src/LS.jpg", LV: "images/src/LV.jpg", MC: "images/src/MC.jpg",
    MS: "images/src/MS.jpg", MX: "images/src/MX.jpg", NK: "images/src/NK.jpg", OP: "images/src/OP.jpg",
    PC: "images/src/PC.jpg", PM: "images/src/PM.jpg", PN: "images/src/PN.jpg", PT: "images/src/PT.jpg",
    PU: "images/src/PU.jpg", SE: "images/src/SE.jpg", SM: "images/src/SM.jpg", SS: "images/src/SS.jpg",
    TN: "images/src/TN.jpg", TR: "images/src/TR.jpg", UQ: "images/src/UQ.jpg", VS: "images/src/VS.jpg",
    WS: "images/src/WS.jpg", ZC: "images/src/ZC.jpg", ZF: "images/src/ZF.jpg", ZU: "images/src/ZU.jpg"
  };

  function artFor(offer) {
    if (offer.brand.indexOf("boAt Rockerz 430") === 0) return "images/src/RDB.jpg";
    if (offer.brand.indexOf("Sony WH") === 0) return "images/src/RDS.jpg";
    if (offer.brand.indexOf("Marshall") === 0) return "images/src/RDM.jpg";
    if (offer.brand.indexOf("boAt Rockerz 650 Pro") === 0) return "images/src/CRB.jpg";
    if (offer.brand.indexOf("Xiaomi 4 Lite") === 0) return "images/src/CRA.jpg";
    if (offer.brand.indexOf("Google Pixel") === 0) return "images/src/VSTV.jpg";
    for (var i = 0; i < offer.src.length; i++) {
      if (SOURCE_ART[offer.src[i]]) return SOURCE_ART[offer.src[i]];
    }
    return "images/fashion.jpg";
  }

  var TOPS = [
    { id: "s25", image: "images/phone.jpg", title: "Samsung Galaxy S25 5G at ₹70,999 on Flipkart", detail: "Was ₹1,04,999; Flipkart Axis card takes off another ₹3,550. Flipkart's sale ends 27 Nov.", test: function (o) { return o.brand.indexOf("Samsung Galaxy S25 5G") === 0 && o.retailer === "Flipkart"; } },
    { id: "tcl", image: "images/tv.jpg", title: "TCL 65-inch QLED TV at ₹61,990, ₹42,740 with the best bank offer", detail: "Earlier price ₹1,14,990; the ₹42,740 needs the highest applicable Flipkart bank offer.", test: function (o) { return o.brand.indexOf("TCL 65") === 0; } },
    { id: "iphone", image: "images/phone.jpg", title: "Apple iPhone 17 (256GB) at ₹89,100, ₹85,100 with Axis or SBI card", detail: "Was ₹99,900; exchange up to ₹53,750.", test: function (o) { return o.brand === "Apple iPhone 17 (256GB)"; } },
    { id: "boat", image: "images/audio.jpg", title: "boAt Rockerz 650 Pro at ₹2,399 and boAt Rockerz 430 at ₹1,499", detail: "Croma lists 73% off a stated ₹8,990 MRP; Reliance Digital lists the 430 at 50% off ₹2,999.", test: function (o) { return o.brand.indexOf("boAt Rockerz 650 Pro") === 0; } },
    { id: "levis", image: "images/fashion.jpg", title: "Levi's 511 Slim jeans at ₹1,923 and adidas Supernova Rise 3 at ₹7,499.50", detail: "Brand-site prices; PUMA adds an extra 30% off sitewide from 27 Nov (early access 26 Nov).", test: function (o) { return o.brand === "Levi's"; } },
    { id: "cliq", image: "images/sneakers.jpg", title: "Tata CLiQ Fashion at 50–85% off with 12.5% instant discount on Amex, Axis and Kotak cards", detail: "Covers Levi's, U.S. Polo, Nike, PUMA, adidas Originals and more; 19–30 Nov.", test: function (o) { return o.brand.indexOf("Sale-wide") === 0; } }
  ];

  function topFor(offer) {
    for (var i = 0; i < TOPS.length; i++) if (TOPS[i].test(offer)) return TOPS[i];
    return null;
  }

  function renderAd(offer, index) {
    var primary = SOURCES[offer.src[0]];
    var top = topFor(offer);
    var article = el("article", "ad" + (top ? " is-top" : ""));
    article.id = "offer-" + index;
    var shot = el("div", "ad-shot");
    var img = document.createElement("img");
    img.src = artFor(offer);
    img.alt = offer.brand;
    shot.appendChild(img);
    var flags = el("span", "ad-flags");
    flags.appendChild(el("span", "pill pill-" + offer.status.toLowerCase(), offer.status));
    if (top) flags.appendChild(el("span", "top-flag", "Top"));
    shot.appendChild(flags);
    article.appendChild(shot);

    var body = el("div", "ad-body");
    body.appendChild(el("p", "ad-retailer", offer.retailer));
    body.appendChild(el("h3", null, offer.brand));
    if (offer.price && offer.price !== "—") body.appendChild(el("p", "ad-price", offer.price));
    body.appendChild(el("p", "ad-offer", offer.offer));

    var more = document.createElement("details");
    more.className = "ad-more";
    var summary = document.createElement("summary");
    summary.textContent = "Bank offer and sources";
    more.appendChild(summary);
    if (top) more.appendChild(el("p", "ad-top", top.detail));
    if (!offer.price || offer.price === "—") more.appendChild(el("p", null, "Price: " + offer.price));
    body.appendChild(el("p", "ad-valid", offer.valid));
    more.appendChild(el("p", null, "Bank offer: " + offer.bank));
    var links = el("div", "ad-links");
    links.appendChild(sourceLinks(offer.src));
    more.appendChild(links);
    more.addEventListener("toggle", function () { article.classList.toggle("is-open", more.open); });
    body.appendChild(more);

    var cta = document.createElement("a");
    cta.className = "ad-cta";
    cta.href = primary.u;
    cta.target = "_blank";
    cta.rel = "noopener noreferrer";
    cta.textContent = "See it on " + primary.l;
    body.appendChild(cta);
    article.appendChild(body);
    return article;
  }

  function readState() {
    var pressed = document.querySelector("[data-filter='cat'] [aria-pressed='true']");
    var status = document.querySelector("[data-filter='status'] [aria-pressed='true']");
    return {
      cat: pressed ? pressed.getAttribute("data-value") : "All",
      status: status ? status.getAttribute("data-value") : "All",
      retailer: document.getElementById("retailer").value,
      sort: document.getElementById("sort").value,
      q: document.getElementById("search").value,
      storeOnly: document.getElementById("store-only").checked
    };
  }

  function setPressed(group, value) {
    var buttons = document.querySelectorAll("[data-filter='" + group + "'] button");
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-value") === value ? "true" : "false");
    });
  }

  function render() {
    var state = readState();
    var rows = withPicksFirst(filterOffers(OFFERS, state), state);
    var feed = document.getElementById("feed");
    var empty = document.getElementById("feed-empty");
    feed.replaceChildren();
    rows.forEach(function (offer) {
      feed.appendChild(renderAd(offer, OFFERS.indexOf(offer)));
    });
    empty.hidden = rows.length !== 0;
    feed.scrollLeft = 0;
    updateCarousel();
  }

  function updateCarousel() {
    var feed = document.getElementById("feed");
    var count = document.getElementById("count");
    var cards = feed.querySelectorAll(".ad");
    if (!cards.length) {
      count.textContent = "0 / 0";
      return;
    }
    var origin = feed.getBoundingClientRect().left;
    var index = 0;
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].getBoundingClientRect().left - origin < feed.clientWidth * 0.5) index = i;
    }
    count.textContent = (index + 1) + " / " + cards.length;
  }

  function stepCarousel(direction) {
    var feed = document.getElementById("feed");
    var card = feed.querySelector(".ad");
    if (!card) return;
    var gap = 12;
    feed.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  }

  function withPicksFirst(rows, state) {
    var landing = state.sort === "brand" && state.cat === "All" && state.status === "All" && !state.q.trim() && state.retailer === "All" && !state.storeOnly;
    if (!landing) return rows;
    var tops = [];
    TOPS.forEach(function (top) {
      var found = rows.find(top.test);
      if (found) tops.push(found);
    });
    return tops.concat(rows.filter(function (offer) { return tops.indexOf(offer) === -1; }));
  }

  function showPanel(name) {
    ["offers", "stores", "notes"].forEach(function (id) {
      var panel = document.getElementById("panel-" + id);
      var button = document.querySelector("[data-panel='" + id + "']");
      var on = id === name;
      if (panel) panel.hidden = !on;
      if (button) button.setAttribute("aria-pressed", on ? "true" : "false");
    });
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function fillStats() {
    ["stat-total", "stat-electronics", "stat-fashion", "stat-live"].forEach(function (id) {
      if (!document.getElementById(id)) return;
    });
  }

  function fillRetailers() {
    var select = document.getElementById("retailer");
    var names = [];
    var seen = {};
    OFFERS.forEach(function (offer) {
      if (!seen[offer.retailer]) {
        seen[offer.retailer] = true;
        names.push(offer.retailer);
      }
    });
    names.sort();
    names.forEach(function (name) {
      var option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      select.appendChild(option);
    });
  }

  function fillSources() {
    var grid = document.getElementById("sources-grid");
    Object.keys(SOURCES).forEach(function (key) {
      var src = SOURCES[key];
      var link = document.createElement("a");
      link.className = "source-card";
      link.href = src.u;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.appendChild(el("span", "source-title", src.l));
      link.appendChild(el("span", "source-site", hostOf(src.u)));
      grid.appendChild(link);
    });
  }

  function init() {
    fillStats();
    fillRetailers();
    fillSources();
    document.querySelectorAll("[data-filter] button").forEach(function (button) {
      button.addEventListener("click", function () {
        setPressed(button.parentElement.getAttribute("data-filter"), button.getAttribute("data-value"));
        render();
      });
    });
    ["retailer", "sort", "store-only"].forEach(function (id) {
      document.getElementById(id).addEventListener("change", render);
    });
    document.getElementById("search").addEventListener("input", render);
    document.getElementById("filters").addEventListener("submit", function (event) {
      event.preventDefault();
      render();
    });
    document.getElementById("clear-filters").addEventListener("click", function () {
      setPressed("cat", "All");
      setPressed("status", "All");
      document.getElementById("retailer").value = "All";
      document.getElementById("sort").value = "brand";
      document.getElementById("search").value = "";
      document.getElementById("store-only").checked = false;
      render();
    });
    document.querySelectorAll("[data-panel]").forEach(function (button) {
      button.addEventListener("click", function () { showPanel(button.getAttribute("data-panel")); });
    });
    var feed = document.getElementById("feed");
    feed.addEventListener("scroll", function () { window.requestAnimationFrame(updateCarousel); }, { passive: true });
    document.getElementById("car-prev").addEventListener("click", function () { stepCarousel(-1); });
    document.getElementById("car-next").addEventListener("click", function () { stepCarousel(1); });
    feed.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { event.preventDefault(); stepCarousel(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); stepCarousel(-1); }
    });
    var loading = document.getElementById("loading");
    if (loading) loading.remove();
    render();
  }

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", init);
  }

  if (typeof globalThis !== "undefined") {
    globalThis.filterOffers = filterOffers;
  }
})();
