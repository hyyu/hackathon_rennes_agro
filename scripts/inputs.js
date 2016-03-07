// fonctions utilisées pour récupérer les informations entrées dans les balises input

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

	getter = document.getElementById("type_cult");
	if (getter.options[getter.selectedIndex].value == "Type2")
		getter = document.getElementById("varietyChild");
	inputs.type_cult = getter.options[getter.selectedIndex].value;
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
		watering_rep:        0,
		watering_duration:   0,
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
