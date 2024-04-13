/*function adicionarInformacao() {
    var nome = document.getElementById("nome").value;
    var marca = document.getElementById("marca").value;
    var data = document.getElementById("data").value;
    var problemas = document.getElementById("problemas").value;
    var passou = document.getElementById("passou").value;
    
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbody");
    
    var newRow = tbody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    
    cell1.innerHTML = tbody.rows.length;
    cell2.innerHTML = nome;
    cell3.innerHTML = marca;
    cell4.innerHTML = data;
    cell5.innerHTML = problemas;
    cell6.innerHTML = passou;

}

    function alterarInformacao() { 
        var rowIndex = prompt("Insira o número da linha que deseja alterar:"); 
        if (rowIndex < 1 || rowIndex > document.getElementById("tbody").rows.length) { 
            alert("Número de linha inválido. Por favor, insira um número válido."); 
        } else { 
            var nome = prompt("Insira o novo nome:"); 
            var marca = prompt("Insira a nova marca:"); 
            var data = prompt("Insira a nova data de inspeção:"); 
            var problemas = prompt("Insira os novos problemas:"); 
            var passou = prompt("Aprovado na inspeção? (Sim/Não)"); 
            var row = document.getElementById("tbody").rows[rowIndex - 1]; 
            row.cells[1].innerHTML = nome; 
            row.cells[2].innerHTML = marca; 
            row.cells[3].innerHTML = data; 
            row.cells[4].innerHTML = problemas; 
            row.cells[5].innerHTML = passou; 
        } 
    }*/
    fetch("clientes.json")

    .then(function(response){
        return response.json();
    })

    .then(function(clientes){
        let placehorlder = document.querySelector("#data-output");

        let out = "";

        for(let cliente of clientes){
            out += `<tr>
            <td>${cliente.id}</td>
            <td>${cliente.name}</td>
            <td>${cliente.marca}</td> 
            <td>${cliente.dataDeInspecao}</td> 
            <td>${cliente.problemas}</td>
            <td>${cliente.passouInspecao}</td>   
          </tr>
          `

                
            ;
        }

        placehorlder.innerHTML = out;
    })
