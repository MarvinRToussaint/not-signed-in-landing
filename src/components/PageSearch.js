import { useState } from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";


function PageSearch() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('The name you entered was: ${name}');
  }

    return (
        <form onSubmit={handleSubmit}>
            <label>Home is not a place <br />
                It's a Feeling.
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    );
};

export default PageSearch;
ReactDOM.render(<PageSearch />, document.getElementById('root'));

// const PageSearch = styled.div``;