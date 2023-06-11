import "C:/Users/DELL/OneDrive/Desktop/WebDev/React/my-app/src/App.css";
import "../App.css";

const About = () => {

    return (
        <div className="container my-5">
            <div className="container">
                <h2 className="my-heading"><strong>About Us</strong></h2>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Who I Am?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>I Am A Text Utility Website. </strong>
                            I am running on React, i am very fast, i am very Cute I am very Itelligent as you can see my skills above! btw if you don't trust me and my skills go check me out and feel free to abuse my developer <code>let Developer = "Abhijit Mandal"</code> because i'm not gonna say you sorry if anything wrong happens FY.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What I Do?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>I can play with text and do operation on them! </strong>As you can see above i can do numerous things like:
                            converting text into uppercase letters as well as lowercase too, i can also read the text written by you there inside the text area prompt and finally like thanos i also love to swipe all the bs things you've written inside the prompt in one go when you click clear.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Who Developed Me?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Abhijit No Brainer has developed me for no reason!</strong> he has his own hidden talents to create this kind of bull shit websites for himself only, until someone else come and insult his own website in front of him till then he thinks he created a piece of perfection but poor guy don't know that he just created a piece of shit using his own negligible talent ofcourse.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About