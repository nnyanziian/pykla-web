$(function () {

    var pykla = new App();
    pykla.init();
});

function App() {
    var thisApp = this;
    this.init = function () {
        console.log("We see you like to see whats under the hood: go to http://www.meetup.com/pykla to learn more about the community");
        thisApp.clAOS();
    }
    this.clAOS = function () {
        AOS.init({
            offset: 150,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
            once: false,
            disable: 'mobile'
        });
    }
}