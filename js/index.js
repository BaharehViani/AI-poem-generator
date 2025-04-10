function generatePoem(event) {
    event.preventDefault();
    
    let userInstruction = document.querySelector("#prompt").value;
    const apiKey = "4bada4e2ef8cba4745bcdtf450236obd";
    let context = "You are a poem expert and love to generate poems based on provided themes or instructions,offering a creative and personalized experience. Your mission is to generate poem and separate each line with a <br /> but not for the last line. Make sure to follow the user instructions. Do not include a title to the poem.";
    let prompt = `Generate a short poem about ${userInstruction}.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    document.querySelector("#result").classList.remove("hidden");
    document.querySelector("#result").innerHTML =`<div class="generating">⏳ Wait a second... generating a poem for you!</div>`;

    axios.get(apiUrl).then(displayPoem).catch((error) => {
        document.querySelector("#result").innerHTML =
          "⚠️ Failed to generate poem. Try again!";
        console.error(error);
    });
}

function displayPoem(response) {
    new Typewriter("#result", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);
