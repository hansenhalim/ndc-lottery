// function addLiToUl(player) {
//   list = '<li class="list-group-item">' + player + "</li>";
//   $("#wheel-1").append(list);
// }

// function fillWheelWithPlayer(players, targetIndex = 2) {
//   $("#wheel-1").empty();
//   for (let i = targetIndex - 2; i < 100 + targetIndex - 2; i++) {
//     if (i < 0) {
//       addLiToUl(players[players.length + i]);
//       continue;
//     }
//     if (i >= players.length) {
//       addLiToUl(players[i - players.length]);
//       continue;
//     }
//     addLiToUl(players[i]);
//   }
//   for (let i = targetIndex - 2; i < 6 + targetIndex - 2; i++) {
//     if (i < 0) {
//       addLiToUl(players[players.length + i]);
//       continue;
//     }
//     if (i >= players.length) {
//       addLiToUl(players[i - players.length]);
//       continue;
//     }
//     addLiToUl(players[i]);
//   }
// }

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

let players = [
  "Sandy febrian - 20197208",
  "Grace Sandra - 20111964",
  "Stephen Ivan - 20164162",
  "Winni Alfiskah Altan - 20111995",
  "Sunarni - 20175284",
  "Regina Nathania - 20186249",
  "Go David Purwanegara - 20185873",
  "RINALDO  - 20164476",
  "Jocelyn Valencia - 20164292",
  "Chandra Dinata - 20164447",
  "Yenny Lusyana  - 20185812",
  "Arianly Triutomo - 20186338",
  "Jessie - 20164158",
  "Indra Parulian gurning  - 20186441",
  "Sudir Wanto - 20164809",
  "Harun - 20132700",
  "Haryo Kanigoro Arianto - 20185957",
  "Samuel Prinardi - 20186021",
  "Liong Fo FA - 20153369",
  "Novita Dewi - 20175305",
  "Kristanto Wibowo - 20061094",
  "Bie sui - 20101877",
  "Hermanto - 20164030",
  "Michael Furama - 20164124",
  "Sonny Roni - 20112157",
  "Laureate Darius Lioe - 20164561",
  "Susinto Bonggo - 20175564",
  "Erika Audrey Tjandra - 20186037",
  "Cesilya Djunaedi - 20153976",
  "Dylan Yulius - 20164119",
  "Rocky Yulius Wijaya - 20122384",
  "Charles Tandanu - 20186069",
  "Yonathan Budiman - 20197365",
  "Lilis suningsih - 20186070",
  "Yefta Aditya Wibowo - 20050869",
  "Kartika Nuria Gunawan - 20186040",
  "Leonnardo Benjamin Hutama - 20175743",
  "Laurentius Gunawan - 20132690",
  "Fonny katerine W - 20142789",
  "San San Maria - 20175074",
  "Bong yin yin (vitri) - 20207815",
  "Fina Puspita Laut - 20196928",
  "Fanny Artika Sari  - 20196778",
  "Lita Septiani Suprapto - 20174998",
  "Magdalena - 20175565",
  "Samuel Jonathan Ongkowidjojo - 20175321",
  "Tedy Setiawan - 20197167",
  "David Kongdro - 20153927",
  "Yessy - 20164651",
  "Yori Toding Allo - 20164791",
  "Frans Winardi - 20164808",
  "Prima Adi Santjoko - 20061238",
  "Farida Djohan Chow  - 20071387",
  "Yenni Hamdani - 20153527",
  "Susilawati - 20164423",
  "Henry Yotania - 20153978",
  "Marry Sanny Sambuaga - 20185844",
  "Hermina susanto - 20143086",
  "Eveline Melanie - 20164101",
  "Christiana Meilany Noersalim - 20061095",
  "Hantonius Suharsono - 20071386",
  "Fifi Wendy Boen - 20153863",
  "Ang Diana Juhtaria - 20164812",
  "Sinansari Tjham - 20185921",
  "Yohana Suparmi - 20040023",
  "Haryanti Kurniawan - 20050961",
  "Eng Santhi Anggelia - 20186652",
  "MEMEY - 20164675",
  "Susanto Wen - 20101873",
  "Cece Bata - 20175754",
  "Gouw Djunaidi - 20153640",
  "Fernando Sinaga - 20040552",
  "Irawati Wangsa - 20081580",
  "Niki Gunarso Yusna - 20164578",
  "Theo Jeremiah - 20153281",
  "Wiwin Suhendra - 20061038",
  "Erich - 20175658",
  "Lie Tjioe Fong - 20153660",
  "Asher Maska - 20186344",
  "Laurensius H Silalahi - 20153682",
  "Julius Ekaputra - 20122256",
  "Teddy - 20186096",
  "Harry wibowo - 20207542",
  "Terrica Lienanda - 20164213",
  "Rendy Tjahjadi - 20197384",
  "Robyn - 20164930",
  "Yessyca Feliciana - 20186450",
  "Andreas kartawinata - 20091684",
  "Liu Santy Angelin - 20175586",
  "Stephen kasiman - 20040813",
  "Meyke Nataya Sie - 20153708",
  "Alex djunaedi - 20164811",
  "Alfredo Waldy - 20196779",
  "Delisah - 20050847",
  "Arini - 20196724",
  "Ray Steven Minarta - 20122286",
  "Fam Frans Sugianto - 20175197",
  "Dustin - 20040263",
  "Bernardus Arianto - 20143116",
  "Ronald - 20186095",
  "Julia Vera - 20186390",
  "Christianto Rasli - 20175010",
  "Jessica Ola - 20186542",
  "Tjasmadi Taslim - 20186018",
  "Claudia Arlita - 20175481",
  "Steven Tanti - 20071537",
  "SUTIMAN ARGADINATA - 20143024",
  "Lini Muljono Tulus - 20197019",
  "Yulius Ardiyanto - 20164744",
  "EDO JULIANSYAH - 20153416",
  "Vania Josephine Santosa - 20081581",
  "Lisa Gunawan - 20132611",
  "Simon Santosa - 20081579",
  "Felix Andrian Nugroho - 20186303",
  "Angelina Sufranssy - 20132678",
  "Hugo Geraldy  - 20196754",
  "Rosmauli Harianja - 20164835",
  "Mitha Ruvista Y - 20153995",
  "Noviyanti Natalia - 20186033",
  "Yoan Olva Irbina - 20186503",
  "Yohana Njoman - 20185967",
  "Ery Pratignjo - 20040016",
  "Ricky Sukma - 20101931",
  "Swie Hong - 20154003",
  "Maylin Marcella - 20112034",
  "Angelina - 20174997",
  "Agnes Febrianny Ang - 20164834",
  "Viin Yernawati Pamela Silalahi - 20164785",
  "Ezra Natan - 20164365",
  "Arvin Prasetya Wiranata - 20197103",
  "Kevin Hobert - 20185978",
  "Evan Tirta - 20218446",
  "William - 20175758",
  "Yati Soewandi - 20175597",
  "Heriyanto - 20153347",
  "Zeli Eldeiana - 20185947",
  "Ivan Saputra - 20164571",
  "Luciana Hartini Halim - 20142761",
  "Sriana - 20164825",
  "Sugiharto Tanto - 20164352",
  "Yosua ks - 20091833",
  "Mario Mangampu - 20164047",
  "Mangapul Pangaribuan - 20164399",
  "Bijin - 20153420",
  "Chrysan Kirana - 20197298",
  "Julia Husada - 20091829",
  "Phang Hui Kian - 20164044",
  "Nadia Patricia - 20122330",
  "Dewi Rustandy - 20153979",
  "Martinus Anthony Gani - 20186349",
  "Angelia Elvira - 20175553",
  "Lisa Kartika - 20101932",
  "PRAMONO - 20164674",
  "Noviena - 20196807",
  "Elsina indey - 20197228",
  "Deasy Varianti Sutanto - 20185954",
  "Trisasono Kimas - 20091780",
  "Priscilla Hadisaputro - 20164713",
  "Supiah - 20040553",
  "Fenny Hadiyanto - 20164579",
  "Lim Miau Heng - 20175387",
  "Lily Elisa Susanti  - 20175085",
  "Tommy Tiopan - 20207853",
  "Wandy - 20164132",
  "Dessy Destria Suryanto - 20153625",
  "Ruben Jan Sutendi - 20164627",
  "susi kurniawati - 20197027",
  "Valencia Anggraini - 20143059",
  "Wandy Yudin Djahidin - 20175671",
  "Zipora Yuliana Nathalia - 20207793",
  "Wellyam - 20143111",
  "Fitalia - 20186296",
  "DANNY SHELUMIEL - 20143022",
  "Herry Sanyoto  - 20153870",
  "Budi Halim - 20197137",
  "Diana Sari - 20122257",
  "Nehemia Azarya Theodorick (Erick) - 20164793",
  "Crisna - 20185953",
  "Andrianto Dernatra  - 20040060",
  "Gideon Budi Santoso - 20175114",
  "Flora L Susanto - 20142993",
  "Reina Tan - 20061039",
  "KURNIA PRASTIAWAN - 20186163",
  "ELYSA WAHYUNI - 20101876",
  "Rusmeani Haslim - 20142750",
  "sylviana kurniawan - 20154004",
  "Ferry Foe - 20143027",
  "Wilianto Aulia - 20186316",
  "Kenas Dermawan - 20175449",
  "Cariesa Florenci Maitri Gunawan - 20186120",
  "Suyudi - 20040502",
  "Stella - 20207765",
  "Teophilus Bambang Wira - 20081630",
  "David elkana - 20175454",
  "Erik Kurniawan - 20112003",
  "Rony Alexander Purba - 20111965",
  "Rudyanto Tanudjaja - 20153712",
  "Sriwahyuni - 20186237",
  "Sin Arifin - 20164261",
  "Anis Anastasya - 20164228",
  "Ina listiani - 20081631",
  "Ardyan Gunawan Husodho - 20040408",
  "Rivaldi Gunarso - 20175048",
  "Nydia Valentina - 20175452",
  "Forus - 20142976",
  "Priscilla Gunarso - 20175047",
  "nobian martin - 20132702",
  "Chen Ming Ling (Ribka) - 20175198",
  "Meylia Tweety Tirsa Tjiaranata - 20197251",
  "Alicinto - 20196750",
  "Lie Lie Suwarsih - 20175024",
  "Tasya Nagaria - 20143011",
  "Ingewati santoso - 20040372",
  "Yovi - 20175542",
  "Ana Oktavia - 20164613",
  "William Wira - 20164719",
  "Emmanuela Hartono - 20132677",
  "Natalia Tan - 20112121",
  "Evy Cerviani Suprapto - 20175210",
  "Steven Alexander Lucky - 20143039",
  "Hanna Daniella - 20197074",
  "JULINA - 20164830",
  "Hendro Chandra - 20196659",
  "Nathaliana - 20164745",
  "Felicia Hadisaputro - 20164714",
  "Agus Santoso T Widjaja - 20186337",
  "Johanes Rendy Karunia Halim - 20207723",
  "Farida Leman - 20175276",
  "Lily Kurniawan - 20050919",
  "Angelin Agustina - 20050879",
  "Steven Gunawan - 20142743",
  "Susy Priskila - 20143130",
  "Ing ing - 20164710",
  "Michael Joseph - 20197032",
  "Mahfud Qorry Bullah - 20164344",
  "Grace Khatrine Mewengkang - 20186409",
  "Tio Gohana Sihombing - 20207579",
  "Liana Sari - 20164202",
  "Kevin Gohzali - 20175579",
  "Michael Dwi Tjitrabudi - 20186314",
  "Tan lina - 20164883",
  "Indrawan Candra - 20164214",
  "Johan Tan - 20164063",
  "Hadi Susanto - 20196748",
  "Mina - 20153240",
  "Rosita Budi Agustiani - 20186499",
  "Dedek - 20164574",
  "Herlina - 20153833",
  "Meylita Nafiri S - 20112188",
  "Januar Ignatius Setiadi - 20142788",
  "Anthony - 20142859",
  "Leonardo Khomalajaya - 20143094",
  "Lai Honny Stephanie  - 20142716",
  "Musa Rido - 20164177",
  "Ria Fransisca Sianipar - 20164892",
  "Andy Suryono - 20142987",
  "William Adi Chen - 20040538",
  "Tonny Pangleway Pang - 20186511",
  "Riris Loisa - 20153683",
  "Astuti - 20186244",
  "Inggrid Venya - 20142749",
  "Christian Rachmadi - 20164442",
  "Ronald Petra Liwongan - 20185916",
  "Gitaria Yuliana - 20153883",
  "Hanny Juwita - 20186350",
  "Yani Buntary - 20153699",
  "Bella Juwita - 20143009",
  "Wilson Matthew Raffaello - 20143139",
  "Silfani - 20175253",
  "Johan Salim - 20112116",
  "Elfrida - 20153236",
  "Sandy yuniarti wijaya - 20132560",
  "Wahyu Prima Saputra - 20132508",
  "Feni Dewi - 20175363",
  "Vinda puspitasari - 20164715",
  "Fransisca Pranata - 20143037",
  "Irene Juliani - 20061106",
  "Liong Merli Marlina - 20153406",
  "Priska Natalia - 20186505",
  "Teng Bie lie - 20040082",
  "Desy S. Gunawan - 20207701",
  "Anna irsyad - 20101946",
  "Kristijani - 20040586",
  "Danny - 20164865",
  "HANDOKO - 20207764",
  "Steven Asikin - 20112112",
  "Raja Putra Klaudius Manurung - 20186424",
  "Budi Yati - 20164810",
  "M inggrawati komala - 20071535",
  "Marina Sasikirani - 20040265",
  "Lianna Sutantio - 20175096",
  "Rocky Alfian Tagah - 20186612",
  "Lefie - 20153871",
  "Tricia Verina Saper - 20185958",
  "Alfin Tan - 20175275",
  "Hallie Ang - 20185822",
  "Handi Irawan - 20153977",
  "France Sinatra Limbing - 20153317",
  "Lim Steeve - 20142928",
  "Rusli Kurnianto - 20186017",
  "Lisa Indrawati - 20164931",
  "Shandi Halim - 20196802",
  "Florentia Janice Kusmadi - 20196828",
  "Grace Muliawati - 20061237",
  "Aprianto - 20197436",
  "Akeza Javier T. W. - 20186343",
  "Jeffry Christian - 20164397",
  "Taty Yuliati - 20196763",
  "Rosana Anwar - 20153322",
  "John Setiono - 20040393",
  "Johnny Kebot - 20040274",
  "Dien Julea Wijaya Putri - 20197172",
  "Raby Agusta - 20111963",
  "Andrey Setiawan - 20122323",
  "Ribkah - 20143021",
  "Angela Feibe - 20186128",
  "Septiana Jelika ariyanto - 20153292",
  "Morin Yuliana - 20112012",
  "Helena Halim - 20197314",
  "Wibowo - 20164595",
  "Esther Rahadi - 20186071",
  "Arifin - 20175446",
  "Bunjamin Gumulya  - 20153814",
  "Jennifer - 20196685",
  "Ian Brawidjojo - 20164062",
  "Lindawati Gunawan - 20164034",
  "Vivi - 20164583",
  "Andre wijaya - 20175007",
  "Gredy Prosfero Nandawan - 20197502",
  "Niko Indrawan - 20207785",
  "Irvan Pradana - 20061182",
  "James Abraham Sugiharto - 20175667",
  "Khoe Kim Sen - 20143119",
  "tan elia - 20061254",
  "Rizal Agus - 20164884",
  "Cliff Dean Smith - 20207760",
  "Eng Sanny Anggelia - 20186651",
  "Roy Koesyanto - 20040340",
  "Freddy Lusli - 20112068",
  "MOE GRACE MULYANI  - 20153713",
  "Jasim - 20164582",
  "Ela yunia djapar - 20197061",
  "Lukas Sution Widjaja - 20164497",
  "Setiawan Kusuma Widjaja - 20122359",
  "Waldus Sampingan - 20040022",
];

let randomIndexes = [];

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
        // fillWheelWithPlayer(players);
        $("#welcome-scr, #main-scr").toggle();
        $("#winner-btn").focus();
      });
    }
  });
});

$("#winner-btn").click(function () {
  // pseudo-random a winner
  randomIndex = Math.floor(Math.random() * players.length);

  // prepare wheel to show the winner
  fillWheelWithPlayer(players, randomIndex);
  $("#wheel-1").toggleClass("winning");
  $("#winner-btn").toggleClass("btn-secondary winning");
  $("#winner-btn").prop("disabled", true);
  console.log(players[randomIndex], randomIndex);

  // play winning sound
  sound.play();

  // delete player from joining next round
  players.splice(randomIndex, 1);
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

$("#roll-btn").click(function () {
  // $("#player-name").html("helloo");

  // pseudo-random a winner
  randomIndexes = [];
  for (let i = 0; i < 67; i++) {
    randomIndexes.push(Math.floor(Math.random() * players.length));
  }

  console.log(randomIndexes);

  // setTimeout(() => console.log(1), 65);
  // setTimeout(() => console.log(2), 125);
  // setTimeout(() => console.log(3), 185);
  // setTimeout(() => console.log(4), 250);
  // setTimeout(() => console.log(5), 250);

  // setTimeout(() => console.log(4), 250);
  // setTimeout(() => console.log(4), 250);
  // setTimeout(() => console.log(4), 250);
  // setTimeout(() => console.log(4), 250);
  // setTimeout(() => console.log(4), 250);
  // setTimeout(() => console.log(4), 250);

  setTimeout(() => console.log("winner"), 6631);

  randomIndexes.forEach((randomIndex, idx) => {
    setTimeout(() => {
      // console.log(players[randomIndex])

      let name = players[randomIndex].split(" - ");

      $("#player-name").html(name[0] + "<br />" + name[1]);
    }, 100 * idx);
  });

  setTimeout(() => {
    toggleConfetti();
  }, 6631);

  // delete player from joining next round
  players.splice(randomIndexes[0], 1);

  // play winning sound
  sound.play();
});

function animationEnd() {
  toggleConfetti();
  $("#winner-btn, #reset-btn").toggle();
  $("#reset-btn").focus();
  $("#winner-btn").toggleClass("btn-secondary winning");
  $("#winner-btn").prop("disabled", false);
}

document.onkeypress = function (e) {
  e = e || window.event;
  // use e.keyCode
  if (event.keyCode === 114) {
    $("#roll-btn").click();
  }

  if (event.keyCode === 99) {
    toggleConfetti();
  }
};

$("#demo-btn").trigger("click");
$("#main-scr, #reset-btn").toggle();
$("#wheel-1").bind("animationend", () => animationEnd());
