import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const style = {
  componentName: {},
  col: {},
  countup: {},
};

export default class Counter extends Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };
  render() {
    return (
        <div className="grid grid-cols-4 text-center gap-2 xs:grid xs:grid-cols-2 xs:gap-1 2xs:text-sm 2xs:mx-7 2xs:grid 2xs:grid-cols-2 md:px-2 pt-10 xs:pt-5 mx-8  xs:mx-5">
          <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-semibold font-mono">
              <i className="fab fa-wpforms fa-2x"></i></h1>
            <p className="text-xl lg:text-base sm:text-xs md:text-sm font-semibold font-mono py-3">
              <VisibilitySensor
                onChange={this.onVisibilityChange}
                offset={{
                  top: 10,
                }}
                delayedCall
              >
                <CountUp
                  className={style.countup}
                  decimal=","
                  start={6}
                  end={this.state.didViewCountUp ? 30000 : 0}
                  suffix=" +"
                  separator=","
                  duration={2.75}
                />
              </VisibilitySensor>
            </p>
            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base 2xs:text-base md:text-sm font-extrabold">
              Inquiries Completed</h1>
          </div>
          <div className="font-extrabold  uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-">
          <h1 className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-extrabold">
          <i className="fas fa-handshake fa-2x"></i> </h1>

            <p className="text-xl lg:text-base sm:text-xs md:text-sm font-semibold font-mono py-3">
            <VisibilitySensor
                onChange={this.onVisibilityChange}
                offset={{
                  top: 10,
                }}
                delayedCall
              >
                <CountUp
                  className={style.countup}
                  decimal=","
                  start={6}
                  end={this.state.didViewCountUp ? 30000 : 0}
                  suffix=" +"
                  separator=","
                  duration={2.75}
                />
              </VisibilitySensor>
            </p>
            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base 2xs:text-base md:text-sm font-extrabold">
               Dealings completed
            </h1>
          </div>
          <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-semibold font-mono">
          <i className="fas fa-car-mechanic fa-2x"></i></h1>
            <p className="text-xl lg:text-base sm:text-xs md:text-sm font-semibold font-mono py-3">
            <VisibilitySensor
                onChange={this.onVisibilityChange}
                offset={{
                  top: 10,
                }}
                delayedCall
              >
                <CountUp
                  className={style.countup}
                  decimal=","
                  start={6}
                  end={this.state.didViewCountUp ? 30000 : 0}
                  suffix=" +"
                  separator=","
                  duration={2.75}
                />
              </VisibilitySensor>
            </p>
            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base 2xs:text-base md:text-sm font-extrabold">
               Auto Parts Serviced !
            </h1>
          </div>
          <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <h1 className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-semibold">
          <i className="fas fa-smile fa-2x"></i> </h1>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm font-semibold font-mono py-3">
            <VisibilitySensor
                onChange={this.onVisibilityChange}
                offset={{
                  top: 10,
                }}
                delayedCall
              >
                <CountUp
                  className={style.countup}
                  decimal=","
                  start={6}
                  end={this.state.didViewCountUp ? 30000 : 0}
                  suffix=" +"
                  separator=","
                  duration={2.75}
                />
              </VisibilitySensor>
            </p>
            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base 2xs:text-base md:text-sm font-extrabold">
            Happy Customers !
            </h1>

          </div>
        </div>
    );
  }
}
