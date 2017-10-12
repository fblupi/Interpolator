$(document).ready(function() {

    function interpolate() {
        var x0 = $("#x0").val();
        var x1 = $("#x1").val();
        var y0 = $("#y0").val();
        var y1 = $("#y1").val();
        var x = $("#x").val();
        $("#y").val(linearInterpolation(parseFloat(x), parseFloat(x0), parseFloat(x1), parseFloat(y0), parseFloat(y1)));
    }

    $("#btn-submit").click(function() { interpolate() });
});