import FooterComponent from "./Footer";
import HotelSlider from "./HomeDemo";
import { PersonReview } from "./HomeDemo";
import {TeamMemberContainer} from './HomeDemo';


const HomeComponent = () => {
  return (
    <div>
      <HotelSlider />
      <PersonReview />
      <TeamMemberContainer/>
      <FooterComponent />
    </div>
  );
};
export default HomeComponent;

