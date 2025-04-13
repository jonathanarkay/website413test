import { useEffect, useState } from 'react';
import { Compass } from 'lucide-react';

function App() {
  const testimonials = [
    {
      user: 'u/hasfinaldraftopen',
      quote: 'bro turned in his script 2 days late and it made me cry. like wtf. actual wizardry.',
      upvotes: '⬆️ 2.1k upvotes'
    },
    {
      user: 'u/theatrekid_forever',
      quote: 'he wrote a monologue so good i had to delete my own script out of shame lmao.',
      upvotes: '⬆️ 1.7k upvotes'
    },
    {
      user: 'u/actualgremlin',
      quote: 'he had a talking toilet in a play once. i still think about it. sometimes i hear it whispering.',
      upvotes: '⬆️ 3.9k upvotes'
    }
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-[#f6e5c3] text-[#4e3b2a] font-serif">
      <header className="text-center py-16 relative">
        <h1 className="text-5xl font-bold text-[#6b2e2e]">Jonathan Arkay</h1>
        <p className="italic mt-2 text-xl">Writer. Smart yet stupid.</p>
        <p className="mt-4 text-lg italic">A Pointless Metaphor: My Creative Compass</p>
        <Compass className="absolute top-4 right-4 h-8 w-8 text-[#b78b4a] animate-spin-slow" />
      </header>

      <section className="max-w-3xl mx-auto px-6 py-10 text-lg">
        <p className="mb-4">The stuff I’m most scared to say is usually what people need to hear. I write for the stage, screen, and small glowing rectangles—trying to make sense of chaos with rhythm and honesty.</p>
        <p>I’m not here to sell you perfect. I’m here to show you something real. My compass points toward truth, specificity, and collaboration.</p>
      </section>

      <section className="bg-gray-100 py-10 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto max-w-xl">
          <p className="text-[#ff4500] font-bold">{testimonials[index].user}</p>
          <p className="my-4 italic">"{testimonials[index].quote}"</p>
          <p className="text-gray-500">{testimonials[index].upvotes}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 text-lg">
        <h2 className="text-3xl text-[#6b2e2e] mb-4">Contact</h2>
        <p>want to hire me? want to collaborate? want me to ask how your day went? hmu!</p>
        <a href="mailto:jonathanarkay@gmail.com">
          <button title="I'll reply fast. Unless I'm writing. Then I'll reply emotionally."
            className="mt-4 bg-[#b78b4a] text-white py-2 px-4 rounded hover:bg-[#a67530]">
            Send a Message
          </button>
        </a>
        <div className="mt-6 text-sm">
          <p>Follow me:</p>
          <a className="text-[#6b2e2e] underline" href="https://twitter.com/jonathanarkay" target="_blank">@jonathanarkay</a>
          <span className="mx-2">|</span>
          <a className="text-[#6b2e2e] underline" href="https://instagram.com/jonathanarkay" target="_blank">@jonathanarkay</a>
          <span className="mx-2">|</span>
          <a className="text-[#6b2e2e] underline" href="https://linkedin.com/in/jonathanarkay" target="_blank">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default App;