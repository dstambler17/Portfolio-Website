let Home = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <div class="home-main">
                    <div class="half-width">
                        <h2 class="section-title"> About Me </h2>
                        <p> My name is Daniel Stambler. I am currently a graduate student at Johns Hopkins,
                           pursuing a Masters in Science and Engineering in Computer Science with a research focus in
                        Natural Language and Machine Translation. Before starting graduate school, I was a software engineer
                        at TikTok.</p>
                        <br/>
                        <p><strong>Interests:</strong> Deep Learning, Machine Translation, Distributed Systems,
                         Video Game Development, Language Learning</p>
                    </div>
                    <div class="profile-pic">
                        <img class="profile-image" height="200px" width="200px" src="images/profPic.jpeg" alt="Photo of Me!"/>
                    <div>
                </div>
            </section>
        `
        return view
    },
    after_render: async () => {
        document.getElementById('contact-link').style.color='#4A4A4A';
        document.getElementById('project-link').style.color='#4A4A4A';
        document.getElementById('home-link').style.color='#3273dc';
        document.getElementById('footer-elem').style.position='absolute';
    }
        
}

export default Home;