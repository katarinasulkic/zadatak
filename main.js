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
      <i class="fa ${job.className} picture"></i>
      <p>${job.name}</p>
    `;
  
    // 2.4. Dodati ga na kontejner kako bi se renderovao na ekranu
    container.appendChild(newItem);
  }
  
  const main = () => {
    // 2. proci kroz data array
      //cb input => output
    jobs.map(job => renderJob(job));
  };
  
  main();

  