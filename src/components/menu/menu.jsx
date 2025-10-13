import { DishListItem } from "../dishListItem/dishListItem"

export const Menu = ({menu}) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu?.map((dish) => (
                    <DishListItem dish={dish}/>
                ))}
            </ul>
        </div>
    );
}