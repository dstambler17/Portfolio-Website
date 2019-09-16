let Project = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1 class="section-title project-section-title">Projects</h1>
                
                <div class="project-center">
                <div class="project-list">
                    <div class="project-item">
                        <div class="project-image">
                            Image here
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Parsy.io</h2>
                            <p><a href="https://parsy.io">https://parsy.io</a></p>
                            <p>Parsy.io is my website</p>
                        </div>
                    </div>

                    <div class="project-item">
                        <div class="project-image">
                            Image here
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Twitter Movie Bot</h2>
                            <p><a href="https://parsy.io">Movie Bot</a></p>
                            <p>This is my movie bot</p>
                        </div>
                    </div>


                    <div class="project-item">
                        <div class="project-image">
                            Image here
                        </div>
                        <div class="project-body">
                            <h2 class="project-title">Danban</h2>
                            <p><a href="https://parsy.io">Movie Bot</a></p>
                            <p>This is my movie bot</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Project;