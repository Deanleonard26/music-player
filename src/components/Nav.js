import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSlidersH} from '@fortawesome/free-solid-svg-icons';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
            <FontAwesomeIcon size='2x' icon={faSlidersH} />
            </button>
        </nav>
    )
}

export default Nav