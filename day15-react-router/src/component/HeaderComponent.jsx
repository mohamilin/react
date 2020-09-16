import React from 'react';
import {Link} from 'react-router-dom';

function HeaderComponent() {
    return (
        <div>
            <h1>React-Router</h1>
            <nav>
                <ul>
                    <li>
                        <button>
                            <Link to='/home'>Home</Link>
                        </button>
                    </li>
                    <li>
                    <button>
                            <Link to='/about'>About</Link>
                        </button>
                    </li>
                    <li>
                    <button>
                            <Link to='/contact'>Contact</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderComponent
