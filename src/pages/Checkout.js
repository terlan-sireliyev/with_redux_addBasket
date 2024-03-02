import CheckOutDesktop from "../components/CheckOutDesktops";
import CheckOutMobil from "../components/CheckOutMobil";
const Checkout = () => {
  return (
    <>
      <div>
        <div className="max-md:hidden">
          <CheckOutDesktop />
        </div>
        <div className="mt-16 hidden  max-md:block">
          <CheckOutMobil />
        </div>
      </div>
    </>
  );
};

export default Checkout;
