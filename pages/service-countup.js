import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const style = {
  componentName: {},
  col: {},
  countup: {},
};

export default function Counter() {
  const [didViewCountUp, setdidViewCountUp] = useState(false);

  function onVisibilityChange(isVisible) {
    if (isVisible) {
      setdidViewCountUp(true);
    }
  }
  return (
    <div>
      <div className="grid grid-cols-4 text-center gap-2 xs:grid xs:grid-cols-2 xs:gap-1 2xs:text-sm 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 md:px-2 pt-10 xs:pt-5 mx-8 2xs:mx-5 s:mx-4 xs:mx-5">
        <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-blue-800 lg:text-base  font-semibold font-mono">
            <i className="fab fa-wpforms fa-2x"></i>
          </h1>
          <p className="text-xl lg:text-base sm:text-xs xs:text-xs s:text-xs md:text-sm font-semibold font-mono py-3">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp
                className={style.countup}
                decimal=","
                start={6}
                end={didViewCountUp ? 10000 : 0}
                suffix=" +"
                separator=","
                duration={2.75}
              />
            </VisibilitySensor>
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            Inquiries Received
          </h1>
        </div>
        <div className="font-extrabold  uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-">
          <h1 className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-extrabold">
            <i className="fas fa-handshake fa-2x"></i>{" "}
          </h1>

          <p className="text-xl lg:text-base sm:text-xs xs:text-xs s:text-xs md:text-sm font-semibold font-mono py-3">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp
                className={style.countup}
                decimal=","
                start={6}
                end={didViewCountUp ? 7536 : 0}
                separator=","
                duration={2.75}
              />
            </VisibilitySensor>
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            Dealings completed
          </h1>
        </div>
        <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-blue-800 lg:text-base  font-semibold font-mono">
            <i className="fas fa-car-mechanic fa-2x"></i>
          </h1>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm xs:text-xs s:text-xs font-semibold font-mono py-3">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp
                className={style.countup}
                decimal=","
                start={6}
                end={didViewCountUp ? 50000 : 0}
                suffix=" +"
                separator=","
                duration={2.75}
              />
            </VisibilitySensor>
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            Auto Parts Serviced !
          </h1>
        </div>
        <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-blue-800 lg:text-base font-semibold">
            <i className="fas fa-smile fa-2x"></i>{" "}
          </h1>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm xs:text-xs s:text-xs font-semibold font-mono py-3">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp
                className={style.countup}
                decimal=","
                start={6}
                end={didViewCountUp ? 7536 : 0}
                separator=","
                duration={2.75}
              />
            </VisibilitySensor>
          </p>
          <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
            Happy Customers !
          </h1>
        </div>
      </div>
    </div>
  );
}
