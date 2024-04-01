import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

function useCounterContext() {
    const context = useContext(CounterContext)
    if(!context) {
        throw new Error('Your component Should be Wrapped inside Counter class')
    }
    return context
}

function CounterLabel({children}) {
    return (<span> {children} </span>)
}
CounterLabel.propTypes = {
    children: PropTypes.element
}

function Increase({icon}) {
    const {increase} = useCounterContext(CounterContext)
    return (<button onClick={increase}>{icon}</button>)
}
Increase.propTypes = {
    icon: PropTypes.string
}

function Decrease({icon}) {
    const {decrease} = useCounterContext(CounterContext)
    return (<button onClick={decrease}>{icon}</button>)
}

Decrease.propTypes = {
    icon: PropTypes.string
}

function Count() {
    const {count} = useCounterContext(CounterContext)
    return (
        <span>{count}</span>
    )
}



function Counter({children}) {
    const [count, setCount] = useState(0)
    const increase = () => setCount((c) => c + 1)
    const decrease = () => setCount((c) => c - 1)

    const valueContext = {
        increase,
        decrease,
        count
    }

    return <CounterContext.Provider value={valueContext}>
        <span>{children}</span>
    </CounterContext.Provider>;
}
const CounterContext = createContext()
export default Counter;
Counter.propTypes = {
    children: PropTypes.element
}

Counter.Label = CounterLabel
Counter.Increase = Increase
Counter.Decrease = Decrease
Counter.Count = Count



