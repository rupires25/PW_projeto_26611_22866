let count = 1;
//Adiciona informação na tabela
function adicionarInformacao() {
    const nome = document.getElementById('nome').value;
    const marca = document.getElementById('marca').value;
    const data = document.getElementById('data').value;
    const problemas = document.getElementById('problemas').value;
    const passou = document.getElementById('passou').value;

    const tbody = document.getElementById('tbody');

    const newRow = `<tr>
                        <th scope="row">${count}</th>
                        <td>${nome}</td>
                        <td>${marca}</td>
                        <td>${data}</td>
                        <td>${problemas}</td>
                        <td>${passou}</td>
                    </tr>`;

    tbody.insertAdjacentHTML('beforeend', newRow);
    
    count++;
}
//ALtera a linha e o campo indicado na prompt da tabela
    function alterarInformacao() { 
        var rowIndex = prompt("Insira o número da linha que deseja alterar:"); 
        if (rowIndex < 1 || rowIndex > document.getElementById("tbody").rows.length) { 
            alert("Número de linha inválido. Por favor, insira um número válido."); 
        } else { 
            var campo = prompt("Insira o campo que deseja alterar (Nome/Marca/Data/Problemas/Passou):"); 
            var valor = prompt("Insira o novo valor para o campo selecionado:"); 
            var row = document.getElementById("tbody").rows[rowIndex - 1];
            switch(campo) {
                case "Nome":
                    row.cells[1].innerHTML = valor;
                    break;
                case "Marca":
                    row.cells[2].innerHTML = valor;
                    break;
                case "Data":
                    row.cells[3].innerHTML = valor;
                    break;
                case "Problemas":
                    row.cells[4].innerHTML = valor;
                    break;
                case "Passou":
                    row.cells[5].innerHTML = valor;
                    break;
                default:
                    alert("Campo inválido. Por favor, insira um campo válido.");
            }
        } 
    }

//Limpa a informação que a tabela contêm
    function cleanInformation() { 
        const tbody = document.getElementById('tbody');
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }
