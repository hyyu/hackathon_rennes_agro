// fonctions utilisées pour récupérer les informations entrées dans les balises input

// Mois :  à convertir
// Somme( temp° moyennes(mois2015.csv) - temp° de base (especes.csv)) : temps restant avant floraison/récolte
// ne doit pas être < 0
// 

// blé dur, blé tendre, colza, maïs doux, maïs fourrage, maïs grain, orge, soja

var temp_base = [6, 6, 6, 6, 6, 6, 0, 6]

var janvier = [4, 8.2, 7.2, 10, 6.6, 6.7, 4.2, 9.4, 10.3, 11.5, 7.1, 10.6, 10.4, 8.2, 9, 5.3, 3.3, 3.9, 2.7, 1.4, 1.9, 1.9, 1.6, 4.6, 3.3, 8.5, 6.2, 9.5, 6.7, 5.2, 3.7]
var fevrier = [];
var mars = [];
var avril = [];
var mai = [];
var juin = [];
var juillet = [];
var aout = [];
var septembre = [];
var octobre = [];
var novembre = [];
var decembre = [];

var months = [janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre];

function	retrieve(inputs)
{
	inputs.prev_cult = document.getElementById("prev_cult").value;
	inputs.size = parseInt(document.getElementById("size").value);
	inputs.watering_rep = parseInt(document.getElementById("watering_rep").value);
	inputs.watering_duration = parseInt(document.getElementById("watering_duration").value);

	inputs.sowing_date.year = parseInt(document.getElementById("input_year").value);
	inputs.sowing_date.month = parseInt(document.getElementById("input_month").value) - 1;
	inputs.sowing_date.day = parseInt(document.getElementById("input_day").value);

	inputs.amendments = document.getElementById("amendment").checked;
	inputs.fertilised = document.getElementById("fertilisation").checked;
	inputs.elaborate = document.getElementById("work").checked;

	var getter = document.getElementById("type");
	inputs.type = getter.options[getter.selectedIndex].text;

	getter = document.getElementById("type_cult");
	if (getter.options[getter.selectedIndex].value == "Type2")
		getter = document.getElementById("varietyChild");
	inputs.type_cult = getter.options[getter.selectedIndex].value;
}

function	test()
{
	var oReq = new XMLHttpRequest();
	var buffer;
	oReq.open("GET", "../tables/calendar/Janvier2015.csv");
	oReq.onload = function() {
		buffer = this.responseText;







	};
	oReq.send();
}

function	main()
{
	var sum;
	var type;
	var inputs = {
		prev_cult:          "",
		type:               "",
		size:                0,
		amendments:      false,
		fertilised:      false,
		elaborate:       false,
		type_cult:          "",
		watering_rep:        0,
		watering_duration:   0,
		sowing_date:   {
			day:   0,
			month: 0,
			year:  0
		}
	};

	// retrieve(inputs);
	// type = get_type(inputs.type_cult);
	// sum = sum_tab();

}

// fin parsing
