import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7399956964937!2d-16.26007408443455!3d28.4572531987422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc9c0636c7e9%3A0xd83e7ebb439f0832!2sArctic%20Monkeys%20-%20Arabella!5e0!3m2!1sen!2sin!4v1588547641238!5m2!1sen!2sin"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
}

export default Location;