//Expands Foundation Abide validations
function formValidationMultitab(){
  var formTrigger = document.querySelectorAll("[data-abide]");

  function formRevalidateMultitab(){
    var errorTabFields = document.querySelectorAll(".tabs-panel .is-invalid-input"),
    errorTabs = document.querySelectorAll(".is-tab-error"),
    customErrors = document.querySelectorAll(".is-tab-custom-error-visible");

    //Remove error classes before validations
    for (var i = "0"; i < errorTabs.length; i++){
      errorTabs[i].classList.remove("is-tab-error");
    }
    for (var i = "0"; i < customErrors.length; i++){
      customErrors[i].classList.remove("is-tab-custom-error-visible");
    }

    //Validation
    for (var i = "0"; i < errorTabFields.length; i++){
      var currentTab = errorTabFields[i].parentNode,
      customError = errorTabFields[i].getAttribute("data-tab-custom-error") || false;

      while(! errorTabFields[i].parentNode.classList.contains("tabs-panel")){
        currentTab = currentTab.parentNode;
      }
      document.querySelector("a[href='#" + currentTab.id + "']").classList.add("is-tab-error");

      //Display custom messages
      if(customError){
        document.querySelector("#" + customError).classList.add("is-tab-custom-error-visible");
      }
    }
  }

  //Form listener for submit and changes
  for (var i = "0"; i < formTrigger.length; i++){
    formTrigger[i].addEventListener("submit", formRevalidateMultitab);
    formTrigger[i].addEventListener("change", formRevalidateMultitab);
  }
}
