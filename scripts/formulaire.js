function update(element){
    var variety = document.getElementById("variety");
    var idx= element.selectedIndex;
    var val= element.options[idx].value;
    var varietyChild = document.getElementById("varietyChild");
    if (varietyChild)
        varietyChild.parentNode.removeChild(varietyChild);


    if (val == "Type2"){
        var array = ["Variété1","Variété2"];
        var span = document.createElement("span");
        var selectList = document.createElement("select");
        selectList.id = "varietyChild";
        variety.appendChild(span);
        span.appendChild(selectList);
        span.className = "custom-dropdown custom-dropdown--white";
        selectList.className = "custom-dropdown__select custom-dropdown__select--white";
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            selectList.appendChild(option);
        }
    }
}

function verif(chars) {
    var regex = new RegExp("[0-9]", "i");
    var valid;
    for (x = 0; x < chars.value.length; x++) {
        valid = regex.test(chars.value.charAt(x));
        if (valid == false) {
            chars.value = chars.value.substr(0, x) + chars.value.substr(x + 1, chars.value.length - x + 1); x--;
        }
    }
}