/* eslint-disable */
document.addEventListener("DOMContentLoaded", () => {
  var listModels = ["pio", "tia"];
  var isChangeModel = true;
  var numberTextures = {
    pio: 87,
    tia: 63
  };
  var modelName = "tia";
  var modelPath = "/assets/waifu/" + modelName + "/" + modelName + ".json";

  loadModel(modelPath);
  // Dark mode config
  var isDarkMode = true;
  var lightIcon = "fas fa-lightbulb";
  var darkIcon = "far fa-lightbulb";
  // Remove Change model if not change model
  if (!isChangeModel) {
    $(".change-model").remove();
  }
  if (!isDarkMode) {
    $(".dark-mode").remove();
  }
  $(".change-skin").click(() => {
    loadModel(getModelPath(modelName, numberTextures[modelName]));
  });
  $(".change-model").click(() => {
    randModel = randModelName(listModels);
    while (modelName == randModel) {
      randModel = randModelName(listModels);
    }
    modelName = randModel;
    loadModel(getModelPath(modelName, numberTextures[modelName]));
  });
  $(".dark-mode").click(() => {
    current = $("body").attr("class");
    if (current == "light") {
      $(".dark-mode > i")
        .removeClass(lightIcon)
        .addClass(darkIcon);
      $("body")
        .removeClass("light")
        .addClass("dark");
    } else {
      $(".dark-mode > i")
        .removeClass(darkIcon)
        .addClass(lightIcon);
      $("body")
        .removeClass("dark")
        .addClass("light");
    }
  });
  $(".back-top").click(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  $(".active").click(function() {
    if ($(".waifu-tool > span:nth-child(2)").css("display") == "none") {
      $(".waifu-tool > span").css({
        display: "block"
      });
    } else {
      $(".waifu-tool > span").css({
        display: "none"
      });
      $(".active").css({
        display: "block"
      });
    }
  });

  // Button ToolTips
  var activeTips = tippy(".active", {
    showOnCreate: true,
    hideOnClick: false,
    placement: "top",
    onHide(instance) {
      return false;
    }
  });
  tippy(".tool-btn", {
    placement: "right"
  });
  //
});

function randModelName(listModels) {
  var randIndex = Math.floor(Math.random() * listModels.length);
  return listModels[randIndex];
}

function getModelPath(randModel, numberTextures) {
  var randTexture = Math.floor(Math.random() * numberTextures);
  var modelPath = null;
  if (randTexture == 0) {
    modelPath = "/assets/waifu/" + randModel + "/" + randModel + ".json";
  } else {
    modelPath =
      "/assets/waifu/" +
      randModel +
      "/" +
      randModel +
      "-" +
      randTexture +
      ".json";
  }
  console.log(modelPath);
  return modelPath;
}

function loadModel(modelPath) {
  loadlive2d("waifu-canvas", modelPath);
}
