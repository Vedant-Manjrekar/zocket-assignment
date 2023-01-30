import React from "react";
import Option from "./Option";
import phone_outl from "/call-outl.png";
import clipboard from "/clipboard.png";
import clipboard_outl from "/clip-outl.png";
import eye from "/eye.png";
import eye_outl from "/eye-outl.png";
import mans from "/mans.png";
import man from "/man.png";
import man_outl from "/man-outl.png";
import cursor from "/cursor.png";
import cursor_outl from "/cursor-outl.png";
import message from "/message.png";
import message_outl from "/message-outl.png";
import phone from "/call.png";
import store from "/store.png";
import store_outl from "/store-outl.png";
import install from "/install.png";
import install_outl from "/inst-outl.png";

function Options() {
  return (
    <div className="options">
      <Option
        head="Get Leads as calls"
        info="Reach broad audience and get leads through calls"
        icon={phone}
        clicks={true}
        icon_outl={phone_outl}
      />
      <Option
        head="Get Leads as Facebook messages"
        info="Get more FB messages from Leads"
        icon={message}
        clicks={true}
        icon_outl={message_outl}
      />
      <Option
        head="Increase page followers"
        info="Encourage customers to follow your page"
        icon={man}
        clicks={true}
        icon_outl={man_outl}
      />
      <Option
        head="Get Customer Leads"
        info="Encourage customers to take action"
        icon={mans}
        clicks={true}
        icon_outl={man_outl}
      />
      <Option
        head="Get more youtube views"
        info="Increase organic views by obtaining user attention"
        icon={eye}
        clicks={true}
        icon_outl={eye_outl}
      />
      <Option
        head="Get more website traffic"
        info="Get the right people to visit your website"
        icon={cursor}
        clicks={true}
        icon_outl={cursor_outl}
      />
      <Option
        head="Increase Live store traffic"
        info="Drive visits to local stores, restaurants & Dealerships"
        icon={store}
        clicks={true}
        icon_outl={store_outl}
      />
      <Option
        head="Increase your App installs"
        info="Get more installs, interactions for your app"
        icon={install}
        clicks={true}
        icon_outl={install_outl}
      />
      <Option
        head="Increase the catalogue sales"
        info="Drive the sales of your catalogue and get more leads"
        icon={clipboard}
        clicks={true}
        icon_outl={clipboard_outl}
      />
    </div>
  );
}

export default Options;
