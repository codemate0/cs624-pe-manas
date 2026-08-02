# Input

My app takes a task from the text box when the user taps Submit. Each todo has a Done button to mark it complete and a Delete button to remove it. The All, Active, and Complete tabs let the user pick which todos to show.

# Process

I keep the todos array and the current filter type in the App component's state. Submit builds a new todo and adds it to the array with a fresh index. Done flips that todo's complete flag, and Delete filters it out by its index. TabBar calls setType to change the filter, and TodoList uses getVisibleTodos to return all, only active, or only complete todos. App passes this data and these functions down to the child components as props.

# Output

The list shows each todo with its Done and Delete buttons, completed tasks turn green, the tabs filter what appears, and the terminal logs every todo I add.