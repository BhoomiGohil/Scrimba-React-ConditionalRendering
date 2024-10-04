import Joke from "./Joke"; // Importing the Joke component

export default function MainContent() {
  return (
    <div className="container">
      {/* Rendering multiple Joke components with different 'setup' and 'punchline' props. 
      
      If we are commenting some property then If with Logical && Operator handle them perfectly 
      
      and do not leave blank space on screen */}

      <Joke
        // setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />

      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />

      <Joke
        setup="Why don't pirates travel on mountain roads?"
        // punchline="Scurvy."
      />

      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />

      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>
  );
}
