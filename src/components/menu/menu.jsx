import { DishListItem } from "../dishListItem/dishListItem"

export const Menu = ({menu}) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu?.map((dish) => (
                    <DishListItem key={dish.id} dish={dish}/>
                ))}
            </ul>
        </div>
    );
}