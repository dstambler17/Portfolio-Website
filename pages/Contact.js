let Contact = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <div class="contact-title">
                    <h1 class="section-title"> Contact </h1>
                    <div style="font-size: 14px; margin-top: 5px; color: black;">
                        Leave your message here, and I will try to get back to you as soon as possible
                    </div>
                </div>
    
                <br>
                
                <div id="signup">
                    <center><div id="alert-good" class="success-alert">Thanks! I'll be in touch Shortly</div></center>
                    <center><div id="alert-err" class="error-alert"></div></center>
                    <form id="subForm" class="contact-form">
                        <input type="email" placeholder="Email" id="email" maxlength="30"/>
                        <input type="text" placeholder="Subject" id="name" maxlength="30"/>
                        <textarea placeholder="Message" id="body"></textarea>
                        <input type="submit" id="form-button" value="Send"/>
                    </form>
                    
                </div>
            </section>
        `
        return view
    },
    after_render: async () => {
        document.getElementById('home-link').style.color='#4A4A4A';
        document.getElementById('project-link').style.color='#4A4A4A';
        document.getElementById('contact-link').style.color='#3273dc';
        document.getElementById('footer-elem').style.position='absolute';
        
        function handleErrors(response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response;
        }
        
        const submitForm = (e) => {
            e.preventDefault()
            let email = document.getElementById("email")
            let subject = document.getElementById("name")
            let body = document.getElementById("body")

            const reqbody = {'email' : email.value, 'subject' : subject.value, 'body' : body.value}
            fetch('https://personal-email-site.herokuapp.com/' + 'emailSender/newEmail', {
                method: 'POST',
                body: JSON.stringify(reqbody),
                headers:{
                'Content-Type': 'application/json'
                }
            }).then(handleErrors).then(data => {
                document.getElementById('alert-err').style.display='none';
                document.getElementById('alert-good').style.display = "block";
                email.value = ''
                subject.value = ''
                body.value = ''
                setTimeout(function () {
                    document.getElementById('alert-good').style.display='none';
                }, 5000);

            }).catch(error => {
                document.getElementById('alert-good').style.display='none';
                //console.log(error.toString().toLowerCase())
                const err_msg = error.toString().toLowerCase()
                if (err_msg === 'error: bad request') {
                    document.getElementById('alert-err').innerHTML = "Please make sure to fill out all fields";
                } else if (err_msg === 'error: validation failed') {
                    document.getElementById('alert-err').innerHTML = "Invalid Email";
                } else {
                    document.getElementById('alert-err').innerHTML = "Sorry, the email server is down, please try again at another time";
                }
                document.getElementById('alert-err').style.display = "block";
                setTimeout(function () {
                    document.getElementById('alert-err').style.display='none';
                }, 5000);
            });
        }
        
        
        const sendEmail = () => {
            //console.log("Contact")
            const form = document.getElementById("subForm")
            form.addEventListener("submit", submitForm, true);
        }
        
        sendEmail()
    }
        
}

export default Contact;