## Single price grid component

#### User flow
- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

#### Screenshot
![Mobile preview](./designs/mobileView.JPG)


#### Links
- [Github Pages live](https:/candybuy.github.io/single-price-grid-component/)
- [Frontend Mentor solution](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc)

#### Run project
```
# Just a local development server
```

#### Built with
- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow



```css
.card:nth-of-type(1) {
    flex-basis: 100%;
}

.card:nth-of-type(2),
.card:nth-of-type(3) {
    flex: 1 1 15rem;
}
```

#### Continued development
I would like to give a try again and implement CSS Grid Layout instead of Flexbox. 

#### Useful resources
- [CSS tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). CSS tricks allways is an incredible resource for Flexbox or Grid. The graphics illustrate perfectly how you can apply the different flexbox properties.
