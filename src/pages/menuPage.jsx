import { useParams } from "react-router";
import { Menu } from "../components/menu/menu";
import { getDishes } from "../redux/entities/dishes/getDishes";
import { useRequest } from "../redux/hooks/useRequest";
import { REQUEST_STATUS } from "../constants/requestStatus";

export const MenuPage = () => {
    const { restaurantId } = useParams();
    const dishesRequestStatus = useRequest(getDishes, restaurantId);

    const isLoading = dishesRequestStatus === REQUEST_STATUS.PENDING;
    const isError = dishesRequestStatus === REQUEST_STATUS.REJECTED;
    if (isError) return 'Error';

    return (
        <Menu restaurantId={restaurantId} isLoading={isLoading}/>
    )
}