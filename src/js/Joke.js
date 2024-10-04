export default function Joke(props) {
  return (
    <div>
      {/* If 'props.setup' is true, render the <h3> element with the joke setup. 
          The expression 'true && expression' will evaluate to the expression, 
          whereas 'false && expression' will evaluate to false, thus skipping the element. */}
      {props.setup && <h3>Setup: {props.setup}</h3>}

      {/* Similarly, if 'props.punchline' is true, render the <p> element with the punchline. */}
      {props.punchline && <p>Punchline: {props.punchline}</p>}
    </div>
  );
}
