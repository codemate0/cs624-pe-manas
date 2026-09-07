# Input

The app collects input through two data-entry tabs built with `TextInput`.
The AddCity tab takes a city name and a country name. The AddCountry tab
takes a country name, a currency, and a tap-to-toggle row marking whether
that currency is used in the country. A tap on a row in the Countries list
is a second kind of input, selecting one record to open.

# Process

Pressing Add Country runs `submit`. It rejects empty fields, builds an object
holding the country, currency, used flag, and a `uuid`, then hands it to
`addCountry` in `App.js`. Tapping a row calls `navigation.navigate('Country',
{ country: item })`, pushing the detail screen onto the CountriesNav stack
and passing the record through route params.

# Output

Countries maps over the array, showing each country with its currency. The
Country screen reads `route.params` and renders the name in a header, then
the Currency component, showing the currency in green when used and red when
not.
