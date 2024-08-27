const apiUrl = 'https://restcountries.com/v3.1/all';


function fetchCountryData() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      
      const filteredData = data.filter(country => country.name.common !== 'Israel');
      
      
      displayCountries(filteredData);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}


function displayCountries(countries) {
  const countryList = document.getElementById('country-list');
  
  
  countryList.innerHTML = '';

  countries.forEach(country => {
    
    const countryItem = document.createElement('div');
    countryItem.className = 'country-item';

    
    const countryName = document.createElement('div');
    countryName.className = 'country-name';
    countryName.textContent = country.name.common;
    countryItem.appendChild(countryName);

    
    if (country.capital) {
      const capital = document.createElement('div');
      capital.textContent = 'Capital: ' + country.capital[0];
      countryItem.appendChild(capital);
    }

    
    const population = document.createElement('div');
    population.textContent = 'Population: ' + country.population.toLocaleString();
    countryItem.appendChild(population);

    
    const region = document.createElement('div');
    region.textContent = 'Region: ' + country.region;
    countryItem.appendChild(region);

    
    countryList.appendChild(countryItem);
  });
}


fetchCountryData();
