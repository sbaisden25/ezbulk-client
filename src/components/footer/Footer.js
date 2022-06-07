import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

  render() {
    return (

        <footer className="footer">

            <a class="feedback-button" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf6hY-gmnjw29oxaBhc5S19n6j8AYUWo1AAIop0U_RNcaNfSw/viewform?usp=sf_link">Give Feedback 💜</a>
            
            <a class="feedback-button" target="_blank" href="https://www.buymeacoffee.com/ezbulkorg">Buy me a coffee ☕</a>

        </footer>

        
        
    );
  }
}