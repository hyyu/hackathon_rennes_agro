// fonctions utilisées pour récupérer les informations entrées dans les balises input

function	getDateOutOfString(date, input_date)
{
	var i = 0;
	var j = 0;

	while (i < input_date.length && input_date[i] == ' ')
		i++;
	while (j >= 0 && i < input_date.length && input_date[i] != ' ')
	{
		date.day += (input_date[i]) * Math.pow(10, j--);
		i++;
	}
	j = 1;
	while (i < input_date.length && input_date[i] == ' ')
		i++;
	while (j >= 0 && i < input_date.length && input_date[i] != ' ')
	{
		date.month += (input_date[i]) * Math.pow(10, j--);
		i++;
	}
	while (i < input_date.length && input_date[i] == ' ')
		i++;
	j = 3;
	while (j >= 0 && i < input_date.length && input_date[i] != ' ')
	{
		date.year += (input_date[i]) * Math.pow(10, j--);
		i++;
	}
}

function	retrieve(inputs)
{
	var getter = document.getElementById("type_cult");

	inputs.prev_cult = document.getElementById("prev_cult").value;
	inputs.size = parseInt(document.getElementById("size").value);
	inputs.watering = document.getElementById("watering").value;
	getDateOutOfString(inputs.sowing_date, document.getElementById("input_date").value);
	inputs.amendments = document.getElementById("amendment").checked;
	inputs.fertilised = document.getElementById("fertilisation").checked;
	inputs.elaborate = document.getElementById("work").checked;
	inputs.type_cult = getter.options[getter.selectedIndex].text;
	getter = document.getElementById("type");
	inputs.type = getter.options[getter.selectedIndex].text;
}

function	main()
{
	var inputs = {
		prev_cult:     "",
		type:          "",
		size:           0,
		amendments: false,
		fertilised: false,
		elaborate:  false,
		type_cult:     "",
		watering:      "",
		sowing_date:   {
			day:   0,
			month: 0,
			year:  0
		}
	};

	retrieve(inputs);
	console.log(inputs);
}

// fin parsing
