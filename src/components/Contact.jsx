export default function Contact() {
    return (
        <div className="font-inter">
            <h2 className="text-4xl font-bold mb-8 mt-24 text-secondary text-center">CONTACT ME</h2>
  
            <p className="font-medium text-grey-text mb-8 text-center">
    Feel free to reach out! I’m happy to chat about projects, collaborations, or opportunities.
  </p>
      <section
        id="contact"
        className="w-full py-6 px-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg max-w-3xl mx-auto">
        
  
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for reaching out! I'll get back to you soon.");
          }}
          className="flex flex-col gap-6"
        >
          <label className="flex flex-col text-grey-text font-semibold">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-1 p-3 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-picton-blue focus:border-picton-blue text-black"
              placeholder="Your full name"
            />
          </label>
  
          <label className="flex flex-col text-grey-text font-semibold">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-1 p-3 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-picton-blue focus:border-picton-blue]  text-black"
              placeholder="your.email@example.com"
            />
          </label>
  
          <label className="flex flex-col text-grey-text font-semibold">
            Message
            <textarea
              name="message"
              rows="5"
              required
              className="mt-1 p-3 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-picton-blue focus:border-picton-blue]  text-black"
              placeholder="Write your message here..."
            />
          </label>
  
          <button
            type="submit"
            className="self-center px-8 py-3 bg-picton-blue text-white rounded-md font-semibold hover:bg-picton-blue/90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
      </div>
    );
  }
  