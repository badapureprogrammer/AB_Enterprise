import { Carousel, Card } from "react-bootstrap";
import "../components/cssPages/Home.css";

import CarouselS1 from "../images/slide_Img1.jpg";
import CarouselS2 from "../images/slide_Img2.jpg";
import CarouselS3 from "../images/slide_Img3.jpg";
import CarouselS4 from "../images/slide_Img4.jpg";
import CarouselS5 from "../images/slide_Img5.jpg";
import CarouselS6 from "../images/slide_Img6.jpg";
// Above Import Hotel Image

import First_Review from "../images/image-1.jpg";
import Second_Review from "../images/image-2.jpg";
import Third_Review from "../images/image-3.jpg";
import Fourth_Review from "../images/image-4.jpg";
import Fifth_Review from "../images/image-5.jpg";
import Sixth_Review from "../images/image-6.jpg";
// Above Import Customer Review Image

import ceoMemeber from "../images/member1.jpg";
import copMember from "../images/member2.jpg";
import cfoMember from "../images/member3.jpg";
import cmfMember from "../images/member4.jpg";
import cloMember from "../images/member5.jpg";
import pmMember from "../images/member6.jpg";
// Above Import Managment Menber Image

const TopHotelList = [
  {
    id: 0,
    src: CarouselS1,
    title: "The Bombay Canteen, Mumbai",
    alt: "First slide",
    discription:
      "This maxim is absolutely true for the beauty and the old-world ‘Bombay-feeling’ that lies in the simple interiors of The Bombay Canteen. The behind-the-scene reality or to the secret ingredients that goes into each and every dish are the local indigenously grown vegetables. Chef Floyd Cardoz along with Chef Thomas Zacharias bring to the table bright, delicious and unselfconsciously inventive cooking that has the ability to save your soul.",
  },
  {
    id: 1,
    src: CarouselS2,
    title: "Hakassan, Mumbai",
    alt: "Second slide",
    discription:
      "It offers exquisite dining experiences with its chefs, cuisine, design and ingredients selected and sourced from around the world. Yet, China remains at the heart of it all. This combination of high-end design, modern techniques, Chinese influences and Michelin-starred cuisine is a revelation.",
  },
  {
    id: 2,
    src: CarouselS3,
    title: "Indian Accent, New Delhi",
    alt: "Third slide",
    discription:
      "Indian Accent showcases inventive Indian cuisine by complementing the flavours and traditions of the country with global ingredients and techniques. Indian Accent, showcasing old-world hospitality, is one of the few restaurants to have iteration in New York and has been featured in the World’s 50 Best Restaurants 2019.",
  },
  {
    id: 3,
    src: CarouselS4,
    title: "Artusi Ristorante, New Delhi",
    alt: "Fourth slide",
    discription:
      "If you have a taste for authentic Italian cuisine, then head to a fine dining restaurant and e-bar that serves a menu that will take you on an inspiring culinary journey. The single-minded objective of the owners and the chef, who hail from Emilia Romagna region of Northeastern Italy, is is to serve the very best of Italian food.",
  },
  {
    id: 4,
    src: CarouselS5,
    title: "Sly Granny, Bengaluru",
    alt: "Fifth slide",
    discription:
      "Sly Granny is a fresh breath of flavours, serving up European-meets-Asian cuisine. The fine dine community house will satiate both your stomach and your eyes with its eclectic but enchanting design. The Granny outlet has a tapas dining room, a lounge room and the original granny terrace; there are so many aspects to Sly Granny that it will take you a few visits to discover it all.",
  },
  {
    id: 5,
    src: CarouselS6,
    title: "Villa Maya, Kerala",
    alt: "Fifth slide",
    discription:
      " Thus, it is more an experience than a mere restaurant. In the spirit of its noble heritage it continues to exude timeless elegance through contemporary design and haute cuisine. This upscale restaurant offers a glimpse into Kerala’s unique history along with its flavorful meals.  The menu is a gastronomical journey through Kerala, India, Morocco and Italy.",
  },
];

const HotelSlider = () => {
  return (
    <div >
      <Carousel>
        {TopHotelList.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              src={image.src}
              className="d-block w-100"
              height="670"
              alt={image.alt}
            />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.discription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default HotelSlider;

const CustomerReview = [
  {
    id: 1,
    src: First_Review,
    name: "Jonathan bradrao",
    alt: "Review One",
    review:
      "It's always a pleasure to work with Will and his team. They are personable, responsive, and results-oriented!",
  },
  {
    id: 2,
    src: Second_Review,
    name: "Zerad Pawel",
    alt: "Review One",
    review:
      "Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to anyone!",
  },
  {
    id: 3,
    src: Third_Review,
    name: "Henry Mong",
    alt: "Review One",
    review:
      "Thank you for continuing to produce engaging articles, love our 150+ videos. Your content strategy works!",
  },
  {
    id: 4,
    src: Fourth_Review,
    name: "will john",
    alt: "Review One",
    review:
      "Amazing team and effective solutions that resulted in highly rated search optimization results and catchy branding... Running our tourist and visitor guide has never been so easy!",
  },
  {
    id: 5,
    src: Fifth_Review,
    name: "Christina Morillo",
    alt: "Review One",
    review:
      "Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today's market.",
  },
  {
    id: 6,
    src: Sixth_Review,
    name: "Laxmi Prajapati",
    alt: "Review One",
    review:
      "Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised",
  },
];

export const PersonReview = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {CustomerReview.map((person) => {
          return (
            <div className="col-md-4  my-3 d-flex justify-content-center" key={person.id}>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={person.src} style={{ height: "14rem" }}/>
                <Card.Body>
                  <Card.Title>{person.name}</Card.Title>
                  <Card.Text>{person.review}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TeamManagment = [
  {
    id: 0,
    src: ceoMemeber,
    name: "Pranav Digwal",
    post: "Chief Executive Officer",
  },
  {
    id: 1,
    src: copMember,
    name: "Andrea Piacquadio",
    post: "Chief Operating Officer",
  },
  {
    id: 2,
    src: cfoMember,
    name: "Joelson Melo",
    post: "Chief Technology Officer",
  },

  {
    id: 3,
    src: cmfMember,
    name: "Andrew Neel",
    post: "Chief Marketing Officer",
  },
  {
    id: 4,
    src: cloMember,
    name: "Anders Kristensen",
    post: "Chief Legal Officer",
  },
  {
    id: 5,
    src: pmMember,
    name: "Andrea Piacquadio",
    post: "Product Manager",
  },
];

export const TeamMemberContainer = () => {
  return (
    <div className="team_banner">
      <div className="container ">
        <div className="row py-5" >
          {TeamManagment.map((employee) => {
            return (
              <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                <div className="data_person">
                  <div className="first">
                    <img src={employee.src} alt="first-person" />
                    <div className="overlay overlaybottom">
                      <div className="iconlist">
                        <i className="fa-brands fa-facebook ftli"></i>
                        <i className="fa-brands fa-twitter ftli"></i>
                        <i className="fa-brands fa-linkedin-in ftli"></i>
                        <i className="fa-brands fa-instagram ftli"></i>
                      </div>
                    </div>
                  </div>
                  <div className="personname">
                    <h1 className="h_name">{employee.name}</h1>
                    <p className="h_post">{employee.post}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
