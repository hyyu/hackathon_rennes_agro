function	getDateOutOfString(date, input_date)
{
	val	i = 0;

	while (i < input_date.length && input_date[i] != ' ')
		{
			date.day += parseInt(input_date[i]);
			i++;
		}
	console.log(date.day);
}

function	retrieve(inputs)
{
	inputs.prec_cult = document.getElementById("prec_cult");
	inputs.type = document.getElementById("type");
	inputs.size = document.getElementById("size");
	inputs.amendments = document.getElementById("amendments");
	inputs.fertilised = document.getElementById("fertilised");
	inputs.elaborate = document.getElementById("work");
	inputs.type_cult = document.getElementById("type_cult");
	inputs.watering = document.getElementById("watering");
	getDateOutOfString(inputs.sowing_date, document.getElementById("input_date"));
}

function	main()
{
	val inputs = {
		prec_cult:     "",
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
}