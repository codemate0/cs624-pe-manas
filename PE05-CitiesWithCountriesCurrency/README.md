# Input

The app collects input through two data-entry tabs built with `TextInput`.
The AddCity tab takes a city name and a country name; the AddCountry tab
takes a country name and a currency. Each keystroke fires `onChangeText`,
which writes the value into the component's local state under the matching
key, so the inputs stay controlled.

# Process

Pressing the button runs `submit`. It rejects empty fields with an alert,
then builds an object carrying the entered values plus a unique `id` from
`react-native-uuid`. That object is handed to `addCity` or `addCountry`,
functions defined in `App.js` and passed down as props. Each appends to its
own state array, clears the form, and navigates to the matching list tab.

# Output

Because the arrays live in `App.js`, updating them re-renders the list tabs.
Cities and Countries map over their array, showing each name with its country
or currency beneath, or a CenterMessage when the array is empty.
