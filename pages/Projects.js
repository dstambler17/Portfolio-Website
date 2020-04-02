let Project = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
            <div class="project-section-title">
                <h1 class="section-title">Projects </h1>
                <h5><i>Below are my favorite projects that I have worked on as of April 2nd 2020. For a full 
                list of my projects check out my <a href="https://github.com/dstambler17?tab=stars" target="_blank">Github</a></i></h5>
            </div>
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
                            Parsy.io is a project that I worked on for about six months.
                            The aim of this project is to help students organize their schedules, by keeping all their information in one organized,
                            and easy to use calendar. I built this app with React.js for the frontend and MySQL and Flask for the backend.
                            This project uses Google APIs for authentication.
                            </p>
                        </div>
                    </div>

                    <div class="project-item">
                        <div class="project-image">
                            <a href="https://github.com/dstambler17/gomoku" target="_blank"> <img class="item-image" src="images/gomoku.png" alt="Gomoku Photo"/> </a>
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Gomoku Web Game</h2>
                            <p><a href="https://github.com/dstambler17/gomoku" target="_blank">Gomoku Project Repo</a></p>
                            <p>
                            I implemented <a href="https://en.wikipedia.org/wiki/Gomoku" target="_blank">Gomoku</a> (Five In a Row) which is a game where both players alternate placing black and white pieces on a Go board.
                            A player wins when they end up with a horizontal, vertical, or diagonal chain of five pieces.
                            My online implementation consists of three modes: Single Player vs an AI, Local Multiplay, and Online Multiplayer.
                            I built the frontend in JavaScript and the backend in Python (Flask) and MongoDB.
                            I used web sockets when implementing the online multiplayer.
                            For the single-player AI, I implemented a variation of the 
                            <a href="https://en.wikipedia.org/wiki/Minimax" target="_blank">Minimax Algorithm</a>.
                            </p>
                        </div>
                    </div>

                    <div class="project-item">
                        <div class="project-image">
                            <a href="https://github.com/dstambler17/Habit-Tracker-Go-REST-API" target="_blank"> <img class="item-image" src="images/golang_pic.png" alt="Golang"/> </a>
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Golang Habit Tracker API Framework</h2>
                            <p><a href="https://github.com/dstambler17/Habit-Tracker-Go-REST-API" target="_blank">Go Rest API Project Repo </a></p>
                            <p>
                            To get a feel for Golang as a server-side language, I decided to write my own rest API framework that will allow a client to interact with an instance of a PostgreSQL database.
                            This API is meant for a client-side application that can keep track of a users’ habits, and their progress
                            towards completing those habits, on a biweekly basis.
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