// typer for hello
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 50;

    if (this.isDeleting) { delta /= 3; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};

///////////////////
const projects = [
    {
      title: "Recycling Promotion (JNARDDC)",
      tags: ["ANGULAR", "HTML", "SCSS","BOOTSTRAP","Angular Material"],
      description: "The NFM Recycling Portal is an official platform developed for the Ministry of Mines to manage and report non-ferrous metal recycling activities in India.",
      liveUrl: "https://nfmrecycling.jnarddc.gov.in/"
    },
    {
      title: "National Career Service",
      tags: ["ANGULAR", "HTML", "SCSS", "BOOTSTRAP","Angular Material"],
      description: "The National Career Service (NCS) Portal is a government initiative by the Ministry of Labour & Employment to provide employment-related services to job seekers, employers, and career counselors across India.",
      liveUrl: "#"
    },
    {
      title: "National Book Trust",
      tags: ["ASP.Net","MSSQL","HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
      description: "The National Book Trust (NBT) Website is an official platform promoting book publishing, reading culture, and literary events across India under the Ministry of Education",
      liveUrl: "https://nbtindia.gov.in/"
    }
    ,
    {
      title: "Central Water Commission",
      tags: ["ASP .Net Core MVC","MSSQL","HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
      description: "Central Water Commission is a premier Technical Organization of India in the field of Water Resources and is presently functioning as an attached office of the Ministry of Jal Shakti",
      liveUrl: "https://cdrc.cwc.gov.in/"
    },
    {
      title: "Netoyed",
      tags: ["ASP.Net Core Web API","MYSQL"],
      description: "Netoyed is a professional IT services website showcasing the company’s digital solutions, web development, and software services.",
      liveUrl: "https://netoyed.com/"
    }
    // Add more objects
  ];

  const container = document.getElementById('project-container');

  projects.forEach(project => {
    const tagHTML = project.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('');
    
    const cardHTML = `
      <div class="col-md-3">
        <div class="card shadow-sm">
          <div class="card-body">
            <h4 class="m-0">${project.title}</h4>
            <div class="portfolio-tags my-2">${tagHTML}</div>
            <p class="card-text mt-0">${project.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="${project.liveUrl}" target="_blank" class="btn btn-sm btn-outline-secondary cardbtn">
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += cardHTML;
  });