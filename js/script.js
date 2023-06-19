var typed = new Typed('.auto-type', {
    strings: ["Ethical Hacker","Programmer","Web Developer","Data Analyst"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutcontent = document.querySelector('#about-content');
const contactcontent = document.querySelector('#contact-content');
const projects = document.querySelector('#project');
const projectscontent = document.querySelector('#projects');

about.addEventListener('click', () => {
    const aboutbox = new WinBox({
        title: 'shabari@s0urc3c0d3:~/about-me$:',
        width: '400px',
        height: '400px',
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        mount: aboutcontent,
        onfocus: function () {
            this.setBackground('#034f03')
        },
        onblur: function () {
            this.setBackground('#000')
        }
    })
})

contact.addEventListener('click', () => {
    const contactbox = new WinBox({
        title: 'shabari@s0urc3c0d3:~/contact-me$:',
        width: '400px',
        height: '400px',
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        mount: contactcontent,
        onfocus: function () {
            this.setBackground('#034f03')
        },
        onblur: function () {
            this.setBackground('#000')
        }
    })
})

projects.addEventListener('click', () => {
    const projectsbox = new WinBox({
        title: 'shabari@s0urc3c0d3:~/projects$:',
        width: '400px',
        height: '400px',
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        mount: projectscontent,
        onfocus: function () {
            this.setBackground('#034f03')
        },
        onblur: function () {
            this.setBackground('#000')
        }
    })
})
