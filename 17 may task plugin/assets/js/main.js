// 2 input və düymə verilir, istifadəçi 1 inputa ad daxil edir və düyməyə kliklədikdə inputdakı dəyər listə əlavə olunur 
// (jquerydə append funksiyası var, onunla yazın).
//  Digər input isə listdə olan adları axtarmaq üçün istifadə olunur və 
//  yazdıqca axtarışın nəticəsinə uyğun olan list itemları görsənir
$(document).ready(function(){
    $("save-button").click(function(){
        const list = $('#word').val();
        $("ol").append('<li>'+list+'</li>');
        $('#word').val("")
    });
    $("#search-button").click(function(){
        const text = $('search').val().tolowerCase().trim();
        $("ol li").filter(function(){
            return $(this).text().tolowerCase().trim().indexOf(text)==-1
        }).hide();
        $('#search').val("")
    });
})