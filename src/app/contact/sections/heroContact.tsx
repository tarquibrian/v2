import DribbbleIcon from "@/app/components/icons/dribbble";
import GithubIcon from "@/app/components/icons/github";
import InstagramIcon from "@/app/components/icons/instagram";
import LinkedinIcon from "@/app/components/icons/linkedin";
import Wrapper from "@/utils/wrapper";
import React from "react";

const HeroContact = () => {
  return (
    <Wrapper id="herocontact">
      <div className="herocontact__section">
        <div className="herocontact__section-title">
          <div className="title__content">
            <div className="title-sm">CONTACT</div>
            <h3 className="title-header">Creating true brands together.</h3>
          </div>
          <div className="title__socials">
            <span>tarquibrian@gmail.com</span>
            <div className="socials__content">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <DribbbleIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="herocontact__section-form">
          <div className="form__content">
            <div className="form__row">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form__row">
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="form__row">
              <textarea name="desc" id="desc" placeholder="Message"></textarea>
            </div>
            <div className="form__row">
              <span>SUBMIT</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroContact;
