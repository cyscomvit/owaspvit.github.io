document.addEventListener('DOMContentLoaded', () => {
    // TODO: Implement getParameterByName()
  
    const queryString = window.location.search;
    const getParameterByName = new URLSearchParams(queryString);
    
  
    // Get the action to complete.
    var mode = getParameterByName.get('mode');
    // Get the one-time code from the query parameter.
    var actionCode = getParameterByName.get('oobCode');
    // (Optional) Get the continue URL from the query parameter if available.
    var continueUrl = getParameterByName.get('continueUrl');
    // (Optional) Get the language code if available.
    var lang = getParameterByName.get('lang') || 'en';
  
    // Configure the Firebase SDK.
    // This is the minimum configuration required for the API to be used.
    var config = {
      'apiKey': "AIzaSyCLjNxUYTlrlVCG3OCLAkImONvPE7aPoNY" // Copy this key from the web initialization
                              // snippet found in the Firebase console.
    };
    var app = firebase.initializeApp(config);
    var auth = app.auth();
  
    // Handle the user management action.
    switch (mode) {
  
      case 'verifyEmail':
        // Display email verification handler and UI.
        console.log(mode + actionCode + continueUrl + lang);
        handleVerifyEmail(auth, actionCode, continueUrl, lang);
        break;
      default:
        // Error: invalid mode.
    }
  }, false);
  
  function handleVerifyEmail(auth, actionCode, continueUrl, lang) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.
    // Try to apply the email verification code.
    auth.applyActionCode(actionCode).then((resp) => {
        alert("email is verified");
      console.log("email verified.")
      // Email address has been verified.
  
      // TODO: Display a confirmation message to the user.
      // You could also provide the user with a link back to the app.
  
      // TODO: If a continue URL is available, display a button which on
      // click redirects the user back to the app via continueUrl with
      // additional state determined from that URL's parameters.
    }).catch((error) => {
        alert("email is not verified");
      console.log("email is invalid");
      // Code is invalid or expired. Ask the user to verify their email address
      // again.
    });
  }
