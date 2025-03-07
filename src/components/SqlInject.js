import React from 'react';

function Sql({ handlePageChange }) {
    const goToHome = () => {
        handlePageChange('Home');
      };
    return (
        <section>
<h1>Hello</h1>



<button className="btn btn-secondary"Style="margin-bottom:5rem;" onClick={() => handlePageChange(goToHome)}>
Back to Home
</button>
</section>
    );
}
export default Sql;

