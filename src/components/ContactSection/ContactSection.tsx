import Container from "../Container";
import ContactImages from '../../assets/images/contact.png'

const ContactSection = () => {
  return (
    <div id="contact" className="grid grid-cols-1 md:grid-cols-3 relative overflow-hidden bg-primary pb-20">
      <div className="flex justify-center w-full rounded item-center text-center md:col-span-1 md:col-span-2">
        <img src={ContactImages} alt="" width="100%" height="100%" />
      </div>
      <div
        id="about"
        className="flex justify-center bg-primary w-screen md:w-full pt-20"
      >
        <Container>
          <h1 className="text-6xl text-tersier mb-10">Contact</h1>
          <div className="text-xl text-secondary flex flex-col gap-10">
            <span>2301 3rd Ave, Seattle - Washington (98121)</span>
            <span>(206) 529-3700</span>
            <span>www.pixelperfect.com</span>
            <span>hello@pixelperfect.com</span>
          </div>
        </Container>
      </div>
      <div className="hidden md:block w-96 h-96 bg-tersier absolute bottom-0 right-0 rounded-xl rotate-45"></div>
    </div>
  );
};

export default ContactSection;
