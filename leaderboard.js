console.clear();

const leaderboard = [
	{
		rank: 1,
		name: "Shiqja",
		tag: "Sakuna#6375",
		price: "50 000.00",
		img: "https://cdn.discordapp.com/avatars/919706870955003965/13502f4fe3586ca78627f06eae113064.webp?size=128"
	},
	{
		rank:2,
		name: "M8",
		tag: "Aliix#3620",
		price: "20 000.00",
		img: "https://cdn.discordapp.com/avatars/228492921303728128/23e2c6889aa12d7cf2b79e0389ba9a5f.webp?size=128"
	}
];

const clientBar = [
	{
		name: "Shiqja",
		img: "https://cdn.discordapp.com/avatars/919706870955003965/13502f4fe3586ca78627f06eae113064.webp?size=128",
		prix: 0
	}
];

leaderboard.forEach((member) => {
	let newRow = document.createElement("li");
	newRow.classList = "c-list__item";
	newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" target="_blank">@${member.tag}</a>
				</div>
			</div>
			<div class="u-text--right c-color">
				<div class="u-mt--8">
					<strong>${member.price}</strong>
				</div>
			</div>
		</div>
	`;
	if (member.rank === 1) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--yellow");
		newRow.querySelector(".c-color").classList.add("u-text--yellow");
	} else if (member.rank === 2) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--teal");
		newRow.querySelector(".c-color").classList.add("u-text--teal");
	} else if (member.rank === 3) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--orange");
		newRow.querySelector(".c-color").classList.add("u-text--orange");
	}
	list.appendChild(newRow);
});

let sortedTeam = clientBar.sort((a, b) => b.prix - a.prix)
let winner = sortedTeam[0]

// Render winner card
const winnerCard = document.getElementById("winner");
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">Client du mois</div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
	<span class="u-text--teal u-text--small">${winner.name}</span>
`;


function openNav() {
	if (document.getElementById("mySidenav").style.width === "250px"){
		closeNav();
	}
	else{
	  	document.getElementById("mySidenav").style.width = "250px";
	  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
