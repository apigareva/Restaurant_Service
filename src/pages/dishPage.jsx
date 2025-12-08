import { useParams } from "react-router"
import { DishContainer } from "../components/dishContainer/dishContainer"
import { useGetDishByIdQuery } from "../redux/services/api";
import { Preloader } from "../components/preloader/preloader";

export const DishPage = () => {
    const { dishId } = useParams();
    const {data, isLoading, isError} = useGetDishByIdQuery(dishId);

    if (isError) return null;
    if (isLoading) return <Preloader />

    return <DishContainer dishId={dishId} />
}