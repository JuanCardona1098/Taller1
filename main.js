const setup = {
    rows: 10,
    line: 5,
    positions: ["A","B","C","D","F","G","H","I","J","K"]
}

const DB = [];

generateRows();

function generateRows(){
    let parkingParent = document.querySelector(".parking-rows-container");

    for (let positionsRows = 0 ; positionsRows < setup.rows ; positionsRows++){
        parkingParent.innerHTML += `<div class="d-flex justify-content-around ${setup.positions[positionsRows]}"> 
        <div class="line">${setup.positions[positionsRows]}</div>`;
        for (let lines = 1; lines <= setup.line; lines++){
            document.querySelector(`.${setup.positions[positionsRows]}`).innerHTML += `<div class="line" onclick = "selectLine('${setup.positions[positionsRows]}','${lines}')">${lines}</div>`
        }
        parkingParent.innerHTML += `</div>`;
    }

}

function selectLine(positions,numberLine){
    document.querySelector(".title-form").innerHTML = `La linea seleccionada es: ${positions + numberLine}`
    document.querySelector(".send-button-container").innerHTML = `<button type="button" class="btn btn-success mt-1" onclick="reserve('${positions + numberLine}')">Enviar</button>`;
}

function reserve(positions,numberLine){

    const person = document.querySelector("#name").value;
    const cc = document.querySelector("#cc").value;
    const placa = document.querySelector("#placa").value;
    const seatCode = positions;

    console.log(person," ",cc, " ",placa," ", seatCode);

    DB.push({person, cc, placa, seatCode });
    console.log(DB);

    showReserves();

}

function showReserves(){
    const parentTableReserves = document.querySelector(".tableUser");
    parentTableReserves.innerHTML = '';

    for(let i = 0 ; i<DB.length; i++){
        parentTableReserves.innerHTML += `<tr><td>${DB[i].person}</td><td>${DB[i].cc}</td><td>${DB[i].placa}</td><td>${DB[i].seatCode}</td> <td> <button class="btn btn-success onclick="deleteReserve('${DB[i].seatCode}')">Exit</button> </td> </tr>`
    }
    const deleteReserve = (seatCode) =>{
        console.log(seatCode);
    }
}

function deleteReserve (seatCode) {
    const indexObject = DB.findIndex((object) => {
        return object.seatCode == seatCode;
    });

    DB.splice (indexObject,1);

    showReserves();

}