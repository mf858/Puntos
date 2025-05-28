async function loadData(){
    const response = await fetch('/LEC/2025/LEC_2025_SPRING.json');
    const data = await response.json();
    return data
}

function chooseRandomPlayer(data){
    const keys = Object.keys(data)
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomPlayer = data[randomKey];
    return {[randomKey]: randomPlayer}
}

function displayPlayer(player, key){
    const image = document.getElementById('image')
    const name = document.getElementById('name')

    image.src = player[key].image
    name.innerHTML = key
}

loadData().then(data => {
    console.log(data)
    const player = chooseRandomPlayer(data)
    const key = Object.keys(player)
    displayPlayer(player, key)
})