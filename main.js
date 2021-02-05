const jobs = [
    { name: 'KATA', className: 'fa-user'},
    { name: 'LEMI', className: 'fa-user'},
    { name: 'VUKASIN', className: 'fa-user'},
    { name: 'RESTAURANT', className: 'fa-car'},
    
  ]

// 1. dohvatiti referencu kontejnera
  const container = document.querySelector('.find-container-row');
  
  const renderJob = (job) => {
    // 2.1. za svaki pojedinacno item u data array-u kreirati novi DOM element tipa DIV
    const newItem = document.createElement('div');
  
    // 2.2. dodati klasu da bi povukao css pravila
    newItem.classList.add('picture-container');
  
    // 2.3. dodati mu innerHTML  -> vezba string templating in js
    newItem.innerHTML = `
      <i class="fa 'fa-user' picture"></i>
      <p>${job.name}</p>
    `;
  
    // 2.4. Dodati ga na kontejner kako bi se renderovao na ekranu
    container.appendChild(newItem);
  }
  
  const main = (data) => {
    const result = data.map(user => ({
      id: user.id, 
      name: user.name,
      companyName: user.company.name, 
      street: `${user.address.street}, ${user.address.zipcode}, ${user.address.city}`
    }));

       data.map(job => renderJob(job));
    console.log(result); 
   
  };

  
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    main(data);
});



// 1. dovuci podatke sa servera

// 2. mapirati podatke u objekte koji imaju name, companyName, address, id

// 3. prikazati umesto jobs kockica, kockice sa ovim informacijama (dovoljno je samo napisati name ispod ikonice)


/**
{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "sincere@april.biz",
"address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
},

=> 

{
  id: 1,
  name: "Leanne Graham",
  companyName: "Romaguera-Crona",
  address: "Kulas Light, 92998-3874 Gwenborough"
}
 */

  