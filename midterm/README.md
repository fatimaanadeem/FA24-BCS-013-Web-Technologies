# Web Technologies (CSC336) - Lab Mid Term

- **Name:** Fatima Nadeem
- **Roll number / Reg. No.:** FA24-BCS-013
- **N** = 13 (last two digits of roll number)
- **BP** = 600 + 13 = **613px**
- **H** = (13 x 7) mod 360 = **91** -> accent colour `hsl(91, 70%, 45%)`
- **K** = (13 mod 3) + 3 = **4** categories (Tops, Bottoms, Outerwear, Accessories)
- Sticky offset = (13 mod 40) + 70 = **83px**
- Premium limit = 13 x 100 = **Rs. 1300**

## Files changed
- `index.html` - category filter markup, `data-category` on cards, search box, sort button, "No products found" message, script link
- `product.html` - new CSS Grid layout markup (image, details, description) and longer description
- `styles.css` - filter styles, product page grid, sticky box, Task 3 styles
- `script.js` - new file (Task 3)
- `README.md` - new file

## Task 1 - CSS-only category filter
I added 5 radio buttons (All, Tops, Bottoms, Outerwear, Accessories) above the product grid, with "All" checked on load, and gave every product card a `data-category`. In `styles.css`, rules such as `#tops:checked ~ #productGrid .product-item:not([data-category="tops"])` set `display: none`, so non-matching cards leave the layout and leave no gaps. The checked label is coloured with the accent `hsl(91, 70%, 45%)`. No JavaScript is used.

## Task 2 - Product page layout with sticky details box
I rebuilt `product.html` with a `.product-layout` grid using `grid-template-areas`. Below 613px the areas are `"image"`, `"details"`, `"description"` in one column. From 613px up they become `"image details"` and `"description description"`. Inside that media query the details box has `position: sticky; top: 83px`, and the image has a tall `aspect-ratio` plus a longer description so the effect can be seen when scrolling.

## Task 3 - JavaScript live search and price sort
`script.js` hides cards whose product name does not contain the typed text (case-insensitive) and also checks the selected category so both filters work together. If no card matches, the grid is hidden and "No products found" is shown. The "Sort by price" button reads each price from the card, sorts, and moves the existing cards with `appendChild`, alternating low-to-high and high-to-low. On page load, cards priced above Rs. 1300 get a "Premium" label added by the script.

## AI tools used
- Claude (Anthropic)
- Chatgpt
