/* Extracted from the 25 Nov 2026 offers list. Do not edit prices, dates, or links by hand. */
const SOURCES = {
  "GR": {
    "l": "Goodreturns",
    "u": "https://www.goodreturns.in/news/black-friday-sale-2026-best-amazon-and-flipkart-deals-offers-in-india-check-iphone-samsung-offer-1549511.html"
  },
  "TN": {
    "l": "Times Now",
    "u": "https://www.timesnownews.com/technology-science/black-friday-sale-in-india-from-iphone-17-to-macbook-air-best-deals-on-smartphones-laptops-and-more-article-156559556"
  },
  "VS": {
    "l": "Vijay Sales",
    "u": "https://www.vijaysales.com/event-pages/black-friday"
  },
  "FE": {
    "l": "Femina",
    "u": "https://www.femina.in/fashion/fashion-news/40-best-black-friday-sales-to-shop-in-india-in-2026-femina-292030.html"
  },
  "CR": {
    "l": "Croma",
    "u": "https://www.croma.com/campaign/black-friday-sale-offers/c/7220"
  },
  "SM": {
    "l": "Samsung India",
    "u": "https://www.samsung.com/in/offer/black-friday/"
  },
  "DG": {
    "l": "Digit",
    "u": "https://www.digit.in/news/general/samsung-black-friday-sale-2026-samsung-galaxy-s25-to-z-fold-8-ultra-check-best-deals-on-flagship-phones.html"
  },
  "DJ": {
    "l": "Daily Jagran",
    "u": "https://www.thedailyjagran.com/technology/news/flipkart-black-friday-sale-65-inch-smart-tvs-get-huge-price-cuts-offers-and-discounts-10337324"
  },
  "AD": {
    "l": "adidas India",
    "u": "https://www.adidas.co.in/black_friday"
  },
  "LV": {
    "l": "Levi's India",
    "u": "https://levi.in/collections/black-friday-sale"
  },
  "PC": {
    "l": "CouponFolk",
    "u": "https://couponfolk.com/puma-black-friday-2026/"
  },
  "PU": {
    "l": "PUMA India",
    "u": "https://in.puma.com/in/en/all-discounted"
  },
  "MI": {
    "l": "Mi.com",
    "u": "https://www.mi.com/in/event/xiaomi-black-friday-sale-2026/"
  },
  "GZ": {
    "l": "Gizbot",
    "u": "https://hindi.gizbot.com/news/mi-com-black-friday-sale-2026-best-deals-under-20000-bank-offers-exchange-011-47379.html"
  },
  "OP": {
    "l": "OnePlus T&C",
    "u": "https://www.oneplus.in/terms-and-conditions/all-bank-instant-discount"
  },
  "RD": {
    "l": "Reliance Digital",
    "u": "https://www.reliancedigital.in/collection/headphones-251126"
  },
  "RT": {
    "l": "Reliance T&C",
    "u": "https://www.reliancedigital.in/page/iphone-deal-tc-2611"
  },
  "IT": {
    "l": "India TV",
    "u": "https://www.indiatvnews.com/technology/news/buy-iphone-17-pro-for-rs-54990-check-reliance-digital-offers-exchange-bonus-and-more-2026-11-20-1059965"
  },
  "ZF": {
    "l": "Zoutons",
    "u": "https://zoutons.com/news/flipkart-black-friday-laptop-deals-november-2026"
  },
  "LN": {
    "l": "Lenovo India",
    "u": "https://www.lenovo.com/in/en/deals/black-friday-sale/"
  },
  "HZ": {
    "l": "Herzindagi",
    "u": "https://www.herzindagi.com/shopping/zara-hm-mango-and-more-full-list-of-upcoming-sales-and-best-dates-to-shop-article-1072733"
  },
  "ZC": {
    "l": "CouponPe (Zara)",
    "u": "https://www.couponpe.com/in/journal/zara-black-friday-sale-november-2026"
  },
  "UQ": {
    "l": "Uniqlo India",
    "u": "https://www.uniqlo.com/in/en/feature/limited-offers/women"
  },
  "TC": {
    "l": "Tata CLiQ release",
    "u": "https://www.uniindia.com/business-wire-india/tata-cliq-luxury-and-tata-cliq-fashions-black-friday-sale-promises-an-exciting-start-to-the-holiday-102737/248108"
  },
  "MC": {
    "l": "CouponPe (Myntra)",
    "u": "https://www.couponpe.com/in/journal/myntra-black-friday-sale"
  },
  "FB": {
    "l": "Myntra Facebook",
    "u": "https://www.facebook.com/myntra/posts/the-myntra-black-friday-sale-is-almost-here-starting-27th-nov-unlock-50-80-off-o/901424402177812/"
  },
  "AJ": {
    "l": "CouponPe (AJIO)",
    "u": "https://www.couponpe.com/in/journal/ajio-black-friday-sale-november-2026"
  },
  "BM": {
    "l": "Silicon Village",
    "u": "https://blogspot.siliconvillage.net/2026/11/bhartiya-mall-of-bengaluru-brings-back.html"
  },
  "HB": {
    "l": "Hindu BusinessLine",
    "u": "https://www.thehindubusinessline.com/companies/malls-cash-in-black-friday-to-drive-footfalls-to-clear-festive-stocks/article71734974.ece"
  },
  "PM": {
    "l": "Phoenix Marketcity",
    "u": "https://www.phoenixmarketcity.com/bangalore/blog/Black-Friday/156"
  },
  "AZ": {
    "l": "Amazon India",
    "u": "https://www.aboutamazon.in/news/retail/amazon-black-friday-sale-india"
  },
  "NK": {
    "l": "Nike India T&C",
    "u": "https://www.nike.in/cp/app-offer-tnc"
  },
  "PT": {
    "l": "PingTalks",
    "u": "https://pingtalks.com/e-commerce/black-friday-sale-india-2026/"
  },
  "HM": {
    "l": "H&M India Black Friday",
    "u": "https://www2.hm.com/en_in/seasonal/black-friday.html"
  },
  "H7": {
    "l": "H&M last-chance sale",
    "u": "https://www2.hm.com/en_in/sale/women/last-chance-up-to-70--off.html"
  },
  "HL": {
    "l": "H&M Bangalore stores",
    "u": "https://www2.hm.com/en_in/customer-service/shopping-at-hm/store-locator/india/bangalore/mantri-mall/IN0011.html"
  },
  "WS": {
    "l": "Westside Black Friday",
    "u": "https://www.westside.com/collections/black-friday-shopping-deals"
  },
  "CW": {
    "l": "CouponPe (Westside)",
    "u": "https://www.couponpe.com/in/journal/westside-coupon-code"
  },
  "LS": {
    "l": "Lifestyle Stores",
    "u": "https://www.lifestylestores.com/in/en/"
  },
  "L2": {
    "l": "Lifestyle sale filter",
    "u": "https://www.lifestylestores.com/in/en/search?q=%3AbadgeInvisible_uFilter%3A388Z"
  },
  "LE": {
    "l": "Lifestyle Edge",
    "u": "https://www.lifestylestores.com/in/en/LIFESTYLE-EDGE"
  },
  "PN": {
    "l": "Pantaloons Black Friday",
    "u": "https://www.pantaloons.com/c/black-friday-sale"
  },
  "SS": {
    "l": "Shoppers Stop homepage",
    "u": "https://www.shoppersstop.com/"
  },
  "SE": {
    "l": "Shoppers Stop sale",
    "u": "https://www.shoppersstop.com/sale"
  },
  "MS": {
    "l": "Marks & Spencer India",
    "u": "https://www.marksandspencer.in/l/offers/flat40off/"
  },
  "MX": {
    "l": "Max Fashion Black Friday page",
    "u": "https://www.maxfashion.in/in/en/blackfriday"
  },
  "ME": {
    "l": "Max Elite",
    "u": "https://www.maxfashion.in/in/en/MAX-ELITE"
  },
  "ZU": {
    "l": "Zudio",
    "u": "https://www.zudio.com/"
  },
  "TR": {
    "l": "TRENDS",
    "u": "https://trends.shop/"
  }
};

const OFFERS = [
  {
    "brand": "Apple iPhone 17 (256GB)",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Black Friday sale price; exchange up to ₹53,750",
    "price": "₹89,100 (was ₹99,900)",
    "bank": "Flipkart Axis / SBI credit card: extra ₹4,000 (₹85,100)",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "GR",
      "TN"
    ]
  },
  {
    "brand": "Apple iPhone 18 Pro (256GB)",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Listed under MRP",
    "price": "₹1,60,900 (MRP ₹1,64,900)",
    "bank": "Flipkart Axis / SBI: extra ₹4,000",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "GR"
    ]
  },
  {
    "brand": "Apple iPhone Air (512GB)",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Exchange up to ₹71,650",
    "price": "₹1,21,900",
    "bank": "Extra ₹4,000 bank discount",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "GR"
    ]
  },
  {
    "brand": "Apple iPhone 17 Pro / Pro Max",
    "cat": "Electronics",
    "retailer": "Reliance Digital",
    "offer": "In-store ₹9,910 off, exchange up to ₹55,000, ₹10,000 exchange bonus, ₹5,000 cashback",
    "price": "Effective ₹54,990 (Pro 256GB, was ₹1,34,900) and from ₹69,990 (Pro Max) only after full exchange and all offers",
    "bank": "HDFC credit card EMI: up to ₹6,000 (also iPhone Air)",
    "valid": "Bank offer 16–30 Nov; price as of 20 Nov",
    "status": "Live",
    "src": [
      "IT",
      "RT"
    ],
    "store": true
  },
  {
    "brand": "Apple MacBook Air",
    "cat": "Electronics",
    "retailer": "Croma",
    "offer": "Teased Black Friday End of Season price, inclusive of offers",
    "price": "₹1,29,490 (vs ₹1,49,900)",
    "bank": "Included in teased price",
    "valid": "26–30 Nov",
    "status": "Upcoming",
    "src": [
      "TN"
    ]
  },
  {
    "brand": "Apple MacBook Air (M5, 2026) / MacBook Neo",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Listing prices read 22 Nov; excludes bank and exchange offers",
    "price": "Air ₹1,37,990; Neo ₹75,990 (badge 5%)",
    "bank": "See bank note",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "ZF"
    ]
  },
  {
    "brand": "Samsung Galaxy S25 5G (12GB+128GB)",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Exchange up to ₹46,750",
    "price": "₹70,999 (was ₹1,04,999)",
    "bank": "Flipkart Axis card: ₹3,550",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "TN"
    ]
  },
  {
    "brand": "Samsung Galaxy S25 FE (8GB+128GB)",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Black Friday price",
    "price": "₹43,499",
    "bank": "Flipkart Axis / SBI: extra ₹2,175",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "GR"
    ]
  },
  {
    "brand": "Samsung Galaxy S26 Ultra",
    "cat": "Electronics",
    "retailer": "Samsung.com",
    "offer": "₹4,000 first-purchase benefit; Corporate+ up to ₹12,130 off",
    "price": "₹1,54,999",
    "bank": "₹9,000 off via bank offers or exchange bonus",
    "valid": "13–30 Nov",
    "status": "Live",
    "src": [
      "DG",
      "SM"
    ]
  },
  {
    "brand": "Samsung Galaxy S26",
    "cat": "Electronics",
    "retailer": "Samsung.com",
    "offer": "₹4,000 first-purchase benefit; Corporate+ up to ₹8,630 off",
    "price": "₹1,02,999",
    "bank": "₹8,000 off via bank cards or exchange bonus",
    "valid": "13–30 Nov",
    "status": "Live",
    "src": [
      "DG",
      "SM"
    ]
  },
  {
    "brand": "Samsung Galaxy S25",
    "cat": "Electronics",
    "retailer": "Samsung.com",
    "offer": "Official-site listing",
    "price": "₹74,999",
    "bank": "₹9,000 instant bank discount; up to 10% extra via Samsung Axis card EMI",
    "valid": "Till 30 Nov",
    "status": "Live",
    "src": [
      "DG"
    ]
  },
  {
    "brand": "Samsung Galaxy Z Fold 8 / Fold 8 Ultra",
    "cat": "Electronics",
    "retailer": "Samsung.com",
    "offer": "Extra ₹2,000 first-purchase benefit; up to ₹5,200 reward points",
    "price": "From ₹1,79,999 (Fold 8) / ₹1,99,999 (Ultra)",
    "bank": "₹7,000 bank cashback or ₹8,000 exchange bonus",
    "valid": "Till 30 Nov",
    "status": "Live",
    "src": [
      "DG"
    ]
  },
  {
    "brand": "Samsung TVs (Neo QLED, OLED)",
    "cat": "Electronics",
    "retailer": "Samsung.com",
    "offer": "OLED comes with free 3-year extended warranty",
    "price": "Neo QLED from ₹88,990; OLED from ₹1,21,490",
    "bank": "Instant bank discount on Neo QLED",
    "valid": "13–30 Nov",
    "status": "Live",
    "src": [
      "SM"
    ]
  },
  {
    "brand": "Samsung Crystal 4K Vision AI 65\" TV",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Exchange up to ₹9,200 extra",
    "price": "₹61,990 (MRP ₹79,900)",
    "bank": "Axis / SBI up to ₹9,750; ICICI ₹9,000",
    "valid": "Sale 21–27 Nov (reported 23 Nov)",
    "status": "Live",
    "src": [
      "DJ"
    ]
  },
  {
    "brand": "TCL 65\" QLED TV",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "46% off the earlier ₹1,14,990 price",
    "price": "₹61,990; ₹42,740 with the best bank offer",
    "bank": "Axis / SBI up to ₹19,250; ICICI up to ₹19,000",
    "valid": "Sale 21–27 Nov (reported 23 Nov)",
    "status": "Live",
    "src": [
      "DJ"
    ]
  },
  {
    "brand": "Samsung Galaxy Tab A11 Plus",
    "cat": "Electronics",
    "retailer": "Croma",
    "offer": "Teased price, inclusive of offers",
    "price": "₹30,999 (from ₹40,999)",
    "bank": "Included in teased price",
    "valid": "26–30 Nov",
    "status": "Upcoming",
    "src": [
      "TN"
    ]
  },
  {
    "brand": "OnePlus N6 5G",
    "cat": "Electronics",
    "retailer": "Croma",
    "offer": "Teased price, inclusive of offers",
    "price": "₹24,999 (from ₹30,999)",
    "bank": "Included in teased price",
    "valid": "26–30 Nov",
    "status": "Upcoming",
    "src": [
      "TN"
    ]
  },
  {
    "brand": "Nothing Phone 4a 5G",
    "cat": "Electronics",
    "retailer": "Croma",
    "offer": "Teased price, inclusive of offers",
    "price": "₹42,999 (from ₹62,999)",
    "bank": "Included in teased price",
    "valid": "26–30 Nov",
    "status": "Upcoming",
    "src": [
      "TN"
    ]
  },
  {
    "brand": "OnePlus 15 / 15R / Nord 6",
    "cat": "Electronics",
    "retailer": "oneplus.in, Amazon, stores",
    "offer": "Prices not stated on the T&C page",
    "price": "—",
    "bank": "HDFC credit card EMI: ₹3,000 (OnePlus 15, Nord 6), ₹2,000 (15R)",
    "valid": "12–30 Nov",
    "status": "Live",
    "src": [
      "OP"
    ],
    "store": true
  },
  {
    "brand": "Xiaomi / Redmi (Note 17 series, Turbo 5, Xiaomi 17T, TVs)",
    "cat": "Electronics",
    "retailer": "Mi.com",
    "offer": "Sale live from 23 Nov; app-only coupons and UPI promos; prices not shown on the event page",
    "price": "—",
    "bank": "Axis credit card EMI up to ₹10,000 (1–30 Nov, once per card); ICICI up to ₹10,000 till 26 Dec",
    "valid": "Live; ends not stated",
    "status": "Live",
    "src": [
      "MI",
      "GZ"
    ]
  },
  {
    "brand": "HP Victus Gaming (i5, 12GB, 512GB, RTX 3050)",
    "cat": "Electronics",
    "retailer": "Vijay Sales",
    "offer": "Black Friday sale price",
    "price": "₹1,20,999 (was ₹1,70,569)",
    "bank": "ICICI credit card EMI (6 months+): flat ₹4,000",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "TN"
    ],
    "store": true
  },
  {
    "brand": "ASUS TUF A15 (Ryzen 7, 16GB, RTX 3050)",
    "cat": "Electronics",
    "retailer": "Vijay Sales",
    "offer": "Black Friday sale price",
    "price": "₹1,04,990 (was ₹1,61,990)",
    "bank": "HDFC credit card EMI (6 months): flat ₹6,000",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "TN"
    ],
    "store": true
  },
  {
    "brand": "Multi-brand (Apple, Samsung, LG, Sony, HP, Dell, Lenovo, ASUS, OnePlus, Xiaomi, boAt, JBL; varies)",
    "cat": "Electronics",
    "retailer": "Vijay Sales",
    "offer": "Black Friday event page; online and in stores, offers may differ by channel",
    "price": "—",
    "bank": "HDFC EMI: ₹500 (₹5k–15k bill) up to ₹15,000 (₹2.5L+)",
    "valid": "Bank offer 1 Oct–30 Nov",
    "status": "Live",
    "src": [
      "VS"
    ],
    "store": true
  },
  {
    "brand": "Google Pixel 11 / 10, Sony Bravia, LG QNED / OLED TVs",
    "cat": "Electronics",
    "retailer": "Vijay Sales",
    "offer": "Listed on the Black Friday page; prices not captured",
    "price": "—",
    "bank": "HDFC EMI ladder above",
    "valid": "Not stated",
    "status": "Unconfirmed",
    "src": [
      "VS"
    ],
    "store": true
  },
  {
    "brand": "Dell 15 (AMD Ryzen 5)",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Listing read 22 Nov; badge is against stated MRP",
    "price": "₹54,990 (39% badge)",
    "bank": "Excluded from price",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "ZF"
    ]
  },
  {
    "brand": "HP OmniBook 3 Next Gen AI PC",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Listing read 22 Nov; badge is against stated MRP",
    "price": "₹68,900 (53% badge)",
    "bank": "Excluded from price",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "ZF"
    ]
  },
  {
    "brand": "ASUS Vivobook S16 (2026) / TUF Gaming A15 (2026)",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Listings read 22 Nov; badges against stated MRP",
    "price": "₹80,990 (45%) / ₹98,264 (39%)",
    "bank": "Excluded from price",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "ZF"
    ]
  },
  {
    "brand": "Lenovo LOQ (Core i7, 13th Gen)",
    "cat": "Electronics",
    "retailer": "Flipkart",
    "offer": "Listing read 22 Nov; badge against stated MRP",
    "price": "₹1,57,990 (44% badge)",
    "bank": "Excluded from price",
    "valid": "21–27 Nov",
    "status": "Live",
    "src": [
      "ZF"
    ]
  },
  {
    "brand": "Lenovo (ThinkPad, IdeaPad, Legion, Yoga, LOQ)",
    "cat": "Electronics",
    "retailer": "Lenovo India (official)",
    "offer": "Black Friday 2026 sale page is live; specific deal prices not captured",
    "price": "—",
    "bank": "—",
    "valid": "Not stated",
    "status": "Unconfirmed",
    "src": [
      "LN"
    ]
  },
  {
    "brand": "Sony WH-CH520 / ULT WEAR WH-ULT900N",
    "cat": "Electronics",
    "retailer": "Reliance Digital",
    "offer": "Headphones Black Friday collection",
    "price": "₹4,490 (MRP ₹5,990) / ₹13,990 (MRP ₹24,990)",
    "bank": "—",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "RD"
    ],
    "store": true
  },
  {
    "brand": "boAt Rockerz 430 / 421 / 450",
    "cat": "Electronics",
    "retailer": "Reliance Digital",
    "offer": "Headphones Black Friday collection",
    "price": "₹1,499 (MRP ₹2,999) / ₹1,499 / ₹1,899",
    "bank": "—",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "RD"
    ],
    "store": true
  },
  {
    "brand": "Marshall Major V",
    "cat": "Electronics",
    "retailer": "Reliance Digital",
    "offer": "Headphones Black Friday collection",
    "price": "₹10,499 (MRP ₹14,999)",
    "bank": "—",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "RD"
    ],
    "store": true
  },
  {
    "brand": "boAt Rockerz 650 Pro",
    "cat": "Electronics",
    "retailer": "Croma",
    "offer": "73% off stated MRP of ₹8,990",
    "price": "₹2,399",
    "bank": "—",
    "valid": "Sale expected 26–30 Nov",
    "status": "Live",
    "src": [
      "CR"
    ],
    "store": true
  },
  {
    "brand": "Xiaomi 4 Lite Air Purifier; Croma 43\" QLED 4K TV",
    "cat": "Electronics",
    "retailer": "Croma",
    "offer": "Black Friday Sale Offers page (1,237 products listed)",
    "price": "₹11,490 (MRP ₹14,999); ₹24,990 (MRP ₹29,000)",
    "bank": "Air purifier: ₹2,000 bank and UPI offer; TV: extra ₹2,000 off",
    "valid": "Sale expected 26–30 Nov",
    "status": "Live",
    "src": [
      "CR",
      "TN"
    ],
    "store": true
  },
  {
    "brand": "Amazon.in (phones, electronics, home, fashion, beauty)",
    "cat": "Electronics",
    "retailer": "Amazon India",
    "offer": "Sale starts 27 Nov; deals to be announced",
    "price": "—",
    "bank": "Not announced",
    "valid": "From 27 Nov",
    "status": "Upcoming",
    "src": [
      "AZ",
      "PT"
    ]
  },
  {
    "brand": "adidas",
    "cat": "Fashion",
    "retailer": "adidas.co.in",
    "offer": "Up to 50% off, plus extra 15% on orders above ₹4,999",
    "price": "Supernova Rise 3 ₹7,499.50 (₹14,999); Fleece Hoodie ₹1,999.50 (₹3,999); BlazeRun2 ₹2,399.50 (₹4,799)",
    "bank": "—",
    "valid": "Not stated on page",
    "status": "Live",
    "src": [
      "AD"
    ]
  },
  {
    "brand": "PUMA",
    "cat": "Fashion",
    "retailer": "in.puma.com",
    "offer": "Extra 30% off sitewide; prepaid extra 5% (capped ₹400); first order 10%",
    "price": "—",
    "bank": "—",
    "valid": "Early access 26 Nov; sale 27–30 Nov",
    "status": "Live",
    "src": [
      "PU",
      "PC",
      "FE"
    ]
  },
  {
    "brand": "Levi's",
    "cat": "Fashion",
    "retailer": "levi.in",
    "offer": "Black Friday collection; page title says up to 50% off, some items show deeper cuts",
    "price": "511 Slim ₹1,923 (₹5,199); 505 Straight ₹2,293 (₹6,199); Women's 94 Baggy ₹1,844 (₹4,099)",
    "bank": "—",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "LV"
    ]
  },
  {
    "brand": "Nike",
    "cat": "Fashion",
    "retailer": "Nike India app",
    "offer": "No Black Friday sale found; app-only flat 15% off (min cart ₹2,500, max ₹1,500)",
    "price": "—",
    "bank": "—",
    "valid": "Till 7 Dec",
    "status": "Unconfirmed",
    "src": [
      "NK"
    ]
  },
  {
    "brand": "Nike, PUMA, adidas Originals, Skechers, Campus (footwear)",
    "cat": "Fashion",
    "retailer": "Tata CLiQ Fashion",
    "offer": "Up to 40–50% off",
    "price": "—",
    "bank": "12.5% instant discount: Amex, Axis, Kotak credit cards",
    "valid": "19–30 Nov",
    "status": "Live",
    "src": [
      "TC"
    ]
  },
  {
    "brand": "Levi's, U.S. Polo Assn., Arrow, Monte Carlo, Rare Rabbit",
    "cat": "Fashion",
    "retailer": "Tata CLiQ Fashion",
    "offer": "Minimum 30–50% off",
    "price": "—",
    "bank": "12.5% instant discount: Amex, Axis, Kotak credit cards",
    "valid": "19–30 Nov",
    "status": "Live",
    "src": [
      "TC"
    ]
  },
  {
    "brand": "Forever New, Only, Rareism, Marks & Spencer, Biba, Libas",
    "cat": "Fashion",
    "retailer": "Tata CLiQ Fashion",
    "offer": "Forever New up to 50%; Only and Rareism min 30%; M&S up to 50%",
    "price": "—",
    "bank": "12.5% instant discount: Amex, Axis, Kotak credit cards",
    "valid": "19–30 Nov",
    "status": "Live",
    "src": [
      "TC"
    ]
  },
  {
    "brand": "Sale-wide (ALDO flat 50%, Decathlon up to 70%, Metro, Mochi, Woodland min 30%)",
    "cat": "Fashion",
    "retailer": "Tata CLiQ Fashion / Luxury",
    "offer": "Fashion at 50–85% off",
    "price": "—",
    "bank": "12.5% instant discount: Amex, Axis, Kotak credit cards",
    "valid": "19–30 Nov",
    "status": "Live",
    "src": [
      "TC",
      "FE"
    ]
  },
  {
    "brand": "Myntra Black Friday (Libas, Biba, W, Mango, Forever New, Vero Moda; international labels)",
    "cat": "Fashion",
    "retailer": "Myntra",
    "offer": "Myntra's Facebook post says sale starts 27 Nov at 50–80% off; Myntra's own page not confirmed by me",
    "price": "—",
    "bank": "Not announced (HDFC expected, unconfirmed)",
    "valid": "From 27 Nov; end expected 30 Nov",
    "status": "Upcoming",
    "src": [
      "FB",
      "FE",
      "MC"
    ]
  },
  {
    "brand": "AJIO Black Friday",
    "cat": "Fashion",
    "retailer": "AJIO",
    "offer": "Reported: up to 80% off ethnic wear, 70% footwear, 60% winterwear",
    "price": "—",
    "bank": "IDBI: 10% up to ₹1,000 (min ₹1,000); ICICI EMI: 10% up to ₹1,000 (min ₹3,000); both exclude H&M",
    "valid": "From 27 Nov; bank offers to 31 Mar 2027",
    "status": "Upcoming",
    "src": [
      "FE",
      "AJ"
    ]
  },
  {
    "brand": "H&M Black Friday",
    "cat": "Fashion",
    "retailer": "H&M India (site and stores)",
    "offer": "Official page marks 27 Nov for Black Friday deals on women's, men's, kids' and baby clothes; no discount range is stated there. News sites expect 40–70% off or a 27–30 Nov window; those figures are not on H&M's page.",
    "price": "—",
    "bank": "—",
    "valid": "Official date marked: 27 Nov",
    "status": "Upcoming",
    "src": [
      "HM",
      "FE",
      "HZ"
    ],
    "store": true
  },
  {
    "brand": "H&M last-chance sale",
    "cat": "Fashion",
    "retailer": "H&M India",
    "offer": "A separate live sale titled Last Chance, up to 70% off, already on the site before Black Friday",
    "price": "Printed long-sleeved T-shirt ₹399 (₹999); Relaxed Fit T-shirt ₹899 (₹1,499); Hourglass dress ₹3,399 (₹5,499)",
    "bank": "—",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "H7"
    ]
  },
  {
    "brand": "Zara",
    "cat": "Fashion",
    "retailer": "Zara India",
    "offer": "Expected from 26 Nov, up to 40% on selected items; Zara had announced nothing as of 14 Nov",
    "price": "Special Prices (3 Nov): knit jumper ₹1,950 (was ₹3,950)",
    "bank": "No codes; markdowns only",
    "valid": "Expected from 26 Nov",
    "status": "Unconfirmed",
    "src": [
      "ZC",
      "HZ"
    ]
  },
  {
    "brand": "Mango / Bershka",
    "cat": "Fashion",
    "retailer": "Brand stores / sites",
    "offer": "Mango 50–70% off selected; Bershka 40–50% off selected",
    "price": "—",
    "bank": "—",
    "valid": "Mango 20–30 Nov (BF 27–29 Nov); Bershka from 26 Nov",
    "status": "Unconfirmed",
    "src": [
      "HZ"
    ]
  },
  {
    "brand": "UNIQLO",
    "cat": "Fashion",
    "retailer": "Uniqlo India",
    "offer": "No Black Friday sale; limited offers on winter wear",
    "price": "Pufftech Jacket ₹4,990 (₹5,990); Fleece Jacket ₹2,990 (₹3,990)",
    "bank": "—",
    "valid": "Till 26 Nov",
    "status": "Live",
    "src": [
      "UQ"
    ]
  },
  {
    "brand": "Marks & Spencer Black Friday",
    "cat": "Fashion",
    "retailer": "M&S India (online; Femina also says in stores)",
    "offer": "Official page: live Black Friday, flat 40% off selected lines. The site also has a separate sale section at 50–70% off. Femina reported a flat 40% off select products online and in stores.",
    "price": "Check Contrast Bomber Jacket ₹4,799.40 (₹7,999); Wool Blend Melton Jacket ₹7,799.40 (₹12,999); Supima cotton shirt ₹1,499.40 (₹2,499). Free delivery above ₹1,499.",
    "bank": "—",
    "valid": "Not stated on the official page",
    "status": "Live",
    "src": [
      "MS",
      "FE"
    ],
    "store": true
  },
  {
    "brand": "Lifestyle Stores",
    "cat": "Fashion",
    "retailer": "lifestylestores.com (and stores)",
    "offer": "Homepage banner, in their wording, reads Blacky Friday Sale is Live — up to 50% + extra 20% off, free shipping, no COD charges. The linked sale list often shows shallower cuts, such as 15–20% off or 2 at 15% off.",
    "price": "Fame Forever washed relaxed-fit jeans ₹1,279 (₹1,499, 20% off); Fame Forever polo ₹424 (₹499); Ginger flip-flops ₹399",
    "bank": "Lifestyle Edge and Landmark Rewards SBI card are standing programmes; no Black Friday bank amount was readable as text on the SBI page",
    "valid": "Live on 25 Nov; end date not stated",
    "status": "Live",
    "src": [
      "LS",
      "L2",
      "LE"
    ],
    "store": true
  },
  {
    "brand": "Pantaloons",
    "cat": "Fashion",
    "retailer": "pantaloons.com",
    "offer": "Official Black Friday sale, minimum 20% off. Items on the page show much deeper badges, including online-exclusive styles. Sale dates are not stated on the official page.",
    "price": "YU kurta set ₹1,009 (₹4,199, 76%); Bare Denim cardigan ₹479 (₹1,499, 68%); Urban Ranger jacket ₹594 (₹1,699, 65%)",
    "bank": "—",
    "valid": "Not stated on the official page",
    "status": "Live",
    "src": [
      "PN"
    ]
  },
  {
    "brand": "Shoppers Stop Black Friday",
    "cat": "Fashion",
    "retailer": "shoppersstop.com",
    "offer": "Homepage banner: Black Friday Brands In Focus, flat ₹800 off* with code BLACKFRI. A dedicated /Black-friday-sales URL now returns 404, so that older ₹600-off page was dropped. First-time code SSNEWBUY is an extra 10% off.",
    "price": "—",
    "bank": "Codes BLACKFRI and SSNEWBUY; First Citizen terms for this sale were not published in the homepage text",
    "valid": "Live on the homepage on 25 Nov; dates and minimum spend not stated in the text (offer is starred)",
    "status": "Live",
    "src": [
      "SS"
    ],
    "store": true
  },
  {
    "brand": "Shoppers Stop End of Season Sale",
    "cat": "Fashion",
    "retailer": "shoppersstop.com/sale",
    "offer": "End of Season Sale, up to 50% off across categories",
    "price": "—",
    "bank": "SSNEWBUY: extra 10% off for first-time users",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "SE"
    ]
  },
  {
    "brand": "Westside (Tata Trent)",
    "cat": "Fashion",
    "retailer": "westside.com",
    "offer": "Official Black Friday 2026 collection is live, with five styles listed. Product pages show prices but no compare-at markdown. CouponPe found no Black Friday announcement as of 15 Nov; standing first-order code NEW20 is 20% off (min ₹999, 7 days from sign-up).",
    "price": "Vark co-ord set ₹2,599; Ascot jacket ₹2,999; ETA cotton shirt ₹1,299; Zuba palazzos ₹1,699; Luna Blu sneakers ₹1,499",
    "bank": "No Tata Neu Black Friday offer was confirmed for this collection",
    "valid": "Collection live on 25 Nov; sale dates not stated",
    "status": "Live",
    "src": [
      "WS",
      "CW"
    ],
    "store": true
  },
  {
    "brand": "Max Fashion",
    "cat": "Fashion",
    "retailer": "maxfashion.in",
    "offer": "A /blackfriday page exists but showed no discount terms or dates in my read. The homepage on 25 Nov had no Black Friday banner. Max Elite is a standing paid rewards programme, not a confirmed Black Friday offer.",
    "price": "—",
    "bank": "Max Elite: ₹250 online coupon (min ₹699), in-store vouchers, sale-preview extra 10% for members",
    "valid": "Not stated",
    "status": "Unconfirmed",
    "src": [
      "MX",
      "ME"
    ],
    "store": true
  },
  {
    "brand": "Reliance Trends",
    "cat": "Fashion",
    "retailer": "trends.shop and stores",
    "offer": "The official site now lives at trends.shop and shows a winter campaign (Winter gets TRENDY); no Black Friday discount or dates were visible. Trends is named as a retailer in the Bhartiya Mall Bengaluru sale.",
    "price": "—",
    "bank": "—",
    "valid": "Mall event 27–29 Nov; no online dates found",
    "status": "Unconfirmed",
    "src": [
      "TR",
      "BM"
    ],
    "store": true
  },
  {
    "brand": "Zudio (Tata Trent)",
    "cat": "Fashion",
    "retailer": "zudio.com",
    "offer": "Homepage checked on 25 Nov; no Black Friday or end-of-season sale was stated",
    "price": "—",
    "bank": "—",
    "valid": "—",
    "status": "Unconfirmed",
    "src": [
      "ZU"
    ],
    "store": true
  },
  {
    "brand": "Central",
    "cat": "Fashion",
    "retailer": "—",
    "offer": "No confirmed 2026 Black Friday or end-of-season offer found for Central in India",
    "price": "—",
    "bank": "—",
    "valid": "—",
    "status": "Unconfirmed",
    "src": [
      "BM"
    ]
  },
  {
    "brand": "Birkenstock",
    "cat": "Fashion",
    "retailer": "Online and stores",
    "offer": "Up to 50% off online; spend-based offers in stores",
    "price": "—",
    "bank": "—",
    "valid": "26–30 Nov",
    "status": "Upcoming",
    "src": [
      "FE"
    ],
    "store": true
  },
  {
    "brand": "Libas",
    "cat": "Fashion",
    "retailer": "Brand site / marketplaces",
    "offer": "Advertised up to 70% off",
    "price": "—",
    "bank": "—",
    "valid": "Not stated",
    "status": "Live",
    "src": [
      "FE"
    ]
  },
  {
    "brand": "Nykaa Pink Friday (beauty)",
    "cat": "Fashion",
    "retailer": "Nykaa",
    "offer": "Up to 60% off expected; Nykaa Privé early access typical",
    "price": "—",
    "bank": "—",
    "valid": "From 27 Nov",
    "status": "Upcoming",
    "src": [
      "HZ",
      "FE"
    ]
  },
  {
    "brand": "Amazon Fashion",
    "cat": "Fashion",
    "retailer": "Amazon India",
    "offer": "Fashion is in the sale categories; no deals published yet",
    "price": "—",
    "bank": "Not announced",
    "valid": "From 27 Nov",
    "status": "Upcoming",
    "src": [
      "AZ"
    ]
  },
  {
    "brand": "Lifestyle, Max, Pantaloons, Reliance Trends, Home Centre",
    "cat": "Fashion",
    "retailer": "Bhartiya Mall of Bengaluru (Bengaluru)",
    "offer": "Up to 80% off select products (Silicon Village); the mall's own LinkedIn post says up to 70%",
    "price": "—",
    "bank": "—",
    "valid": "27–29 Nov",
    "status": "Upcoming",
    "src": [
      "BM"
    ],
    "store": true
  },
  {
    "brand": "Phoenix Marketcity Bangalore",
    "cat": "Fashion",
    "retailer": "Mall (Whitefield)",
    "offer": "No 2026 event found; the mall's page is from 28 Nov 2025 (past years: up to 50% across 300+ brands)",
    "price": "—",
    "bank": "—",
    "valid": "Not confirmed",
    "status": "Unconfirmed",
    "src": [
      "PM"
    ],
    "store": true
  },
  {
    "brand": "Orion Mall, UB City",
    "cat": "Fashion",
    "retailer": "Malls (Bengaluru)",
    "offer": "No 2026 Black Friday event found; Orion reported 15% higher footfall at its 2025 sale",
    "price": "—",
    "bank": "—",
    "valid": "Not confirmed",
    "status": "Unconfirmed",
    "src": [
      "HB"
    ],
    "store": true
  }
];
