let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> 404 Error, please enter a valid url </h1>
            </section>
        `
        return view
    }
    , after_render: async () => {
        document.getElementById('home-link').style.color='#4A4A4A';
        document.getElementById('project-link').style.color='#4A4A4A';
        document.getElementById('contact-link').style.color='#4A4A4A';
        document.getElementById('footer-elem').style.position='absolute';
    }
}
export default Error404;