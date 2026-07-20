# Input

The user opens the app and sees a scrollable list of MSCS courses grouped into three sections - Core Requirements (24 credits), Depth of Study (6 Credits), and Capstone (3 Credits). A single TextInput at the top lets the user enter the course they liked. The input placeholder "ex. CS624" hints at the expected format. The React Native useState hook keeps track of the value the user types.

# Process

The functional component is defined as an arrow function that returns JSX. It renders an Image from the local ./assets/icon.png, a TextInput bound to a favorite state variable, and a ScrollView wrapping three View sections. Each section maps its course array through the JavaScript map function to produce Text nodes. All styling lives in a single StyleSheet.create block so styles stay colocated with the component and benefit from static type checks.

# Output

The screen displays the icon, the labeled TextInput, and the three sections of course names. Each section header sits on a yellow background, and the course names appear as plain text beneath. Users can scroll vertically to reach the Capstone section at the bottom, and typing in the input updates the internal state without changing the visible list.