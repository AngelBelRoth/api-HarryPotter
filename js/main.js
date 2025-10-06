document.querySelector('button').addEventListener('click', checkCharacter)

function checkCharacter() {
    const character = document.querySelector('input').value
    const url = `https://potterapi-fedeperin.vercel.app/en/characters?search=${character}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h3").innerText = data[0].fullName;
            document.querySelector(".picture").src = data[0].image;
            document.querySelector("h2").innerText = data[0].hogwartsHouse;

            const house = data[0].hogwartsHouse;
            const urlHouse = `https://hp-api.onrender.com/api/characters/house/${house}`
            fetch(urlHouse)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        })
}

//Michael Kazin helped me with these apis