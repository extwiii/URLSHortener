# URL Shortener Microservice
### User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. When I visit that shortened URL, it will redirect me to my original link.

## Example usage:

```url
https://extwiii-urlshortener.herokuapp.com/new/https://www.google.com
https://extwiii-urlshortener.herokuapp.com/new/https://www.twitter.com
```

## Example output:

```json
{"originalUrl":"http://www.google.com","shortUrl":"https://extwiii-urlshortener.herokuapp.com/685"}
{"originalUrl":"http://www.twitter.com","shortUrl":"https://extwiii-urlshortener.herokuapp.com/985"}
```

## Usage:

```url
https://extwiii-urlshortener.herokuapp.com/985
```

## Will redirect to:

```url
https://twitter.com/
```

## Tools / Techniques
- Node.js
- Express.js
- MongoDB
- Mongoose
- valid-url

Difficulty :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon::new_moon::new_moon:

### Created By Bilal Cagiran | [E-Mail](mailto:bcagiran@hotmail.com) | [Github](https://github.com/extwiii/) | [LinkedIn](https://linkedin.com/in/bilalcagiran) | [CodePen](http://codepen.io/extwiii/) | [Blog/Site](http://bilalcagiran.com) | [FreeCodeCamp](https://www.freecodecamp.com/extwiii) 


