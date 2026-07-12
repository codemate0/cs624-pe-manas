# Input

The app has no runtime user input. The inputs are hard-coded inside App.js: three string literals representing my name, my degree program, and my school, plus a StyleSheet object that defines a yellow background and centered text layout.

# Process

When the app launches, the React Native runtime invokes the App component. It returns a JSX tree containing one View wrapping three Text elements. Expo Go on my iPhone downloads the JavaScript bundle from Metro, interprets the JSX, and asks iOS UIKit to render each element into a native view. StyleSheet rules - flex, alignment, background color, and font size - are translated into platform-specific layout constraints.

# Output

The iPhone displays a full-screen yellow view with three centered lines of black text: my name, my degree program, and my school. The layout is static and does not change during runtime.