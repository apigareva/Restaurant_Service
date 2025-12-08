import { TabLink } from "../tabLink/tabLink";

export const RestaurantTab = ({id, name}) => {
    return (
        <TabLink pathname={`${id}`} 
            title={name}
            size={500}
            />
    )
}