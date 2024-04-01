import Counter from "../../components/Counter/Counter";

export default function CompoundComponents() {
    const newLocal = " ";
    return (
        <div>
          <h1>Compound Component Pattern</h1>
          {/* <Counter
            iconIncrease="+"
            iconDecrease="-"
            label="My NOT so flexible counter"
            hideLabel={false}
            hideIncrease={false}
            hideDecrease={false}
            positionCount="top"
          /> */}
          <div>
            <Counter>
                <Counter.Decrease icon="◀️" />
                <Counter.Count />
                <Counter.Increase icon="▶️" />
                <Counter.Label>My super flexible Counter</Counter.Label>
            </Counter>
          </div>
          <div>
            <Counter>
                <Counter.Decrease icon="◀️" />
                <Counter.Count />
                <Counter.Increase icon="▶️" />
                <Counter.Label>My super flexible Counter</Counter.Label>
            </Counter>
          </div>
        </div>
      );
}
