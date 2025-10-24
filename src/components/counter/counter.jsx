import { Button } from '../button/button';

export const Counter = ({value, increment, decrement}) => {   
    return (
        <div>
            <Button title={'-'} onClick={decrement}/>
            {value}
            <Button title={'+'} onClick={increment}/>
        </div>
    )
}