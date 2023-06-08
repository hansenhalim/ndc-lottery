function addLiToUl(player) {
  list = '<li class="list-group-item">' + player + "</li>";
  $("#wheel-1").append(list);
}

function animationEnd() {
  toggleConfetti();
  $("#winner-btn, #reset-btn").toggle();
  $("#reset-btn").focus();
  $("#winner-btn").toggleClass("btn-secondary winning");
  $("#winner-btn").prop("disabled", false);
}

function fillWheelWithPlayer(players, targetIndex = 2) {
  $("#wheel-1").empty();
  for (let i = targetIndex - 2; i < 100 + targetIndex - 2; i++) {
    if (i < 0) {
      addLiToUl(players[players.length + i]);
      continue;
    }
    if (i >= players.length) {
      addLiToUl(players[i - players.length]);
      continue;
    }
    addLiToUl(players[i]);
  }
  for (let i = targetIndex - 2; i < 6 + targetIndex - 2; i++) {
    if (i < 0) {
      addLiToUl(players[players.length + i]);
      continue;
    }
    if (i >= players.length) {
      addLiToUl(players[i - players.length]);
      continue;
    }
    addLiToUl(players[i]);
  }
}

var sound = new Audio("winning.mp3"); // buffers automatically when created

$("#demo-btn").click(function () {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://ndcbackend.org/cron/Testing/load_json_group_meeting_participant/12159",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      $("#player-list").val(result);
    })
    .catch((error) => console.log("error", error));
});

$("#submit-btn").click(function () {
  players = JSON.parse($("#player-list").val());
  Swal.fire({
    title: "Total player: " + players.length,
    text: "Pastikan jumlah pemain sudah sesuai!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#51a3b9",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, lanjutkan!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Sukses!",
        text: "Permainan segera dimulai.",
        icon: "success",
        confirmButtonText: "Mulai",
        confirmButtonColor: "#51a3b9",
      }).then(() => {
        fillWheelWithPlayer(players);
        $("#welcome-scr, #main-scr").toggle();
        $("#winner-btn").focus();
      });
    }
  });
});

$("#winner-btn").click(function () {
  // pseudo-random a winner
  randIndex = Math.floor(Math.random() * players.length);

  // prepare wheel to show the winner
  fillWheelWithPlayer(players, randIndex);
  $("#wheel-1").toggleClass("winning");
  $("#winner-btn").toggleClass("btn-secondary winning");
  $("#winner-btn").prop("disabled", true);
  console.log(players[randIndex], randIndex);

  // play winning sound
  sound.play();

  // delete player from joining next round
  players.splice(randIndex, 1);
});

$("#reset-btn").click(function () {
  toggleConfetti();
  $("#winner-btn, #reset-btn").toggle();
  $("#winner-btn").focus();
  $("#wheel-1").toggleClass("winning");

  // stop winning sound
  sound.pause();
  sound.currentTime = 0;
});

$("#demo-btn").trigger("click");
$("#main-scr, #reset-btn").toggle();
$("#wheel-1").bind("animationend", () => animationEnd());
