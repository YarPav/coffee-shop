import styled from "styled-components";
import Heading from "../../heading/heading";

const AboutEl = styled.section`
  color: #000;
  max-width: 589px;
  margin: 0 auto;
  padding: 80px 0 101px 0;
  p {
    line-height: 20.22px;
    text-align: center;
  }
  p:first-of-type {
    padding-top: 70px;
    padding-bottom: 25px;
  }
`;
const About = () => {
    return (
        <AboutEl>
            <Heading isImg={true} heading="About us"/>
            <p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
            </p>
            <p>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </p>
        </AboutEl>


    );
}

export default About;