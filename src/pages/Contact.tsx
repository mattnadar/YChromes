import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Contact the YChromes</h1>

      {/* Booking button */}
      <div className="Booking">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSee5gZBdboSvutqAACvTjXSTKdadnLVMCZOewqH_hw9QcW_Bw/viewform" 
          target="_blank" 
          rel="noopener noreferrer"
          className="Booking-btn"
        >
          Book Us!
        </a>
      </div>

      {/* Contact form */}
      <div className="Contact-card">
        <h2>Send Us a Message</h2>
        <form 
          action="mailto:thechromes@gmail.com?subject=Message%20from%20YChromes%20Website" 
          method="POST" 
          encType="text/plain"
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required></textarea>
          </div>

          <button type="submit" className="Send-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}
