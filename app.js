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

  function artFor(offer) {
    var text = (offer.brand + " " + offer.offer + " " + offer.retailer).toLowerCase();
    if (/mall|phoenix|orion|ub city|bhartiya/.test(text)) return "images/mall.jpg";
    if (/nykaa/.test(text)) return "images/beauty.jpg";
    if (/tv|qled|oled|bravia|qned/.test(text)) return "images/tv.jpg";
    if (/headphone|rockerz|marshall|wh-|ult wear|boat/.test(text)) return "images/audio.jpg";
    if (/macbook|laptop|victus|loq|vivobook|omnibook|ideapad|thinkpad|legion|yoga|dell |asus |hp /.test(text)) return "images/laptop.jpg";
    if (/iphone|galaxy|pixel|oneplus|xiaomi|redmi|nothing|phone|tab /.test(text)) return "images/phone.jpg";
    if (/nike|puma|adidas|skechers|birkenstock|footwear|sneaker|campus/.test(text)) return "images/sneakers.jpg";
    if (offer.cat === "Electronics") return "images/phone.jpg";
    return "images/fashion.jpg";
  }

  function renderAd(offer) {
    var primary = SOURCES[offer.src[0]];
    var article = el("article", "ad");
    var shot = document.createElement("a");
    shot.className = "ad-shot";
    shot.href = primary.u;
    shot.target = "_blank";
    shot.rel = "noopener noreferrer";
    var img = document.createElement("img");
    img.src = artFor(offer);
    img.alt = "";
    shot.appendChild(img);
    var flags = el("span", "ad-flags");
    flags.appendChild(el("span", "pill pill-" + offer.status.toLowerCase(), offer.status));
    flags.appendChild(el("span", "ad-cat", offer.cat));
    shot.appendChild(flags);
    shot.appendChild(el("span", "ad-retailer", offer.retailer));
    article.appendChild(shot);

    var body = el("div", "ad-body");
    body.appendChild(el("h3", null, offer.brand));
    body.appendChild(el("p", "ad-price", offer.price));
    body.appendChild(el("p", "ad-offer", offer.offer));
    body.appendChild(el("p", "ad-bank", offer.bank));
    body.appendChild(el("p", "ad-valid", offer.valid));
    var links = el("div", "ad-links");
    links.appendChild(sourceLinks(offer.src));
    body.appendChild(links);
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
    var rows = filterOffers(OFFERS, state);
    ["Electronics", "Fashion"].forEach(function (cat) {
      var section = document.getElementById(cat.toLowerCase());
      var grid = section.querySelector(".ad-grid");
      var empty = section.querySelector(".empty");
      var subset = rows.filter(function (offer) { return offer.cat === cat; });
      var visible = state.cat === "All" || state.cat === cat;
      section.hidden = !visible;
      grid.replaceChildren();
      if (!visible) return;
      subset.forEach(function (offer) { grid.appendChild(renderAd(offer)); });
      empty.hidden = subset.length !== 0;
      section.querySelector(".cat-count").textContent = String(subset.length);
    });
    document.getElementById("count").textContent = rows.length + " of " + OFFERS.length + " offers shown.";
  }

  function fillStats() {
    function count(pred) {
      return OFFERS.filter(pred).length;
    }
    document.getElementById("stat-total").textContent = String(OFFERS.length);
    document.getElementById("stat-electronics").textContent = String(count(function (o) { return o.cat === "Electronics"; }));
    document.getElementById("stat-fashion").textContent = String(count(function (o) { return o.cat === "Fashion"; }));
    document.getElementById("stat-live").textContent = String(count(function (o) { return o.status === "Live"; }));
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
    document.querySelectorAll("[data-jump-cat]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        var cat = link.getAttribute("data-jump-cat");
        setPressed("cat", cat);
        render();
        var section = document.getElementById(cat.toLowerCase());
        if (section && !section.hidden) {
          event.preventDefault();
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
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
