import CheckOutDesktop from "./CheckOut.jDesktops";
import CheckOutMobil from "./CheckOutMobil";
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
