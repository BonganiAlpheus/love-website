const loveButton =
    document.getElementById("loveButton");

const message = 
    document.getElementById("message");

loveButton.addEventListener("click", function() 
    {
        message.textContent = "I LOVE YOU ❤️";
    // create floating hearts and balloons
    const emojis = ["❤️", "🥰", "😍", "🎈"];

    for (let i = 0; i < 30; i++)
    {
        const love = document.createElement("div");

        love.textContent = emojis [
            Math.floor(Math.random() * emojis.length)
        ];
        //add floating class
        love.classList.add("floating");
        //random horizontal positon
        love.style.left = Math.random() * 100 + "vw";

        love.style.animationDuration =
            (3 + Math.random() * 3) + "s";
            //add to website
            document.body.appendChild(love);

            setTimeout(function()
        {
            love.remove();
        }, 6000);
    }
    });