import React from "react";

function Projects () {
    return (
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Projects</h2>
      <div class="flex-row justify-space-between">
      
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">Run-Buddy Home Page</h3>
            <h5 class="portfolio-languages">
              Built With:
              HTML, CSS, JavaScript, React
            </h5>
            <p>Sample home page for a made-up exercise company called Run-Buddy. Used to help learn and reinforce the basics of front-end web development using just HTML and CSS.</p>
            <a href="https://github.com/Pickaxe9999/run-buddy/" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">Weather Dashboard</h3>
            <h5 class="portfolio-languages">
              Built With:
              JavaScript, HTML, CSS, Bootstrap
            </h5>
            <p>The user enters a name of a US city to get the current weather information such as tempature, wind, humidity, and uv  index. A seven day forecast is displayed below the current weather information with icons showing the predicted weather. If the user wants to search a city they've looked for previously then a search history is displayed below the search bar that is saved to local storage.</p>
            <a href="https://github.com/Pickaxe9999/weather-dashboard" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">Hotel Weather</h3>
            <h5 class="portfolio-languages">
              Built With:
              JavaScript, HTML, CSS
            </h5>
            <p>Whenever the user searches for a city within a US state then a 7 day forecast is displayed of the searched city along with a list of hotels  close by or within the search. This was created within a group. My contributing features were search functionality, function compatability when merged, and the weather being displayed to the user.</p>
            <a href="https://github.com/RicardoKContreras/Hotel-Weather" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">Just-Tech-News</h3>
            <h5 class="portfolio-languages">
              Built With:
              JavaScript, HTML, CSS, ES6, Node, Express, MySQL, OOP, Express-sessions, Handlerbars, Sequelize
            </h5>
            <p>A small blog website for users to share tech information they find on the web. A Full-Stack web application using database hashing for securing passwords.</p>
            <a href="https://github.com/Pickaxe9999/just-tech-news" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">e-commerce backend</h3>
            <h5 class="portfolio-languages">
              Built With:
              Javascript, Express, Sequelize
            </h5>
            <p>A simple backend for an ecommerce store using express and sequelize models for api calls modifying a database.</p>
            <a href="https://github.com/Pickaxe9999/e-commerce-backend" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">Hungry Guys</h3>
            <h5 class="portfolio-languages">
              Built With:
              JavaScript, HTML, CSS, ES6, jQuery, Bootstrap, Node, Express, MySQL, OOP, Express-sessions, Handlerbars, Sequelize
            </h5>
            <p>A full-stack application for users to share ideas on food recipies. Was developed as practice for group application collaboration.</p>
            <a href="https://github.com/Konopie/hungry-guys" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">Elect.io</h3>
            <h5 class="portfolio-languages">
              Built With:
              JavaScript, HTML, CSS, ES6, Node, Express, React, Mongoose, NoSQL
            </h5>
            <p>A full-stack web application for looking up potential candidates you can vote for in your area,</p>
            <a href="https://github.com/nrenner0211/elect.io" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
      </div>
    </section>
  )
}

export default Projects;