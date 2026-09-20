# Developer Specification: POS Search Engine & UI

This document outlines the technical architecture of the POS search module. The primary engineering constraint for this module is **speed**. The search must execute in under 300ms against datasets exceeding 50,000 rows, avoiding main-thread blocking during active keystrokes.

## 1. Core Architecture

To achieve high-speed filtering without Web Workers, the system utilizes an **Initialization Denormalization Strategy**. Instead of iterating over multiple object keys during every keystroke, the data is flattened once upon load.

### Initialization Flow (Denormalization)
When the product payload is received, a single `O(n)` loop runs to concatenate all searchable fields into a hidden `searchString` property.

```javascript
// Time Complexity: O(n) - Executed exactly once on load
mockProducts.forEach(product => {
    product.searchString = `${product.barcode} ${product.name} ${product.category} ${product.subCategory} ${product.minorCategory}`.toLowerCase();
});
Search Execution Flow
Debounce: Input is wrapped in a 150ms setTimeout to prevent thrashing.

Tokenization: Query string is split by regex /\s+/ into an array of lowercase tokens.

Filtering (AND Logic): Array .every() is used against the .includes() of the pre-computed searchString.

Heuristic Ranking: Results are sorted. Exact prefix matches on the primary name index are bubbled to the top [index 0].

Truncation: The DOM payload is capped at 30 nodes to prevent rendering lag.

2. System Flow Diagram
Code snippet
flowchart TD
    A[Raw Product Data JSON] --> B[Initialization Loop]
    B --> C[{Generate searchString}]
    C --> D[In-Memory Denormalized Array]
    
    E[User/Scanner Input] --> F[Debounce 150ms]
    F --> G{Is Input 1 Token & Numeric?}
    G -- Yes --> H[Check Barcode Exact Match]
    H -- Match Found --> I[Bypass Search: Add to Invoice]
    
    G -- No --> J[Tokenize Input Split by Spaces]
    J --> K[Filter: Array.every token in searchString]
    K --> L[Sort: Prefix Match Bubbling]
    L --> M[Slice Top 30 Results]
    M --> N[Render DOM Dropdown]
3. UI State Management (Cost Toggle)
The "Hide Cost" functionality operates via CSS class injection at the <body> root, rather than conditional DOM rendering. This allows immediate, repaint-only state changes without interfering with the search logic or requiring a re-render of the 30-item dropdown list.

Trigger: Checkbox change event OR keydown intercept (Alt + C).

Action: Toggles the .hide-cost class on document.body.

CSS Rule:

CSS
.hide-cost .cost-display { display: none !important; }
4. Keyboard Navigation Matrix
The currentFocus state variable tracks the integer index of the actively highlighted DOM node in the dropdown.

ArrowDown: currentFocus++ (wraps to 0 if at end). Injects active Tailwind utility classes to node, scrolls node into view.

ArrowUp: currentFocus-- (wraps to end if at 0).

Enter: Executes .click() method on the DOM node corresponding to currentFocus, triggering the addToInvoice routine and resetting the search state.