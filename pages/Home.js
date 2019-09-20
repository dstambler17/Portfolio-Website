let Home = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <div class="home-main">
                    <div class="half-width">
                        <h2 class="section-title"> About Me </h2>
                        <p>My name is Daniel Stambler. I am a Software Engineer for
                        a Fintech startup in NYC. I am passionate about technology,
                        particularly full stack web development and Neural Nets. Outside of technology, I enjoy
                        biking, and going for runs.</p>
                        <br/>
                        <p><strong>Skills:</strong> Python (Flask, Django), MySQL, Regex , PHP (codeigniter), Java (Javalin),
                         JavaScript (vanilla JS, React), C/C++</p>
                    </div>
                    <div class="profile-pic">
                        <img height="200px" width="200px" src="images/profileMobile.jpg" alt="Photo of Me!"/>
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