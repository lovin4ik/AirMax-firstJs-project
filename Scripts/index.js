const hero = document.getElementById("heroSection");

const blueHero = document.getElementById("hero-images-blue");
const redHero = document.getElementById("hero-images-red");
const blackHero = document.getElementById("hero-images-black");
const silverHero = document.getElementById("hero-images-silver");
const whitehero = document.getElementById("hero-images-white");

const btnblue = document.getElementById("btn-set-blue");
const btnRed = document.getElementById("btn-set-red");
const btnBlack = document.getElementById("btn-set-black");
const btnWhite = document.getElementById("btn-set-white");
const btnSilver = document.getElementById("btn-set-silver");

const blueHero2 = document.getElementById("case-blue");
const redHero2 = document.getElementById("case-red");
const blackHero2 = document.getElementById("case-black");
const silverHero2 = document.getElementById("case-silver");
const whitehero2 = document.getElementById("case-white");

const silverback = document.getElementById("silver-back");
const whiteback = document.getElementById("white-back");
const blackBack = document.getElementById("black-back");
const backBlue = document.getElementById("blue-back");
const backRed = document.getElementById("red-back");

function blue() {
	hero.classList.add("blue-airpods");
	hero.classList.remove("black-airpods");
	hero.classList.remove("red-airpods");
	hero.classList.remove("white-airpods");
	hero.classList.remove("silver-airpods");
	//
	blueHero.classList.remove("none");
	redHero.classList.add("none");
	silverHero.classList.add("none");
	whitehero.classList.add("none");
	blackHero.classList.add("none");
	silverHero.classList.add("none");
	whitehero.classList.add("none");
	//
	btnBlack.classList.remove("none");
	btnRed.classList.remove("none");
	btnSilver.classList.remove("none");
	btnWhite.classList.remove("none");
	btnblue.classList.add("none");
	//
	blueHero2.classList.remove("none");
	blackHero2.classList.add("none");
	redHero2.classList.add("none");
	silverHero2.classList.add("none");
	whitehero2.classList.add("none");
	//
	silverback.classList.add("none");
	backBlue.classList.remove("none");
	blackBack.classList.add("none");
	backRed.classList.add("none");
	whiteback.classList.add("none");
	window.scrollTo(0, 0);
}

function black() {
	hero.classList.add("black-airpods");
	hero.classList.remove("blue-airpods");
	hero.classList.remove("red-airpods");
	hero.classList.remove("white-airpods");
	hero.classList.remove("silver-airpods");
	//
	blueHero.classList.add("none");
	redHero.classList.add("none");
	silverHero.classList.add("none");
	whitehero.classList.add("none");
	blackHero.classList.remove("none");
	silverHero.classList.add("none");
	whitehero.classList.add("none");
	//
	btnBlack.classList.add("none");
	btnRed.classList.remove("none");
	btnSilver.classList.remove("none");
	btnWhite.classList.remove("none");
	btnblue.classList.remove("none");
	//
	blueHero2.classList.add("none");
	blackHero2.classList.remove("none");
	redHero2.classList.add("none");
	silverHero2.classList.add("none");
	whitehero2.classList.add("none");
	//
	silverback.classList.add("none");
	backBlue.classList.add("none");
	blackBack.classList.remove("none");
	backRed.classList.add("none");
	whiteback.classList.add("none");
	window.scrollTo(0, 0);
}

function red() {
	hero.classList.remove("black-airpods");
	hero.classList.remove("blue-airpods");
	hero.classList.add("red-airpods");
	hero.classList.remove("white-airpods");
	hero.classList.remove("silver-airpods");
	//
	blueHero.classList.add("none");
	redHero.classList.remove("none");
	silverHero.classList.add("none");
	whitehero.classList.add("none");
	blackHero.classList.add("none");
	silverHero.classList.add("none");
	whitehero.classList.add("none");
	//
	btnBlack.classList.remove("none");
	btnRed.classList.add("none");
	btnSilver.classList.remove("none");
	btnWhite.classList.remove("none");
	btnblue.classList.remove("none");
	//
	blueHero2.classList.add("none");
	blackHero2.classList.add("none");
	redHero2.classList.remove("none");
	silverHero2.classList.add("none");
	whitehero2.classList.add("none");
	//
	silverback.classList.add("none");
	backBlue.classList.add("none");
	blackBack.classList.add("none");
	backRed.classList.remove("none");
	whiteback.classList.add("none");
	window.scrollTo(0, 0);
}

function white() {
	hero.classList.remove("black-airpods");
	hero.classList.remove("blue-airpods");
	hero.classList.remove("red-airpods");
	hero.classList.add("white-airpods");
	hero.classList.remove("silver-airpods");
	//
	whitehero.classList.remove("none");
	blueHero.classList.add("none");
	redHero.classList.add("none");
	silverHero.classList.add("none");
	blackHero.classList.add("none");
	silverHero.classList.add("none");
	//
	btnBlack.classList.remove("none");
	btnRed.classList.remove("none");
	btnSilver.classList.remove("none");
	btnWhite.classList.add("none");
	btnblue.classList.remove("none");
	//
	blueHero2.classList.add("none");
	blackHero2.classList.add("none");
	redHero2.classList.add("none");
	silverHero2.classList.add("none");
	whitehero2.classList.remove("none");
	//
	silverback.classList.add("none");
	backBlue.classList.add("none");
	blackBack.classList.add("none");
	backRed.classList.add("none");
	whiteback.classList.remove("none");
	window.scrollTo(0, 0);
}

function silver() {
	hero.classList.remove("black-airpods");
	hero.classList.remove("blue-airpods");
	hero.classList.remove("red-airpods");
	hero.classList.remove("white-airpods");
	hero.classList.add("silver-airpods");
	//
	blueHero.classList.add("none");
	redHero.classList.add("none");
	silverHero.classList.add("none");
	whitehero.classList.add("none");
	blackHero.classList.add("none");
	silverHero.classList.remove("none");
	whitehero.classList.add("none");
	//
	btnBlack.classList.remove("none");
	btnRed.classList.remove("none");
	btnSilver.classList.add("none");
	btnWhite.classList.remove("none");
	btnblue.classList.remove("none");
	//
	blueHero2.classList.add("none");
	blackHero2.classList.add("none");
	redHero2.classList.add("none");
	silverHero2.classList.remove("none");
	whitehero2.classList.add("none");
	//
	silverback.classList.remove("none");
	backBlue.classList.add("none");
	blackBack.classList.add("none");
	backRed.classList.add("none");
	whiteback.classList.add("none");
	window.scrollTo(0, 0);
}

btnSilver.addEventListener("click", silver);
btnWhite.addEventListener("click", white);
btnRed.addEventListener("click", red);
btnblue.addEventListener("click", blue);
btnBlack.addEventListener("click", black);
blue();
