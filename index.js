$("#butt").click(function(){
    $(this).hide("slow", "swing");
    $(this).toggle("slow");
}); 



$(document).ready(function(){
    
        setInterval(function(){
            var d = new Date();
            var h = d.getHours()<10?"0" + d.getHours(): d.getHours();
            var m = d.getMinutes()<10?"0" + d.getMinutes(): d.getMinutes();
            var s = d.getSeconds()<10?"0" + d.getSeconds(): d.getSeconds();
            $("#time-butt").html(h+":"+m+":"+s);
        });
    
});

