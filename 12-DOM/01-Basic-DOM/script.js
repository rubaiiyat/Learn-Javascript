const body = document.getElementsByClassName("mainBody")[0];
const firstDiv = document.createElement("div");
body.appendChild(firstDiv);

firstDiv.style.display = "flex";
firstDiv.style.justifyContent = "center";
firstDiv.style.alignItems = "center";
firstDiv.style.gap = "20px";
firstDiv.style.textAlign = "start";
firstDiv.style.marginTop = "50px";
firstDiv.style.background = "gray";
firstDiv.style.background = "#14181c";
firstDiv.style.width = "600px";
firstDiv.style.borderRadius = "20px";
firstDiv.style.padding = "20px";
firstDiv.style.margin = "auto";

const rockList = document.createElement("div");
firstDiv.appendChild(rockList);

const rockBands = document.createElement("ul");
rockBands.innerHTML = `
    <li>Nirvana</li>
    <li>Sum 41</li>
    <li>Green Day</li>
    <li>Guns And Roses</li>
    <li>Maneskin</li>
`;

rockList.appendChild(rockBands);

const metalList = document.createElement("div");
firstDiv.appendChild(metalList);

const metalBand = document.createElement("ul");
metalBand.innerHTML = `
 <li>Lamb Of God</li>
    <li>System Of a Down</li>
    <li>Metallica</li>
    <li>AC/DC</li>
    <li>Iron Maiden</li>

`;
firstDiv.appendChild(metalBand);

const poplList = document.createElement("div");
firstDiv.appendChild(poplList);

const popBand = document.createElement("ul");
popBand.innerHTML = `
    <li>Cold Play</li>
    <li>Imagine Dragons</li>
    <li>Keans</li>
    <li>One Republic</li>
    <li>The Chainsmokers</li>

`;
firstDiv.appendChild(popBand);
