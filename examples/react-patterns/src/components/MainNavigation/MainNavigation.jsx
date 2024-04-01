import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/HOCPage"
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            HOC
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/CompoundComponents"
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            CompoundComponents
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/RenderProps"
                            className={({ isActive }) => 
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            Render-Props
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}