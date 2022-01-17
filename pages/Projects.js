let Project = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
            <div class="project-section-title">
                <h1 class="section-title">Projects </h1>
                <h5><i>Below are my favorite projects that I have worked on as of December 29 2021. For a full 
                list of my projects check out my <a href="https://github.com/dstambler17?tab=stars" target="_blank">Github</a></i></h5>
            </div>
                <div class="project-center">
                <div class="project-list">

                    <div class="project-item">
                        <div class="project-image">
                            <a href="https://github.com/dstambler17/Video-Game-Music-Gen" target="_blank"> <img class="item-image" src="images/VideoGameMusic.png" alt="VideoGameMusicGen"/> </a>
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Deep Learning: Video Game Music Generator</h2>
                            <p><a href="https://github.com/dstambler17/Video-Game-Music-Gen" target="_blank">Video Game Generator Project Repo </a></p>
                            <p>
                            This project uses a classifier model to predict the next piano key in a sequence of notes.
                            From this prediction, new compositions can be generated. For this project, I fetch about 1000 retro video game MIDI files
                            <a href="https://www.vgmusic.com/music/other/miscellaneous/piano/" target="_blank">from this website</a>. Afterwards, the data
                            is cleaned, and transformed into two sets: one for predicting the notes for the right hand, and one for the left. Two RNN classifiers
                            are then trained on the data. Finally, a postprocessing script generates new retro video game MIDI files
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