// fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee_/_Tea')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa')
//   .then(response => response.json())
//   .then(data => console.log(data));
// const api = {
// 	key: "eae797f672ec4ff59d92914314ad165e",
// 	base: "http://api.openweathermap.org/data/2.5/",
// };

// fetch("http://api.openweathermap.org/data/2.5/weather?q=Uppsala&units=metric&APPID=eae797f672ec4ff59d92914314ad165e")
//   .then(response => response.json())
//   .then(data => console.log(data));

var myHeaders = new Headers();
myHeaders.append("x-api-key", "b8jGo6ebMjXIF9NUay9n_VqIy2gX2Sb2u0y9");
myHeaders.append("Accept", "application/json");

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
};

fetch(
	"http://localhost:5500/https://api.setlist.fm/rest/1.0/search/setlists?cityName=Uppsala&sort=relevance&p=1",
	requestOptions
)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.log("error", error));

// fetch("https://api.lyrics.ovh/v1/Alphaville/Forever_Young")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data.lyrics));
