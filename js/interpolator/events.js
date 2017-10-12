$(document).ready(function() {

    function launchAlert(message) {
        $("#alert-wrong-number").html(message);
        $("#alert-wrong-number").addClass('show');
        setTimeout(function() { $("#alert-wrong-number").removeClass('show'); }, 3000);
    }

    function interpolate() {
        var x = parseFloat($("#x").val());
        var x0 = parseFloat($("#x0").val());
        var x1 = parseFloat($("#x1").val());
        var y0 = parseFloat($("#y0").val());
        var y1 = parseFloat($("#y1").val());

        if (isNaN(x) || isNaN(x0) || isNaN(x1) || isNaN(y0) || isNaN(y1)) {
            launchAlert("<strong>Error!</strong> I can't recognize the number you have introduced.");
        } else {
            if (x0 === x1) {
                launchAlert("<strong>Error!</strong> x<sub>0</sub> and x<sub>1</sub> can't be the same number.");
            } else {
                $("#y").val(linearInterpolation(x, x0, x1, y0, y1));
            }
        }
    }

    function clear() {
        $("#x").val("");
        $("#y").val("");
        $("#x0").val("");
        $("#x1").val("");
        $("#y0").val("");
        $("#y1").val("");
    }

    $("#btn-submit").click(function() { interpolate() });
    $("#btn-clear").click(function() { clear() });
});