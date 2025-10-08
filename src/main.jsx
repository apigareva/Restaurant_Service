import { restaurants } from './restaurants_list.js'
import { createRoot } from 'react-dom/client'

function menuRender(menu) {
  const dishesList = menu.map((dish) => 
    <div key={dish.id}>
      <li>{dish.name} - {dish.price}$</li>
    </div>
  )
  return <ul>{dishesList}</ul>
}

function reviewsRender(reviews){
  const reviewsList = reviews.map(review =>
    <div key={review.id}>
      <li>{review.user}: "{review.text}"</li>
    </div>
  )
  return <ul>{reviewsList}</ul>
}

createRoot(document.getElementById('root')).render(
    restaurants.map(restaurant => 
        <div key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <h3>Menu</h3>
          {menuRender(restaurant.menu)}
          <h3>Reviews</h3>
          {reviewsRender(restaurant.reviews)}
        </div>
    )
)
