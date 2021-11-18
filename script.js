async function fetchData(){
    try{
        var breweryData = await fetch("https://api.openbrewerydb.org/breweries");
        var brewery = await breweryData.json();
        console.log(brewery);
        var board = document.createElement("div");
        board.style.width = "1330px";
        board.style.height = "1200px";
        board.style.backgroundColor = "#d1dfeb";  //#f2f6ec #fafbf9
        board.style.display = "flex";
        board.style.flexDirection = "row";
        board.style.flexWrap = "wrap";
        board.style.justifyContent = "center";
        
        brewery.forEach(element => {
            var box = document.createElement("div");
            box.style.width = "300px";
            box.style.height = "230px";
            box.style.border = "1px solid white";
            box.style.borderRadius = "10px";
            box.style.textAlign = "center";
            box.style.backgroundColor = "#7fb4cd";  //#f2f6ec
            box.style.marginLeft = "5px";
            box.style.marginTop = "5px";
            board.appendChild(box)

            var para = document.createElement("p");
            para.innerText = "BREWERY NAME:"+" "+element.name;
            box.appendChild(para)

            var para1 = document.createElement("p");
            para1.innerText = "TYPE:"+" "+element.brewery_type;
            box.appendChild(para1)

            var para2 = document.createElement("p");
            para2.innerText = "ADDRESS:"+" "+element.street+","+element.state+","+element.city+","+element.country;
            box.appendChild(para2)

            var para3 = document.createElement("p");
            para3.innerText = "WEBSITE:"+" "+element.website_url;
            box.appendChild(para3)

            var para4 = document.createElement("p");
            para4.innerText = "PHONE NO:"+" "+element.phone;
            box.appendChild(para4)
        });
        document.body.appendChild(board)
    } catch(error){
        console.log(error);
    }
}
fetchData()