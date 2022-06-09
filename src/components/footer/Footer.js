import React, { Component } from 'react';
import './footer.css';
import 'react-mailchimp-email-signup-form/dist/esm/index.css';
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';

export default class Footer extends Component {

  render() {
    return (

        <footer className="footer">

            <ReactMailchimpEmailSignupForm
              elementId="first-email-signup-form"
              url="https://Ezbulk.us18.list-manage.com/subscribe/post?u=7318f828a9e97ab10d05acef8&amp;id=a1262e1b0d"
              title="Get the latest news and updates about Ezbulk"
              subtitle=""
            />

            <a class="feedback-button" target="_blank" href="https://www.buymeacoffee.com/ezbulkorg">Buy me a coffee ☕</a>



        </footer>

        
        
    );
  }
}