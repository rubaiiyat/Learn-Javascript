const body = document.getElementsByClassName("mainBody")[0];
const firstDiv = document.createElement("div");
body.appendChild(firstDiv);

firstDiv.style.display = "flex";
firstDiv.style.justifyContent = "center";
firstDiv.style.alignItems = "center";
firstDiv.style.gap = "20px";
firstDiv.style.textAlign = "start";
firstDiv.style.marginTop = "50px";
firstDiv.style.borderRadius = "20px";
firstDiv.style.padding = "20px";
firstDiv.style.margin = "auto";
firstDiv.style.color = "black";

const rockList = document.createElement("div");
firstDiv.appendChild(rockList);

const rockTitle = document.createElement("h1");
rockTitle.innerText = "Rock Bands";
rockList.appendChild(rockTitle);
rockTitle.style.fontSize = "30px";
rockTitle.style.color = "white";
rockTitle.style.textDecoration = "underline";

const rockBands = document.createElement("ul");
rockBands.innerHTML = `
    <li>Nirvana</li>
    <li>Sum 41</li>
    <li>Green Day</li>
    <li>Guns And Roses</li>
    <li>Maneskin</li>
`;

rockList.appendChild(rockBands);

rockList.style.background = "#646EE4";
rockList.style.padding = "10px";
rockList.style.borderRadius = "10px";

const metalList = document.createElement("div");
firstDiv.appendChild(metalList);

const metalTitle = document.createElement("h1");
metalTitle.innerText = "Metal Bands";
metalList.appendChild(metalTitle);
metalTitle.style.fontSize = "30px";
metalTitle.style.color = "white";
metalTitle.style.textDecoration = "underline";

const metalBand = document.createElement("ul");
metalBand.innerHTML = `
 <li>Lamb Of God</li>
    <li>System Of a Down</li>
    <li>Metallica</li>
    <li>AC/DC</li>
    <li>Iron Maiden</li>

`;
metalList.appendChild(metalBand);
metalList.style.background = "#EF47BC";
metalList.style.padding = "10px";
metalList.style.borderRadius = "10px";

const poplList = document.createElement("div");
firstDiv.appendChild(poplList);

const popTitle = document.createElement("h1");
popTitle.innerText = "Pop Bands";
poplList.appendChild(popTitle);
popTitle.style.fontSize = "30px";
popTitle.style.color = "white";
popTitle.style.textDecoration = "underline";

const popBand = document.createElement("ul");
popBand.innerHTML = `
    <li>Cold Play</li>
    <li>Imagine Dragons</li>
    <li>Keans</li>
    <li>One Republic</li>
    <li>The Chainsmokers</li>

`;
poplList.appendChild(popBand);

poplList.style.background = "#00B29F";
poplList.style.padding = "10px";
poplList.style.borderRadius = "10px";
