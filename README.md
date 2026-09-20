# POS Dynamic Search & Billing Interface

A high-performance, offline-capable Point of Sale (POS) search interface designed for rapid pharmacy billing. This module features a tokenized, multi-field search engine capable of parsing thousands of products instantly without UI blocking.

## Key Features

*   **Omnibox Multi-Field Search:** Single input field queries across Product Name, Barcode, Category, Generic (Sub-Category), and Manufacturer (Minor Category).
*   **Tokenized AND Logic:** Splits user input into discrete tokens. Order does not matter (e.g., `beximco napa` yields the same results as `napa beximco`).
*   **O(n) Denormalized Querying:** Pre-computes search strings on initialization to reduce time complexity during active typing.
*   **Keyboard-First Navigation:** Full support for `ArrowUp`, `ArrowDown`, and `Enter` to navigate results and add to the invoice without a mouse.
*   **Barcode Scanner Ready:** Exact barcode matches can be instantly added using scanner input mapping.
*   **Toggleable UI States:** Hotkey (`Alt + C`) support for rapidly toggling sensitive data (Cost Price) visibility.

## Usage

1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Type keywords into the search bar (e.g., `tablet square paracetamol`).
4. Use arrow keys to navigate the dropdown and hit `Enter` to add the item to the cart.
5. Press `Alt + C` to toggle cost price visibility.

## Tech Stack
*   **Frontend:** HTML5, Vanilla JavaScript (ES6+).
*   **Styling:** Tailwind CSS (via CDN for demonstration).