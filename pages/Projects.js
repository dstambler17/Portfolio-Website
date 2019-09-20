let Project = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1 class="section-title project-section-title">Projects </h1>
                
                <div class="project-center">
                <div class="project-list">
                    <div class="project-item">
                        <div class="project-image">
                            <a href="https://parsy.io" target="_blank"><img class="item-image" src="images/parsy.png" alt="Parsy.io Photo"/></a>
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Parsy.io</h2>
                            <p><a href="https://parsy.io" target="_blank">https://parsy.io</a></p>
                            <p>
                                Parsy.io is a project that I've been working on for nine months.
                                The aim of this project is to help student organize their schedules,
                                by keeping all their Information in one organized, and easy to use calendar.
                                I built this app with React.js for the frontend, and MySQL and Flask for the backend
                            </p>
                        </div>
                    </div>

                    <div class="project-item">
                        <div class="project-image">
                            <a href="https://github.com/dstambler17/Movie-Buff_Twitter-Bot" target="_blank"> <img class="item-image elongated" src="images/twitterbot.png" alt="Twitter Bot Photo"/> </a>
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Twitter Movie Bot</h2>
                            <p><a href="https://github.com/dstambler17/Movie-Buff_Twitter-Bot" target="_blank">Movie Bot Project Repo</a></p>
                            <p>
                                MovieBot is a Twitter bot that I built with Python and the Twitter api.
                                The bot responds to a few tweets,
                                (when the server is running). "#quoteplease" will prompt the bot to respond with a quote
                                chosen randomly from a list of top 100 movie quotes, that I scraped.
                                Tweeting at it five times, will prompt it to follow you, and tweeting ten times,
                                will prompt the robot to give you a shout out. I'm currently adding a classifier so that #quoteplease
                                will run the custom neural net to determine the movie genre.
                            </p>
                        </div>
                    </div>

                    <div class="project-item">
                        <div class="project-image">
                            <a href="https://github.com/dstambler17/danban" target="_blank"> <img class="item-image" src="images/danbanpic.png" alt="Danban Photo"/> </a>
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Danban</h2>
                            <p><a href="https://github.com/dstambler17/danban" target="_blank">Danban Project Repo</a></p>
                            <p>
                                Danban is a trello board style app that I built as a way to learn React,
                                babel, webpack, and Django. The app uses the Django-REST framework
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        `
        return view
    },
    after_render: async () => {
        document.getElementById('home-link').style.color='#4A4A4A';
        document.getElementById('contact-link').style.color='#4A4A4A';
        document.getElementById('project-link').style.color='#3273dc';
        document.getElementById('footer-elem').style.position='relative';
    }
        
}

export default Project;