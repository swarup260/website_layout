const carData = [
	{
		name:"SportCar",
		brad_name:"chevrolet",
		yrs:2015,
		img:"https://3dwarehouse.sketchup.com/warehouse/getpubliccontent?contentId=c34d218c-dcd8-40e7-9b49-ced572aad38d"

	},

	{
		name:"Raindow",
		brad_name:"Ferrai",
		yrs:2002,
		img:"https://i.pinimg.com/736x/fa/a7/8a/faa78a27e2ae99624db8d141e023aab4--rainbows-sportcars.jpg"

	},

	{
		name:"lexus-hydrogen-car",
		brad_name:"lotus",
		yrs:2015,
		img:"http://static1.businessinsider.com/image/57b21b94db5ce954008b6ce8-1200/lexus-hydrogen-car.jpg"

	},

	{
		name:"Käfer",
		brad_name:"Volkswagen",
		yrs:1995,
		img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vuU3KY0iuLexdPXuSSn5jyRxrRm_iptKTETZSBrivh-n7cXL"

	},
	{
		name:"McLaren 720S",
		brad_name:"McLaren",
		yrs:2014,
		img:"http://images.car.bauercdn.com/pagefiles/72609/mclaren-720s-01.jpg"

	}


];

function Templates(car) {
	return `
	<div class="card">
	<img src="${car.img}">
	<div class="detail">
	<h2>Name:${car.name}</h2>
	<h3>Brand Name:${car.brad_name}</h3>
	<h4>Yrs:${car.yrs}</h4>
	</div>
 	</div>
	`
}


document.getElementById('content').innerHTML = `
<h1>List OF Cars </h1>
<p><h3>Results of ${carData.length} Cars </h3></p>
${carData.map(Templates).join(" ")}

`