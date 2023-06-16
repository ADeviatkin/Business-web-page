let currentLanguage = 'us'; // default language

function fetchTranslations(lang) {
    fetch(`translations/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            let translations = data;
            
            document.getElementById('nav-home').textContent = translations.nav_home;
            document.getElementById('nav-about').textContent = translations.nav_about;
            document.getElementById('nav-team').textContent = translations.nav_team;
            document.getElementById('nav-contact').textContent = translations.nav_contact;

            document.getElementById('carouseltitleentertainment').textContent = translations.carousel_title_entertainment;
            document.getElementById('carouseltextentertainment').textContent = translations.carousel_text_entertainment;

            document.getElementById('carousel-title-health').textContent = translations.carousel_title_health;
            document.getElementById('carousel-text-health').textContent = translations.carousel_text_health;
            document.getElementById('carousel-title-it').textContent = translations.carousel_title_it;
            document.getElementById('carousel-text-it').textContent = translations.carousel_text_it;
            
            document.getElementById('description-title').textContent = translations.description_title;
            document.getElementById('description-first').textContent = translations.description_first;
            document.getElementById('description-second').textContent = translations.description_second;
            
            document.getElementById('product-manager-description1').textContent = translations.product_manager_description;
            document.getElementById('product-manager-description2').textContent = translations.product_manager_description;
            document.getElementById('product-manager-description3').textContent = translations.product_manager_description;
            document.getElementById('software-developer-description1').textContent = translations.software_developer_description;
            document.getElementById('software-developer-description2').textContent = translations.software_developer_description;
            document.getElementById('software-developer-description3').textContent = translations.software_developer_description;
            document.getElementById('designer-description1').textContent = translations.designer_description;
            document.getElementById('designer-description2').textContent = translations.designer_description;
            document.getElementById('designer-description3').textContent = translations.designer_description;

            document.getElementById('contact-us-title').textContent = translations.contact_us_title;
            document.getElementById('contact-us-text').textContent = translations.contact_us_text;
            document.getElementById('contact-us-message').textContent = translations.contact_us_message;
            document.getElementById('contact-us-name').textContent = translations.contact_us_name;
            document.getElementById('contact-us-email').textContent = translations.contact_us_email;
            document.getElementById('contact-us-post').textContent = translations.contact_us_post;

            document.getElementById('modal-message-title').textContent = translations.modal_title;
            document.getElementById('modal-message-message').textContent = translations.modal_message;
            document.getElementById('modal-message-button').textContent = translations.modal_button;

            
        });
}

// initial fetch
document.addEventListener("DOMContentLoaded", fetchTranslations(currentLanguage));

function changeLanguage(event, lang) {
  currentLanguage = lang;
  fetchTranslations(currentLanguage);
  let dropdownButton = document.getElementById('dropdownButton');
  dropdownButton.innerHTML = event.target.outerHTML;
}

$(".dropdown-item").click(function(e) {
  e.preventDefault(); // prevent the default action
  var selectedLanguage = $(this).data('lang'); // Fetch the language from the data-lang attribute
  fetchTranslations(selectedLanguage);
});



  /* Javascript to show and hide cookie banner using localstorage */
  /* Shows the Cookie banner */
  function showCookieBanner(){
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "block";
   }
   
   /* Hides the Cookie banner and saves the value to localstorage */
   function hideCookieBanner(){
    localStorage.setItem("cb_isCookieAccepted", "yes");
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "none";
   }
   
   /* Checks the localstorage and shows Cookie banner based on it. */
   function initializeCookieBanner(){
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if(isCookieAccepted === null)
    {
     localStorage.setItem("cb_isCookieAccepted", "no");
     showCookieBanner();
    }
    if(isCookieAccepted === "no"){
     showCookieBanner();
    }
   }
   
   // Assigning values to window object
   window.onload = initializeCookieBanner();
   window.cb_hideCookieBanner = hideCookieBanner;
   // initial fetch
