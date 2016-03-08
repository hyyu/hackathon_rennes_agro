// fonctions utilisées pour récupérer les informations entrées dans les balises input

// Mois :  à convertir
// Somme( temp° moyennes(mois2015.csv) - temp° de base (especes.csv)) : temps restant avant floraison/récolte
// ne doit pas être < 0
// 

// blé dur, blé tendre, colza, maïs doux, maïs fourrage, maïs grain, orge, soja

var temp_base = [6, 6, 6, 6, 6, 6, 0, 6]
var month;

var months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

function	retrieve(inputs)
{
	inputs.prev_cult = document.getElementById("prev_cult").value;
	inputs.size = parseInt(document.getElementById("size").value);
	inputs.watering_rep = parseInt(document.getElementById("watering_rep").value);
	inputs.watering_duration = parseInt(document.getElementById("watering_duration").value);

	inputs.sowing_date.year = parseInt(document.getElementById("input_year").value);
	inputs.sowing_date.month = parseInt(document.getElementById("input_month").value);
	inputs.sowing_date.day = parseInt(document.getElementById("input_day").value);

	inputs.amendments = document.getElementById("amendment").checked;
	inputs.fertilised = document.getElementById("fertilisation").checked;
	inputs.elaborate = document.getElementById("work").checked;

	var getter = document.getElementById("type");
	inputs.type = getter.options[getter.selectedIndex].text;

	getter = document.getElementById("type");
	inputs.fertilizer = getter.options[getter.selectedIndex].value;

	getter = document.getElementById("type_cult");
	if (getter.options[getter.selectedIndex].value == "Type2")
		getter = document.getElementById("varietyChild");
	inputs.type_cult = getter.options[getter.selectedIndex].value;
}

function	get_table(buffer)
{
	var i = 0;
	var k = 0;
	var l = 0;
	var table = [];
	var subst = "";

	while (l < 4 && i < buffer.length)
	{
		if (buffer[i] == '\n')
			++l;
		++i;
	}
	while (i < buffer.length)
	{
		l = 0;
		subst = "";
		while (l < 3 && i < buffer.length)
		{
			if (buffer[i] == ';')
				++l;
			while (i < buffer.length && buffer[i] == ';')
				++i;
			++i;
		}
		--i;
		while (i < buffer.length && buffer[i] != ';')
		{
			subst += buffer[i];
			++i;
		}
		subst += '\0';
		table[k] = parseFloat(subst);
		k++;
		while (i < buffer.length && buffer[i] != '\n')
			++i;
		while (i < buffer.length && (buffer[i] == ';' || buffer[i] == '\n')) {
			++i;
		}
		++i;
	}
	table[k - 1] = null;
	return table;
}

function	getData(filepath)
{
	var oReq = new XMLHttpRequest();
	var buffer;
	oReq.open("GET", filepath, false);
	oReq.onload = function() {
		buffer = this.responseText;
		month = get_table(buffer);
	};
	oReq.send();
	return month;
}

function	get_type(type_cult)
{
	if (type_cult == "blé dur")
		return 0;
	if (type_cult == "blé tendre")
		return 1;
	if (type_cult == "colza")
		return 2;
	if (type_cult == "maïs doux")
		return 3;
	if (type_cult == "maïs fourrage")
		return 4;
	if (type_cult == "maïs grain")
		return 5;
	if (type_cult == "orge")
		return 6;
	if (type_cult == "soja")
		return 7;
}

function	create_dtable()
{
	var	dtable = [];
	var filepath;

	filepath = "../tables/calendar/janvier2015.csv";
	dtable[0] = getData(filepath);
	filepath = "../tables/calendar/fevrier2015.csv";
	dtable[1] = getData(filepath);
	filepath = "../tables/calendar/mars2015.csv";
	dtable[2] = getData(filepath);
	filepath = "../tables/calendar/avril2015.csv";
	dtable[3] = getData(filepath);
	filepath = "../tables/calendar/mai2015.csv";
	dtable[4] = getData(filepath);
	filepath = "../tables/calendar/juin2015.csv";
	dtable[5] = getData(filepath);
	filepath = "../tables/calendar/juillet2015.csv";
	dtable[6] = getData(filepath);
	filepath = "../tables/calendar/aout2015.csv";
	dtable[7] = getData(filepath);
	filepath = "../tables/calendar/sept2015.csv";
	dtable[8] = getData(filepath);
	filepath = "../tables/calendar/oct2015.csv";
	dtable[9] = getData(filepath);
	filepath = "../tables/calendar/nov2015.csv";
	dtable[10] = getData(filepath);
	filepath = "../tables/calendar/dec2015.csv";
	dtable[11] = getData(filepath);
	dtable[12] = null;
	return dtable;
}

function	sumTab(temp, dtable, start, end)
{
	var i = start.month - 1;
	var j = start.day - 1;
	var sum = 0;

	while (i < end.month && dtable[i] != null)
	{
		while (dtable[i][j] != null)
		{
			sum += dtable[i][j] - temp;
			++j;
		}
		++i;
		j = 0;
	}
	while (j < end.day && dtable[i][j] != null)
	{
		sum += dtable[i][j] - temp;
		++j;
	}
	if (sum < 0)
		sum = 0;
	return sum;
}

function	main()
{
	var inputs = {
		prev_cult:          "",
		type:               "",
		size:                0,
		amendments:      false,
		fertilised:      false,
		elaborate:       false,
		type_cult:          "",
		fertilizer:			"",
		watering_rep:        0,
		watering_duration:   0,
		sowing_date:   {
			day:   0,
			month: 0,
			year:  0
		}
	};
	var tabMonths;
	var type;
	var temp;
	var	sum;
	var date = new Date();
	var today = {
		day: 	date.getDate(),
		month: 	date.getMonth(),
		year:	date.getYear()
	};

	retrieve(inputs);
	type = get_type(inputs.type_cult);
	temp = temp_base[type];
	tabMonths = create_dtable();
	sum = sumTab(temp, tabMonths, inputs.sowing_date, today);
	console.log(sum);
	var sample = document.createElement("img");
	var body = document.getElementById("body");
	sample.src="../img/parcelle2.png";
	body.appendChild(sample);
	return 0;
}

// fin parsing
