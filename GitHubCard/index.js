import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const data = 
  {
    "login": "kc0buk",
    "id": 55265165,
    "node_id": "MDQ6VXNlcjU1MjY1MTY1",
    "avatar_url": "https://avatars0.githubusercontent.com/u/55265165?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kc0buk",
    "html_url": "https://github.com/kc0buk",
    "followers_url": "https://api.github.com/users/kc0buk/followers",
    "following_url": "https://api.github.com/users/kc0buk/following{/other_user}",
    "gists_url": "https://api.github.com/users/kc0buk/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kc0buk/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kc0buk/subscriptions",
    "organizations_url": "https://api.github.com/users/kc0buk/orgs",
    "repos_url": "https://api.github.com/users/kc0buk/repos",
    "events_url": "https://api.github.com/users/kc0buk/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kc0buk/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Jeremiah Trnka",
    "company": null,
    "blog": "",
    "location": "Sacramento",
    "email": null,
    "hireable": null,
    "bio": "Current Full Stack Web Development student at Lambda School",
    "twitter_username": null,
    "public_repos": 26,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2019-09-13T01:43:22Z",
    "updated_at": "2020-07-07T21:24:16Z"
  }
// let data = {}
// axios.get(`https://api.github.com/users/kc0buk`)
//   .then( response => {
//     // response( item => {
//       data = response.data
//       console.log(response.data)
//       // return data
//     })
//     .catch( err => {
//       // deal with the error in here
//       console.log(`There was an error`, err)
//   })

 
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cards = document.querySelector(`.cards`)

function createCard(obj) {
  const card = document.createElement(`div`)
  card.classList.add(`card`)
  cards.appendChild(card)
  const avatar = document.createElement(`img`)
  avatar.src = data.avatar_url
  card.appendChild(avatar)
  const cardInfo = document.createElement(`div`)
  cardInfo.classList.add(`card-info`)
  card.appendChild(cardInfo)
  const name = document.createElement(`h3`)
  name.textContent = data.name
  cardInfo.appendChild(name)
  const userName = document.createElement(`p`)
  userName.classList.add(`username`)
  userName.textContent = data.login
  cardInfo.appendChild(userName)
  const location = document.createElement(`p`)
  location.textContent = `Location: ${data.location}`
  cardInfo.appendChild(location)
  const profile = document.createElement(`p`)
  profile.textContent = `Profile: `
  cardInfo.appendChild(profile)
  const profileLink = document.createElement(`a`)
  profileLink.href = data.html_url
  profileLink.textContent = data.html_url
  profile.appendChild(profileLink)
  const followers = document.createElement(`p`)
  followers.textContent = `Followers: ${data.followers}`
  cardInfo.appendChild(followers)
  const following = document.createElement(`p`)
  following.textContent = `Following: ${data.following}`
  cardInfo.appendChild(following)
  const bio = document.createElement(`p`)
  bio.textContent = `Bio: ${data.bio}`
  cardInfo.appendChild(bio)
  // return card
}

createCard(data)
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
