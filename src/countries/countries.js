import {HeadingService} from '../heading-service';

export class Countries {
  
  constructor() {
    this.countries = this.getCountries();
    this.renderCountries();
    new HeadingService().setHeading('countryHeading', 'Countries');
  }

  getCountries() {
    return [{name: 'USA'}, {name: 'France'}, {name: 'Denmark'}, {name: 'Canada'}];
  }

  renderCountries() {
    var countryList = document.getElementById("countrylist");

    this.countries.forEach(function (country) {
      var li = document.createElement("li");

      li.textContent = country.name;
      countryList.appendChild(li);
    });
  }
}