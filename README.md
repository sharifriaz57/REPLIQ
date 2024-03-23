# REPLIQ Simple Ecommerce with Admin (Test Project)

Check out the live demo here [https://repliq-frontend-test.netlify.app](https://repliq-frontend-test.netlify.app).

This is a simple e-commerce project with basic e-commerce workflow. This project contains 7 pages in frontend app and a basic admin panel which contains product and customer create, details and list views.

1. Home/Landing page.
2. User sign-up page.
3. User login page.
4. Product list page.
5. Product details page.
6. Cart page.
7. Checkout page.
8. Product create, list, details view. (Admin)
9. Customer create, list, details view. (Admin)

You can add, decrease and remove products to cart and check total price. The cart data is stored in localstorage. So it restores the cart after reloading the page.

## Installation

1. Install dependencies with `npm install`.
2. Run the project with `npm run dev`.

## Usage

The root url of this project contains the home page. It has a slider section, categories section and featured products section.

Clicking a category takes you to product list page. It show all thee products under the selected category.

![Category Section](https://repliq-frontend-test.netlify.app/screenshots/category.png)

![Product List Page](https://repliq-frontend-test.netlify.app/screenshots/product-list.png)

To see details of a product click over a product and it will take you to Product details page.

![Product Details Page](https://repliq-frontend-test.netlify.app/screenshots/product-details.png)

From this page you can add to cart, decrease quantity and remove this product from cart. The number of total cart products shows on the right side of header above cart icon.

![Cart Products](https://repliq-frontend-test.netlify.app/screenshots/header.png)

Go to login page by clicking on cart icon in header.
After login it will take you to home page.

To go to `Admin Panel` type `/admin` after the root url. It will navigate to dashboard page in admin panel.