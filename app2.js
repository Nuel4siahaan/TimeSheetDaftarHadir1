function myFunction() {
    var name = document.getElementById("name").value ;
    var roll_no = document.getElementById("roll_no").value;
    var selected_box = document.getElementById("select_option").value;
    if(name && roll_no && selected_box){
      var table = document.getElementById("attendence-table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = roll_no;
    if(selected_box == 'Absent'){
      cell3.classList.add('absent')
      cell3.innerHTML = selected_box
    }else{
      cell3.classList.add('present')
      cell3.innerHTML = selected_box
    }
    document.getElementById("name").value = "";
    document.getElementById("roll_no").value = "";
    document.getElementById("select_option").value=""
    }
    
   }