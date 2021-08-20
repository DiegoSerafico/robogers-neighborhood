function beepBoop (name, num) {
  if (isNaN(parseInt(num))) {
    return NaN;
  }
  let result = [];
  for (let i = 0; i <= num; i++) {
    if (i.toString().includes("3")) {
      result.push("Won't you be my neighbor " + name + "?");
    } else if (i.toString().includes("2")) {
      result.push("Boop!");
    } else if (i.toString().includes("1")) {
      result.push("Beep!");
    } else {
      result.push(i);
    }
  }
  return result;
}

$(document).ready(function () {
  let nameInput = "";
  let numInput = "";
  $("#formOne").submit(function (event) {
    event.preventDefault();
    $("#output").hide();
    $("#output").empty();
    nameInput = $("#nameInput").val();
    numInput = $("#numInput").val();

    $("#output")
      .prepend("<p>" + beepBoop(nameInput, numInput)
      .join(" ") + "</p>");
      
    $("#output").fadeIn(1200);
    $("#reverse").show();
    $("#reverse").css("display", "block");
  });

  $("#reverse").click(function (event) {
    event.preventDefault();
    $("#output")
      .append("<p>" + beepBoop(nameInput, numInput)
      .reverse()
      .join(" ") + "</p>");
    $("#reverse").hide();

  })
});