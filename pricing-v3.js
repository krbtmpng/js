//Pricing For Podcasts
var numOfShows = 5000;
var episodeRate = 2000;
var hostPrice = 500;
var remotePrice = 5000;
var producerPrice = 10000;
var videoPrice = 5000;
var voicePrice = 2000;
var musicPrice = 5000;
var distPrice = 500;


//Pricing For Microsite
var numSitesRate = 5000;
var totalPagesRate = 2000;
var integrationsPrice = 500;
var customBuildPrice = 5000;
var customDevelopmentPrice = 10000;
var copywritingPrice = 5000;
var ecommercePrice = 2000;
var seomarketingPrice = 5000;
var hostmgtPrice = 500;

//Pricing For Video Production
var numVideosRate = 5000;
var perVideoRate = 2000;
var daysLocPrice = 500;
var onSitePrice = 5000;
var postProdPrice = 10000;
var animationPrice = 5000;
var photographPrice = 2000;
var brollPrice = 5000;
var vidDistPrice = 500;

//Pricing For Masterclasses
var numClassRate = 5000;
var attendeesPrice = 2000;
var durationPrice = 500;
var classOnSitePrice = 5000;
var presentationPrice = 10000;
var leavePrice = 5000;
var eCoursePrice = 2000;
var classBrollPrice = 5000;
var classDistPrice = 500;

// Get the slider element using a dynamic ID
function getElementById(id) {
  return document.getElementById(id);
}

// Get all input elements using dynamic IDs
var inputIds = ["totalPages", "integrations", "sites", "totalCostMicrosite", "sitesSlider",
//For Podcast Inputs
"Number-of-Shows", "Episodes", "Hosts", "totalCost", "productsSlider",
//For Video Prod Inputs
"videos", "perVideo", "daysLoc", "totalVideoCost", "videoSlider",
//For Video Prod Inputs
"classes", "attendees", "duration", "totalClassCost", "classSlider"
];
var inputs = {};
inputIds.forEach(function (id) {
  inputs[id] = getElementById(id);
});

// Get all checkbox elements using dynamic IDs
var checkboxes = {
 //For Podcast Checkboxes
 remote: document.getElementById("Remote"),
 withProducer: document.getElementById("With-Producer"),
 video: document.getElementById("Video"),
 voiceTalent: document.getElementById("Voice-Talent"),
 customMusic: document.getElementById("Custom-Music"),
 distribution: document.getElementById("Distribution"),
    
 //For Microsite Checkboxes
  customBuild: document.getElementById("custom-build"),
  withDevelopment: document.getElementById("with-development"),
  copywriting: document.getElementById("copywriting"),
  ecommerce: document.getElementById("ecommerce"),
  seo: document.getElementById("seo"),
  hosting: document.getElementById("hosting"),

  //For Video Production
  onSite: document.getElementById("onSite"),
  postProd: document.getElementById("postProd"),
  animation: document.getElementById("animation"),
  photograph: document.getElementById("photograph"),
  broll: document.getElementById("broll"),
  vidDist: document.getElementById("vidDist"),
  
  //For Masterclasses Checkboxes
  classOnSite: document.getElementById("classOnSite"),
  withPresentation: document.getElementById("withPresentation"),
  leave: document.getElementById("leave"),
  eCourse: document.getElementById("eCourse"),
  classBRoll: document.getElementById("classBRoll"),
  classDist: document.getElementById("classDist"),
  
};


// Set default values for Podcasts
inputs["Number-of-Shows"].value = 1;
inputs.Episodes.value = 1;
inputs.Hosts.value = 0;
inputs.totalCost.value = numOfShows;

// Set default values for Microsite
inputs.sites.value = 1;
inputs.totalPages.value = 1;
inputs.integrations.value = 0;
inputs.totalCostMicrosite.value = numSitesRate;

// Set default values for Video Production
inputs.videos.value = 1;
inputs.perVideo.value = 1;
inputs.daysLoc.value = 0;
inputs.totalVideoCost.value = numVideosRate;


// Set default values for Masterclasses
inputs.classes.value = 1;
inputs.attendees.value = 1;
inputs.duration.value = 0;
inputs.totalClassCost.value = numClassRate;

//Step Counter
$(document).ready(function () {
for(var x=0; x < $(".minus").length; x++){
    $(".minus").eq(x).click(function () {
      var $input = $(this).parent().find("input");
      var count = parseInt($input.val()) - 1;
      count = count < 0 ? 0 : count;
      $input.val(count);
      $input.change();
      return false;
    });
 }
 for(var x=0; x < $(".plus").length; x++){
    $(".plus").eq(x).click(function () {
      var $input = $(this).parent().find("input");
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  }
});


//Calculation For Podcasts
function calculateChangePodcast() {
  inputs["Number-of-Shows"].value = inputs.productsSlider.value;
  inputs.totalCost.value = numOfShows *  inputs["Number-of-Shows"].value;
   inputs.totalCost.value = parseInt(inputs.totalCost.value) + parseInt(inputs.Episodes.value * episodeRate - episodeRate) + parseInt(inputs.Hosts.value * hostPrice);

 if (checkboxes.remote.checked === true) {
    inputs.totalCost.value = Number(inputs.totalCost.value) + remotePrice;
  }
 if (checkboxes.withProducer.checked === true) {
    inputs.totalCost.value = Number(inputs.totalCost.value) + producerPrice;
  }
 if (checkboxes.video.checked === true) {
    inputs.totalCost.value = Number(inputs.totalCost.value) + videoPrice;
  }
 if (checkboxes.voiceTalent.checked === true) {
    inputs.totalCost.value = Number(inputs.totalCost.value) + voicePrice;
  }
 if (checkboxes.customMusic.checked === true) {
    inputs.totalCost.value = Number(inputs.totalCost.value) + musicPrice;
  }
 if (checkboxes.distribution.checked === true) {
    inputs.totalCost.value = Number(inputs.totalCost.value) + distPrice;
  }
    
}

//call functions For Podcasts
inputs.Episodes.onchange = function () {
    if (inputs.Episodes.value >= 1){
    calculateChangePodcast();
  }
  else {
    inputs.Episodes.value = 1;
    calculateChangePodcast();
  }
};
inputs.Hosts.onchange = function () {
  calculateChangePodcast();
};
checkboxes.remote.onchange = function () {
  calculateChangePodcast();
};
checkboxes.withProducer.onchange = function () {
  calculateChangePodcast();
};
checkboxes.video.onchange = function () {
  calculateChangePodcast();
};
checkboxes.voiceTalent.onchange = function () {
  calculateChangePodcast();
};
checkboxes.customMusic.onchange = function () {
  calculateChangePodcast();
};
checkboxes.distribution.onchange = function () {
  calculateChangePodcast();
};


//Calculation For Microsite
function calculateChangeSite() {
  inputs.sites.value = sitesSlider.value;
   inputs.totalCostMicrosite.value = numSitesRate *  inputs.sites.value;
   inputs.totalCostMicrosite.value = parseInt(inputs.totalCostMicrosite.value) + parseInt(inputs.totalPages.value * totalPagesRate - totalPagesRate) + parseInt(inputs.integrations.value * integrationsPrice);
   
  if (checkboxes.customBuild.checked === true) {
    inputs.totalCostMicrosite.value = Number(inputs.totalCostMicrosite.value) + customBuildPrice;
  }
  if (checkboxes.withDevelopment.checked === true) {
    totalCostMicrosite.value = Number(totalCostMicrosite.value) + customDevelopmentPrice;
  }
  if (checkboxes.copywriting.checked === true) {
    totalCostMicrosite.value = Number(totalCostMicrosite.value) + copywritingPrice;
  }
  if (checkboxes.ecommerce.checked === true) {
    totalCostMicrosite.value = Number(totalCostMicrosite.value) + ecommercePrice;
  }
  if (checkboxes.seo.checked === true) {
    totalCostMicrosite.value = Number(totalCostMicrosite.value) + seomarketingPrice;
  }
  if (checkboxes.hosting.checked === true) {
    totalCostMicrosite.value = Number(totalCostMicrosite.value) + hostmgtPrice;
  }
 // console.log("change");
}

//call functions
inputs.totalPages.onchange = function () {
    if (totalPages.value >= 1){
    calculateChangeSite();
  }
  else {
    totalPages.value = 1;
    calculateChangeSite();
  }
};
inputs.integrations.onchange = function () {
  calculateChangeSite();
};
checkboxes.customBuild.onchange = function () {
  calculateChangeSite();
};
checkboxes.withDevelopment.onchange = function () {
  calculateChangeSite();
};
checkboxes.copywriting.onchange = function () {
  calculateChangeSite();
};
checkboxes.ecommerce.onchange = function () {
  calculateChangeSite();
};
checkboxes.seo.onchange = function () {
  calculateChangeSite();
};
checkboxes.hosting.onchange = function () {
  calculateChangeSite();
};




//Calculation For Video Production
function calculateChangeVideo() {
  inputs.videos.value = videoSlider.value;
   inputs.totalVideoCost.value = numVideosRate *  inputs.videos.value;
   inputs.totalVideoCost.value = parseInt(inputs.totalVideoCost.value) + parseInt(inputs.perVideo.value * perVideoRate - perVideoRate) + parseInt(inputs.daysLoc.value * daysLocPrice);
   
  if (checkboxes.onSite.checked === true) {
    inputs.totalVideoCost.value = Number(inputs.totalVideoCost.value) + onSitePrice;
  }
  if (checkboxes.postProd.checked === true) {
    totalVideoCost.value = Number(totalVideoCost.value) + postProdPrice;
  }
  if (checkboxes.animation.checked === true) {
    totalVideoCost.value = Number(totalVideoCost.value) + animationPrice;
  }
  if (checkboxes.photograph.checked === true) {
    totalVideoCost.value = Number(totalVideoCost.value) + photographPrice;
  }
  if (checkboxes.broll.checked === true) {
    totalVideoCost.value = Number(totalVideoCost.value) + brollPrice;
  }
  if (checkboxes.vidDist.checked === true) {
    totalVideoCost.value = Number(totalVideoCost.value) + vidDistPrice;
  }
 // console.log("change");
}

//call functions
inputs.perVideo.onchange = function () {
    if (perVideo.value >= 1){
    calculateChangeVideo();
  }
  else {
    perVideo.value = 1;
    calculateChangeVideo();
  }
};
inputs.daysLoc.onchange = function () {
  calculateChangeVideo();
};
checkboxes.onSite.onchange = function () {
  calculateChangeVideo();
};
checkboxes.postProd.onchange = function () {
  calculateChangeVideo();
};
checkboxes.animation.onchange = function () {
  calculateChangeVideo();
};
checkboxes.photograph.onchange = function () {
  calculateChangeVideo();
};
checkboxes.broll.onchange = function () {
  calculateChangeVideo();
};
checkboxes.vidDist.onchange = function () {
  calculateChangeVideo();
};




//Calculation For Masterclasses
function calculateChangeClass() {
  inputs.classes.value = classSlider.value;
   inputs.totalClassCost.value = numClassRate *  inputs.classes.value;
   inputs.totalClassCost.value = parseInt(inputs.totalClassCost.value) + parseInt(inputs.attendees.value * attendeesPrice - attendeesPrice) + parseInt(inputs.duration.value * durationPrice);
   
  if (checkboxes.classOnSite.checked === true) {
    inputs.totalClassCost.value = Number(inputs.totalClassCost.value) + classOnSitePrice;
  }
  if (checkboxes.withPresentation.checked === true) {
    inputs.totalClassCost.value = Number(totalClassCost.value) + presentationPrice;
  }
  if (checkboxes.leave.checked === true) {
    inputs.totalClassCost.value = Number(totalClassCost.value) + leavePrice;
  }
  if (checkboxes.eCourse.checked === true) {
    inputs.totalClassCost.value = Number(totalClassCost.value) + eCoursePrice;
  }
  if (checkboxes.classBRoll.checked === true) {
    inputs.totalClassCost.value = Number(totalClassCost.value) + classBrollPrice;
  }
  if (checkboxes.classDist.checked === true) {
    inputs.totalClassCost.value = Number(totalClassCost.value) + classDistPrice;
  }
 // console.log("change");
}

//call functions
inputs.attendees.onchange = function () {
    if (attendees.value >= 1){
    calculateChangeClass();
  }
  else {
    attendees.value = 1;
    calculateChangeClass();
  }
};
inputs.duration.onchange = function () {
  calculateChangeClass();
};
checkboxes.classOnSite.onchange = function () {
  calculateChangeClass();
};
checkboxes.withPresentation.onchange = function () {
  calculateChangeClass();
};
checkboxes.leave.onchange = function () {
  calculateChangeClass();
};
checkboxes.eCourse.onchange = function () {
  calculateChangeClass();
};
checkboxes.classBRoll.onchange = function () {
  calculateChangeClass();
};
checkboxes.classDist.onchange = function () {
  calculateChangeClass();
};
