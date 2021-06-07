// Main Variables
let theInput = document.querySelector(".get-repos input");
let reposData = document.querySelector(".show-data");


// Get Repos Function
function getRepos() {

    // promise
    fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())
    // console.log('response')

    .then((repositories) => {

      // Empty The Container
      reposData.innerHTML = '';

      // Loop On Repositories
      repositories.forEach(repo => {

        // Create The Main Div Element
        let mainDiv = document.createElement("div");

        // Create Repo Name Text
        let repoName = document.createTextNode(repo.name);

        // Append The Text To Main Div
        mainDiv.appendChild(repoName);

        // Create Repo URL Anchor
        let theUrl = document.createElement('a');

        // Create Repo Url Text
        let theUrlText = document.createTextNode("Visit");

        // Append The Repo Url Text To Anchor Tag
        theUrl.appendChild(theUrlText);

        // Add "href"
        theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

        // ouvrir l'href dans une nouvelle page
        theUrl.setAttribute('target', '_blank');

        // Append Url Anchor To Main Div
        mainDiv.appendChild(theUrl);

        // Create Stars Count Span
        let starsSpan = document.createElement("span");

        // Create The Stars Count Text
        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

        // Add Stars Count Text To Stars Span
        starsSpan.appendChild(starsText);

        // Append Stars Count Span To Main Div
        mainDiv.appendChild(starsSpan);


        // Create Stars Count Span
        let descriptionSpan = document.createElement("h5");

        // Create The Stars Count Text
        let descriptionText = document.createTextNode(`${repo.description}`);

        // Add Stars Count Text To Stars Span
        descriptionSpan.appendChild(descriptionText);

        //add classe to the description span 
        descriptionSpan.className = 'description';

        // Append Stars Count Span To Main Div
        mainDiv.appendChild(descriptionSpan );

        if(descriptionSpan.value = NULL) {
          
          document.getElementsByTagName("h5").innerHTML = "No description found";

        }
       

        
        //creat avatar tag
        let img = document.createElement("img");

         // Create The Stars Count Text
         img.href =`${repo.avatar}`;
 
         // Append Stars Count Span To Main Div
         mainDiv.appendChild(img);





         

        // Add Class On Main Div
        mainDiv.className = 'repo-box';

        // Append The Main Div To Container
        reposData.appendChild(mainDiv);

      

       
        

      });

    });

}