// Main Variables
let theInput = document.querySelector(".get-repos input");
let reposData = document.querySelector(".show-data");



// Get Repos Function
function getRepos() {


  fetch(`https://api.github.com/users/${theInput.value}`)
                                                                                                       
    .then((rep) => rep.json())
    
    .then((data) => {

      document.querySelector(".img").innerHTML = `
      <img src="${data.avatar_url}" alt="img-github" width=250>
    <h1>${data.login}</h1>`;
    })

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




        // Create Stars Count Span
        let issuesSpan = document.createElement("span");

        // Create The Stars Count Text
        let issuesText = document.createTextNode(`issues ${repo.open_issues_count}`);
        
        // Add Stars Count Text To Stars Span
        issuesSpan.appendChild(issuesText);

         //add classe to the issues span 
        issuesSpan.className = 'issues';
        
        // Append Stars Count Span To Main Div
        mainDiv.appendChild(issuesSpan);
  
       





         

        // Add Class On Main Div
        mainDiv.className = 'repo-box';

        // Append The Main Div To Container
        reposData.appendChild(mainDiv);

      

       
        

      });

    });
    

}


// function getAvatar(){

//   // let avatar = document.querySelector(".show-data #avatar");

// // promise
// fetch(`https://api.github.com/users/${theInput.value}`)

// .then((response) => response.json())

//  let namee = response.data.name;

//   //creat avatar tag
//  let img = document.createElement("img");

//  // Create The Stars Count Text
//  img.setAttribute = ('src' ,namee.avatar_url);

//  // Create The Main Div Element
//  let mainDiv = document.createElement("div");

//  // Append img tag To Main Div
//  mainDiv.appendChild(img);



// }