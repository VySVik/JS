
var pokinput;
var data;
var i,n;

function fetchpok() {
   
    pokinput =  tomaValor();

    const url = ` https://pokeapi.co/api/v2/pokemon/${pokinput}`;//898
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokimagen = ("./img/pok.jpg");
            console.log(url);
        } else {
            console.log(res);
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        exe(data);
    })  
}


function tomaValor(){
    const name = document.getElementById('name');
    input = name.value.toLowerCase();
    console.log(pokinput);
    
    return input;
}




function exe(data)

{
        let pokimg = document.getElementById('img');
        pokimg.innerHTML = `<img src=${data.sprites.front_default} style="width: 300px; height:300px;"  class="imgn">`

        let nom = document.getElementById('nom');
        nom.innerHTML = `<h1>${data.name}</h1>`

        let gral = document.getElementById('gral');
        gral.innerHTML = `
        <h2>Información general</h2>
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Orden</th>
                <th>Height</th>
                <th>weight</th> 
            </tr>
        </thead>
        <tbody>
            <tr>
               <td>${data.id}</td>
               <td>${data.order}</td> 
               <td>${data.height}</td>
               <td>${data.weight}</td>
            </tr>
        </tbody>
    </table>`


        let stad = document.getElementById('stat');
        stad.innerHTML = `
    <h2>Estadisticas</h2>
    <ul>
        <li>
        ${data.stats[0].stat.name}
        </li>
        <li>
        <progress id="s0" value="${data.stats[0].base_stat}" max="100"} class="s0"></progress>
        ${data.stats[0].base_stat}
        </li>
        <li>
        ${data.stats[1].stat.name}
        </li>
        <li>
        <progress id="s0" value="${data.stats[1].base_stat}" max="100"} class="s0"></progress>
        ${data.stats[1].base_stat}
        </li>
        <li>
        ${data.stats[2].stat.name}
        </li>
        <li>
        <progress id="s0" value="${data.stats[2].base_stat}" max="100"} class="s0"></progress>
        ${data.stats[2].base_stat}
        </li>
        <li>
        ${data.stats[3].stat.name}
        </li>
        <li>
        <progress id="s0" value="${data.stats[3].base_stat}" max="100"} class="s0"></progress>
        ${data.stats[3].base_stat}
        </li>
        <li>
        ${data.stats[4].stat.name}
        </li>
        <li>
        <progress id="s0" value="${data.stats[4].base_stat}" max="100"} class="s0"></progress>
        ${data.stats[4].base_stat}
        </li>
        <li>
        ${data.stats[5].stat.name}
        </li>
        <li>
        <progress id="s0" value="${data.stats[5].base_stat}" max="100"} class="s0"></progress>
        ${data.stats[5].base_stat}
        </li>        
    </ul>`

        let moves = document.getElementById('mov');
        moves.innerHTML = `
    
    <h2>Movimientos: ${data.moves.length}</h2>
    <h2>7 principales</h3>
    <ul class="mov">
        <li>
        ${data.moves[0].move.name}
        </li>
        <li>
        ${data.moves[1].move.name}
        </li>
        <li>
        ${data.moves[2].move.name}
        </li>
        <li>
        ${data.moves[3].move.name}
        </li>
        <li>
        ${data.moves[4].move.name}
        </li>
        <li>
        ${data.moves[5].move.name}
        </li>
        <li>
        ${data.moves[6].move.name}
        </li>
        
    </ul>`

}