$(document).ready(function() {

    function interpolate() {
        var x = parseFloat($("#x").val());
        var x0 = parseFloat($("#x0").val());
        var x1 = parseFloat($("#x1").val());
        var y0 = parseFloat($("#y0").val());
        var y1 = parseFloat($("#y1").val());

        if (isNaN(x) || isNaN(x0) || isNaN(x1) || isNaN(y0) || isNaN(y1)) {
            $("#alert-wrong-number").addClass('show');
            setTimeout(function() { $("#alert-wrong-number").removeClass('show'); }, 3000);
        } else {
            $("#y").val(linearInterpolation(x, x0, x1, y0, y1));
        }
    }

    $("#btn-submit").click(function() { interpolate() });
});