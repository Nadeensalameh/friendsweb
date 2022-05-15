import { OpenMode } from 'fs';
import './Navbar.css';

export function Navbar(props:
    {
        navItemsArr: { displayStr: string, hrefStr: string }[]
    }) {
    return (

        <div className='navbar'>

            <div className='rightSide'>
                <ul>
                    {props.navItemsArr.map((curr, i) => (

                        <li key={i}>
                            <a href={curr.hrefStr}>
                                {curr.displayStr}
                            </a>
                        </li>

                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Navbar
