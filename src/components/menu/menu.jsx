import { Dish } from "../dish/dish"

export const Menu = ({menu}) => {
    return (
        <div>
            <h3>Menu</h3>
            {menu?.map((dish) => (
                <Dish dish={dish}/>
            ))}
        </div>
    );
}