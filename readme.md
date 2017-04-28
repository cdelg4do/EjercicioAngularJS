# WHATAPOP, a simple Angular front end

This is a small example of a front end for an online shop where users publish advertisements to buy/sell articles, made in Angular 1.5.7. To test the application it uses lite-server as web server and SparREST to provide support for API Rest requests.

The project consists in a Single Page Application (SPA) with two main views: one to perform searchs and show an article list, and other to show the detail of an specific article.

.
### Search and list results page:

This is the application default view, and it can be accessed through the endpoint **/products**. This page has a search bar with the following elements:

* **Category selector**: a drop-down list where the user can choose a specific category to search by. The default option is "todas", which allows the search to be extended to all existing categories.
* **Search box**: a text box where the user can enter the key words for his search.
* **Search button**: to launch the search request, it only becomes enabled when the user enters three or more characters in the search box.

The text search is performed by searching matches in the name or description of the products, regardless the capital letters or the HTML tags in the description.

In case the search finds some match, a list of products with the following data is shown:
* First small-size image of the product (in case there is more than one).
* Product name
* Product price (in euros)
* Product owner
* Product category

.
### Product detail page:
This page is accessed by clicking on a product in the result list, or through the endpoint **/product/<PROD_ID>** where <PROD_ID> is the id of the product to show.

If the request to get the product data fails, or the entered product does not exist, a warning message is shown to the user before redirecting him to the search page.

In case the product data are successfully retrieved, the following data are shown on screen:
* First big-sized image of the product (in case there is more than one)
* Product name
* Product price (in euros)
* Publication date and product owner
* Product status: En venta (for sale), or vendido (sold)
* Product category
* Product description (including HTML tags, if any)

It is possible to go back to the search page from here at any moment, by clicking the "Back" button of the browser or by clicking on the page header.

.
### Screenshots:

<kbd>
	<img alt="screenshot 1" src="https://cloud.githubusercontent.com/assets/18370149/25541293/68c64366-2c4e-11e7-9415-14eb636b1ee5.jpg">
</kbd>
<br>
<kbd>
	<img alt="screenshot 2" src="https://cloud.githubusercontent.com/assets/18370149/25541299/6cbea26a-2c4e-11e7-84c0-3c42aecb1615.jpg">
</kbd>
<br>
<kbd>
	<img alt="screenshot 3" src="https://cloud.githubusercontent.com/assets/18370149/25541304/70980228-2c4e-11e7-8e28-5898a5f4f670.jpg">
</kbd>
