import { sum } from "./functions.js";

$("#input-a").val("");
$("#input-b").val("");
$("#output").val("");

$("#btn-submit").click(function () {
  let valueA = parseInt($("#input-a").val());
  let valueB = parseInt($("#input-b").val());

  let output = sum(valueA, valueB);

  $("#output").val(output);
});
