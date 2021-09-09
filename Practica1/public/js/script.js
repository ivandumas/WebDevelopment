function func1() {
    document.getElementById("table-specs").innerHTML = '<thead><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr></thead><tbod<tr><th scope="row">1</th><td>Ivan</t><td>Dumas</td><td>@cambioesto</td></tr></tbody>'
}

function func2() {
    document.getElementById("table-specs").innerHTML = '<thead><tr><th scope="col">#</th><th scope="col">Skylake</th><th scope="col">Rocket Lake</th><th scope="col">Tiger Lake</th><th scope="col">Alder Lake</th></tr></thead><tbody><tr><th scope="row">Core</th><td>AVX2 support</td><td>IPC Improvement</td><td>Super Finn</td><td>Hybrid Core</td></tr><tr><th scope="row">IPC improvement</th><td>13%</td><td>19%</td><td>18%</td><td>21%</td></tr><tr><th scope="row">Platform</th><td>PC</td><td>PC</td><td>Mobile</td><td>PC</td></tr></tbody>'
}

function buttonWithLink() {
    location.href = "./Register";
}