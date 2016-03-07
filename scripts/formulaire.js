function update(element){
    var variety = document.getElementById("variety");
    var idx= element.selectedIndex;
    var val= element.options[idx].value;
    var varietyChild = document.getElementById("varietyChild");
    if (varietyChild)
        varietyChild.parentNode.removeChild(varietyChild);


    if (val == "Type2"){
        console.log("ok");
        var array = ["Red","Blue","Orange","Red"];
        var selectList = document.createElement("select");
        selectList.id = "varietyChild";
        variety.appendChild(selectList);
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            selectList.appendChild(option);
        }
    }
}