function myFunction(x) {
    x.classList.toggle("change");
  } 

$(document).ready(function() {

    $(".hamburger").click(function(){
        $(".menu").toggleClass("verborgen");
    });

    var de_knop = $(".tekst_doneren input[type=submit]");
    de_knop.on("click", function(event){
        // voorkom dat de pagina reload
        event.preventDefault();

        // haal de titel met het verzamelde bedrag op
        var verzamelde_bedrag = $(".tekst_doneren h2").text();
        // haal de waarde (een volledig getal) uit de titel
        verzamelde_bedrag = parseInt(verzamelde_bedrag);

        // haal de donatie op
        var donatie_bedrag = $(".tekst_doneren input[type=number]").val();
        // als je bedrag niet ingevuld is, doe niets
        if(donatie_bedrag == ""){
            return;
        }
        // haal de absolute waarde (een volledig positief getal) uit de tekst
        donatie_bedrag = Math.abs(parseInt(donatie_bedrag));

        // tel de bedragen op voor een nieuw bedrag
        var nieuw_bedrag = verzamelde_bedrag + donatie_bedrag;
        // zoek een nieuwe procent voor de vooruitgang balk
        var nieuwe_procent = (nieuw_bedrag/4000) * 100;

        // vul de vooruitgangbalk
        $(".balk_vulling").css("width", nieuwe_procent + "%");
        // vul de titel met het nieuwe bedrag
        $(".tekst_doneren h2").text(nieuw_bedrag + " euro");

    });

});