$(document).ready(function () {

// For finding recipe using spoonacular api
$("#search_recipe").click(function(){
    var recipe = $("#recipes").val();
    if (recipe != "") {
      $.ajax({
        url: "https://api.spoonacular.com/recipes/search?apiKey=97ec05b59eef4085a0695857ccab3d73&number=1&query="+recipe,
        success: function(data){
          var rec = show_recipe(data);
          $('#show_recipe').html(rec);
          $("#recipes").val("");
        }
      })
    }
  })

function show_recipe(data) {
    getSource(data.results[0].id);
    return "<h5><strong>Recipe for </strong>"+data.results[0].title+"</h5>" +
           "<h6><strong>Servings: </strong>"+data.results[0].servings+"</h6>" +
           "<h6><strong>Ready in: </strong>"+data.results[0].readyInMinutes+" minutes</h6>"+
           "<h6><strong>Find recipe in: </strong></h6>"
}
function getSource(id) {
  $.ajax({
    url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=97ec05b59eef4085a0695857ccab3d73",
    success: function(response){
      $("#source_link").html(response.sourceUrl)
      $("#source_link").attr('href', response.sourceUrl)
    }
  })
}


// for finding weather based on city using openweathermap api
  $("#search_city").click(function(){
    var city = $("#city").val();
    if (city != ''){
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city +"&units=metric" +
              "&APPID=fac2e3b408db86d5d4875dc4d31f3ba6",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
          var widget = show(data);
          $("#show").html(widget);
          $("#city").val(' ');
        }
      });
    }
  });

function show(data) {
  return "<h5><strong>Current Weather for</strong>: "+ data.name+ " , "+ data.sys.country+ "</h5>" +
         "<h6><strong>Weather</strong>: "+ data.weather[0].main +"</h6>" +
         "<h6><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon+".png'>"+ data.weather[0].description +"</h6>" +
         "<h6><strong>Temperature</strong>: "+ data.main.temp+ " &deg;C</h6>" +
         "<h6><strong>Pressure</strong>: "+ data.main.pressure +" hPa</h6>" +
         "<h6><strong>Humidity</strong>: "+ data.main.humidity +" %</h6>" +
         "<h6><strong>Minimun Temperature</strong>: "+ data.main.temp_min +" &deg;C</h6>" +
         "<h6><strong>Maximum Temperature</strong>: "+ data.main.temp_max +" &deg;C</h6>" +
         "<h6><strong>Wind Speed</strong>: "+ data.wind.speed +" m/s</h6>" +
         "<h6><strong>Wind Direction</strong>: "+ data.wind.deg +"&deg;</h6>";

}

$("#Recipe").hide();
$("#food").hide();
$("#weather").on('click', function() {
     $("#City").show();
     $("#Recipe").hide();
     $("#food").hide();
     $("#icons").show();
})

$("#places").on('click', function(){
  $("#icons").hide();
  $("#City").hide();
  $("#Recipe").show();
  $("#food").show();
})

})
