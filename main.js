//api פונקציה שמכילה את ה
const API = 'https://next.json-generator.com/api/json/get/NJ-UoW2Xq'
function getUsersObjectFromApi() {
    return fetch(`${API}`, {})
        .then((res) => { return res.json() })
}

class UserObjectCard {
    firstName;
    lastName;
    age;
    image;
    email;
    phone;
    constructor(first_Name, last_Name, email_, age_, phone_, image_) {
        this.firstName = first_Name;
        this.lastName = last_Name;
        this.age = age_;
        this.image = image_;
        this.email = email_;
        this.phone = phone_;
    }
}
//api פונקציה המציגה את הנתונים מ
let infroUserObjectArray = [];
async function printUsersInformation() {
    document.getElementById('mainDiv').innerHTML = '';
    document.getElementById('unMainDiv').innerHTML = '';
    try {
        infroUserObjectArray = await getUsersObjectFromApi();
        infroUserObjectArray.forEach((arrayKey) => {
            let UserObjectCardApi = new UserObjectCard(arrayKey.name.first, arrayKey.name.last,arrayKey.email,arrayKey.age,arrayKey.phone,arrayKey.picture)
            console.log(UserObjectCardApi);
            document.getElementById('mainDiv').innerHTML += `<div class ="cards" id ="card${arrayKey.index}">
            <h3 class="cardUserHeadLine">Full Name:</h3>${arrayKey.name.first} ${arrayKey.name.last}
            <p class="cardUserHeadLine">email:</p>${arrayKey.email}
            <p class="cardUserHeadLine">Age:</p>${arrayKey.age}
            <p class="cardUserHeadLine">Phone:</p>${arrayKey.phone}</br>
            <img src=${arrayKey.picture} height="150px" width="150px" onclick="showUserCardInfotmation(${arrayKey.index})">
            </div>`
        });
    }
    finally {

    }
}
printUsersInformation();


//api פונקציה המציגה את הנתונים בטבלה מ
async function printTableOfUserInfro() {
    document.getElementById('mainDiv').innerHTML = '';
    document.getElementById('unMainDiv').innerHTML = '';
    document.getElementById('mainDiv').innerHTML += `
    <table id="tabelId">
        <tr>
            <th>Full name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Picture</th>
        </tr>
            </table>`
    try {
        infroUserObjectArray = await getUsersObjectFromApi();
        infroUserObjectArray.forEach((arrayKey) => {
            document.getElementById('tabelId').innerHTML += `
                    <td id="td1">${arrayKey.name.first} ${arrayKey.name.last}</td>
                    <td id="td2">${arrayKey.email}</td>
                    <td id="td3">${arrayKey.age}</td>
                    <td id="td4">${arrayKey.phone}</td>
                    <td id="td5"><img src=${arrayKey.picture} height="50px" width="50px"</td>`
        });
    }
    finally {

    }
}


// פונקציה המציגה טופס למילוי המשתמש
function fillFormForUser() {
    document.getElementById('mainDiv').innerHTML = '';
    document.getElementById('unMainDiv').innerHTML = '';
    try {
        document.getElementById('mainDiv').innerHTML += `
            <div id="formDiv">
            <form id="forms" onsubmit="return checkSubmit()">
                <label>First Name:</label>
                <input id="inputFirstName" type="text" required>
                
                <label>Last Name:</label>
                <input id="inputLastName" type="text" required>
                
                <label>Email:</label>
                <input id="inputEmail1" type="email" required>
                
                <label>Repeat Email:</label>
                <input id="inputEmail2" type="email" required>
                
                <label>Age:</label>
                <input id="inputAge" type="number" required>
                
                <label>Phone:</label>
                <input id="inputPhone" type="text" required>
                
                <label>Img:</label>
                <input id="inputImg" type="image" required>

                <button type="submit">SAVE</button>
            </form>
        </div>`
    }
    finally {

    }
}
function checkTheEmail() {
    if (inputEmail1.value == inputEmail2.value) {
        alert('The Email Are The Same');
    }
    else {
        alert('The Email Are Not The Same');
    }
}
function checkSubmit() {
    return checkTheEmail();
}


// פונקציה המציגה את הכרטיס של המשתמש
function showUserCardInfotmation(cardIndex) {
    document.getElementById('mainDiv').innerHTML = '';
    getUsersObjectFromApi().then(users => {
        let foundUser = null;
        for (let user of users) {
            if (user.index == cardIndex) {
                foundUser = user;
            }
        }
        if (foundUser != null) {
            document.getElementById('unMainDiv').innerHTML += `<div class="cardUserOnly">
                   <h3 class="cardUserHeadLine">Full Name:</h3>${foundUser.name.first} ${foundUser.name.last}
                   <p class="cardUserHeadLine">email:</p>${foundUser.email}
                   <p class="cardUserHeadLine">Age:</p>${foundUser.age}
                   <p class="cardUserHeadLine">Phone:</p>${foundUser.phone}</br>
                   <img src=${foundUser.picture} height="150px" width="150px">
                   </div>`

            console.log(foundUser.name.first);
        }
    });
}