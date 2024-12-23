$("#GLOBAL").click(function () {
  $(".sidebar").animate(
    {
      left: "-1rem",
    },
    500
  );
});

$("#CLOSE").click(function () {
  $(".sidebar").animate(
    {
      left: "-100rem",
    },
    500
  );
  $("html").css("overflow", "auto");
});
