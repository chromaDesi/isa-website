import Spline from '@splinetool/react-spline';

const NotFound = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Spline model */}
      <Spline scene="/404_3_d.spline"/>
    </div>
  );
};

export default NotFound;