let userList = document.querySelector('#userList');
let form = document.querySelector('#addUser');

function renderUser(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let surname = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    surname.textContent = doc.data().surname;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(surname);
    li.appendChild(city);
    userList.appendChild(li);
}

db.collection('users').get().then(user =>{
    user.docs.forEach(doc => {
        console.log(doc.data());
        renderUser(doc);
        
    })
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    setInterval(()=>{location.reload();}, 1000);
    db.collection('users').add({
        name: form.name.value,
        surname: form.surname.value,
        city: form.city.value
        
    })

})

// db.collection('users').orderBy('surname').onSnapshot(user =>{
//     user.docs.forEach(doc => {
//         console.log(doc.data());
//         renderUser(doc);
//     })
// });


// db.collection('users').orderBy('name').onSnapshot(snapshot =>{
//     let changes = snapshot.docChanges();
//     changes.forEach(change =>{
//                 console.log(doc.data());
//         renderUser(doc);
//     })
    
// });
