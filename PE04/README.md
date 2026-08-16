# Input

The app takes a user image from the assets folder and an array of six profile
objects. Each object holds a name, an occupation, a description, and a
showThumbnail flag. Presses on a card are the only runtime input.

# Process

Part 1 styles the Text elements using Section 4.3 techniques - color, font
weight, font size, and a bordered View that draws the rule under the
occupation. Part 2 extracts ProfileCard into its own component and validates
its props with PropTypes. App holds the state. When a card is pressed, the
update function from immutability-helper flips that one showThumbnail value
without mutating the rest. The container uses flexDirection row and flexWrap
wrap to lay the cards out in a grid.

# Output

Part 1 renders one finished Profile Card. Part 2 renders six cards at half
scale, and any card pressed grows to full size while the others stay small.