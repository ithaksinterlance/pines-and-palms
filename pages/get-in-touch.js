import React from "react";
import { google } from "googleapis";

class GetInTouch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [
        {
          make: "Required",
          model: "Required",
          whatsappno: "Required",
          email: "Required",
          partname: "Required",
        },
      ],
      make: "",
      model: "",
      email: "",
      whatsappno: "",
      partname: "",
    };

    this.handleMakeChange = this.handleMakeChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleWhatsAppNoChange = this.handleWhatsAppNoChange.bind(this);
    this.handlePartChange = this.handlePartChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMakeChange = (event) => {
    this.setState({
      make: event.target.value,
    });
  };
  handleModelChange = (event) => {
    this.setState({
      model: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleWhatsAppNoChange = (event) => {
    this.setState({
      whatsappno: event.target.value,
    });
  };
  handlePartChange = (event) => {
    this.setState({
      partname: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    var email = this.state.email;
    var make = this.state.make;
    var model = this.state.model;
    var partname = this.state.partname;
    var whatsappno = this.state.whatsappno;
    const sheets = google.sheets({ version: "v4", auth: jwt });

    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_BLOG_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_BLOG_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes,
      null
    );
    const res = sheets.spreadsheets.values.append({
      spreadsheetId: "1BQT2sWIihK1Us4NuSSci0Gj31yEaKrVGxdD5-Hs3_Bo",
      range: "asp-haksit",
      valueInputOption: "USER_ENTERED",
      auth: jwt,
      requestBody: {
        values: [
          [
            dateTime,
            whatsappno,
            email,
            make,
            model,
            undefined,
            undefined,
            partname,
            undefined,
            undefined
          ],
        ],
      },
    });

    let message =
      "Email: " +
      email +
      "\n" +
      "Make: " +
      make +
      "\n" +
      "Model:" +
      model +
      "\n" +
      "Part Name :" +
      partname;
    alert("Form submitted. We will contact you shortly ;)");
    let messageURI = encodeURI(message);
    var aTag = document.createElement("a");
    aTag.setAttribute(
      "href",
      `https://api.whatsapp.com/send?phone=+971551478994&text=${messageURI}`
    );
    window.open(aTag, "_blank").focus();

    console.log(res);
  };

  render() {
    return (
      <div>
        <iframe
          title="Auto spare parts in uae"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>
        <form
          onSubmit={this.handleSubmit}
          className="mx-6"
          method="POST"
          action="https://docs.google.com/forms/d/e/1FAIpQLSeIJu3dIAVWI2YjuO2bv31unQiJf4frrpb3IyVObr_05fmxoA/formResponse"
          target="hidden_iframe"
        >
          <label
            htmlFor="make"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
          >
            Make
          </label>
          <input
            id="make"
            name="entry.741646505"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
            type="text"
            ref={this.make}
            onChange={this.handleMakeChange}
            onBlur={this.handleBlur}
            value={this.state.make}
            required
          />
          {this.state.errors.make ? <div>{this.state.errors.make}</div> : null}

          <label
            htmlFor="model"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
          >
            Model
          </label>
          <input
            id="model"
            name="entry.44547744"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
            type="text"
            onChange={this.handleModelChange}
            onBlur={this.handleBlur}
            value={this.state.model}
            required
          />
          {this.state.errors.model ? (
            <div>{this.state.errors.model}</div>
          ) : null}

          <label
            htmlFor="whatsappno"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
          >
            WhatsApp no
          </label>
          <input
            id="whatsappno"
            name="entry.902626710"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
            type="text"
            onChange={this.handleWhatsAppNoChange}
            onBlur={this.handleBlur}
            value={this.state.whatsappno}
            required
          />
          {this.state.errors.whatsappno ? (
            <div>{this.state.errors.whatsappno}</div>
          ) : null}

          <label
            htmlFor="email"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
          >
            Email Address
          </label>
          <input
            id="email"
            name="entry.113755516"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
            type="email"
            onChange={this.handleEmailChange}
            onBlur={this.handleBlur}
            value={this.state.email}
            required
          />
          {this.state.errors.email ? <div>{formik.errors.email}</div> : null}

          <label
            htmlFor="partname"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
          >
            Part Name
          </label>
          <input
            id="partname"
            name="entry.1660104041"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
            type="text"
            onChange={this.handlePartChange}
            onBlur={this.handleBlur}
            value={this.state.partname}
            required
          />
          {this.state.errors.partname ? (
            <div>{this.state.errors.partname}</div>
          ) : null}

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default GetInTouch;
